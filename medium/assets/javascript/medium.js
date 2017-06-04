/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    let result = "" //initializing to empty for use in if statement


    //grab a random number and return odd or even as the results of the shot
    function shoot(){
      let randomNumber = Math.floor(Math.random() * 10) + 1 ;
        if (randomNumber % 2){
          // console.log("this is an odd number");
          result="odd";
        } else {
          // console.log("this is an even number");
          result="even";
        }
    }
    // console.log("result = " + result)
    //team one shot counter
    let teamOne = $('#teamone-shoot');
    let teamOneCounter = $('#teamone-numshots');
    let teamOneGoalCounter = $('#teamone-numhits');
//var loadButton = $('#load-button');

      teamOne.click(function(){
          teamOneCounter.html(parseInt(teamOneCounter.html()) + 1) ;
        shoot(); //take a shot
        // console.log("teamOneShoots");
          if (result == "even") {
            // console.log(result)
            teamOneGoalCounter.html(parseInt(teamOneGoalCounter.html()) + 1)  ;
            //cheer.play();
          }else{
            //miss.play();
          }
        });

    //team two shot counter
    let teamTwo = $('#teamtwo-shoot');
    let teamTwoCounter = $('#teamtwo-numshots');
    let teamTwoGoalCounter = $('#teamtwo-numhits');

    teamTwo.click(function(){
        teamTwoCounter.html(parseInt(teamTwoCounter.html()) + 1);
        shoot(); //take a shot
        // console.log("teamTwoShoots");
          if (result == "even") {
            // console.log(result)
            teamTwoGoalCounter.html(parseInt(teamTwoGoalCounter.html()) + 1);
            //cheer.play();
          }else{
            //miss.play();
          }
        });
    //reset button counter and shot counter reset to zero
    let resetButton = $('#reset');
    let numResets = $('#num-resets');


    resetButton.click(function(){
      numResets.html(parseInt(numResets.html()) + 1);
      $("#teamtwo-numshots").html(0);
      $("#teamone-numshots").html(0);
      $("#teamone-numhits").html(0);
      $("#teamtwo-numhits").html(0);
    })


  })

})();
