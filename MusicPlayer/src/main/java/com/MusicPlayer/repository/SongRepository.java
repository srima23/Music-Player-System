package com.MusicPlayer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MusicPlayer.entity.Song;

import java.util.List;

@Repository
public interface SongRepository extends JpaRepository<Song, Integer> {
    List<Song> findByArtist(String artist);

    List<Song> findByAlbum(String album);

    List<Song> findByGenre(String genre);

    List<Song> findByTitle(String title);

    List<Song> findByMusicDirector(String musicDirector);
}
