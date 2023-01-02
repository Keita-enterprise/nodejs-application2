const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://54.197.197.67:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsLandmarkTechnologies',
	    'sonar.login': 'i2bk',
	    'sonar.password': 'i2bk',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
            'sonar': 'node sonar-project.js'

	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
          
       },
       
}, () => {});
