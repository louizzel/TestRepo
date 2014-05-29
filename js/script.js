$(document).on("pagecreate","#Home",function(){
	if(!navigator.onLine){
		alert('You are not online! Make sure you are connected to the internet.');
		window.close();
	} else {
		console.log('You are online!');
		$.get("https://dl.dropboxusercontent.com/u/79930434/today.txt", function (data) {
	        var dataList = data.split('\n');
	        var employeeListIn = [['Jen','',''], ['Liza','',''], ['Ellen','',''], ['Carlo','',''], ['Reizel','',''], ['Ghe','','']];	        
	        // var employeeListOut = [['Jen',''], ['Liza',''], ['Ellen',''], ['Carlo',''], ['Reizel',''], ['Ghe','']];
	        if(dataList[0] != undefined){
	    		if($.trim(dataList[0]) != ''){
	    			if($.trim(dataList[0]) == "Date Today: " + (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear())
	    			{
	    				for(var dataCtr = 1 ; dataCtr < dataList.length ; dataCtr++) //each data from text file
				        {
				        	var eachEntry = dataList[dataCtr].split(' ');
				        	for(var ctr = 0; ctr < employeeListIn.length ; ctr++) //each employee in the list
				        	{
				        		if(employeeListIn[ctr][0] == eachEntry[0])
				        			if(eachEntry[1] == 'In'){
				        				employeeListIn[ctr][1] = eachEntry[2];
				        				$('#in').append('<li><a href="#">' + employeeListIn[ctr][0] + ' - ' + employeeListIn[ctr][1] + '</li>');
				        			}
				        			else if(eachEntry[1] == 'Out'){
				        				employeeListIn[ctr][2] = eachEntry[2];
				        				$('#out').append('<li><a href="#">' + employeeListIn[ctr][0] + ' - ' + employeeListIn[ctr][2] + '</li>');
				        			}
				        	}
				        }

				        for(var ctr = 0; ctr < employeeListIn.length ; ctr++)
			        	{
			        		if(employeeListIn[ctr][1] == '' && employeeListIn[ctr][2] == '')
			        			$('#absent').append('<li><a href="#">' + employeeListIn[ctr][0] + '</li>');
			        	}
	    			}
	    		}
	    	}	    	
    	});
	}
});