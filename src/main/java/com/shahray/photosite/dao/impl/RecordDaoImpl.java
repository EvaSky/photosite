package com.shahray.photosite.dao.impl;

import com.shahray.photosite.dao.RecordDao;
import com.shahray.photosite.model.Record;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

/**
 * Created by Оля on 27.08.2017.
 */
@Repository
public class RecordDaoImpl implements RecordDao{
    private Record record = new Record(1, LocalDateTime.now(), "New record");

    @Override
    public Record get(int id) {
        return record;
    }
}
