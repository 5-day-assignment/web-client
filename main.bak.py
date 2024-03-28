from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

API_URL = "http://localhost:8080/api/users"

HTML_FORM = """
<!doctype html>
<html>
<head><title>Simple REST Client</title></head>
<body>
    <h2>REST API Client</h2>
    <h3>Add or List Users (GET/POST)</h3>
    <form action="/users" method="post">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="text" name="givenName" placeholder="Given Name">
        <input type="text" name="familyName" placeholder="Family Name">
        <input type="text" name="address" placeholder="Address">
        <button type="submit">Add User</button>
    </form>
    <form action="/users" method="get">
        <button type="submit">List Users</button>
    </form>

    <h3>Get, Update, or Delete User (GET/PUT/DELETE)</h3>
    <form action="/user_action" method="post">
        <input type="text" name="userId" placeholder="User ID" required>
        <select name="action">
            <option value="get">Get User</option>
            <option value="update">Update User</option>
            <option value="delete">Delete User</option>
        </select>
        <button type="submit">Execute</button>
    </form>
</body>
</html>
"""


@app.route('/')
def home():
    return HTML_FORM


@app.route('/users', methods=['GET', 'POST'])
def users():
    if request.method == 'POST':
        user_data = request.form.to_dict()
        response = requests.post(API_URL, json=user_data)
        return jsonify(response.json())
    else:
        response = requests.get(API_URL)
        return jsonify(response.json())


@app.route('/user_action', methods=['POST'])
def user_action():
    user_id = request.form.get('userId')
    action = request.form.get('action')
    user_url = f"{API_URL}/{user_id}"

    if action == 'get':
        response = requests.get(user_url)
    elif action == 'update':
        response = requests.put(user_url, json=request.form.to_dict())
    elif action == 'delete':
        response = requests.delete(user_url)

    return jsonify(response.json())


if __name__ == '__main__':
    app.run(debug=True)
