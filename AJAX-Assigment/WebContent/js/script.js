$(document).ready(function(){
	console.log("jQuery is loaded!");
	
	var uers=new Array(30); 
	 var i=0;
		$("#showbtn").click(function() {  
		
			$.ajax({    
				url: "https://api.github.com/users",
				dataType: 'json',			
				
				success: function(data) {
					 console.log("data successfully load");
					 					 
					 var table="<table border=2  style= width:550px; alignment-adjust: central;>" +
					 		"<tr>" +
					 		"<th> </th>"+
					 		"<th>LOGID</th>" +
					 		"<th>Avatar</th>" +
					 		/*"<th>Follwers</th>" +
					 		"<th>public_Repos</th>" +*/
					 		"</tr>";
					
					
					 
 
					$.each(data, function(idx) {
						uers[i]= data[idx].login;
						console.log(uers[i]+" "+i);
						table+="<tr>" +
						        "<td>" + idx +  "</td>" + 
								"<td>" + data[idx].login +  "</td>" +
								"<td>" + "<img src=" + data[idx].avatar_url + " height=100 width=100 />"  +  "</td>" +
								/*"<td id=" + idx + ">" + ""  +"</td>" +*/
							
								"</tr>"; 	
						i++;
					})
					
					i=0;
					table +="</table>"
					$("#content").append(table);
														/*var divTag = document.getElementById("content");
													    divTag.innerHTML = "<img src=" + "https://avatars0.githubusercontent.com/u/1?v=4" 
													    + " height=" +100+ " width=" +100+ "  />" ;*/
				},
				
				error: function(req, status, err) {
					console.log("Error in API: " + err);
				}	
			})			
		})
		
		
		$("#detail").click(function(){
			/*var info="<table border=2  style= width:550px; alignment-adjust: central;>" +
				 		"<tr>" +
				 		"<th>Follwers</th>" +
				 		"<th>public_Repos</th>" +
				 		"</tr>";*/
			
			for (i = 0; i <30; i++) { 
				
				$.ajax({
					url: "https://api.github.com/users/" + uers[i],
					dataType: 'json',
					success: function(data) {
						console.log(uers[i]+" followers:"+data.followers);
						console.log(uers[i]+" public repos:"+data.public_repos);
						/*info+= "<tr>" +
							   "<td>" + data.followers +  "</td>" +
							   "<td>" + data.public_repos +  "</td>" +
								"</tr>" ;*/
					
					},
					
					error: function(req, status, err) {
						console.log("Error in API: " + err);
					}
						
				})
			}
			/*info+="</table>";
			$("#side").append(info);*/
			
		  
		})
		
		
})