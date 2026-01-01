# TaskFlow Pro

A full-stack task management application built for demonstrating
DeployOps Project Execution and AI Auto-Fix.

## Known Issues (For AI Fix)
- Error middleware is broken
- Task validation missing
- Task persistence is incorrect
- Stats calculation logic is flawed

## Run Locally
```bash
docker build -t taskflow .
docker run -p 3000:3000 taskflow
