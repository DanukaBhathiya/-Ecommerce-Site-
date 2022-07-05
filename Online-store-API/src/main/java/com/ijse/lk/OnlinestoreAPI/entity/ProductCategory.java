package com.ijse.lk.OnlinestoreAPI.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity(name = "product_category")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProductCategory {
    @Id
    private String id;
    private String category_name;

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
//    private Set<Product> products;
}
