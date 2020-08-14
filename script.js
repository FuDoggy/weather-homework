$("#find-city").on("click", function (event) {
    event.preventDefault();
    $("#fivedayforecast").empty()
    var cityName = $("#cityName").val()
    var latLongUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cityName + "&key=AIzaSyCLjaOmTbNl8M0ewJ5amY9cm6rytBGUVZM"
    $.ajax({
        url: latLongUrl,
        method: "GET"
    }).then(function (response) {
        var latitude = response.results[0].geometry.location.lat
        var longitude = response.results[0].geometry.location.lng
        var weatherUrl =
            "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=927924e4c73455c7286d71a6b1b45a4c"
        $.ajax({
            url: weatherUrl,
            method: "GET"
        }).then(function (weatherResponseWithLatAndLong) {
            console.log(weatherResponseWithLatAndLong)
            console.log(weatherResponseWithLatAndLong.daily[0].uvi)
            console.log(weatherResponseWithLatAndLong.daily[0].humidity)
            console.log(weatherResponseWithLatAndLong.daily[0].wind_speed)
            console.log(weatherResponseWithLatAndLong.daily[0].temp.day)
            
})
















