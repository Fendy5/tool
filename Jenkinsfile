pipeline {
  agent any
  stages {
    stage('Git Pull') {
      steps {
        git(credentialsId: 'e39944bd-4ff3-4755-a758-2b23ac136fc6', branch: 'main', url: "git@github.com:Fendy5/${env.ItemName}.git")
      }
    }

    stage('Build') {
      steps {
        sh "docker buildx build --progress=plain -t apps-web-${env.ItemName} ."
      }
    }

    stage('Deploy') {
      steps {
        script{
          try {
            sh "docker stop apps-web-${env.ItemName}"
            sh "docker rm apps-web-${env.ItemName}"
          } catch(Exception e) {
            echo "命令执行出错: ${e.getMessage()}"
          }
          sh "docker run -it -d -e TZ=Asia/Shanghai --restart=always --name apps-web-${env.ItemName} -p 5043:3000 apps-web-${env.ItemName}"
          sh "docker image prune -f"
        }
      }
    }
  }
  environment {
    ItemName = 'tool'
  }
  options {
    skipDefaultCheckout(true)
  }
}
