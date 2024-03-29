# User Management

## Web Client - a python-Flask project

This project uses OpenAPI Specification from the REST API Server project (`../rest-api-server`) to generate a python
client and in turn uses it for CRUD actions in the only view of this Flask app, User Management System (`home.html`).

### Prerequisites

- REST API Server already running on localhost:8080
- Docker

### Generate and run

You can run it manually using python's virtual environment or with Docker. In either case you need docker to generate
the openapi_client from the (rest-api-server) openapi.yaml. Assuming you're in root directory of the project.
```shell
cd ..
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/rest-api-server/src/main/resources/openapi.yaml -g python -o /local/web-client/openapi_client
cd .\web-client\

```
**Note**: The version currently tagged as `latest` is `7.5.0-SNAPSHOT` which is the only one that works without producing
the `AttributeError: 'SecretStr' object has no attribute 'to_dict'` error. Hopefully once `openapi-generator-cli:v7.5.0`
is released the error will be permanently avoided.

#### Running manually

```shell
python -m venv venv
.\venv\Scripts\Activate

# (venv) from here on
pip install .\openapi_client
pip install Flask
$Env:FLASK_APP = "flask_app/views.py"
$Env:FLASK_ENV = "development"
# Change configuration host in views.py before running
flask run

```

#### Running with Docker

Use CMD, run `ipconfig /all`, and find `IPv4 Address` that start with 192.168.X.X or 10.0.X.X. That is your host
machine IP. Use it `/flask_app/views.py` (host config) and in the following `docker run` command.

Example uses 192.168.1.3:
```shell
docker build -t user-management-python-client .
docker run --add-host=host.docker.internal:192.168.1.3 -p 5000:5000 user-management-python-client

```










## Version check for troubleshooting

### Running manually

```shell
(venv) PS C:\dev\5d-assignment\user-management\web-client> pip list         
Package           Version
----------------- -----------
annotated-types   0.6.0
blinker           1.7.0
click             8.1.7
colorama          0.4.6
Flask             3.0.2
itsdangerous      2.1.2
Jinja2            3.1.3
MarkupSafe        2.1.5
openapi-client    1.0.0
pip               24.0
pydantic          2.6.4
pydantic_core     2.16.3
python-dateutil   2.9.0.post0
six               1.16.0
typing_extensions 4.10.0
urllib3           2.0.7
Werkzeug          3.0.1
```