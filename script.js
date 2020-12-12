window.addEventListener("load", () => {
    let long;
    let lati;
    console.log()
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {long = position.coords.longitude; 
                                                             lati = position.coords.latitude;
                                                              console.log(long)
                                                              console.log(lati)
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+long+'&APPID=a86b5e2aad970f792882be217fa72c2c&units=metric&lang=nl').then(function (response){
        return response.json();
    }).then(function (data){
        document.getElementById("degree").innerHTML = "Temperatuur "+data.main.temp;
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("wind").innerHTML = "Windsnelheid "+data.wind.speed;
        var imageId = data.weather[0].icon;
        document.getElementById("weather-icon").src="images/"+imageId+".png";
    })
                                                              
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lati+'&lon='+long+'&APPID=a86b5e2aad970f792882be217fa72c2c&units=metric').then(function (respons){
        return respons.json();
    }).then(function (obj){
        document.getElementById("datum1").innerHTML = obj.list[4].dt_txt;
        document.getElementById("datum2").innerHTML = obj.list[5].dt_txt;
        document.getElementById("datum3").innerHTML = obj.list[6].dt_txt;
        document.getElementById("datum4").innerHTML = obj.list[7].dt_txt;
        
        document.getElementById("temp1").innerHTML = "Temperatuur "+obj.list[4].main.temp;
        document.getElementById("temp2").innerHTML = "Temperatuur "+obj.list[5].main.temp;
        document.getElementById("temp3").innerHTML = "Temperatuur "+obj.list[6].main.temp;
        document.getElementById("temp4").innerHTML = "Temperatuur "+obj.list[7].main.temp;
        
    })
                                                             
                                                             });
    }
    
        
    });
          
                        

