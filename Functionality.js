
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

let OldColor;
let VhUnit = window.visualViewport.height;
// Background change function
function ColorScroll() 
{
    if(window.scrollY > 5*VhUnit) 
    {
        document.body.style.backgroundColor = "lightgrey";
    } 
    else if(window.scrollY > 3*VhUnit && window.scrollY <= 5*VhUnit) 
    {
        document.body.style.backgroundColor = "lavender";
    } 
    else if(window.scrollY > VhUnit && window.scrollY <= 3*VhUnit) 
    {
        document.body.style.backgroundColor = "lightcyan";
    } 
    else if(window.scrollY <= VhUnit)
    {
        document.body.style.backgroundColor = OldColor;
    }
}

function ScrollDebounce(Funct, delay)
{
    let timer;
    return function()
    {
        clearTimeout(timer);
        const context = this;
        const args = arguments;

        timer = setTimeout(function()
        {
            return Funct.apply(context,args);
        }
        , delay);
    };

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



// Background Change While scrolling
// Listens for the DOM to be fully oaded

document.addEventListener("DOMContentLoaded", function() 
{   
    //stored as a variable in case I choose to change first page color  
    OldColor = document.body.style.backgroundColor; 

    window.addEventListener("scroll", function()
    {
        ScrollDebounce(ColorScroll(), 1000);
    });
});