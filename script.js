const inquirer = require("inquirer")
var fs = require("fs")


inquirer.prompt([
    {
        type: "input",
        message: "Project Title",
        name: "title",
    },
    {
        type: "input",
        message: "Description of Project",
        name: "description",
    },
    {
        type: "input",
        message: "Instructions for Installation",
        name: "install",
    },
    {
        type: "input",
        message: "Information for Usage",
        name: "usage",
    },
    {
        type: "input",
        message: "Contribution Guidelines",
        name: "Contribution",
    },
    {
        type: "input",
        message: "Test Instructions",
        name: "test",
    },
    {
        type: "list",
        message: "Select A License",
        name: "license",
        choices: ["MIT", "Microsoft Public License", "Academic Free License"]
    },
    {
        type: "input",
        message: "Github Username",
        name: "username",
    },
    {
        type: "input",
        message: "Email Address",
        name: "email",
    },
]).then((data) => {
    console.table(data)
    var title = data.title

    fs.writeFile('README.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });
})