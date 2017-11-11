package com.shahray.photosite.repository;

import com.shahray.photosite.model.Record;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RecordRepository extends JpaRepository<Record, Long> {

    @Override
    Record save(Record record);

    @Override
    Optional<Record> findById(Long id);
}
