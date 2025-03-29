from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    @app.route("/")
    def Home():
        return "Hi"
    return app
