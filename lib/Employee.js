class Employee {
    constructor(name, role, id,  email) {
        this.name = name,
        this.role = role;
        this.id = id,
        this.email = email
        
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}


module.exports = Employee;