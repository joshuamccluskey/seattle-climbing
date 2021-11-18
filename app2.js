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

// let approvedSubmission = formSubmit ();


