docker kill react_iriusrisk_container
docker rm react_iriusrisk_container
docker pull davidtoman/iriusrisk:react_image
docker run -d --name react_iriusrisk_container -p 8081:80 davidtoman/iriusrisk:react_image