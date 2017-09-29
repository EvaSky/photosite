package com.shahray.photosite.controllers;

import com.shahray.photosite.model.Record;
import com.shahray.photosite.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * Created by Оля on 27.08.2017.
 */
@Controller
public class RecordRS {

    @Autowired
    private RecordService recordService;

    public Record get(Integer id) {
        return recordService.get(id);
    }
}
