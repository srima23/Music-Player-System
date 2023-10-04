package com.MusicPlayer.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MusicPlayer.dto.LibraryRequest;
import com.MusicPlayer.entity.Library;
import com.MusicPlayer.entity.Song;
import com.MusicPlayer.entity.User;
import com.MusicPlayer.repository.UserRepository;
import com.MusicPlayer.service.LibraryService;
import com.MusicPlayer.service.SongService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/player")
public class SongController {

    @Autowired
    private SongService songService;

    @Autowired
    private LibraryService libraryService;

    // @Autowired
    // private UsersService usersService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addsong")
    public Song postMethodName(@RequestBody Song song) {
        return songService.addSong(song);
    }

    @GetMapping("/getsongs")
    public List<Song> getSongs() {
        return songService.getSongs();
    }

    @GetMapping("/genre/{genre}")
    public List<Song> getgenre(@PathVariable String genre) {
        return songService.findByGenre(genre);
    }

    // @PostMapping("/createUser")
    // public User creatUser(@RequestBody User user) {
    //     return usersService.creatUser(user);
    // }

    // @GetMapping("/users")
    // public List<User> getUsers() {
    //     System.out.println(usersService.getusers());
    //     return usersService.getusers();
    // }

    @PostMapping("/createlib/{id}")
    public ResponseEntity<Library> createLibrary(@RequestBody LibraryRequest libraryRequest, @PathVariable int id) {
        
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(authentication.getName()).orElse(null);
        
        // User user = usersService.findById(id);
        Library createdLibrary = libraryService.createLibrary(user, libraryRequest.getLibraryName());
        return new ResponseEntity<>(createdLibrary, HttpStatus.CREATED);
    }

    @PostMapping("/{libraryId}/add-song/{id}")
    public ResponseEntity<String> addSongToLibrary(
            @PathVariable int libraryId,
            @PathVariable int id) {
        boolean added = libraryService.addSongToLibrary(libraryId, id);
        if (added) {
            return new ResponseEntity<>("Song added to library successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Library or song not found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/user/{userId}/songs")
    public List<Song> getAllSongsOfUser(@PathVariable("userId") int userId) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(authentication.getName()).orElse(null);

        // User user = usersService.findById(userId);

        if (user != null) {
            return libraryService.getAllSongsOfUser(user);
        } else {
            return Collections.emptyList();
        }
    }

}
