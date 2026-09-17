package com.laksh.SpringAI;

import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class ChatController {

    private final OllamaChatModel ollamaChatModel;

    public ChatController(OllamaChatModel ollamaChatModel) {
        this.ollamaChatModel = ollamaChatModel;
    }

    @GetMapping("/ai/{message}")
    public Map<String, String> chat(@PathVariable String message){
        String response = ollamaChatModel.call(message);

        return Map.of("response", response);
    }
}
