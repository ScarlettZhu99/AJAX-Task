
var uers=new Array(30); 
$(document).ready(function(){
	console.log("jQuery is loaded!");
	
	
	 var i=0;
		$("#showbtn").click(function() {  
		
			$.ajax({    
				url: "https://api.github.com/users",
				dataType: 'json',			
				
				success: function(data) {
					 console.log("data successfully load");
					 					 
					 var table="<table border=2  style= width:550px; alignment-adjust: central; background-color:pink>" +
					 		"<tr>" +
					 		"<th> </th>"+
					 		"<th>LOGID</th>" +
					 		"<th>Avatar</th>" +
					 		"</tr>";
					
					
					 
 
					$.each(data, function(idx) {
						uers[i]= data[idx].login;
						//console.log(uers[i]+" "+i);
						table+="<tr>" +
						        "<td>" + idx +  "</td>" + 
								"<td>" + data[idx].login +  "</td>" +
								"<td>" + "<img src=" + data[idx].avatar_url + " height=100 width=100 />"  +  "</td>" +
								
							
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
			var info="<table border=2  style= width:550px; alignment-adjust: central;background-color:pink>" +
				 		"<tr>" +
				 		"<th style= width:25%;>Follwers</th>" +
				 		"<th style= width:25%;>Following</th>" +
				 		"<th style= width:25%;>public_Repos</th>" +
				 		"<th style= width:25%;>public_gists</th>" +
				 		
				 		"</tr>";
			
			for (i = 0; i <30; i++) { 
				
				$.ajax({
					url: "https://api.github.com/users/" + uers[i]
				}).then(function(data) {
					
						console.log(data.login.toUpperCase()+"- followers:"+data.followers);
						console.log(data.login.toUpperCase()+"- public repos:"+data.public_repos);
						console.log("  ");
						var temp="<table border=2  style= width:550px; alignment-adjust: central;>" +
				 		"<tr>" +
				 		"<td style= width:25% height=100px;>"+ data.followers+ "</td>" +
				 		"<td style= width:25% height=100px;>"+ data.following+ "</td>" +
				 		"<td style= width:25% height=100px;>"+ data.public_repos+ "</td>" +
				 		"<td style= width:25% height=100px;>"+ data.public_gists+ "</td>" +
				 		"</tr>"; 
						       
						$("#side").append(temp);
	
					})
						
			}
			info+="</table>";
			$("#side").append(info);
			
		  
		})
		
		
})