package com.example.controllers;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dtos.AuthDto;
import com.example.services.JwtService;

@RestController
@CrossOrigin("${ui.url}")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private JwtService jwtService;
    
    @Autowired
    public AuthController(AuthenticationManager authenticationManager, JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticateAndGetToken(@RequestBody(required = false) AuthDto authRequest) {

        if (authRequest == null) {
            throw new BadCredentialsException("Missing JSON with credentials !");
        }

        Authentication authentication = 
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));

        if (authentication.isAuthenticated()) {
            
            String token = jwtService.generateToken(authRequest.getUserName());
            Map<String, String> response = Collections.singletonMap("token", token);		
		    return ResponseEntity.ok(response);
            
        } else {
            throw new UsernameNotFoundException("Invalid user request !");
        }

    }

}