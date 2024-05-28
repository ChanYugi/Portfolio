
document.addEventListener("DOMContentLoaded", function() 
{
    var URLCompare = sessionStorage.getItem('PreviousURL');
    // Listens for the "Home" button click
    document.getElementById("HomeButton").addEventListener('click', function()
    {
        //Logic is to check if there is a history to go back to, then go back
        //as that is the minimum amount of work to return to project position.
        
        if(URLCompare && URLCompare.endsWith('Index.html'))
        {
            window.history.back();
        }

        //If someone were to find the page directly, they will be directed to
        //the top of the page instead
        else
        {
            window.location.href = 'Index.html';
        }
    });
});

