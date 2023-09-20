package com.tuyano.springboot.controller;

import com.tuyano.springboot.entity.MyData;
import com.tuyano.springboot.repository.MyDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HeloController {
    @Autowired
    MyDataRepository repository;

    @GetMapping("/")
    public String index(Model model) {

        model.addAttribute("msg","this is sample content.");
        Iterable<MyData> list = repository.findAll();
        model.addAttribute("data",list);
        return "th/index";
    }

    @GetMapping("/main1")
    public String main1() {
        return "main1";
    }
}
