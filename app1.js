// Seattle Rock Climbing Website Gym Member Registration Prompt


var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



function register() {
    let membersName = prompt ("Member Registration: First and Last Name");
    document.write(`Welcome ${membersName}!`);
    console.log(membersName);
}



// Seattle Rock Climbing Website Gym Waiver Sumbmission Prompt

function formSubmit() {
    let waiverSubmission = prompt ("Waiver Agreement: \nThe proper climbing and safety training has been provided to you by Seattle Climbing Gym, LLC staff. Seattle Rock Climbing, LLC is not liable for any accident or injury or harm to gym member while participating in rock climbing activities. Please say 'Yes' to confirm and submit waiver or 'No' if you don't agree ");
    console.log(waiverSubmission);
    //Prompts user of waiver agreement decision and submission
    if (waiverSubmission.toLowerCase() == "yes"){
        document.write(`Waiver Submission Completed Climb On!`);
    } else  {
        document.write(`Waiver NOT Submitted! Please see staff member for assistance`);
        } 
        return waiverSubmission;
    }


function leaveStay(){
    let defferal = prompt ("Would you like to finalize your membership? yes/no");
    console.log(defferal);
    //Auto jumps to another website or stays on current website
    if (defferal.toLowerCase() == "no") {
        window.location.href = "https://edgeworksclimbing.com/";
    }  else {
        document.write("Membership finalized Climb On!");
    }
     return defferal;
}

// let memberLog = register ();


