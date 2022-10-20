pipeline {
  agent any
  environment {
    AWS_DEFAULT_REGION='sa-east-1'
  }
  stages {
    stage('Prepare') {
      steps {
        git branch: 'main', changelog: false, credentialsId: 'pxcx-github-creds', url: 'https://github.com/pxcx/danfe-extract-web.git'
        sh '''
            ls -a
            rm -rf node_modules/
            rm -rf dist/
            npm install
        '''
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        withCredentials([aws(credentialsId: 'pxcx-aws-creds', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]){
            sh 'aws s3 sync dist/ s3://danfe.ifsolucoescontabeis.com.br'
        }
      }
    }
  }
}