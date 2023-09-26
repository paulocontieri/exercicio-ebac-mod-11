pipeline {
    agent any

    environment {
        NO_COLOR = 'true'
    }

    stages {
        stage('Clonar o respositório') {
            steps {
                git branch: 'main', url: 'https://github.com/paulocontieri/exercicio-ebac-mod-11.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}
