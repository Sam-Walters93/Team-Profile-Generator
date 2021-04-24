const fs = require('fs');
const inquirer = require('inquirer');


const employees = [];


// const ganeratePage = require('')

newEmployee = () => {
    inquirer
        .prompt([
            {
                message: "Enter team member's name.",
                name: "name"
            },
            {
                message: "Enter member's title",
                choices: [
                    "Team Lead",
                    "Engineer",
                    "intern",
                ],
                name: "title"
            },
            {
                message: "Enter team member's ID",
                name: "id"
            },
            {
                message: "Enter team member's e-mail",
                name: "email"
            }
        ])
        .then(function({name, role, id, email}) {
            let titleInfo = '';
            if (role === "Engineer") {
                titleInfo = 'GitHub UserName'
            } 
            if (role === "Intern") {
                titleInfo = "University"
            } else {
                titleInfo = "Office Phone Extension"
            } 
            inquirer
                .prompt([{
                    message: `Enter Team Member's ${titleInfo}`,
                    name: 'titleInfo'
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
            ])
                .then(function({titleInfo, moreMembers}) {
                    let newMember;

                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, titleInfo);
                    }
                    if (role === "Intern") {
                        newMember = new Intern(name, id, email, titleInfo);
                    } else {
                        newMember = new Manager(name, id, email, titleInfo);
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






// fs.writeFile('index.html', generatePage(   ) , err => {
//     if (err) throw err;
  
// });