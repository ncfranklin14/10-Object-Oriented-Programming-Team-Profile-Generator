// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name,id,email,role){
        super(name,id,email);
        this.github="GitHubUser";
        this.role="Engineer";
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;