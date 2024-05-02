function addstyle(){

let dg = document.getElementById("pera");
dg.classList.add("pera-style");

}

function removestyle(){
    let dg = document.getElementById("pera");
    dg.classList.remove("pera-style");
}


//Img slide start here
let photos = ["Img/img6.jpg", "Img/img1.jpg", "Img/img7.jpg"];
let imgTag = document.querySelector("#img");
let count = 0;
document.write(photos);


function next(){
    count++;

    if(count>=photos.length){
        count = 0;
        imgTag .src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}

function prev(){
    count--;

    if(count<0){
        count = photos.length -1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}


// js practice code start here

// function start here

function square(Num1, Num2){
    let result = Num1* Num2;
    return result;
}


var x = square(5, 6);
document.write(x +"<br>");


function gun(a, b){
    let result=a*b;
    document.write(result +"<br>");
}


gun(5,4)


function sumation(x, y){
    let result =17+ 28;
    document.write(result +"<br>");
}

sumation()


function subtraction(x, y){
    let result =27 - 18;
    document.write(result +"<br>");
}



function addition(x, y){
    let result =15 + 23;
    document.write(result);
}



subtraction()
sumation()
addition()


//  tarnary oparator start here

// let number = prompt("Enter your number");
// let result = number>0 ? "positive" : number>0 ? "nagative" : "Zero" ;
// console.log(result);



// let number2 =prompt("enter your number");
// let result2 = number2 >5 ? "poditive" : number2<5 ? "nagetive" : " Five";
// console.log(result2);



// switch start here

// let number3 = prompt("Enter a letter");
//   switch(number3){
//     case "a":
//         console.log('vowel');
//     break;

//     case "e":
//         console.log('vowel');
//     break;

//     case "i":
//         console.log('vowel');
//     break; 

//     case "o":
//         console.log('vowel');
//     break;

//     case "u":
//         console.log('vowel');
//     break;
    
//     default :
//     console.log('consonant');
//   }



// Array start here

function hseighestscore(score){
    console.log(score);
}


let score = [30, 45, 50, 52];
hseighestscore(score)




// Loginform code start here
let userName = document.getElementById("user-name");

let userPassword = document.getElementById("user-pass");

function validForm(){
    if(userName.value==""){
        document.getElementById("nameError").innerHTML="Invalid user name";
        flag = 0;
    }

    else{
        document.getElementById("nameError").innerHTML="";
        flag = 1;
    }

    if(userPassword.value==""){
        document.getElementById("passError").innerHTML="Invalid user password";
        flag = 0;
    }

    else{
        document.getElementById("passError").innerHTML="";
        flag = 1;
    }


    if(falg){
        return true;
    }
    else{
        return false;
    }
}
//  login form code end here


// DOM= Data object model code start here
let gt = document.getElementById("mydiv");
    gt.style.color ="red";
    gt.style.fontSize ="2rem";
    gt.style.backgroundColor ="green";
    gt.style.textAlign ="center";
    gt.classList.add("newDiv")
    
    
    
// clickButton.innerHTML="This is a button";
// console.log(clickButton);

// console.log(message);

//clock code start here
setInterval(() => {
    date = new Date();
let hours = date.getHours();
let message1 = document.getElementById("hours");
message1.textContent= hours;


let minites = date.getMinutes();
let message2 = document.getElementById("minites");
message2.textContent= minites;

let seconds = date.getSeconds();
let message3 = document.getElementById("seconds");
message3.textContent= seconds;
}, 1000);

// function startClock(){
//     let date = document.getElementsByTagName("button");
//     date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let time = hours + ":" + minutes + ":" + seconds;
//     console.log(time);
    
//     let message = document.getElementById("my-para");
//     message.textContent = time;
//     setInterval(startClock, 1000);
//     message.classList.add("addStyle");
// }

// test code start here
function newFuntion(){
    let myVariable=document.getElementById("heading2");
    myVariable.textContent="This is a heading";
    myVariable.style.cssText="color: green; padding: 20px; text-decoration:underline;"
    console.log(myVariable);
}


let me= prompt('enter a number');