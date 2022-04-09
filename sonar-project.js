const sonarqubeScanner =  require('sonarqube-scanner');

sonarqubeScanner({
    serverUrl: "http://localhost:9000",
    options: {
        'sonar.sources': 'src',
        'sonar.tests': 'src',
        'sonar.inclusions': '**', // Entry point of your code
        'sonar.test.inclusions': 'src/presentation/modules/**/useCases/**/*.spec.ts',
        'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
        'sonar.testExecutionReportPaths': 'test-report.xml'
    }
}, () => { })