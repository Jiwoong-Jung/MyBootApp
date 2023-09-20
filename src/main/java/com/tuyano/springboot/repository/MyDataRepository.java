package com.tuyano.springboot.repository;

import com.tuyano.springboot.entity.MyData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyDataRepository extends JpaRepository<MyData, Long> {
}
