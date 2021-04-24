const employee = require('./Employee')

class Intern extends employee {
    
    constructor(name, id, email, university) {
        super(name, id, email);
        this.university = university;
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return this.university
    }
}

module.exports = Intern;