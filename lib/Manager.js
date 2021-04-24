const employee = require('./Employee');

class Manager extends employee {
    constructor(name, role, id, email, officeNumber) {
        super(name, role, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;