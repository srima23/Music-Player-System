package com.MusicPlayer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MusicPlayer.entity.Library;
import com.MusicPlayer.entity.User;

@Repository
public interface LibraryRepository extends JpaRepository<Library, Integer> {

    List<Library> findByUser(User user);

}
