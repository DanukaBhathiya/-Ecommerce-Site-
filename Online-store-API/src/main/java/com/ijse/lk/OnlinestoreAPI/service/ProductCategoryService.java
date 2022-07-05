package com.ijse.lk.OnlinestoreAPI.service;

import com.ijse.lk.OnlinestoreAPI.dto.ProductCategoryDTO;

import java.util.ArrayList;

public interface ProductCategoryService {
    public String saveProductCategory(ProductCategoryDTO dto);
    public ProductCategoryDTO getProductCategory(String id);
    public ArrayList<ProductCategoryDTO> loadAllProductsCategory();
    public String deleteProductCategory(String Id);
    public String updateProductCategory(ProductCategoryDTO dto);
}
