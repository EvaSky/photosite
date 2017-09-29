package com.shahray.photosite.service.impl;

import com.shahray.photosite.dao.RecordDao;
import com.shahray.photosite.model.Record;
import com.shahray.photosite.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Оля on 27.08.2017.
 */
@Service
public class RecordServiceImpl implements RecordService{

    @Autowired
    private RecordDao dao;

    @Override
    public Record get(int id) {
        return dao.get(id);
    }
}
