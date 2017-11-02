function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
	                
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}		
ajax_get('http://localhost:8888/event-app/events.json', function(data) {
    var i = 0;
	var html = "";
	while (data[i]) {
		html += "<div class=\"event\">";
	    html += "<h2>" + data[i].title + "</h2>";
		html += "<strong>Session: </strong>" + data[i].session + "<br>";
		html += "<strong>Room: </strong>" + data[i].room + "<br>";
		html += "<strong>Floor: </strong><span class=\"floorValue\">" + data[i].floor + "</span><br>";
		html += "<strong>Organizer: </strong><span class=\"name\">" + data[i].organizer.name + "</span> &mdash; <a href=\"mailto:" + data[i].organizer.email + "\">" + data[i].organizer.email + "</a> (" + data[i].organizer.location + ")" + "<br>";
		html += "<strong>Abstract: </strong>" + data[i].abstract;
		html += "</div>";
	    i++;
	    document.getElementById("eventContainer").innerHTML = html;
	}		

    var filter = document.getElementById('floorFilter');
    var submit = '#filterSubmit';
    //var filterV = filter.value;
    var floor = document.getElementsByClassName('floorValue');
    
    var event = '.event';

    $(submit).on('click', function(){
    	var filterV = filter.value;
    	console.log(filterV);  

    		floorV = data[i].floor;
    		console.log('another: ' + floorV)
    	for (i in data) {
    		// floorV = String(floorV).valueOf();
    		// fiterV = String(filterV).valueOf();
    		
    		var x;
    		for (x in event) {
    			//console.log(floorV);

	    		if (floorV == filterV) {
	    			console.log('checking all values each time through');
	    			$(event).addClass('displayNone');
	    		}
    		}
    	}
    })
})