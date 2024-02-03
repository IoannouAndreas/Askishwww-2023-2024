fetch("songs1980_1990.json") // connect with the specific .json file 
.then(function(response){ 
	return response.json(); //read all the info from the json file
})
.then(function(products){
	let placeholder = document.querySelector("#songs_80-90"); // match the right id
	let out = "";
	for(let product of products){ //for all the elements that exists
		//put every data in a table
		//when we write in `...` in a .js file we can write html command
		out += ` 
			<tr> 
				<td>${product.title} , ${product.disc}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out; //get the result and print it
})

//do it for the rest of the json files 
fetch("songs1990_2000.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#songs_90-00");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td>${product.title} , ${product.disc}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})

fetch("songs2000_2020.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#songs_00-20");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td>${product.title} , ${product.disc}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})

fetch("Videoclips.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#url2");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td>
                    <a href= ${product.url2}> πάτα με! </a>
                </td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})

fetch("interviews.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#url1");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td>
                <a href= ${product.url1}> πάτα με! </a>
                </td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
})
