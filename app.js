



var userName = prompt("Whats your name ?");

alert("welcome to our websit " + userName);


function boxers() {

  // }
  var favboxer = prompt("Who is your fav boxer  ?");
  console.log(favboxer);



  if (favboxer === "Muhammed Ali") {
    // console.log("what do you work ?");
    document.write('<img src="https://www.sikids.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4Mjg2OTk2MzkwMDk0MTAx/muhammad-ali-death-obituaryjpg.jpg" width="250px"/>')


  } else if (favboxer === "Iron Mike Tyson") {
    document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UoIlAahhwXOx_Y8IV5Tev9awdY-Cilasgg&usqp=CAU" width="250px"/>')
  } else {
    alert('please next time answer either Iron Mike Tyson or Muhammed ali ')
  }

}

boxers();


// var favWeightDivision = ['Feather Weight', 'Leight Weight', 'Welter Weight', 'Middle Weight', 'Super Middle Weight', 'Light Heavy Weight', 'Heavy Weight'];

// var favDiv = prompt('What is your Favorite Weight Division?')


// if (favDiv !== 'Feather Weight' && favDiv !== 'Leight Weight' && favDiv !== 'Welter Weight' && favDiv !==  'Middle Weight' && favDiv !==  'Super Middle Weight' && 'Light Heavy Weight' && favDiv !== 'Heavy Weight') {
//   console.log(favWeightDivision)

// } else {
//   prompt('Choose the Correct weight division from:Feather Weight, Leight Weight, Welter Weight, Middle Weight, Super Middle Weight, Light Heavy Weight, Heavy Weight')
//   for (var i = 0; i < studentsName.length; i++)
// }



// for(var i = 0; i =< weightDivision.length; i++) {(weightDivision)[i]) if(weightDivision)[i] == 'Feather Weight', 'Leight Weight', 'Welter Weight', 'Middle Weight', 'Super Middle Weight', 'Light Heavy Weight' ;}



var userAge = prompt('Please Enter Your Age')
while (userAge < 18) {
  userAge = prompt('Please Enter the Website if you are above 18')
}

alert('Welcome Boxing Fan!')
var r = confirm('Do you want to rate Trading Leather?')
if (r == true) {
  var userRating = prompt('Please Rate Trading Leather from 1-5')

}



  for (var i = 0; i < userRating && i < 5; i++) {
    document.write('<img id=glove icon src="https://thumbs.dreamstime.com/b/boxing-gloves-vector-drawing-two-new-gauntlet-mitts-set-isolated-white-wall-backdrop-freehand-outline-black-ink-drawn-picture-87580008.jpg" width="50px"/>')
    document.write(i + 1)
  
    
// else{
//   alert('Does not seem like you are enjoying our Website')
// }

  }
  //  else{
  //     alert('Does not seem like you enjoy our boxing news:')

   

// function greet(name, lastName) {
//   console.log('greet is , lastName, name);
  
