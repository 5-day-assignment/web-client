from flask import Flask, render_template, request, jsonify
from openapi_client import Configuration, ApiClient
from openapi_client.api import DefaultApi
from openapi_client import ApiException

app = Flask(__name__)

config = Configuration(host="http://localhost:8080/api")
# config = Configuration(host="http://rest-api-server:8080/api")
api_client = ApiClient(configuration=config)
default_api = DefaultApi(api_client=api_client)

@app.route('/')
def home():
    try:
        users = default_api.find_all()
        return render_template('home.html', users=users)
    except ApiException as e:
        return jsonify(error=str(e)), 500

@app.route('/api/users', methods=['POST'])
def create_user():
    try:
        user_data = request.json
        user = default_api.save_new(user_data)
        return jsonify(user.to_dict()), 201
    except ApiException as e:
        return jsonify(error=str(e)), 500

@app.route('/api/users', methods=['GET'])
def get_users():
    try:
        users = default_api.find_all()
        return jsonify([user.to_dict() for user in users]), 200
    except ApiException as e:
        return jsonify(error=str(e)), 500

@app.route('/api/users/<user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user = default_api.find_by_id(user_id)
        return jsonify(user.to_dict()), 200
    except ApiException as e:
        return jsonify(error=str(e)), 500

@app.route('/api/users/<user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        user_data = request.json
        user = default_api.save_by_id(user_id, user_data)
        return jsonify(user.to_dict()), 200
    except ApiException as e:
        return jsonify(error=str(e)), 500

@app.route('/api/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        default_api.delete_by_id(user_id)
        return '', 204
    except ApiException as e:
        return jsonify(error=str(e)), 500

if __name__ == '__main__':
    app.run(debug=True)