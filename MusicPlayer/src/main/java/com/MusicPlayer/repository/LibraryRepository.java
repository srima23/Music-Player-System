package com.MusicPlayer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MusicPlayer.entity.Library;
import com.MusicPlayer.entity.User;

@Repository
public interface LibraryRepository extends JpaRepository<Library, Integer> {

    Library findByUser(User user);

}
