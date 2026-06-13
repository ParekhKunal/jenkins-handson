pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Cloning Repository...'
            }
        }

        stage('Build') {
            steps {
                echo 'npm run build'
            }
        }

    }

    post {
        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }
    }
}