# Music Player System

## Introduction

This music player system is created on Angular based frontend and SpringBoot based backend. Some of the features include:
1.Adding a custom playlist
2.Suggest songs based on artists and genres.
3.Search bar

## Workflow for Springboot

The Java Spring Boot application consists of a RESTful API endpoint for managing songs, users, and song libraries. Below is a breakdown of the code's workflow:

- ## Controller Configuration

  - The code defines a Spring `RestController` named `SongController`, responsible for handling incoming HTTP requests related to songs, users, and libraries.
  - It sets up endpoints under the base path "/song" for various operations.

- ## Autowired Services

  - The controller autowires three service classes: `SongService`, `LibraryService`, and `UserService`. These services encapsulate the business logic for songs, libraries, and users.

- ## Adding a Song

  - Description: Defines an endpoint for adding a new song to the system.
  - Output: Returns the added song.

- ## Getting Songs

  - Description: Defines an endpoint for retrieving a list of all songs in the system.

- ## Getting Songs by Genre

  - Description: Defines an endpoint for retrieving songs by a specific genre.
  - Output: Returns a list of songs matching the genre.

- ## Creating a Library for a User

  - Description: Defines an endpoint for creating a library for a specific user.
  - Output: Creates a library associated with the user and returns a response entity with the created library.

- ## Adding a Song to a Library

  - Description: Defines an endpoint for adding a song to a library.
  - Details: It calls the `libraryService` to add the specified song to the specified library and returns a response entity indicating success or failure.

- ## Getting All Songs of a User

  - Description: Defines an endpoint for retrieving all songs in a user's library.
  - Output: Returns a list of songs owned by the user.

![Feature Work Flow](https://github.com/srima23/Music-Player-System/blob/main/Music%20system%20ER%20Diagram.png)

## Team Members

- **Chirag Agarwal**
- **K Sai Sidhartha Reddy**
- **Srima Sarajita Kar**
