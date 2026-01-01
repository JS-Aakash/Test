# DeployOps Fullstack Demo

This repository is a demo full-stack application designed to test
the **DeployOps Project Execution** feature.

## Features
- Express backend
- Static frontend
- Single Docker container
- No database
- Simple API endpoint

## Run Locally
```bash
docker build -t deployops-demo .
docker run -p 3000:3000 deployops-demo
