#
# docker build -t user-management-python-client .
# docker run --add-host=host.docker.internal:192.168.1.3 -p 5000:5000 user-management-python-client
#
# Replace `192.168.1.3` with your host machine IP () here^ in `docker run` as well as in `/flask_app/views.py`.
#
FROM python:3.12-slim as python-env
WORKDIR /app
COPY openapi_client/ ./openapi_client
COPY flask_app/ ./flask_app
RUN pip install ./openapi_client
RUN pip install Flask
ENV FLASK_APP=flask_app/views.py
ENV FLASK_ENV=development
EXPOSE 5000
CMD ["flask", "run", "--host=0.0.0.0"]
