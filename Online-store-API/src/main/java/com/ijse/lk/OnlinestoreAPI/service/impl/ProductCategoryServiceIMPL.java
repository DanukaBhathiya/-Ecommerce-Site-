package com.ijse.lk.OnlinestoreAPI.service.impl;

import com.ijse.lk.OnlinestoreAPI.dto.ProductCategoryDTO;
import com.ijse.lk.OnlinestoreAPI.entity.ProductCategory;
import com.ijse.lk.OnlinestoreAPI.repo.ProductCategoryRepo;
import com.ijse.lk.OnlinestoreAPI.service.ProductCategoryService;
import com.ijse.lk.OnlinestoreAPI.util.IdCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ProductCategoryServiceIMPL implements ProductCategoryService {

    @Autowired
    private ProductCategoryRepo productCategoryRepo;

    @Autowired
    private IdCreator idCreator;

    @Override
    public String saveProductCategory(ProductCategoryDTO dto) {
        ProductCategory productCategory = new ProductCategory(
                idCreator.createId(), dto.getCategory_name()
        );
        return productCategoryRepo.save(productCategory).getId() + " - Saved!";
    }

    @Override
    public ProductCategoryDTO getProductCategory(String id) {
        Optional tempData = productCategoryRepo.findById(id);
        if (tempData.isPresent()) {
            ProductCategory c = (ProductCategory) tempData.get();
            return new ProductCategoryDTO(c.getId(), c.getCategory_name());
        }
        return null;
    }

    @Override
    public ArrayList<ProductCategoryDTO> loadAllProductsCategory() {
        ArrayList<ProductCategoryDTO> dtoList = new ArrayList<>();
        productCategoryRepo.findAll().forEach(e -> {
            dtoList.add(
                    new ProductCategoryDTO(e.getId(), e.getCategory_name())
            );
        });
        return dtoList;
    }

    @Override
    public String deleteProductCategory(String id) {
        productCategoryRepo.deleteById(id);
        return id + " - Deleted!";
    }

    @Override
    public String updateProductCategory(ProductCategoryDTO dto) {
        Optional<ProductCategory> byId = productCategoryRepo.findById(dto.getId());
        if (byId.isPresent()) {
            ProductCategory productCategory = byId.get();
            productCategory.setCategory_name(dto.getCategory_name());
            return productCategoryRepo.save(productCategory).getId() + " - Updated!";
        } else {
            return "Empty Result";
        }
    }
}
