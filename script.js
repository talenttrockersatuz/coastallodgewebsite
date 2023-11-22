

document.addEventListener('DOMContentLoaded',function(){
    var modal=document.getElementById("myModal");
    var button=document.getElementById('bookNowButton');

    var close=document.getElementsByClassName("close")[0];
    //open the modal when the "Book Now" button is clicked
    button.addEventListener("click",function(){
        document.getElementById("myModal").style.display = "block"
    });

    //close the modal when the close button(x) is clicked
   
    close.addEventListener("click",function(){
        modal.style.display="none";
    });
    //close the modal when the user clicks outside of it 

    window.addEventListener("click",function(event){
        if(event.target==modal){
            modal.style.display='none';
        }
    });

    //handle form submission
    var form=document.getElementById("reservationForm");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        //prevent form submission (for demonsration purposes)
        //displaying an alert with the entered data
        var name=document.getElementById("name").Value;  
        var email=document.getElementById("email").Value;
        var checkIn=document.getElementById("checkIn").Value;
        var checkOut=document.getElementById("checkOut").value;
        
        //perform form validation
        var nameInput=document.getElementById("name");
        var emailInput=document.getElementById("email");
        var checkInput=document.getElementById("checkIn");
        var CheckOutInput=document.getElementById("checkOut");
        var isValid= true;
        //validate name field
        if(nameInput.value.trim()===''){
            isValid=false;
            nameInput.classList.add("error");
        }else{
            nameInput.classList.remove("error");
        }
        //validate email field
        if(emailInput.value.trim()===""){
            isValid=false;
            emailInput.classList.add("error");
        }else{
            emailInput.classList.remove("error");
        }

        //validating check in and checkout dates
        var checkInDate=new Date(checkInput.value);
        var checkOutDate=new Date(CheckOutInput.value);

        if(checkInDate>checkOutDate||isNaN(checkInDate)||isNaN(checkOutDate)){
            isValid=false;
            checkInput.classList.add("error");
            CheckOutInput.classList.add("error");
        }else{
            checkInput.classList.remove("error");
            CheckOutInput.classList.remove("error");
        }
        //display error messageif form is invalid
        var errorContainer=document.getElementById('errorContainer');
        if(!isValid){
            errorContainer.textContent='Please enter valid information';
            errorContainer.style.display='block';
        }else{
            //process reservation if form is valid
            var name=nameInput.value;
            var email=emailInput.value;
            var checkIn=checkInput.value;
            var checkOut=CheckOutInput.value;
        
    
        alert('Reservation Details:\n\nName:'+name+'\nEmail:'+email+'\nCheck-in:'+checkIn+'\nCheck-out:'+checkOut);
        //reset the form
        form.reset();
        modal.style.display='none';
        errorContainer.style.display='none';}


    });



    
}
);   


