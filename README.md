## add this script to your web
                                                                                                                            
add thisline to html code
```html
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

188 of the 365 chalenge in 2022 1 day 1 challenge

```javascript      
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
