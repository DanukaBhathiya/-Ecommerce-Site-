package com.ijse.lk.OnlinestoreAPI.repo;

import com.ijse.lk.OnlinestoreAPI.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductCategoryRepo extends JpaRepository<ProductCategory,String> {
}
