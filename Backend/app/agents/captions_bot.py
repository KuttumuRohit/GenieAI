# app/agents/script_writer.py
import requests

class CaptionsBot:
    def __init__(self, data):
        # Store the incoming message
        self.message = data.get('message', '')

    def caption_generator(self):
        """Generate a script by sending the message to Ollama API."""
        # Ollama API URL and model configuration
        OLLAMA_API_URL = "http://localhost:11434/api/generate"
        MODEL_NAME = "llama2"  # Can be changed to other models like "mistral" if needed

        if not self.message:
            raise ValueError("Missing message")

        prompt = (
    "You are a creative social media expert. Your task is to generate catchy, engaging, and relevant captions based on the given input. "
    "The caption should include emojis that match the mood or topic. "
    "Make sure the caption suits the platform (youtube shorts,Instagram, Twitter, etc.), connects with the audience, and uses the right tone (funny, inspirational, professional, etc.). "
    "Keep the caption clear, and impactful.\n\n"
    "The output must follow this format:\n"
    "**Caption:** <caption with emojis>\n"
    "**Hashtags:** <relevant hashtags>\n\n"
    "Note: The caption and hashtags must be on separate lines.\n"
    "If the input is not related to social media captions, respond with: 'This input is not related to social media captions.'\n\n"
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
