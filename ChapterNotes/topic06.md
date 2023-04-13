## Introduction to Docker
1. create `containers` to transport
2. put `resource` inside containers
3. have full control, be compatable with all types of transportation, contain the access to resource

#### what is docker?

-  uses `containerization` technology, virtualize on `OS level`, allowing multiple container run on a `single host` while sharing the host's operating system kernel

- a client program named Docker (CLI)
- a server program that manages Linux system
- builds containers from code

#### Adv
- build once, run anywhere
- no dependency worries
- run each app in its own isolated container
- automation
- reduce/eliminate compatibility problems
- significantly improves the speed and reliability of continuous deployment and continuous integration systems
- lightweight

#### Terms
- **Images**: `blueprints` of our application which form the basis of containers
    - Images are built using a `Dockerfile`, which includes `instructions` to set up the environment, copy the application code, and specify any other required settings
- **Containers**: created from `Docker images` and run the `actual` application
- **Docker Daemon**: `background service` running on the host that `manages` building, running and distributing Docker `containers`
- **Docker Client**: command line tool that allows the user to interact with the daemon
- **Docker Hub**: a repository of Docker images, a registry has directory of all available Docker images

#### Useful Docker Commands
- see a list of all images on your system: 
    
        docker images

-  see all containers that are currently running:

        docker ps -a

- run a container:

        docker run 
    - Useful flags:
        - -t - pseudo-terminal
        - -i - interactive
        - -d - detached container

## Docker Workflow
1. pull image from docker hub
2. run the container
3. exit and stop the container
4. commit to image
5. push to docker hub

## Docker Hub
- a `repository service` provided by Docker for finding and sharing `container images`

- Key features:
    - Private Repositories
    - Automated Builds
    - Push and pull projects

## Dockerfiles
- a simple text file that contains a list of `commands` that the Docker client calls while creating an image
    - tells how to build the image 
    - no need this after build, just run the container

- Steps:
    - **FROM**: specifying the base image
            
            FROM node:latest

    - **WORKDIR**: set a working directory

            WORKDIR /app

    - **COPY**:  copy files or directories from the host machine to the container
            
            COPY package*.json ./

    - **RUN**: run commands

            RUN npm install

    - **EXPOSE**: informs Docker that the container listens on the specified ports during runtime

            EXPOSE 3000

    - **CMD**: write the command for running the application

            CMD ["node", "server.js"]

- To build the image:

        docker build -t <your-image-name>:<your-tag> .

## Docker-compose

- a docker tool that allows us to run `multi-container applications`
    - link one container to the other
    - e.g. a NodeJS app with a database
- Docker compose deploys an entire application by running a `single command`
- Without docker compose, we will need to manually start up each container, making sure that the ports match up and the order of start-up is correct 

- Steps: (spacing is important when you create the `docker-compose.yml` file)
    - **version**: version of the Docker Compose file format
    - **services**: lists the individual containers that make up your application

            version: "3.9"
            services:
              nodejs:
                container_name: nodejs-container
                image: username/yourimage:1.0.1
                restart: always
                ports: 
                    - "3000:3000"
                expose:
                    - 3000
                depends_on:
                    - mongodb
              mongodb:
                container_name: mongodb-container
                image: mongo
                restart: always
                ports: 
                    - "27017:27017"
- To run this:

        docker-compose up