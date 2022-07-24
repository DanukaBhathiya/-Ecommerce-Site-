package com.ijse.lk.OnlinestoreAPI.repo;

import com.ijse.lk.OnlinestoreAPI.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Repository
public interface ProductRepo extends JpaRepository<Product,String>  {

//    Page<Product> findByCategory(@RequestParam("category") String category, Pageable pageable);
    Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
}
