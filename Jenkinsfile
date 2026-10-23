
pipeline {
    agent any

    stages {
        stage('Checkout GitHub') {
            steps {
                checkout scm
                echo 'GitHub checkout successful!'
            }
        }

        stage('Verify Playwright Project') {
            steps {
                sh '''
                    echo "Jenkins is running successfully"
                    pwd
                    ls -la
                    test -f package.json
                '''
            }
        }

        stage('Docker Integration') {
            steps {
                echo 'Docker integration will be configured next'
            }
        }
    }

    post {
        success {
            echo 'Jenkins pipeline completed successfully!'
        }

        failure {
            echo 'Jenkins pipeline failed!'
        }
    }
}
