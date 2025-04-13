// package com.example.todo_list_app.controller;


// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.GetMapping;

// @Controller
// public class HomeController {
//     @GetMapping("/")
//     public String home() {
//         return "index";  // Loads templates/index.html
//     }
// }
package com.example.todo_list_app.controller;

import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.GetMapping;

@Controller public class HomeController { 
    @GetMapping("/") 
    public String home() { return "index"; // Loads templates/index.html 
    } 
}