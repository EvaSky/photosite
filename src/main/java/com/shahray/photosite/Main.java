package com.shahray.photosite;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.Arrays;

/**
 * Created by Оля on 27.08.2017.
 */
public class Main {
    public static void main(String[] args) {
        try(ConfigurableApplicationContext context = new ClassPathXmlApplicationContext("spring/spring-app.xml")){
            System.out.println(Arrays.toString(context.getBeanDefinitionNames()));

        }

        System.out.println("Main");
    }
}
