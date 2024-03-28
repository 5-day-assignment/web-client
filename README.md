# Web Client - a python-Flask project

### Prerequsite

REST API Server is already running on localhost:8080

### Manual installation

If you are in the `\web-client` folder (a.k.a project's root folder), you need to go one level above:
```shell
cd ..

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/rest-api-server/src/main/resources/openapi.yaml -g python -o /local/web-client/openapi_client

cd .\web-client\
python -m venv venv
.\venv\Scripts\Activate

# (venv) from here on
pip install .\openapi_client
cd .\flask_app\
```

### Run with docker using Dockerfile from this project

Go to project root and run:
```shell
docker build -t user-management-python-client .
docker run --add-host=host.docker.internal:192.168.1.3 -p 5000:5000 user-management-python-client
```
Where you replace `192.168.1.3` with your host machine IP () here in `docker run` as well as in `/flask_app/views.py`.