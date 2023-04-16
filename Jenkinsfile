pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/Poulima/portfolio.git'
                sh 'npm install'
            }
        }
        stage('Build docker image') {
            steps {
                sh 'docker build -t poulima/portfolio .'
            }
        }  
        stage('Push docker image') {
            steps {
               withCredentials([string(credentialsId: 'docker-build-portfolio', variable: 'portfolio')]) {
                 sh 'docker login -u poulima -p ${portfolio}'
               }
               sh 'docker push poulima/portfolio'
            }
        }
    }
}
