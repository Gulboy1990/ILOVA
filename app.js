function calculateBmi() {
    const name = document.getElementById("name");
    const weightVal = document.getElementById("weight");
    const heightVal = document.getElementById("height");
    const result = document.querySelector("#result");

    const weight = parseFloat(weightVal.value);
    const height = parseFloat(heightVal.value);

    let bmi = (weight / (height * height)).toFixed(2);

    result.innerHTML = ` ${name.value} 's BMI is ${bmi} `;
    
}

















//function calculateBmi(a, b) {
//    console.log(a+b);
//}

//functioin calculateBmi(name, weight, height) {
 //   let bmi = weight / (height * height);
  //  console.log(name + "'s BMI is " + bmi);
//}

//calculateBmi("Usmon", 80, 1.8);
//calculateBmi("Bilool", 70, 1.6);
//calculateBmi("Uman", 90, 1.8);


















// Dom = document object model

//const p = document.getElementById("p1");
//const button = document.querySelector("#click");
//const input = document.querySelector(".myinput");

//console.log(input.value);
//console.log(p.textContent);
//p.innerHTML = "<span class='something'>Gulboy Norboyev</span>"
//p.textContent = "this is just a text";
//p.className = "new-class";
//console.log(p);
//console.log(button);
//console.log(input)