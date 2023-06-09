const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const myButton = document.getElementById('btn');

//addEventListener : ecoute ce qu'on fait
cat_btn.addEventListener('click', fetchPhotosCat);
dog_btn.addEventListener('click', fetchPhotoDog);



function fetchPhotosCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function fetchPhotoDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			
		});
}
