package com.ijse.lk.OnlinestoreAPI.api;

import com.ijse.lk.OnlinestoreAPI.dto.ProductCategoryDTO;
import com.ijse.lk.OnlinestoreAPI.service.ProductCategoryService;
import com.ijse.lk.OnlinestoreAPI.util.StandardResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/productCategory")
@CrossOrigin

public class ProductCategoryController {

    @Autowired
    private ProductCategoryService productCategoryService;

    @PostMapping(path = "/admin/itemCategory")
    public ResponseEntity<StandardResponseEntity> saveProductCategory(
            @RequestBody ProductCategoryDTO dto
    ) {
        return new ResponseEntity<StandardResponseEntity>(
                new StandardResponseEntity(200,"Success!",productCategoryService.saveProductCategory(dto))
                , HttpStatus.OK);
    }

    @DeleteMapping(path = "/admin/item")
    public ResponseEntity<StandardResponseEntity> deleteProductCategory(@RequestParam(required = true) String id) {
        return new ResponseEntity<StandardResponseEntity>(
                new StandardResponseEntity(200, "Success!", productCategoryService.deleteProductCategory(id))
                , HttpStatus.OK);
    }

    @PutMapping(path = "/admin/item")
    public ResponseEntity<StandardResponseEntity> updateProductCategory(@RequestBody ProductCategoryDTO dto) {
        return new ResponseEntity<StandardResponseEntity>(
                new StandardResponseEntity(200, "Success!", productCategoryService.updateProductCategory(dto))
                , HttpStatus.OK);
    }

    @GetMapping(path = "/admin/item",
            produces = {
                    MediaType.APPLICATION_JSON_VALUE,
                    MediaType.APPLICATION_XML_VALUE,
            }
    )
    public ResponseEntity<StandardResponseEntity> getProductCategory(@RequestParam(required = true) String id) {
        ProductCategoryDTO dto = productCategoryService.getProductCategory(id);
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

    @GetMapping(path = "/admin/item/list")
    public ResponseEntity<StandardResponseEntity> getAllProductCategory() {
        return new ResponseEntity<StandardResponseEntity>(
                new StandardResponseEntity(200, "Success!", productCategoryService.loadAllProductsCategory())
                , HttpStatus.OK);
    }
}
