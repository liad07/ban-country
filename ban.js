    //enter what country you want to block *use with big char in the first letter*
    var  country_to_block="Israel"

    $.ajax({
        url: "https://geolocation-db.com/jsonp/",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function (location) {
            if (location.country_name == country_to_block) {
                window.location.href = 'ban.html?'+country_to_block
            }
        }
    });
