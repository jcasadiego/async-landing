const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7f14a0d1a7mshc19cf8a1c2c1b03p1b88fdjsneb342e82d5d6',
		'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
	}
};

fetch('https://twitter154.p.rapidapi.com/user/tweets?username=JosCasadiego4&limit=10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));