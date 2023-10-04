package com.MusicPlayer.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Library {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @ManyToOne
    private User user;

    @ManyToMany
    @JoinTable(name = "playlist", joinColumns = @JoinColumn(name = "library_id"), inverseJoinColumns = @JoinColumn(name = "song_id"))
    private List<Song> songs;
}
