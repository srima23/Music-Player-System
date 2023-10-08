# Music Player System

Music Player System is a web application that allows users to listen to music, create playlists, and manage their favorite songs. It's built with Angular, HTML, CSS, TypeScript for the frontend, Spring Boot and RESTful APIs for the backend, and uses a MySQL database managed with DBeaver.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [RESTful APIs](#restful-apis)
- [Components](#components)
  - [Schemas](#schemas)
- [ER Diagram](#er-diagram)
- [Authentication and Authorization](#authentication-and-authorization)
- [Team Members](#team-members)

## Features

1. **Search Songs**: Users can search for songs by title, artists, or genres.

2. **Create Playlists**: Users can create new playlists and add songs to them.

3. **Favorite Songs**: Users can mark songs as favorites and access them easily from their favorite songs list.

4. **Categorization**: The system categorizes songs by artists and genres, making it easy for users to explore music based on their preferences.

## Technologies Used

- Frontend: HTML, CSS, Angular, TypeScript
- Backend: Spring Boot, RESTful APIs
- Database: MySQL (Managed with DBeaver)

## RESTful APIs

- **Generated server URL**: [http://localhost:8080](http://localhost:8080)

### Add Song

- **Endpoint**: `/player/addsong`
- **Method**: POST
- **Tags**: song-controller
- **Operation ID**: postMethodName
- **Request Body**:
  - Content-Type: application/json
  - Schema: [Song](#song)

### Get Songs

- **Endpoint**: `/player/getsongs`
- **Method**: GET
- **Tags**: song-controller
- **Operation ID**: getSongs

### Create Playlist

- **Endpoint**: `/player/create-playlist`
- **Method**: POST
- **Tags**: song-controller
- **Operation ID**: createPlaylist
- **Request Body**:
  - Content-Type: application/json
  - Schema: [LibraryRequest](#libraryrequest)

### Get Playlist

- **Endpoint**: `/player/getPlaylist`
- **Method**: GET
- **Tags**: song-controller
- **Operation ID**: setOfPlayList

### Add Song to Playlist

- **Endpoint**: `/player/{libraryId}/add-song/{id}`
- **Method**: POST
- **Tags**: song-controller
- **Operation ID**: addSongToLibrary
- **Parameters**:
  - `libraryId` (path, required, integer, format: int32)
  - `id` (path, required, integer, format: int32)
- **Request Body**: None

### Get Songs by Library ID

- **Endpoint**: `/player/{libraryId}/songs`
- **Method**: GET
- **Tags**: song-controller
- **Operation ID**: getSongsByLibraryId
- **Parameters**:
  - `libraryId` (path, required, integer, format: int32)

### Add to Favorite Songs

- **Endpoint**: `/player/addToFavSongs`
- **Method**: POST
- **Tags**: song-controller
- **Operation ID**: addToFavoriteSongs
- **Request Body**:
  - Content-Type: application/json
  - Schema: Integer (format: int32)

### Get Favorite Songs

- **Endpoint**: `/player/favorite-songs`
- **Method**: GET
- **Tags**: song-controller
- **Operation ID**: getFavoriteSongs

### Get Songs by Genre

- **Endpoint**: `/player/genre/{genre}`
- **Method**: GET
- **Tags**: song-controller
- **Operation ID**: getgenre
- **Parameters**:
  - `genre` (path, required, string)

## Components

### Schemas

#### LibraryRequest

- Type: object
- Properties:
  - `libraryName` (string)

#### Library

- Type: object
- Properties:
  - `id` (integer, format: int32)
  - `name` (string)
  - `user` (User)
  - `songs` (array, items: Song)

#### Song

- Type: object
- Properties:
  - `id` (integer, format: int32)
  - `title` (string)
  - `artist` (string)
  - `musicDirector` (string)
  - `album` (string)
  - `genre` (string)
  - `duration` (integer, format: int32)
  - `audioUrl` (string)

#### User

- Type: object
- Properties:
  - `id` (integer, format: int32)
  - `username` (string)
  - `email` (string)
  - `password` (string)
  - `favoriteSongs` (array, items: Song)

## ER Diagram

![ER Diagram](https://github.com/srima23/Music-Player-System/blob/main/Music%20system%20ER%20Diagram.png)

## Authentication and Authorization

This project uses authentication and authorization to secure access to endpoints.

- **Authentication**: Users need to authenticate to access protected endpoints.
- **Authorization**: There is one role: `USER`, which grants access the features.

## Team Members

- **Chirag Agarwal**
- **K Sai Sidhartha Reddy**
- **Srima Sarajita Kar**
