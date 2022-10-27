/* Add your JavaScript to this file */
window.onload = function() {
    
    var btn = document.querySelector("button");
    var msg = document.getElementsbyClassName("message");
    
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        
        var input = document.getElementbyId("email").value;
        
        if (input != "") {
            msg[0].innerHTML = "Thank you! Your email address " + input + " has been added to our mailing list!";
        } 
        else {
            msg[0].innerHTML = "Please enter a valid email address";
        }
    });
}
