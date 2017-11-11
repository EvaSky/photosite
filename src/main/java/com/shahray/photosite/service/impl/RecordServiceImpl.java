package com.shahray.photosite.service.impl;

import com.shahray.photosite.repository.RecordRepository;
import com.shahray.photosite.model.Record;
import com.shahray.photosite.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecordServiceImpl implements RecordService{

    @Autowired
    private RecordRepository repository;

    @Override
    public Record save(Record record) {
        return repository.save(record);
    }

    @Override
    public Record getById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
