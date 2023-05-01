let number = prompt("Please pick a number 0-10"); //Prompt the user with a number selection
if (number >= 0 && number <= 10) { //If the number is in the specified range...
    var table = number; //Store it in a variable
    var i = 1; // Set counter to 1
    var msg = '<h2>Multiplication Table</h2>';  // Message


    while (i < 11) { //While the counter is below 11...
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />'; //Add on to the message a multiplication statement
        i++; //Increment the counter to get results for quotients (1-10)
    }

    // Write the message into the page
    var el = document.getElementById('blackboard');
    el.innerHTML = msg;
}
else{ //If the number was not in range, write a fail message
    document.getElementById('blackboard').innerHTML = "You clearly don't know your numbers";
}

