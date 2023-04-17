//Importing the packages I need for the project
const inquirer = require("inquirer")
var fs = require("fs")

//Using inquirer to prompt the questions in an array
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
        name: "contribution",
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
    //Creating a variables for all the data to then create a README string to append to the file
    var title = ("# " + data.title + "\n\r")
    // Setting up the table of conents
    var toc = "## Table of Contents \n\r"
    var tocDescription = "1. [Description](#description) \n\r"
    var tocInstall = "2. [Install Instructions] (#instalation-instructions) \n\r"
    var tocUsage = "3. [Usage Information] (#usage-information) \n\r"
    var tocContribution = "4. [Contribution Guidelines](#contribution-guidelines) \n\r"
    var tocTest = "5. [Test Instructions](#test-instructions) \n\r"
    var tocLicense = "6. [License](#license) \n\r"
    var tocQuestions = "7. [Questions](#questions) \n\r"
    var tableOfContents = (tocDescription + tocInstall + tocUsage + tocContribution + tocTest + tocLicense + tocQuestions)


    var descriptionTitle = "## Description \n\r "
    var description = (data.description + "\n\r")
    var installTitle = "## Installation Instructions \n\r"
    var install = (data.install + "\n\r")
    var usageTitle = "## Usage Information \n\r"
    var usage = (data.usage + "\n\r")
    var contributionTitle = "## Contribution Guidelines \n\r"
    var contribution = (data.contribution + "\n\r")
    var testTitle = "## Test Instructions \n\r"
    var test = (data.test + "\n\r")
    var licenseTitle = "## License \n\r"
    var license = (data.license + "\n\r")
    var questionsTitle = "## Questions \n\r"
    var username = ("Github: " + data.username + "\n\r")
    var email = ("Email: " + data.email + "\n\r")

    //Creating the string of the README 
    var readMe = (title + toc + tableOfContents + descriptionTitle + description + installTitle + install + usageTitle + usage + contributionTitle + contribution + testTitle + test + licenseTitle + license + questionsTitle + username + email)

    fs.writeFile('README.md', readMe, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("ReadMe created!")
        }
    })
})