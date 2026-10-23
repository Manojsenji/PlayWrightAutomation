
pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        IMAGE_NAME = 'playwright-automation'
        CONTAINER_NAME = "playwright-run-${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout GitHub') {
            steps {
                checkout scm
                echo 'GitHub checkout successful'
            }
        }

        stage('Verify Docker') {
            steps {
                sh 'docker version'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t "$IMAGE_NAME" .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh '''
                    mkdir -p playwright-report test-results

                    docker create \
                      --name "$CONTAINER_NAME" \
                      --init \
                      --ipc=host \
                      -e CI=true \
                      "$IMAGE_NAME"

                    docker start -a "$CONTAINER_NAME"

                    EXIT_CODE=$(docker inspect \
                      --format='{{.State.ExitCode}}' \
                      "$CONTAINER_NAME")

                    docker cp \
                      "$CONTAINER_NAME:/app/playwright-report/." \
                      playwright-report/ || true

                    docker cp \
                      "$CONTAINER_NAME:/app/test-results/." \
                      test-results/ || true

                    docker rm "$CONTAINER_NAME"

                    exit "$EXIT_CODE"
                '''
            }
        }
    }

    post {
        always {
            junit(
                testResults: 'test-results/results.xml',
                allowEmptyResults: true
            )

            archiveArtifacts(
                artifacts: 'playwright-report/**/*,test-results/**/*',
                allowEmptyArchive: true
            )
        }

        success {
            echo 'Playwright automation PASSED'
        }

        failure {
            echo 'Playwright automation FAILED'
        }
    }
}
