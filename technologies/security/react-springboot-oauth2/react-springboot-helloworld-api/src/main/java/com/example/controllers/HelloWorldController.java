package com.example.controllers;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("${react.url}")
public class HelloWorldController {

	@RequestMapping(value="/")
	public ResponseEntity<Map<String, String>> helloWorld() {

		Map<String, String> response = Collections.singletonMap("message", "Hello World!");		
		return ResponseEntity.ok(response);		
		
	}
	
	@RequestMapping(value="/user")
	public ResponseEntity<Map<String, String>> helloWorldUser() {

		Map<String, String> response = Collections.singletonMap("message", "Hello World, User!");		
		return ResponseEntity.ok(response);		
		
	}
	
	@RequestMapping(value="/admin")
	public ResponseEntity<Map<String, String>> helloWorldAdmin() {

		Map<String, String> response = Collections.singletonMap("message", "Hello World, Admin!");		
		return ResponseEntity.ok(response);		
		
	}
	
}