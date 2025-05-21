pipeline {
    agent any

    tools {
        nodejs "NodeJS 18" // Ensure this is set in Jenkins → Global Tools
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Test Reports') {
            steps {
                junit 'test-results/*.xml'
            }
        }
    }

    post {
        always {
            cleanWs()
        }

        success {
            echo 'Build passed!'
        }

        failure {
            echo 'Build failed!'
        }
    }
}
