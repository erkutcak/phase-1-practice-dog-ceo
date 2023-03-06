
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

//on page load, fetches the images using the url(imgUrl)
fetch (imgUrl)
//parses the response as JSON
.then (response => response.json())
//adds image elements to the DOM for each 🤔 image in the array
.then(results => {
    results.message.forEach(dog => renderImg(dog))
})

//on page load, fetches all the dog breeds using the url (breedUrl)
fetch(breedUrl)
.then (response => response.json())
//adds the breeds to the page in the <ul> provided in index.html
.then (results => {
    renderBreed(results)
})

function renderImg (dog) {
    const imgContainer = document.getElementById('dog-image-container');
    const img = document.createElement('img');
    img.src = dog;
    img.style.height = '200px';
    img.style.width = '200px';
    imgContainer.append(img);
}

function renderBreed(breed) {
    const ul = document.getElementById('dog-breeds')
    const breedObj = Object.keys(breed.message)

    breedObj.forEach(dog => {
    li = document.createElement('li');

        if (breed.message[dog]) {
            li.innerText = `${dog} ${breed.message[dog]}`
        } else{
            li.innerText = dog
        }
        ul.append(li)
    })
}