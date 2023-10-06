package com.MusicPlayer.controller;

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

    @PostMapping("/create-playlist")
    public ResponseEntity<Library> createLibrary(@RequestBody LibraryRequest libraryRequest) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(authentication.getName()).orElse(null);

        Library createdLibrary = libraryService.createLibrary(user, libraryRequest.getLibraryName());
        return new ResponseEntity<>(createdLibrary, HttpStatus.CREATED);
    }

    @PostMapping("/{libraryId}/add-song/{id}")
    public ResponseEntity<String> addSongToLibrary(
            @PathVariable int libraryId,
            @PathVariable int id) {
                
        boolean added = libraryService.addSongToLibrary(id,libraryId);
        if (added) {
            return new ResponseEntity<>(null);
        } else {
            return new ResponseEntity<>("Library or song not found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{libraryId}/songs")
    public ResponseEntity<List<Song>> getSongsByLibraryId(@PathVariable int libraryId) {
        List<Song> songs = libraryService.getSongsByLibraryId(libraryId);

        if (songs != null && !songs.isEmpty()) {
            return new ResponseEntity<>(songs, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getPlaylist")
    public List<Library> setOfPlayList() {
        List<Library> allLibraries = libraryService.getPlaylistNames();
        return allLibraries;
    }

    @PostMapping("/addToFavSongs")
    public ResponseEntity<?> addToFavoriteSongs(@RequestBody int songId) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(authentication.getName()).orElse(null);

        if (user != null) {
            Song song = songService.getId(songId);

            if (song != null) {
                if (!user.getFavoriteSongs().contains(song)) {
                    user.getFavoriteSongs().add(song);
                    userRepository.save(user);
                    return ResponseEntity.ok(null);
                } else {
                    return ResponseEntity.badRequest().body("Song is already in favorites.");
                }
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated.");
    }

    @GetMapping("/favorite-songs")
    public ResponseEntity<?> getFavoriteSongs() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(authentication.getName()).orElse(null);

        if (user != null) {
            List<Song> favoriteSongs = user.getFavoriteSongs();
            return ResponseEntity.ok(favoriteSongs);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated.");
        }
    }
}
