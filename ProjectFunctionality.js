document.addEventListener("DOMContentLoaded", function() 
{
    // Listens for the "AboutMe" button click
    document.getElementById("HomeButton").addEventListener("click", function(event)
    {
        event.preventDefault();
        window.history.back();
    });
});