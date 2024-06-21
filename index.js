let url = "http://api.weatherapi.com/v1/current.json?key=951e76addd474a0387953554241306&q="

let btn = document.querySelector('button');
btn.addEventListener("click",async()=>{
    let country = document.querySelector('input').value;
    
    
    let res = await api(country);
   
    
    let temp = res.data.current.temp_c;
     let name = res.data.location.name;
     
    let region = res.data.location.region;
    let countrys = res.data.location.country;
    let locattime = res.data.location.localtime;
    let windkph = res.data.current.wind_mph;
    let pressure = res.data.current.pressure_mb;
    let hummidity = res.data.current.humidity;
    document.querySelector('#temps').innerHTML = temp + "'c";
    document.querySelector('#city').innerHTML = 
    document.querySelector('#humi').innerHTML ="humidity = " + hummidity + "%";
    document.querySelector('#wind').innerHTML = "wind spead =" + windkph + "km/h";
    document.querySelector('#regn').innerHTML = "region = " + region;
    document.querySelector('#time').innerHTML = "time  = " + locattime;
    document.querySelector('#perss').innerHTML = "pressure = " + pressure +" mm/hg";
    document.querySelector('#country').innerHTML = "country = "+ countrys;
    let img = document.querySelector('img');
    if(temp>=2&& temp<5 ){
        img.src = "clear.png"
    }
    else if(temp>=5&& temp<8){
        img.src = "wind.png";
    }
    else if(temp>=8&&temp<9){
        img.src = "clouds.png"
    }
    else if(temp>=9&& temp<10){
        img.src = "rain.png"
    }
    else if(temp>=10 && temp<12){
        img.src = "snow.png";
    }
   else if(temp>=10&& temp<40){
    img.src = "mist.png"
   }
   else{
    img.src = "drizzle.png"
   }
    country = " ";
    
})



async function api(country){
    try{
        let resposne = await axios.get(url + country);
         return resposne;
       
    }
    catch(error){
        alert('enter valid contry name');
    }
    
}

