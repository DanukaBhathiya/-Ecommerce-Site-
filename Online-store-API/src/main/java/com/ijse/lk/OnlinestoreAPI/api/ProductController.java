package com.ijse.lk.OnlinestoreAPI.api;

import com.ijse.lk.OnlinestoreAPI.dto.ProductDTO;
import com.ijse.lk.OnlinestoreAPI.service.ProductService;
import com.ijse.lk.OnlinestoreAPI.util.StandardResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/product")
@CrossOrigin

public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping(path = "/admin/item")
    public ResponseEntity<StandardResponseEntity> saveProduct(
            @RequestBody ProductDTO dto
    ) {
        return new ResponseEntity<StandardResponseEntity>(
                new StandardResponseEntity(200,"Success!",productService.saveProduct(dto))
                , HttpStatus.OK);
    }

    @DeleteMapping(path = "/admin/item")
    public ResponseEntity<StandardResponseEntity> deleteProduct(@RequestParam(required = true) String id) {
        return new ResponseEntity<StandardResponseEntity>(
                new StandardResponseEntity(200, "Success!", productService.deleteProduct(id))
                , HttpStatus.OK);
    }

    @PutMapping(path = "/admin/item")
    public ResponseEntity<StandardResponseEntity> updateProduct(@RequestBody ProductDTO dto) {
        return new ResponseEntity<StandardResponseEntity>(
                new StandardResponseEntity(200, "Success!", productService.updateProduct(dto))
                , HttpStatus.OK);
    }

    @GetMapping(path = "/admin/item",
            produces = {
                    MediaType.APPLICATION_JSON_VALUE,
                    MediaType.APPLICATION_XML_VALUE,
            }
    )
    public ResponseEntity<StandardResponseEntity> getProduct(@RequestParam(required = true) String id) {
        ProductDTO dto = productService.getProduct(id);
        if (dto != null) {
            return new ResponseEntity<StandardResponseEntity>(
                    new StandardResponseEntity(200,"Success!",dto)
                    , HttpStatus.OK);
        } else {
            return new ResponseEntity<StandardResponseEntity>(
                    new StandardResponseEntity(404,"Empty Result!",null)
                    , HttpStatus.NOT_FOUND);
        }
    }

//    getProductByCategory
//    @GetMapping(path = "/admin/item",
//            produces = {
//                    MediaType.APPLICATION_JSON_VALUE,
//                    MediaType.APPLICATION_XML_VALUE,
//            }
//    )
//    public ResponseEntity<StandardResponseEntity> getProductByCategory(@RequestParam(required = true) String category) {
//        ProductDTO dto = productService.getProductByCategory(category);
//        if (dto != null) {
//            return new ResponseEntity<StandardResponseEntity>(
//                    new StandardResponseEntity(200,"Success!",dto)
//                    , HttpStatus.OK);
//        } else {
//            return new ResponseEntity<StandardResponseEntity>(
//                    new StandardResponseEntity(404,"Empty Result!",null)
//                    , HttpStatus.NOT_FOUND);
//        }
//    }


    @GetMapping(path = "/admin/item/list")
    public ResponseEntity<StandardResponseEntity> getAllProduct() {
        return new ResponseEntity<StandardResponseEntity>(
                new StandardResponseEntity(200, "Success!", productService.loadAllProducts())
                , HttpStatus.OK);
    }
}
