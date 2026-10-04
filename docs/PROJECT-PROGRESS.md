# NodeJS Three Tier

## Project Purpose

Real-world DevOps CI/CD practice project for a Node.js three-tier application.

## Architecture

- Frontend
- Backend/API
- Database

## CI/CD

- GitHub
- Jenkins
- SonarQube
- Trivy
- Docker
- Amazon ECR
- Amazon EKS
- Helm
- Argo CD
- Ingress

## Environments

- DEV
- TEST
- PROD

## Pipeline Design

### Infrastructure Pipeline

GitHub → Jenkins → Terraform → AWS

### Application Pipeline

GitHub → Jenkins → Test → SonarQube → Docker → Trivy → ECR → GitOps → Argo CD → EKS

## Current Progress

- [x] Project definition
- [x] Architecture defined
- [x] GitHub repository initialized
- [ ] Node.js application
- [ ] Docker
- [ ] Terraform infrastructure
- [ ] ECR
- [ ] EKS
- [ ] Jenkins
- [ ] SonarQube
- [ ] Trivy
- [ ] Helm
- [ ] Argo CD
- [ ] Ingress
- [ ] DEV
- [ ] TEST
- [ ] PROD
- [ ] Monitoring
- [ ] Troubleshooting practice
- [ ] Cost optimization
- [ ] Final cleanup
