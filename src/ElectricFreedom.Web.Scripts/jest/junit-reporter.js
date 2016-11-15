const reporters = require('jasmine-reporters');

const reporter = new reporters.JUnitXmlReporter({
    consolidateAll: false,
    filePrefix: 'jest-junit-result-',
    savePath: 'jest/results/',
});

jasmine.getEnv().addReporter(reporter); // eslint-disable-line no-undef
