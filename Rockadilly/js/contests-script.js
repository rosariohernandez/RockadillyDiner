window.onload = function() {
    
    //get html elements
    var scoreOut = document.getElementById("score");
    var die = document.getElementById("die");
    //initialize variables
    var score = 0;
    var clicks = 0;

    document.getElementById("btn").addEventListener('click', function(){
        //to rig game
        clicks++; //increment each time they click the button
        var rand = Math.floor(Math.random() * 10) + 1;

        //for die roll
        var dieValue = Math.floor(Math.random() * 6) + 1;

        //if they rolled anything but a 1
        if(dieValue !== 1) {
            //if after a random number of clicks between 1 and 10 or if score is greater than or equal to 43 then rig the game by setting dieValue to 1
            //43 because any higher and a roll of 6 will result in 50 or more
            if (clicks === rand || score >= 43) {
                dieValue = 1;

                die.innerHTML = dieValue;

                //reset
                score = 0;
                clicks = 0;

                scoreOut.innerHTML = score;
            }
            //else just add the score normally
            else {
                die.innerHTML = dieValue;

                //add dievalue to score
                score += dieValue;

                scoreOut.innerHTML = score;
            }
        }
        //if they rolled a 1
        else {
            die.innerHTML = dieValue;

            //reset
            score = 0;
            clicks = 0;

            scoreOut.innerHTML = score;
        }
    });
}