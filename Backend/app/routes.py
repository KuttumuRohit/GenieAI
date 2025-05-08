# app/routes.py
from flask import jsonify, request
from app.agents.script_writer import ScriptWriter  # Import the ScriptWriter class
from app.agents.text_gen import TextWriter
from app.agents.clarity_bot import ClarityBot
from app.agents.grammar_check import GrammarBot
from app.agents.captions_bot import CaptionsBot
from app.agents.resume import ResumeBot
from app.agents.translator_bot import TranslatorBot
from app.agents.summarize_bot import SummarizeBot

def configure_routes(app):
    @app.route('/api/test', methods=['GET'])
    def test_route():
        return jsonify({"message": "Hello from the backend!"})

    @app.route('/api/script', methods=['POST'])
    def script_route():
        try:
            # Get JSON data from the incoming request
            data = request.json

            # Initialize ScriptWriter with the received data
            writer = ScriptWriter(data)
            
            # Call the method to generate the script
            generated_script = writer.generate_script()

            # Return the generated script in the response
            return jsonify({"script": generated_script})

        except Exception as e:
            # If an error occurs, return the error message
            return jsonify({"error": str(e)}), 400

    
    @app.route('/api/text', methods=['POST'])
    def text_route():
        try:
            # Get JSON data from the incoming request
            data = request.json

            # Initialize ScriptWriter with the received data
            writer = TextWriter(data)
            
            # Call the method to generate the script
            generated_text = writer.generate_text()

            # Return the generated script in the response
            return jsonify({"script": generated_text})

        except Exception as e:
            # If an error occurs, return the error message
            return jsonify({"error": str(e)}), 400
        
    @app.route('/api/clarityBot', methods=['POST'])
    def clarity_bot_route():
        try:
            # Get JSON data from the incoming request
            data = request.json

            # Initialize ScriptWriter with the received data
            writer = ClarityBot(data)
            
            # Call the method to generate the script
            generated_script = writer.simplify_text()

            # Return the generated script in the response
            return jsonify({"script": generated_script})

        except Exception as e:
            # If an error occurs, return the error message
            return jsonify({"error": str(e)}), 400
        
    @app.route('/api/grammar_check', methods=['POST'])
    def grammar_checker():
        try:
            # Get JSON data from the incoming request
            data = request.json

            # Initialize ScriptWriter with the received data
            writer = GrammarBot(data)
            
            # Call the method to generate the script
            generated_text = writer.grammar_check()

            # Return the generated script in the response
            return jsonify({"script": generated_text})

        except Exception as e:
            # If an error occurs, return the error message
            return jsonify({"error": str(e)}), 400
    
    @app.route('/api/captions', methods=['POST'])
    def captions_generator():
        try:
            # Get JSON data from the incoming request
            data = request.json

            # Initialize ScriptWriter with the received data
            writer = CaptionsBot(data)
            
            # Call the method to generate the script
            generated_text = writer.caption_generator()

            # Return the generated script in the response
            return jsonify({"script": generated_text})

        except Exception as e:
            # If an error occurs, return the error message
            return jsonify({"error": str(e)}), 400
        
    @app.route('/api/resume', methods=['POST'])
    def resume_builder():
        try:
            # Get JSON data from the incoming request
            data = request.json

            # Initialize ScriptWriter with the received data
            writer = ResumeBot(data)
            
            # Call the method to generate the script
            generated_text = writer.resume()

            # Return the generated script in the response
            return jsonify({"script": generated_text})

        except Exception as e:
            # If an error occurs, return the error message
            return jsonify({"error": str(e)}), 400
    @app.route('/api/translator', methods=['POST'])
    def tran():
        try:
            # Get JSON data from the incoming request
            data = request.json

            # Initialize ScriptWriter with the received data
            writer = TranslatorBot(data)
            
            # Call the method to generate the script
            generated_text = writer.trans()

            # Return the generated script in the response
            return jsonify({"script": generated_text})

        except Exception as e:
            # If an error occurs, return the error message
            return jsonify({"error": str(e)}), 400
    @app.route('/api/summarize', methods=['POST'])
    def summarize_text():
        try:
            # Get JSON data from the incoming request
            data = request.json

            # Initialize ScriptWriter with the received data
            writer = SummarizeBot(data)
            
            # Call the method to generate the script
            generated_text = writer.summarize_text()

            # Return the generated script in the response
            return jsonify({"script": generated_text})

        except Exception as e:
            # If an error occurs, return the error message
            return jsonify({"error": str(e)}), 400
        
