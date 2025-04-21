from flask import Flask  # ← Add this line
from flask_cors import CORS
import sys
print(sys.path)

def create_app():
    app = Flask(__name__)  # This line needs Flask to be imported
    CORS(app)
    
    from .routes import configure_routes
    configure_routes(app)
    return app
