// Seattle Rock Climbing Website Gym Member Registration Prompt

function register() {
    let membersName = prompt ("Member Registration: First and Last Name");

    document.write(`Welcome ${membersName}!`);
    console.log(membersName);
}


// Seattle Rock Climbing Website Gym Waiver Sumbmission Prompt

function formSubmit() {
    let waiverSubmission = prompt ("Waiver Agreement: The proper climbing and safety training has been provided to you by Seattle Climbing Gym, LLC staff. Seattle Rock Climbing, LLC is not liable for any accident or injury or harm to gym member while participating in rock climbing activities. Please say 'Yes' to confirm and submit waiver or 'No' if you don't agree ");
    console.log(waiverSubmission);
    //Prompts user of waiver agreement decision and submission
    if (waiverSubmission.toLowerCase() == "yes"){
        document.write(`Waiver Submission Completed Climb On!`);
    } else  {
        document.write(`Waiver NOT Submitted! Please see staff member for assistance or visit other Seattle Climbing Gyms`);
        } 
        return waiverSubmission;

        
}



function leaveStay(){
    let defferal = prompt ("Would you like to visit other local Seattle climbing gyms? 'No' Stays on Website 'Yes' - Leaves website to another website"); 
    console.log(defferal);
    //Auto jumps to another website or stays on current website
    if (defferal.toLowerCase() == "yes") {
        window.location.href = "https://edgeworksclimbing.com/";
    }  else {
        document.write("Please visit other local gyms!");
    }
     return defferal;
}

// let memberLog = register ();


