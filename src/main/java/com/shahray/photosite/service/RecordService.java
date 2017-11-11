package com.shahray.photosite.service;

import com.shahray.photosite.model.Record;

/**
 * Created by Оля on 27.08.2017.
 */
public interface RecordService {

    Record save(Record record);

    Record getById(Long id);
}
