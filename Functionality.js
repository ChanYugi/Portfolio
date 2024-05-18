
//parameter definition for function
let Section = ""
// function to scroll
function ScrollClick(Section)
{
    document.getElementById(Section).scrollIntoView
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

// Background change function
function ColorScroll(Old,New,UpperBound, LowerBound)
{
    window.addEventListener("scroll", function()
    {
        if( window.scrollY > UpperBound)
        {
            document.body.style.backgroundColor = New;
        }
        else if(window.scrollY >= LowerBound && window.scrollY < UpperBound)
        {
            document.body.style.backgroundColor = Old;
        }
    });
}

var MainHeight = getComputedStyle(document.body).getPropertyValue('--MainHeight');
var OldColor;
var VhUnit = window.visualViewport.height;

// Background Change While scrolling
document.addEventListener("DOMContentLoaded", function() 
{   
    //stored as a variable in case I choose to change first page color  
    OldColor = document.body.style.backgroundColor; 

    window.addEventListener("scroll", function()
    {
        ColorScroll(OldColor, "lavender", VhUnit, 0);
        ColorScroll("lavender", "lightcyan", 3*VhUnit, VhUnit);
        ColorScroll("lightcyan", "lightgrey", 5*VhUnit, 3*VhUnit);


    });
});