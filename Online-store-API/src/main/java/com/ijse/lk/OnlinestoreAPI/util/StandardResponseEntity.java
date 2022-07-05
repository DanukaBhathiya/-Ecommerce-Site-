package com.ijse.lk.OnlinestoreAPI.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor

public class StandardResponseEntity {
    private int code;
    private String message;
    private Object data;
}
