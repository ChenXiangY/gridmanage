package com.gridmanage.backend;

import com.gridmanage.backend.mapper.PeopleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import tk.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@CrossOrigin(origins = "http://localhost:3000")
@SpringBootApplication
@MapperScan(basePackages = "com.gridmanage.backend.mapper")
public class GridManageBackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(GridManageBackEndApplication.class, args);
    }

}
