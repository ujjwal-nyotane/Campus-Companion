package com.campus.backend.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "Backed Services Online";
    }
    int id;
    @GetMapping("/api/{id}")
    public String homeworld() {
        return "api"+id;
    }
    
}
