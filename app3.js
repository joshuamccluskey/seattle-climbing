//Defferal prompt that will automatically open another website or remain on current website

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

// let keepPush = leaveStay ();

