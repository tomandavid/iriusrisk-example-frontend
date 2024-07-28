# React.js Application README

This README provides instructions for setting up and deploying a React.js application using Docker and AWS.

## Prerequisites

Before getting started, make sure you have the following:

- Node.js and npm installed on your local machine.
- Docker installed on your local machine.
- An AWS server to deploy your application.

## Setup

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd iriusrisk-frontend
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

## Development

To start the development server, run the following command:

```bash
npm run start
```

This will start the React.js application locally.

## Deployment

To deploy the application, follow these steps:

1. Build the Docker image and push it to Docker Hub using the `docker-hub-push.sh` script:

    ```bash
    sh docker-hub-push.sh
    ```

2. On your AWS server, download the Docker image using the `docker-hub-pull.sh` script:

    ```bash
    sh docker-hub-pull.sh
    ```

3. Set the environment variables `REACT_APP_SUPABASE_KEY` and `REACT_APP_SUPABASE_URL` on your AWS server. These variables are required for the application to function correctly.

4. Start the Docker container with the downloaded image:

    ```bash
    docker run -d -p 80:80 <image-name>
    ```

    Replace `<image-name>` with the name of the Docker image you pulled from Docker Hub.

5. Access your React.js application on your AWS server's public IP or domain.

That's it! Your React.js application should now be deployed and accessible.

-+-+-+-+-