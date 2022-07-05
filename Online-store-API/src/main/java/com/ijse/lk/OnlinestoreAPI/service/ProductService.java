package com.ijse.lk.OnlinestoreAPI.service;

import com.ijse.lk.OnlinestoreAPI.dto.ProductDTO;

import java.util.ArrayList;

public interface ProductService {
    public String saveProduct(ProductDTO dto);
    public ProductDTO getProduct(String id);
    public ArrayList<ProductDTO> loadAllProducts();
    public String deleteProduct(String Id);
    public String updateProduct(ProductDTO dto);
}
