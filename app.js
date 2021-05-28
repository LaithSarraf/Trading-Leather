



var userName = prompt("Whats your name ?");
alert("welcome to our websit " + userName )


var favboxer = prompt("Who is your fav boxer  ?");
// console.log(userAge);

if(favboxer === "Muhammed ali" ){
  // console.log("what do you work ?");
  document.write('<img src="https://www.sikids.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4Mjg2OTk2MzkwMDk0MTAx/muhammad-ali-death-obituaryjpg.jpg" width="250px" alt="AOT"/>')
}else if(favboxer === "Iron Mike Tyson"){
  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UoIlAahhwXOx_Y8IV5Tev9awdY-Cilasgg&usqp=CAU" width="250px" alt="AOT"/>')
}else{
  alert('please next time answer either Iron Mike Tyson or Muhammed ali ')
}


