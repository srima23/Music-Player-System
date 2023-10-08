# Music Player System

Music Player is a web application that allows users to listen to music, create playlists, and manage their favorite songs.

![UI](https://github.com/srima23/Music-Player-System/blob/main/Images/WebUI.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Frontend](#frontend)
  - [The Components](#components)
  - [Routing](#routing)
- [Backend](#backend)
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

## Frontend

This Angular project is organized into several components, modules, and an `AppRoutingModule`, all depicted in the following diagram. The project follows a modular and component-based architecture for building a web application.

![Module,Components](https://github.com/srima23/Music-Player-System/blob/main/Images/Module,Components.png)

### The Components

1. **AppModule**
   - The central module of the application, `AppModule`, serves as the entry point.
   - It includes various components, services, and providers.
   - `AppModule` is connected to multiple other components and serves as the root module for the entire application.

2. **AddToPlaylistDialogComponent**
   - This component represents a dialog for adding songs to a playlist.

3. **AppComponent**
   - The `AppComponent` represents the main application component.
   - It serves as the root component and is connected to `AppModule`.

4. **ArtistSongsComponent**
   - `ArtistSongsComponent` displays songs by a particular artist.
   - It is connected to `AppModule`.

5. **BaseLayoutComponent**
   - `BaseLayoutComponent` represents the base layout for the application.
   - It provides a consistent layout structure for various views.
   - It is connected to `AppModule`.

6. **CreatePlaylistDialogComponent**
   - `CreatePlaylistDialogComponent` is responsible for creating new playlists.
   - It is connected to `AppModule`.

7. **FavoriteSongsComponent**
   - This component displays a user's favorite songs.
   - It is connected to `AppModule`.

8. **HomeComponent**
   - `HomeComponent` represents the main landing page of the application.
   - It is connected to `AppModule`.

9. **LoginFormComponent**
   - `LoginFormComponent` is used for user authentication and login.
   - It is connected to `AppModule`.

10. **NavBarComponent**
    - `NavBarComponent` provides a navigation bar for the application.
    - It is connected to `AppModule`.

11. **PlaylistSongsComponent**
    - `PlaylistSongsComponent` displays songs within a specific playlist.
    - It is connected to `AppModule`.

12. **SiteLayoutComponent**
    - `SiteLayoutComponent` represents the overall layout structure of the site.
    - It is connected to `AppModule`.

13. **SongsByGenreComponent**
    - `SongsByGenreComponent` displays songs categorized by genre.
    - It is connected to `AppModule`.

### Routing

`AppRoutingModule` provides routing capabilities to navigate between various components. The following image represents the routing of various components.

![Component Routing](https://github.com/srima23/Music-Player-System/blob/main/Images/Routing.png)

## Backend

### RESTful APIs

- **Generated server URL**: [http://localhost:8080](http://localhost:8080)

#### Add Song

- **Endpoint**: `/player/addsong`
- **Method**: POST
- **Tags**: song-controller
- **Operation ID**: postMethodName
- **Request Body**:
  - Content-Type: application/json
  - Schema: [Song](#song)

#### Get Songs

- **Endpoint**: `/player/getsongs`
- **Method**: GET
- **Tags**: song-controller
- **Operation ID**: getSongs

#### Create Playlist

- **Endpoint**: `/player/create-playlist`
- **Method**: POST
- **Tags**: song-controller
- **Operation ID**: createPlaylist
- **Request Body**:
  - Content-Type: application/json
  - Schema: [LibraryRequest](#libraryrequest)

#### Get Playlist

- **Endpoint**: `/player/getPlaylist`
- **Method**: GET
- **Tags**: song-controller
- **Operation ID**: setOfPlayList

#### Add Song to Playlist

- **Endpoint**: `/player/{libraryId}/add-song/{id}`
- **Method**: POST
- **Tags**: song-controller
- **Operation ID**: addSongToLibrary
- **Parameters**:
  - `libraryId` (path, required, integer, format: int32)
  - `id` (path, required, integer, format: int32)
- **Request Body**: None

#### Get Songs by Library ID

- **Endpoint**: `/player/{libraryId}/songs`
- **Method**: GET
- **Tags**: song-controller
- **Operation ID**: getSongsByLibraryId
- **Parameters**:
  - `libraryId` (path, required, integer, format: int32)

#### Add to Favorite Songs

- **Endpoint**: `/player/addToFavSongs`
- **Method**: POST
- **Tags**: song-controller
- **Operation ID**: addToFavoriteSongs
- **Request Body**:
  - Content-Type: application/json
  - Schema: Integer (format: int32)

#### Get Favorite Songs

- **Endpoint**: `/player/favorite-songs`
- **Method**: GET
- **Tags**: song-controller
- **Operation ID**: getFavoriteSongs

#### Get Songs by Genre

- **Endpoint**: `/player/genre/{genre}`
- **Method**: GET
- **Tags**: song-controller
- **Operation ID**: getgenre
- **Parameters**:
  - `genre` (path, required, string)

### Components

#### Schemas

##### LibraryRequest

- Type: object
- Properties:
  - `libraryName` (string)

##### Library

- Type: object
- Properties:
  - `id` (integer, format: int32)
  - `name` (string)
  - `user` (User)
  - `songs` (array, items: Song)

##### Song

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

##### User

- Type: object
- Properties:
  - `id` (integer, format: int32)
  - `username` (string)
  - `email` (string)
  - `password` (string)
  - `favoriteSongs` (array, items: Song)

#### ER Diagram

![ER Diagram](https://github.com/srima23/Music-Player-System/blob/main/Images/Music%20system%20ER%20Diagram.png)

## Authentication and Authorization

This project uses authentication and authorization to secure access to endpoints.

- **Authentication**: Users need to authenticate to access protected endpoints.
- **Authorization**: There is one role: `USER`, which grants access to the features.

## Team Members

- **Chirag Agarwal**
- **K Sai Sidhartha Reddy**
- **Srima Sarajita Kar**
