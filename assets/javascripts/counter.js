(function(){
//self invoking function, same as window onload. waits for page to be fully loaded
  $ (function(){
//put all code here *********************************
/*
best practice is to pull all the element into variables to avoid searching the DOM for these elements more than once
*/
      var incrementButton = $("#increment");
      var decrementButton = $("#decrement");
      var counter         = $("#counter");
//event listener for click button. use the console.log function to display some text in the consle when the button is clicked
//calculate the new value for our counter
        incrementButton.click(function(){
          console.log("+ button clicked");
//calculate the new value for our counter
          var newCounterValue = parseInt(counter.html()) + 1;
//if the counter is >= 10 then change the text color to red
          if(newCounterValue >= 10){
            decrementButton.css({color: "red"});
          }
//update the counter in the DOM
          counter.html(newCounterValue);
        })
        decrementButton.click(function(){
            console.log("- button clicked");
//calculate the new value for our counter
            var newCounterValue = parseInt(counter.html()) - 1;
//if the counter drops below 10, change the text color to black
            if(newCounterValue < 10){
              counter.css({color: "black"});
            }
//only update the counter value on the screen if the counter is > 0
            if(counter.html() > 0){
               counter.html(newCounterValue);
            }
          })
//put all code here ^^^^^^^*********************************
  })
})();
