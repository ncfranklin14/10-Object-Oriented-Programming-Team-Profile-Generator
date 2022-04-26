const inquirer = require("inquirer");
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const generateHtml = require("./Develop/util/generateHtml");
const fs = require("fs");
const employees = [];

inquirer.prompt([
    {
        name: "managerName",
        type: "input",
        message:"What is the manager's name?"
    },
    {
        name: "managerId",
        type: "input",
        message:"What is the manager's id?"
    },
    {
        name: "managerEmail",
        type: "input",
        message:"What is the manager's email?"
    },
    {
        name: "managerOffice",
        type: "input",
        message:"What is the manager's office number?"
    }   
]).then(function(response){
    const newManger = new Manager(response.managerName,response.managerId,response.managerEmail,response.managerOffice)
    employees.push(newManger);
    Menu();
})
function Menu() {
    console.log(employees);
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message:"What would you like to do?",
            choices:["add intern", "add Engineer", "quit"]
        }   
    ]).then(function(response){
        if (response.choice === "add intern") {
            inquirer.prompt([
                {
                        name: "internName",
                        type: "input",
                        message:"What is the intern's name?"
                },
                {
                    name: "internId",
                    type: "input",
                    message:"What is the intern's id?"
                },
                {
                    name: "internEmail",
                    type: "input",
                    message:"What is the intern's email?"
                },
                {
                    name: "internSchool",
                    type: "input",
                    message:"What is the intern's school?"
                }
            ]).then(function(response){
                const newIntern = new Intern (response.internName,response.internId,response.internEmail,response.internSchool);
                employees.push(newIntern);
                Menu();
            })
        }
        if (response.choice === "add Engineer") {
            inquirer.prompt([
                {
                        name: "engineerName",
                        type: "input",
                        message:"What is the engineer's name?"
                },
                {
                    name: "engineerId",
                    type: "input",
                    message:"What is the engineer's id?"
                },
                {
                    name: "engineerEmail",
                    type: "input",
                    message:"What is the engineer's email?"
                },
                {
                    name: "engineerGithub",
                    type: "input",
                    message:"What is the engineer's Github username?"
                }
            ]).then(function(response){
                const newEngineer = new Engineer (response.engineerName,response.engineerId,response.engineerEmail,response.engineerGithub);
                employees.push(newEngineer);
                Menu();
            })
        }
        if(response.choice === "quit"){
            fs.writeFile("./Develop/util/index.html", generateHtml(employees), function(error){
                console.log(error);
            })
        }

    })
}