
//parameter definition for function
let section = ""
//modularizing function to scroll
ScrollClick(section)
{
    document.getElementById(section).scrollIntoView({
        behavior: "smooth", block: "center", inline: "center"
    });
}

// Listens for the "Experience" button click
// document.querySelector("button").addEventListener("click", function()

document.getElementById("Experience").addEventListener("click", function()
{
    // parameter is the section title Div ID
    ScrollClick("ScrollExperience");
});

// Listens for the "Projects" button click
document.getElementById("Projects").addEventListener("click", function()
{
    // parameter is the section title Div ID
    ScrollClick("ScrollProjects");
});

// Listens for the "Photography" button click
document.getElementById("Photography").addEventListener("click", function()
{
    // parameter is the section title Div ID
    // sends to endpoint of photography page, needs a back button but later implementtion
});

// Listens for the "Contact" button click
document.getElementById("Contact").addEventListener("click", function()
{
    // parameter is the section title Div ID
    ScrollClick("ScrollProjects");
});