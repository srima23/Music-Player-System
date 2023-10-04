package com.MusicPlayer.binding;

import lombok.Data;

@Data
public class JwtResponse {
  private String token;
  private String username;

  public JwtResponse(String accessToken, String username) {
    this.token = accessToken;
    this.username = username;
  }
}