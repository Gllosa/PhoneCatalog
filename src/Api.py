from flask import Flask
from flask_restful import Resource, Api
import json
import pathlib


app = Flask(__name__)
api = Api(app)

class Phones(Resource):
    def get(self):
        route = str(pathlib.Path().resolve()) + "\src\data.json"
        with open(route, "r") as file:
            return json.load(file)
    


api.add_resource(Phones, '/phones')


if __name__ == '__main__':
    app.run()
