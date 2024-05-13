
//parameter definition for function
let section = ""
// function to scroll
function ScrollClick(section)
{
    document.getElementById(section).scrollIntoView
    ({
        behavior: "smooth", block: "center", inline: "center"
    });
}

// BUTTONS SMOOTH SCROLL
// Listens for the DOM to be fully oaded
document.addEventListener("DOMContentLoaded", function() 
{
    // Listens for the "Experience" button click
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
        ScrollClick("ScrollContact");
    });
});


