var data;  // create a globel var of data
$(document).ready(()=>{
	$.getJSON('http://localhost:3000/user-profiles', (data2)=>{
		data = data2;  // get the data getJSON from filr user-profile
		for(var i in data2){
			$("#users").append(`<span> ${data2[i].name} </span> <br>`) 
	    }// put the data on <span>  called .users we created on    //user-profiles.html
	})
})

	$("span").on('click', (e)=>{

		let theName = $(e.target).text();
		console.log(theName);
					for(let i in data){

						if(theName.trim() === data[i].name){
                    $("#name").val(theName)
                    $("#city").val(data[i].city)
                    $("#state").val(data[i].state)
                    $("#zip").val(data[i].zip)
					$("#username").val(data[i].username)
					console.log(data[i].gender == "male")  //checking the gender
					console.log(data[i].gender)
					if(data[i].gender === "female"){
						$("#female").prop("checked", true)
					}
					if(data[i].gender === "male"){
						$("#male").prop("checked", true)
					}
				}
			}
})