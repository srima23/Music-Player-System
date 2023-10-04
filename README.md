# Music Player System

## Introduction

This music player system is created on Angular based frontend and SpringBoot based backend. Some of the features include:
1.Adding a custom playlist
2.Suggest songs based on artists and genres.
3.Search bar

# Workflow for Springboot:

The provided code is a Java Spring Boot application with a RESTful API endpoint for managing songs, users, and song libraries. Below is a breakdown of the code's workflow:

## Controller Configuration

- The code defines a Spring `RestController` named `SongController`, responsible for handling incoming HTTP requests related to songs, users, and libraries.
- It sets up endpoints under the base path "/song" for various operations.

## Autowired Services

- The controller autowires three service classes: `SongService`, `LibraryService`, and `UserService`. These services encapsulate the business logic for songs, libraries, and users.

## Adding a Song

- Endpoint: `@PostMapping("/addsong")`
- Description: Defines an endpoint for adding a new song to the system.
- Input: Expects a `Song` object in the request body.
- Output: Returns the added song.

## Getting Songs

- Endpoint: `@GetMapping("/getsongs")`
- Description: Defines an endpoint for retrieving a list of all songs in the system.

## Getting Songs by Genre

- Endpoint: `@GetMapping("/genre/{genre}")`
- Description: Defines an endpoint for retrieving songs by a specific genre.
- Input: Takes the genre as a path variable.
- Output: Returns a list of songs matching the genre.

## Creating a User

- Endpoint: `@PostMapping("/createUser")`
- Description: Defines an endpoint for creating a new user.
- Input: Expects a `User` object in the request body.
- Output: Returns the created user.

## Getting Users

- Endpoint: `@GetMapping("/users")`
- Description: Defines an endpoint for retrieving a list of all users in the system.
- Details: It makes use of the `userService` to fetch the user data.

## Creating a Library for a User

- Endpoint: `@PostMapping("/createlib/{id}")`
- Description: Defines an endpoint for creating a library for a specific user.
- Input: Expects a `LibraryRequest` object in the request body and the user's ID as a path variable.
- Output: Creates a library associated with the user and returns a response entity with the created library.

## Adding a Song to a Library

- Endpoint: `@PostMapping("/{libraryId}/add-song/{id}")`
- Description: Defines an endpoint for adding a song to a library.
- Input: Takes the library ID and song ID as path variables.
- Details: It calls the `libraryService` to add the specified song to the specified library and returns a response entity indicating success or failure.

## Getting All Songs of a User

- Endpoint: `@GetMapping("/user/{userId}/songs")`
- Description: Defines an endpoint for retrieving all songs in a user's library.
- Input: Takes the user's ID as a path variable, fetches the user data, and retrieves all songs associated with that user from the library.
- Output: Returns a list of songs owned by the user.


---

![Feature Work Flow](https://github.com/srima23/Music-Player-System/blob/main/Backend%20ER%20Diagram.png)




# Team Members:

- **Chirag Agarwal**
- **K Sai Sidhartha Reddy**
- **Srima Sarajita Kar**
