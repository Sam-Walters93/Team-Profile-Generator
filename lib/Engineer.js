const employee = require('./Employee')

class Engineer extends employee {
    
    constructor(name, role, id, email, github) {
        super(name, role, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;