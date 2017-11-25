package com.shahray.photosite;

import com.shahray.photosite.controllers.response.Response;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;

@RestController
public class TestController {

   /* @RequestMapping("/admin")
    public String greeting() {
        return "forward:/admin/index.html";
    //return new Response<>("Admin!");
    //return new ResponseEntity<>("Hello!", new HttpHeaders(), HttpStatus.OK);
    }*/

    /*@RequestMapping("/")
    public Response<String> website() {
    return new Response<>("Web site!");
    //return new ResponseEntity<>("Hello!", new HttpHeaders(), HttpStatus.OK);
    }*/

    @RequestMapping("/photos")
    public Response<List<String>> getPhotos() {
        List<String> photos = Arrays.asList(
            "website/images/gallery/1.jpg",
            "website/images/gallery/2.jpg",
            "website/images/gallery/3.jpg"
        );
        return new Response<>(photos);
    }

}
