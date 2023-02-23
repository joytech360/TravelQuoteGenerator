let nameInput = document.getElementById('name');
let numInput = document.getElementById('lucky-num');
let selectedCategory = document.querySelector('input[name="category"]:checked');



// function validateInputs(){
//     if(nameInput.value == ""){
//         alert('Please enter your name');
        
//     }

//     if(numInput.value < 0 || numInput.value > 100 || numInput.value == ""){
//         alert('Please enter your lucky number');
        
//     }

// }

function displayQuote(){

        // let getButton = document.getElementById('generate');
    
        if (nameInput.value == "") {
          alert('Please enter your name');
          return; // stop the function if name is not entered
        }
      
        if (numInput.value < 0 || numInput.value > 100 || numInput.value == "") {
          alert('Please enter your lucky number');
          return; // stop the function if the number is not entered or out of range
        }
      
        let userName = nameInput.value;
        let userNum = numInput.value;
      
        // Redirect to a different page
        document.getElementById('form-wrapper').style.display = "none";
        document.getElementById('display-quote').style.display = "block";
      
    }
      
    
    

