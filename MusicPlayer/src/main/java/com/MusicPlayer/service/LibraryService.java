package com.MusicPlayer.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.MusicPlayer.entity.Library;
import com.MusicPlayer.entity.Song;
import com.MusicPlayer.entity.User;
import com.MusicPlayer.repository.LibraryRepository;
import com.MusicPlayer.repository.SongRepository;
import com.MusicPlayer.repository.UserRepository;

@Service
public class LibraryService {

    @Autowired
    private SongRepository songRepository;

    @Autowired
    private LibraryRepository libraryRepository;

    @Autowired
    private UserRepository userRepository;

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


    public List<Library> getPlaylistNames(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(authentication.getName()).orElse(null);
        List<Library> userLibrary = libraryRepository.findByUser(user);
        return userLibrary;
    }

    public List<Song> getSongsByLibraryId(int libraryId) {
       
        Optional<Library> libraryOptional = libraryRepository.findById(libraryId);

        if (libraryOptional.isPresent()) {
            Library library = libraryOptional.get();
            return library.getSongs();
        } else {
            return Collections.emptyList();
        }
    }

}
