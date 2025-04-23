# app/agents/script_writer.py
import requests

class GrammarBot:
    def __init__(self, data):
        # Store the incoming message
        self.message = data.get('message', '')

    def grammar_check(self):
        """Generate a script by sending the message to Ollama API."""
        # Ollama API URL and model configuration
        OLLAMA_API_URL = "http://localhost:11434/api/generate"
        MODEL_NAME = "llama2"  # Can be changed to other models like "mistral" if needed

        if not self.message:
            raise ValueError("Missing message")

        prompt = (
        "You are a grammar expert. Your task is to correct grammatical, punctuation, and spelling mistakes in the given sentence. "
        "After correcting, explain what the mistakes were. Be clear and concise in your explanation. "
        "Respond in this format:\n"
        "Corrected Sentence: <your corrected version>\n"
        "Feedback: <brief explanation of the mistakes>\n\n"
        f"Sentence to correct:\n{self.message}"
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
