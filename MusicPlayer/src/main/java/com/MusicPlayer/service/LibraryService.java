package com.MusicPlayer.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MusicPlayer.entity.Library;
import com.MusicPlayer.entity.Song;
import com.MusicPlayer.entity.User;
import com.MusicPlayer.repository.LibraryRepository;
import com.MusicPlayer.repository.SongRepository;

@Service
public class LibraryService {

    @Autowired
    private SongRepository songRepository;

    @Autowired
    private LibraryRepository libraryRepository;

    public Library createLibrary(User user, String libraryName) {
        Library library = new Library();
        library.setName(libraryName);
        library.setUser(user);
        return libraryRepository.save(library);
    }

    public boolean addSongToLibrary(int libraryId, int songId) {
        Optional<Library> libraryOptional = libraryRepository.findById(libraryId);
        Optional<Song> songOptional = songRepository.findById(songId);

        if (libraryOptional.isPresent() && songOptional.isPresent()) {
            Library library = libraryOptional.get();
            Song song = songOptional.get();

            List<Song> songsInLibrary = library.getSongs();
            songsInLibrary.add(song);

            library.setSongs(songsInLibrary);
            libraryRepository.save(library);
            return true;
        }
        return false;
    }

    public List<Song> getAllSongsOfUser(User user) {
        // Find the user's library
        Library userLibrary = libraryRepository.findByUser(user);

        // Check if the user has a library
        if (userLibrary != null) {
            // Return the list of songs from the user's library
            return userLibrary.getSongs();
        } else {
            // Return an empty list or handle the case where the user has no library
            return Collections.emptyList();
        }
    }

}