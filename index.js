const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

inquirer

  .prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username:"
    },
    {
      type: "input",
      name: "Title",
      message: "What is the title of your Github Project?"
    },
    {
      type: "input",
      name: "Description",
      message: "Describe your project."
    },
    {
      type: "input",
      name: "Installation",
      message: "List necessary installations and/or dependencies needed to run project."
    },
    {
      type: "input",
      name: "Usage",
      message: "Provide instructions and examples for use."
    },
    {
      type: "input",
      name: "Liscence",
      message: "What type of liscence was assigned to project?"
    },
    {
      type: "input",
      name: "Contributing",
      message:
        "Would you like contributions from other developers? If so add guidelines for how to do so."
    },
    {
      type: "input",
      name: "Tests",
      message: "Are there any tests to run for your project? If so list them."
    }

  ])

  .then(function(result) {

    const queryUrl = `https://api.github.com/users/${result.username}`;

    axios.get(queryUrl).then(function(res) {
      const pic = res.data.avatar_url;
      const email = res.data.email;
      const md = `# ${result.username}

${pic};
${email};

    ## ${result.Title}
    ${result.Description}

    ## Installation
    ${result.Installation}

    ## Usage
    ${result.Usage}

    ## Liscence
    ${result.Liscence}

    ## Contributing
    ${result.Contributing}

    ## Tests
    ${result.Tests}`;

      fs.writeFile("README.md", md, function(err) {
        if (err) throw err;
        console.log("You are good to go!");
      });
    });
  });