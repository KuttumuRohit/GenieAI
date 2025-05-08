# app/agents/script_writer.py
import requests

class SummarizeBot:
    def __init__(self, data):
        # Store the incoming message
        self.message = data.get('message', '')

    def summarize_text(self):
        """Generate a script by sending the message to Ollama API."""
        # Ollama API URL and model configuration
        OLLAMA_API_URL = "http://localhost:11434/api/generate"
        MODEL_NAME = "llama2"  # Can be changed to other models like "mistral" if needed

        if not self.message:
            raise ValueError("Missing message")

        prompt = (
    "You are an expert in text summarization. Your task is to provide a concise, clear, and informative summary of the given text. "
    "The summary should capture the main points and key information while omitting unnecessary details. "
    "Ensure the summary is coherent, well-structured, and easily understood. "
    "The summary should be significantly shorter than the original text but still retain the essential meaning and context.\n\n"
    "The output must follow this format:\n"
    "**Summary:** <shortened summary>\n\n"
    "Note: The summary must be concise and relevant to the original text's core message.\n"
    "If the input is not suitable for summarization, respond with: 'This input is not suitable for summarization.'\n\n"
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
