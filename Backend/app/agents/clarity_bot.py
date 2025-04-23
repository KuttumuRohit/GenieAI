# app/agents/script_writer.py
import requests

class ClarityBot:
    def __init__(self, data):
        # Store the incoming message
        self.message = data.get('message', '')

    def simplify_text(self):
        """Generate a script by sending the message to Ollama API."""
        # Ollama API URL and model configuration
        OLLAMA_API_URL = "http://localhost:11434/api/generate"
        MODEL_NAME = "llama2"  # Can be changed to other models like "mistral" if needed

        if not self.message:
            raise ValueError("Missing message")

        prompt = (
        "You are a simplifier bot. Your task is to take complex paragraphs and rewrite them in plain English. "
        "Do not invent or add extra details. Do not assume what the user means. "
        "If the input is not a paragraph or does not need simplification, say: 'This input does not need simplification.'\n\n"
        f"Text to simplify:\n{self.message}"
        )


        # Prepare the data to be sent to Ollama
        ollama_data = {
            "model": MODEL_NAME,
            "prompt": prompt,
            "stream": False
        }

        # Send request to Ollama
        response = requests.post(OLLAMA_API_URL, json=ollama_data)

        if response.status_code != 200:
            error_text = response.text
            print(f"Ollama error: {error_text}")
            raise Exception(f"Ollama API error: {error_text}")

        response_data = response.json()
        return response_data.get('response', '')
