$(document).ready( ()=>{
  
    // click event for the submit button
    $("#myForm").submit(event => {
        let isValid = true;
   
        // get the email field value 
        const email = $("#email").val().trim();
       
        // validating email input field
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

        if(!emailPattern.test(email)){
            $("#email").next().text(" Enter a valid email address ");
            isValid = false;

        }
        else{
            $("#email").next().text("");
        }
        
        // prevent the form from submission 
        if (isValid == false){
            event.preventDefault()
            
        } 
    
    })
})