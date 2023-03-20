let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge
// Student Grade generator
let marks = parseInt(prompt("Enter student marks (between 0 and 100):"));

if (isNaN(marks) || marks < 0 || marks > 100) {
  finalOutput = "Invalid input. Please enter a number between 0 and 100.";
} else if (marks >= 80) {
  finalOutput = "A";
} else if (marks >= 60) {
  finalOutput = "B";
} else if (marks >= 50) {
  finalOutput = "C";
} else if (marks >= 40) {
  finalOutput = "D";
} else {
  finalOutput = "E";
}

document.getElementById('marks-id').textContent = finalOutput;
// The textContent has been used to set the text content of the element.






})



speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge
// calculates the speed of the car. 
let speed = prompt("Enter the speed of the car:");
let message;

if (speed <= 70) {
  message = "Ok";
} else {
  let demeritPoints = Math.floor((speed - 70) / 5);
  message = "Points: " + demeritPoints;

  if (demeritPoints > 12) {
    message += " License suspended";
  }
}

finalOutput = "Speed: " + speed + " " + message;

document.getElementById('speed-id').textContent = finalOutput;


})




salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge

// calculate payee (tax)
function calcPAYE (amount){
let tax
  if (amount <= 24000) {
       tax = amount * 0.1 ;
    }
      else if  (amount> 24000 && amount <= 32333)
      { tax = amount * 0.25;

    }
      else {
           tax = amount  * 0.3;
       }
return tax
    }
console.log(calcPAYE(20000));



// calculates NHIF  from a gross salary
function calcNhif(amount){
    let nhif
    if (amount <= 5999){
        nhif = 150;
    }
    else if (amount >=6000 &&  amount <=7999){
        nhif = 300;
    }
   else if (amount >=8000 && amount <=11999){
        nhif =400;
    }
 
    else if (amount>=12000 && amount <=14999 ){
        nhif =500;
    }
   else  if (amount >=15000 && amount<=19999){
        nhif = 600;
    } 
  else if(amount >=20000 && amount<=24999){
        nhif = 750;
    }
    else if (amount >= 25000 && amount <=29999){
        nhif = 850;
    }
    else if (amount >=30000 && amount <=34999){
        nhif = 900;
    }
    else if(amount >=35000 && amount<=39999){
        nhif =950;
    }
    else if (amount>= 40000 && amount <=44999){
        nhif = 1000;
    }
   else  if (amount >=45000 && amount<=49999){
        nhif = 1100;
    }
   else  if (amount >=50000 && amount <=59999){
        nhif=1200;
   }
   else  if (amount>=60000 &&amount <=69999){
        nhif = 1300;
    }
   else if (amount>=70000 && amount <=79999){
        nhif =1400;
    }
   else  if (amount >=80000 && amount <=89999){
        nhif = 1500;
    }
   else  if (amount >=90000 && amount<=99999){
        nhif = 1600;
    }
    else {
        nhif = 1700;
    }
    return (nhif)
 
    }
    console.log(calcNhif(5000));
   
   

// calculate NSSF deductions
function calcNSSF(amount) {
    let nssfRate = 0.06;
    let nssfDeductions = amount * nssfRate;
    return nssfDeductions;
  }
  

// calculate net salary
function netSalary(amount){
    return (amount - calcPAYE(amount) - calcNhif(amount) - calcNSSF(amount));
 }

 
finalOutput =netSalary(inputSalary)
document.getElementById('salary-id').append(finalOutput)
    





})