let a = Math. floor(Math. random()*100) + 1
let store = a;
let value;
let attempts = 0;
alert("---🎮 RANDOM NUMBER GUESS CHALLENGE 🎮---\n")
do{
   let value = prompt("\nEnter value - ")
    value = Number.parseInt(value);
    attempts++;
    
    if(value<store){
        console.log("Too Low... 👇");
    }
   else if(value>store){
        console.log("Too High... 👆")
    }
    else{
      if(value==store){
        console.log("CORRECT GUESS 👏");
        console.log("Number of Attempts:", attempts)
      }
      break;
    }
    }
    while(attempts < 8);
    console.log("Random Number is",a);

