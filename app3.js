let defferal = prompt ("Would you like to visit other local Seattle climbing gyms? 'No' Stays on Website 'Yes' - Leaves website to another website"); 

if (defferal.toLowerCase() == "yes") {
    window.location.href = "https://edgeworksclimbing.com/";
}  else {
    document.write("Please visit other local gyms!");
}