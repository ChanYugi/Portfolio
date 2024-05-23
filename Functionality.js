
//parameter definition for function
let Section = ""
// function to scroll
function ScrollClick(Section)
{
    document.getElementById(Section).scrollIntoView
    ({
        behavior: "smooth", block:"center", inline: "center"
    });
}

let OldColor;
let VhUnit = window.visualViewport.height;
// Background change function
function ColorScroll() 
{
    if(window.scrollY > 5.75*VhUnit)
    {
        document.body.style.backgroundColor = "lightgrey";
    }
    else if(window.scrollY > 4*VhUnit && window.scrollY <= 5.75*VhUnit) 
    {
        document.body.style.backgroundColor = "lavender";
    } 
    else if(window.scrollY > 2*VhUnit && window.scrollY <= 4*VhUnit) 
    {
        document.body.style.backgroundColor = "lightsteelblue";
    } 
    else if(window.scrollY > VhUnit && window.scrollY <= 2*VhUnit) 
    {
        document.body.style.backgroundColor = "powderblue";
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
    // Listens for the "AboutMe" button click
    document.getElementById("AboutMe").addEventListener("click", function()
    {
        // parameter is the section title Div ID
        ScrollClick("ScrollAbout");
    });

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
        // document.getElementById
    });

    // Listens for the "Contact" button click
    document.getElementById("Contact").addEventListener("click", function()
    {
        // parameter is the section title Div ID
        ScrollClick("ScrollContact");      
    });

    document.getElementById("StickyAbout").addEventListener("click", function()
    {
        // parameter is the section title Div ID
        ScrollClick("ScrollAbout");
    });

    document.getElementById("StickyExperience").addEventListener("click", function()
    {
        // parameter is the section title Div ID
        ScrollClick("ScrollExperience");
    });

    // Listens for the "Projects" button click
    document.getElementById("StickyProjects").addEventListener("click", function()
    {
        // parameter is the section title Div ID
        ScrollClick("ScrollProjects");
    });

    // Listens for the "Contact" button click
    document.getElementById("StickyContact").addEventListener("click", function()
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

function PopBanner()
{
    if(window.scrollY < VhUnit)
    {
        document.getElementById("Sticky").style.visibility = "hidden";

    }
    else if(window.scrollY >= VhUnit)
    {
        document.getElementById("Sticky").style.visibility = "visible";
    }
    else
    {
        alert('system error');
    }
}

//Sticky Banner function
document.addEventListener("DOMContentLoaded", function() 
{   
    window.addEventListener("scroll", function()
    {
        PopBanner();
    });
});