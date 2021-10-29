from flask import Flask
from flask_restful import Resource, Api
import json
import pathlib
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
api = Api(app)

class Phones(Resource):
    def get(self):
        route = str(pathlib.Path().resolve()) + "\data.json"
        with open(route, "r") as file:
            return json.load(file)
    


api.add_resource(Phones, '/phones')


if __name__ == '__main__':
    app.run()
