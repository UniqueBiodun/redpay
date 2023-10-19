pipeline {
    agent {
       label "Runner"
         }
    environment {
        VERSION = "${env.BUILD_ID}"
        AWS_ACCOUNT_ID="549258854334"
        AWS_DEFAULT_REGION="eu-west-2"
        IMAGE_REPO_NAME="redpay-rd-site"
        IMAGE_TAG= "0.0.${env.BUILD_ID}"
        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
    }
    stages {
        stage('Git checkout') {
            steps {
                git branch: 'cra', credentialsId: 'GitHub_Access', url: 'https://github.com/RedtechLTD/redpay-site.git'
            }
        }
      
        stage('Building image') {
          steps{
            script {
              dockerImage = docker.build "${IMAGE_REPO_NAME}:${IMAGE_TAG}"
                 }
            }
        }
        
        stage('Pushing to ECR') {
                 environment {
                        AWS_ACCESS_KEY_ID = credentials('aws_access_key_id')
                        AWS_SECRET_ACCESS_KEY = credentials('aws_secret_access_key')
                         }
          steps{  
            script {
                withAWS(role: "tf_rd_role", roleAccount: '549258854334') {
                sh """aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"""
                sh """docker tag ${IMAGE_REPO_NAME}:${IMAGE_TAG} ${REPOSITORY_URI}:$IMAGE_TAG"""
                sh """docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:${IMAGE_TAG}"""
                 }
               }
             }
         }
         
        stage('Remove Unused docker image') {
          steps{
            script {
              sh "docker rmi -f  ${IMAGE_REPO_NAME}:${IMAGE_TAG} ${REPOSITORY_URI}:$IMAGE_TAG"
              sh "docker system prune -f"
                    }
          }
        }

        stage('pull image & Deploying application on k8s cluster') {
                   environment {
                      AWS_ACCESS_KEY_ID = credentials('aws_access_key_id')
                      AWS_SECRET_ACCESS_KEY = credentials('aws_secret_access_key')
                }
                   steps {
                     script{
                       withAWS(role: "tf_rd_role", roleAccount: '549258854334')  {
                         sh 'aws eks update-kubeconfig --name eks-redtech-rd-apps --region eu-west-2'
                         sh """aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"""
                         sh 'helm upgrade --install --set image.tag="${IMAGE_TAG}" --namespace interface redpay-site ./redpay-site -f ./redpay-site/values.yaml'     
                       }
                   }
              }
           }
    }
}