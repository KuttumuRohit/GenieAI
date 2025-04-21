# app/routes.py
from flask import jsonify, request
from app.agents.script_writer import ScriptWriter  # Import the ScriptWriter class
from app.agents.text_gen import TextWriter

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