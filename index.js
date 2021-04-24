const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];


function newEmployee() {
    inquirer.prompt([
            {
                message: "Enter team member's name",
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
            .then(function({name, role, id, email}) {
                let roleInfo;
                
                switch(role) {
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
                        newMember = new Engineer(name, role, id, email, roleInfo);
                    }
                    if (role === "Intern") {
                        newMember = new Intern(name, role, id, email, roleInfo);
                    }  
                    if (role === "Manager") {
                        newMember = new Manager(name, role, id, email, roleInfo);
                    }

                    employees.push(newMember);
                    generateCard(newMember)
                    .then(function() {
                        if (moreMembers === "Yes") {
                            newEmployee();
                        } else (
                            completeFile()
                        )
                    })
                });
        })
};

function createFile() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
        crossorigin="anonymous"/>
        <script type="text/javascript" src="./index.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;

    fs.writeFile("./dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("file created");
};

function generateCard(member) {

    return new Promise(function(resolve, reject) {
        const name = member.name;
        const role = member.role;
        const id = member.id;
        const email = member.email;
        let empHtml;

        console.log(member.github);

        switch(role) {

            case "Engineer":
                empHtml = 
                `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Engineer    <i class="fas fa-mouse"></i></h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">E-mail: <a href='mailto: ${email}' target='_blank'>${email}</a></li>
                    <li class="list-group-item" id="github">GitHub: <a href='https://github.com/${member.github}' target='_blank'>${member.github}</a></li>
                </ul>
                </div>
                </div>`
            break;

            case "Intern":
                empHtml = 
                `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Intern   <i class="fas fa-graduation-cap"></i> </h5> 
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">E-mail: <a href='mailto: ${email}' target='_blank'>${email}</a></li>
                    <li class="list-group-item">University: ${member.university}</li>
                </ul>
                </div>
                </div>`
            break;

            case "Manager":
                 empHtml = 
                `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                
                <h5 class="card-header">${name}<br /><br />Manager   <i class="fas fa-tasks card-header"></i></h5> 
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">E-mail: <a href='mailto: ${email}' target='_blank'>${email}</a></li>
                    <li class="list-group-item">Phone Number: ${member.officeNumber}</li>
                </ul>
                </div>
                </div>`
            break;
        };
       
        fs.appendFile("./dist/team.html", empHtml, function(err) {
            if (err) {
                return err;
            };
            return resolve();
        });
    }).catch(err => {
        console.log(err);
    });
};

function completeFile() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("process complete");
}

createFile();
newEmployee();