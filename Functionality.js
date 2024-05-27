
//parameter definition for function
let Section = "";

// function to scroll
function ScrollClick(Section)
{
    let WindowHeight = 0.1*window.innerHeight;
    let SectionHeight = document.getElementById(Section).offsetTop;
    let TotalHeight = SectionHeight - WindowHeight;

    window.scrollTo
    ({
        top: TotalHeight,
        left: 0,
        behavior: "smooth"
    });
}

//function to debounce scroll
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

// function to change background colour with scroll 
let OldColor;
let VhUnit = window.visualViewport.height;
function ColorScroll() 
{
    let WindowHeight = 0.25*window.innerHeight;

    let AboutHeight = document.getElementById("AboutPage").offsetTop - WindowHeight;
    let ExperienceHeight = document.getElementById("ExperiencePage").offsetTop - WindowHeight;
    let ProjectHeight = document.getElementById("ProjectsPage").offsetTop - WindowHeight;
    let ContactHeight = document.getElementById("ContactPage").offsetTop - WindowHeight;


    if(window.scrollY > ContactHeight)
    {
        document.body.style.backgroundColor = "lightgrey";
    }
    else if(window.scrollY > ProjectHeight && window.scrollY <= ContactHeight) 
    {
        document.body.style.backgroundColor = "lavender";
    } 
    else if(window.scrollY > ExperienceHeight && window.scrollY <= ProjectHeight) 
    {
        document.body.style.backgroundColor = "lightblue";
    } 
    else if(window.scrollY > AboutHeight && window.scrollY <= ExperienceHeight) 
    {
        document.body.style.backgroundColor = "paleturquoise";
    } 
    else if(window.scrollY <= AboutHeight)
    {
        document.body.style.backgroundColor = OldColor;
    }
}

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


//Project Button Links
// Listens for the DOM to be fully oaded
document.addEventListener("DOMContentLoaded", function() 
{
    // Listens for the "Two Axis Project" button click
    document.getElementById("TwoAxis").addEventListener("click", function(event)
    {
        event.preventDefault();
        window.location.href = 'TwoAxisMachine.html';
    });

    document.getElementById("XRay").addEventListener("click", function(event)
    {
        event.preventDefault();
        window.location.href = 'XRayFractureDetector.html';
    });

    document.getElementById("PCBuild").addEventListener("click", function(event)
    {
        event.preventDefault();
        window.location.href = 'PCBuilds.html';
    });

    document.getElementById("ThisWebsite").addEventListener("click", function(event)
    {
        event.preventDefault();
        window.location.href = 'ThisWebsite.html';
    });

    document.getElementById("Photography").addEventListener("click", function(event)
    {
        event.preventDefault();
        window.location.href = 'Photography.html';
    });
});

//function for sticky banner coming into view once main page is out of view
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

//Sticky Banner 
// Listens for the DOM to be fully oaded
document.addEventListener("DOMContentLoaded", function() 
{   
    window.addEventListener("scroll", function()
    {
        PopBanner();
    });
});

//Changes icon opacity when mouse is over element
function ProjectHover(ProjectID)
{
    document.getElementById(ProjectID).addEventListener("mouseover", function()
    {
        //Changes Opacity of grid element and option to view mmore
        document.getElementById(ProjectID).style.opacity = 1;
    });

    document.getElementById(ProjectID).addEventListener("mouseout", function()
    {
        //Changes Opacity of grid element and option to view mmore
        document.getElementById(ProjectID).style.opacity = 0.7;
    });
}

//Project Icon Hover
// Listens for the DOM to be fully oaded
document.addEventListener("DOMContentLoaded", function()
{
    ProjectHover("ThisWebsite");
    ProjectHover("TwoAxis");
    ProjectHover("XRay");
    ProjectHover("PCBuild");
    ProjectHover("WIP2");
    ProjectHover("WIP3")
});

//Contact Button Links
// Listens for the DOM to be fully oaded
document.addEventListener("DOMContentLoaded", function() 
{
    //open up mail or gmail to autofill email contact
    document.getElementById("EmailButton").addEventListener("click", function(event)
    {
        event.preventDefault();
        // window.open('', '_blank');
    });

    //opens new tab to linkedin
    document.getElementById("LinkedInButton").addEventListener("click", function(event)
    {
        event.preventDefault();
        window.open('https://www.linkedin.com/in/yugi-chan/', '_blank');
    });

    //opens new tab to github page
    document.getElementById("GitHubButton").addEventListener("click", function(event)
    {
        event.preventDefault();
        // window.open('', '_blank');
    });

    //opens new tab to leetcode page
    document.getElementById("LeetCodeButton").addEventListener("click", function(event)
    {
        event.preventDefault();
        // window.open('', '_blank');
    });
});
