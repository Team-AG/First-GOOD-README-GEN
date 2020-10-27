// function passing in licenses as an arg
// validate license exists
// return ![GitHub license](https://img.shields.io/badge/license- ROUTE HERE -blue.svg)


// Importing dependencies



// This line will make a function to generate a markdown README
//function for creating a line in readme for license
function renderLicenseBadger(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    console.log("a license was not selected")
    return ''
  }
}

//function for creating license link
function renderLicenseLink(license) {
  if (license !== "none") {
    return (
      `\n* [license](#license)\n`
    )
  }
  return ''
}

//function for rendering license section
function renderLicenseSection(license) {
  if (license !== "none") {
    return (`license ##
    This repo is licensed under ${license} license `)
  } else {
    return ''
  }
}

//function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;