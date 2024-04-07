var orignalText = "I love my country pakistan. <br>I like my city faisalabad.<br>I love my homeland."

// Lower case 
function lowercase(){
    let lowertext = orignalText.toLowerCase();
    document.getElementById("output").innerHTML=lowertext
}

// Upper case
function uppercase(){
    let upperCaseText = orignalText.toUpperCase();
    document.getElementById("output").innerHTML=upperCaseText
}

// Capitalize first letter of each sentence
function capitalize(){
    let CapitalizeText = '<span style="text-transform:capitalize;">' + orignalText + '</span>';
    // document.getElementById("output").style.textTransform="capitalize"
    document.getElementById("output").innerHTML=CapitalizeText
}

// Better Formatting
function betterFormatting(){
    
    let text= document.getElementById('inputField').value;
    if(!text){
        alert("Please enter some text");
        return;
    }
    text = text.toLowerCase();
    document.getElementById("output").style.textTransform="capitalize"
    document.getElementById("output").innerHTML=text
}

// Print All Cities 

let cities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta"]
function printCities(){

    document.getElementById("output").innerHTML = "";

    for(let i = 0; i< cities.length; i++){
        let num= i+1;
        document.getElementById( "output" ).innerHTML += num+" ) "+cities[i]+"<br>";
    }
}
// Add City
function addCity(){
    if(!text){
        alert("Please enter some text");
        return;
    }

    let city = document.getElementById("inputField").value ;

    cities.push(city);

    let cityFirstLetter = city.charAt(0).toUpperCase();
    let citySecondLetter = city.slice(1).toLowerCase();

    let cityInCapitalize = cityFirstLetter + citySecondLetter;
    console.log(cityInCapitalize)
    document.getElementById("output").innerHTML = cityInCapitalize;


    let cityFound = false;
    for(let i = 0; i< cities.length; i++){
        if(cities[i]  === cityInCapitalize ){
            cityFound = true;
            let html = '<span style="color:red; font-size:20px;">' + cityInCapitalize + "</span> Is already in list.";
            document.getElementById("output").innerHTML = html;
    }
}
if( cityFound ===false){
    cities.push(cityInCapitalize)
    let html = '<span style="color:red; font-size:20px;">' + cityInCapitalize +"</span> Is Successfully added in list.";
    document.getElementById("output").innerHTML = html;
}
}



function checkCity(){
    // if(!city){
    //     alert("Please enter some text");
    //     return;
    // }

    let city = document.getElementById("inputField").value ;

    // cities.push(city);

    cityFirstLetter = city.charAt(0).toUpperCase();
    citySecondLetter = city.slice(1).toLowerCase();

    cityInCapitalize = cityFirstLetter + citySecondLetter;
    console.log(cityInCapitalize)
    document.getElementById("output").innerHTML = cityInCapitalize;


    let cityFound = false;
    for(let i = 0; i< cities.length; i++){
        if(cities[i]  === cityInCapitalize ){
            cityFound = true;
            let html = '<span style="color:red; font-size:20px;">' + cityInCapitalize + "</span> Fonud in the list.";
            document.getElementById("output").innerHTML = html;
    }
}
if( cityFound ===false){
    cities.push(cityInCapitalize)
    let html = '<span style="color:red; font-size:20px;">' + cityInCapitalize +"</span> Is not in list. <br>Click on 'Add Your City In List'";
    document.getElementById("output").innerHTML = html;
}
}

// Replacing word 
function replaceWord(){
    let newOrignalText = orignalText.toLowerCase();

    let word = document.getElementById("inputField").value;

    if(!word){
        alert("Please type a word for replacing")
        return;
    }

    let replaceWith = prompt("Enter the word you want to replace with");
    if (!replaceWith ) {
        alert('You need to write something!');
        return;
      }

      word = word.toLowerCase();

      word = new RegExp(word, 'g');

      replaceWith  = replaceWith.toLowerCase();
      let replaceWord = newOrignalText.replace(word , replaceWith);

      document.getElementById( "output" ).innerHTML= replaceWord ;
}

// Clear Button 
function clearOutput(){
    document.getElementById("output").innerHTML="";
}