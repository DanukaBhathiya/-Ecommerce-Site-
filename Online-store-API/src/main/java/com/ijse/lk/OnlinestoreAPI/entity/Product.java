package com.ijse.lk.OnlinestoreAPI.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.ManyToAny;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity(name = "product")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Product {
    @Id
    private String id;

    //@ManyToOne
//    @JoinColumn(name = "category_id", nullable = false)
//    private ProductCategory category;
    private String category;
    private String name;
    private String description;
    private double unit_price;
    private String image_url;
    private boolean active;
    private int units_in_stock;

    //@CreationTimestamp
    private Date date_created;

    //@UpdateTimestamp
    private Date last_updated;
}
