package com.shahray.photosite;

import com.shahray.photosite.model.Record;
import com.shahray.photosite.repository.RecordRepository;
import com.shahray.photosite.service.StorageProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import javax.sql.DataSource;
import java.util.List;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class Application implements CommandLineRunner {
    private static final Logger log = LoggerFactory.getLogger(Application.class);

/*    @Autowired
    DataSource dataSource;*/

    @Autowired
    private RecordRepository rep;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        System.out.println("Application");
    }
    @Override
    public void run(String... args) throws Exception {

    // save a couple of customers
    Record r = new Record("record first");
    //rep.save(r);

    // fetch all customers
    log.info("Users found with findAll():");
    log.info("-------------------------------");
    /*List<Record> records = rep.findAll();
    for (Record rep : records) {
      log.info(rep.toString());
    }
    log.info("");

    // fetch an individual customer by ID
    Record rr = rep.findById(r.getId()).orElse(null);
    log.info("Record found with find(1L):");
    log.info("--------------------------------");
    System.out.println(rr);
    log.info("");*/


    System.out.println("Done!");
    }
}
