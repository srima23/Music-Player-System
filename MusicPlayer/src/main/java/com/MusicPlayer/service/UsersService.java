package com.MusicPlayer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MusicPlayer.entity.User;
import com.MusicPlayer.repository.UserRepository;

@Service
public class UsersService {

    @Autowired
    private UserRepository userRepository;

    public User creatUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getusers() {
        return userRepository.findAll();
    }

    public User findById(int id) {
        return userRepository.findById(id).get();
    }

}
