package com.ijse.lk.OnlinestoreAPI.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data // getters & setters
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class ProductCategoryDTO {
    private String id;
    private String category_name;
}
