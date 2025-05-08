# app/agents/script_writer.py
import requests

class TranslatorBot:
    def __init__(self, data):
        # Store the incoming message
        self.message = data.get('message', '')

    def trans(self):
        """Generate a script by sending the message to Ollama API."""
        # Ollama API URL and model configuration
        OLLAMA_API_URL = "http://localhost:11434/api/generate"
        MODEL_NAME = "llama2"  # Can be changed to other models like "mistral" if needed

        if not self.message:
            raise ValueError("Missing message")

        prompt = (
    "You are a professional language translator. Your task is to accurately translate the given text into the target language while preserving the original meaning, tone, and context.\n\n"
    "Instructions:\n"
    "1. The input should be in the format: 'text to translate | target language'\n"
    "2. Ensure that idioms, phrases, and culturally specific references are translated appropriately.\n"
    "3. Maintain proper grammar, punctuation, and formatting in the translated text.\n"
    "4. Be concise and natural — make the translation sound as if it were originally written in the target language.\n\n"
    "The output must follow this format:\n"
    "**Original Text:** <original text>\n"
    "**Translated Text:** <translated text>\n"
    "**Target Language:** <target language>\n\n"
    "If the input format is incorrect or target language is not specified, respond with: 'Please provide the text and target language in the format: text | target language'\n\n"
    f"Input:\n{self.message}"
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
