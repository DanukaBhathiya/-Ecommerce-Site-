package com.ijse.lk.OnlinestoreAPI.dto;

import com.ijse.lk.OnlinestoreAPI.entity.ProductCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Data // getters & setters
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class ProductDTO {
    private String id;
//    private ProductCategory category;
    private String category;
    private String name;
    private String description;
    private double unit_price;
    private String image_url;
    private boolean active;
    private int units_in_stock;
    private Date date_created;
    private Date last_updated;
}
