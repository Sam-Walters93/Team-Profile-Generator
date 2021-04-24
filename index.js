const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];


// const ganeratePage = require('')

function newEmployee() {
    inquirer.prompt([
            {
                message: "Enter team member's name.",
                name: "name"
            },
            {
                type: "list",
                message: "Enter team member's role",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager"
                ],
                name: "role"
            },
            {
                message: "Enter team member's ID",
                name: "id"
            },
            {
                message: "Enter team member's e-mail",
                name: "email"
            }])
            .then(function(answers) {
                let roleInfo;
                
                switch(answers.role) {
                    case "Engineer":
                        roleInfo = "GitHub UserName";
                        break;
                    case "Intern":
                        roleInfo = "University";
                        break;
                    case "Manager":
                        roleInfo = "Office Phone Number";
                        break;
                }   
                
            inquirer.prompt([
                {
                    message: `Enter Team Member's ${roleInfo}`,
                    name: 'roleInfo'
                },
                {
                    type: "list",
                    message: "Would you like to add more team members?",
                    choices: [
                        "Yes",
                        "No"
                    ],
                    name: "moreMembers"
                }
            ]).then(function({roleInfo, moreMembers}) {
                    let newMember;

                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    }
                    if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }

                    employees.push(newMember);
                    generateCard(newMember)

                    .then(function() {
                        if (moreMembers === "Yes") {
                            newEmployee();
                        } else (
                            generateHTML()
                        )
                    })
                });
        })
};




newEmployee();

// fs.writeFile('index.html', generatePage(   ) , err => {
//     if (err) throw err;
  
// });