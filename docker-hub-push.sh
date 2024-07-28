docker build -t react_image --platform linux/amd64  .
docker tag react_image:latest davidtoman/iriusrisk:react_image
docker push davidtoman/iriusrisk:react_image