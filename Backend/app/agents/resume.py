# app/agents/script_writer.py
import requests

class ResumeBot:
    def __init__(self, data):
        # Store the incoming message
        self.message = data.get('message', '')

    def resume(self):
        """Generate a script by sending the message to Ollama API."""
        # Ollama API URL and model configuration
        OLLAMA_API_URL = "http://localhost:11434/api/generate"
        MODEL_NAME = "llama2"  # Can be changed to other models like "mistral" if needed

        if not self.message:
            raise ValueError("Missing message")

        prompt = (
            "You are a professional resume writer and HR expert. Your task is to create a standout resume that highlights the strengths, skills, and experience of the individual based on the information provided. "
            "The resume should be well-structured, ATS-friendly, and tailored to make the person stand out among other candidates. Format it with bullet points, sub-headings, and appropriate spacing.\n\n"
            "Please format the resume with the following sections:\n"
            "1. **Name** (use a placeholder if not provided)\n"
            "2. **Professional Summary** (Include key strengths and focus areas)\n"
            "3. **Skills** (List the person's technical and soft skills as bullet points)\n"
            "4. **Experience** (Fabricate realistic and impressive experience based on the skills and background provided)\n"
            "5. **Education** (Include degree, university, and relevant achievements)\n"
            "6. **Certifications** (If applicable)\n"
            "7. **Projects or Achievements** (Include any relevant projects or achievements, formatted as bullet points)\n\n"
            "Make sure to include bullet points wherever necessary and ensure that each section is clearly separated with sub-headings.\n"
            "The resume should look clean, professional, and easy to read for an ATS system.\n\n"
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
