const API_TWEETS = 'https://twitter154.p.rapidapi.com/user/tweets?username=JosCasadiego4&limit=10';
const API_DETAILS = 'https://twitter154.p.rapidapi.com/user/details?username=JosCasadiego4';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7f14a0d1a7mshc19cf8a1c2c1b03p1b88fdjsneb342e82d5d6',
		'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
	const response = await fetch(urlApi, options);
	const data = await response.json();
	return data;
};

(async () => {
	try {	
		const tweets = await fetchData(API_TWEETS);
		const details = await fetchData(API_DETAILS);
		let view = `
		${tweets.results.map(tweet => `
			<div class="group relative">
				<div
					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src="${details.profile_pic_url}" alt="${details.username} class="w-full" style="width: 30%; border-radius: 10px;"
				/>
				</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
						${tweet.text}
					</h3>
				</div>
			</div>
		`).slice(0,4).join('')}
		`;
		content.innerHTML = view;
	} catch (error) {
		console.log(error);
	}
})();