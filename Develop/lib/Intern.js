// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name,id,email,role){
        super(name,id,email);
        this.school="UCLA";
        this.role="Intern";
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;