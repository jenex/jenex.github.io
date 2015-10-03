

$(function() {
    var req="https://api.vk.com/method/wall.get?owner_id=-43879004&v=5.37";
    $.ajax({
    	url: req,
    	type: "GET",
    	dataType:"jsonp",
    	crossDomain: true,
    	success: function(data){
     	var jsonResponse = data.response;
     	console.log(data.response);		
	        //getJSON
        $.each(jsonResponse, function (index, value) {
        console.log(value);
           $.each(value, function (key, value) {
        console.log(value.text);
        console.log(value.attachments);
        var photos = value.attachments;
        $.each(photos, function (key, value) {
            console.log(value.photo.photo_604);
        });

    });

    });
}
	 });
}); //function

