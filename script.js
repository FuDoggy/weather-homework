var city = document.querySelector("#focusedInput");
        

        $(".btn").on("click", function() {
            city = $ ("#focusedInput").val();
            console.log(city)
        })