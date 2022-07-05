package com.ijse.lk.OnlinestoreAPI.service.impl;

import com.ijse.lk.OnlinestoreAPI.dto.ProductDTO;
import com.ijse.lk.OnlinestoreAPI.entity.Product;
import com.ijse.lk.OnlinestoreAPI.repo.ProductRepo;
import com.ijse.lk.OnlinestoreAPI.service.ProductService;
import com.ijse.lk.OnlinestoreAPI.util.IdCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ProductServiceIMPL implements ProductService {

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private IdCreator idCreator;

    @Override
    public String saveProduct(ProductDTO dto) {
        Product product = new Product(
                idCreator.createId(), dto.getCategory(), dto.getName(), dto.getDescription(), dto.getUnit_price(), dto.getImage_url(), dto.isActive(), dto.getUnits_in_stock(), dto.getDate_created(), dto.getLast_updated()
        );
        return productRepo.save(product).getId() + " - Saved!";
    }

    @Override
    public ProductDTO getProduct(String id) {
        Optional tempData = productRepo.findById(id);
        if (tempData.isPresent()) {
            Product c = (Product) tempData.get();
            return new ProductDTO(c.getId(), c.getCategory(), c.getName(), c.getDescription(), c.getUnit_price(), c.getImage_url(), c.isActive(), c.getUnits_in_stock(), c.getDate_created(), c.getLast_updated());
        }
        return null;
    }

    @Override
    public ArrayList<ProductDTO> loadAllProducts() {
        ArrayList<ProductDTO> dtoList = new ArrayList<>();
        productRepo.findAll().forEach(e -> {
            dtoList.add(
                    new ProductDTO(e.getId(), e.getCategory(), e.getName(), e.getDescription(), e.getUnit_price(), e.getImage_url(), e.isActive(), e.getUnits_in_stock(), e.getDate_created(), e.getLast_updated())
            );
        });
        return dtoList;
    }

    @Override
    public String deleteProduct(String id) {
        productRepo.deleteById(id);
        return id + " - Deleted!";
    }

    @Override
    public String updateProduct(ProductDTO dto) {
        Optional<Product> byId = productRepo.findById(dto.getId());
        if (byId.isPresent()) {
            Product product = byId.get();
            product.setName(dto.getName());
            product.setCategory(dto.getCategory());
            product.setName(dto.getName());
            product.setDescription(dto.getDescription());
            product.setUnit_price(dto.getUnit_price());
            product.setImage_url(dto.getImage_url());
            product.setActive(dto.isActive());
            product.setUnits_in_stock(dto.getUnits_in_stock());
            product.setDate_created(dto.getDate_created());
            product.setLast_updated(dto.getLast_updated());
            return productRepo.save(product).getId() + " - Updated!";
        } else {
            return "Empty Result";
        }
    }
}
