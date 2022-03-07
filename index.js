//question1
const targetDiv = document.getElementById('answer1');
const btn = document.getElementById('question1');
btn.onclick = function () {
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none";
        // alert("question1");
    }
    else{
        targetDiv.style.display = "block";
    }
}
//question2
const question2 = document.getElementById('answer2');
const question2btn = document.getElementById('question2');
question2btn.onclick = function () {
    if(question2.style.display !== "none"){
        question2.style.display = "none";
        // alert("question2");
    }
    else{
        question2.style.display = "block";
    }
}
//question3
const question3 = document.getElementById('answer3');
const question3btn = document.getElementById('question3');
question3btn.onclick = function () {
    if(question3.style.display !== "none"){
        question3.style.display = "none";
        // alert("question2");
    }
    else{
        question3.style.display = "block";
    }
}
//question4
const question4 = document.getElementById('answer4');
const question4btn = document.getElementById('question4');
question4btn.onclick = function () {
    if(question4.style.display !== "none"){
        question4.style.display = "none";
        // alert("question2");
    }
    else{
        question4.style.display = "block";
    }
}
//question5
const question5 = document.getElementById('answer5');
const question5btn = document.getElementById('question5');
question5btn.onclick = function () {
    if(question5.style.display !== "none"){
        question5.style.display = "none";
        // alert("question5");
    }
    else{
        question5.style.display = "block";
    }
}
//question4
const question6 = document.getElementById('answer6');
const question6btn = document.getElementById('question6');
question6btn.onclick = function () {
    if(question6.style.display !== "none"){
        question6.style.display = "none";
        // alert("question2");
    }
    else{
        question6.style.display = "block";
    }
}


setTimeout(
    function test() {
        document.getElementById('coupon').style.visibility="visible"
},3200);

// function test(){
//     document.getElementById('coupon').style.visibility="visible"
// }

function closeDiv(){
    document.getElementById('coupon').style.visibility="hidden"
}



window.onload = geolocation()
   var x = document.getElementById("out")
   var y = document.getElementById("address")
   var z =  document.getElementById('icon')
   function geolocation(){
       if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition(showPosition)
       }
       else{
           x.innerText="Geo Not Supported"
       }
   }

   function showPosition(data){
       console.log(data)
       // x.innerText=`Latitude is ${data.coords.latitude}, longitude is ${data.coords.longitude}`
       let lat = data.coords.latitude;
       let long = data.coords.longitude;
       var url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=2&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
       /*var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.coords.latitude},${data.coords.longitude}&key=`;
       */  
       fetch(url)
       .then((res) => res.json())
       .then((data) => {
           console.log(data)                 
           data.list.map((item) => {
               console.log(item.temp.day)
               y.innerText=`${item.temp.day}°C | ${item.weather[0].description}`
               z.innerHTML=`<img class='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
           })
           
       })
   }

   window.onload=test()