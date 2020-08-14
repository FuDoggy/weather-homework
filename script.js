$("#find-city").on("click", function (event) {
    event.preventDefault();
    $("#fivedayforecast").empty()
    var cityName = $("#cityName").val()
    var geoURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cityName + "&key=AIzaSyCLjaOmTbNl8M0ewJ5amY9cm6rytBGUVZM"
    
    //AJAX call/promise for Open Weather API and Google Maps API
    $.ajax({
        url: geoURL,
        method: "GET"
    }).then(function (response) {
        var latitude = response.results[0].geometry.location.lat
        var longitude = response.results[0].geometry.location.lng
        var weatherURL =
            "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=927924e4c73455c7286d71a6b1b45a4c"
        $.ajax({
            url: weatherURL,
            method: "GET"
        }).then(function (weatherResponseWithLatAndLong) {
            
            //converting Unix date to standard date     
            var unixTime = weatherResponseWithLatAndLong.daily[0].dt;
                var timeInMilliSeconds = unixTime * 1000;
                var date = new Date(timeInMilliSeconds);
            
                //converting date display to DD/MM/YYYY for current date
                var day = (date.getDate() < 10 ? '0' : '') + date.getDate();
                var month = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
                var year = date.getFullYear();
                    
            var temp = weatherResponseWithLatAndLong.daily[0].temp.day
            
            //converting Kelvin to Fahrenheit for current day temp
            temp = (((temp -273) * 9/5) + 32).toFixed(2)

            //display temp stats with text so contents can be emptied
            $("#city-date").text(month + "/" + day + "/" + year)
            $("#city-temperature").text("Temperature: " + temp + " F")
            $("#city-humidity").text("Humidity: " + weatherResponseWithLatAndLong.daily[0].humidity + "%")
            $("#city-windspeed").text("Wind Speed: " + weatherResponseWithLatAndLong.daily[0].wind_speed + " MPH")
            $("#city-uvindex").text("UV Index: " + weatherResponseWithLatAndLong.daily[0].uvi)
            
            
        })
    })
})
















