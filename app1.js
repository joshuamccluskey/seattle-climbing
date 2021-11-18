// Seattle Rock Climbing Website Gym Member Registration Prompt

function register() {
    let membersName = prompt ("Member Registration: First and Last Name");

    document.write(`Welcome ${membersName}!`);
    console.log(membersName);
}

function verifyPicture(){
    let robot = prompt('Are you a robot?');
    let url = "https://image.thecrag.com/0x130:4002x1464/fit-in/1200x400/40/73/40735c4d51a5596718cb7a0df8b8022b2366e3a8";
    if(robot.toUpperCase() == "NO"){
        document.write('<img src="' + url + '">');
    } else {
        window.location.href = "https://seattleboulderingproject.com/";
    }
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


