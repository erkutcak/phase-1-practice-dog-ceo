document.addEventListener('DOMContentLoaded', fetchImg)
document.addEventListener('DOMContentLoaded', fetchBreed)

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";


// on page load, fetches the images using the url above ⬆️
function fetchImg() {
    fetch(imgUrl)
    // parses the response as JSON
    .then(response => response.json())
    // adds image elements to the DOM for each 🤔 image in the array
    .then(results => {
        results.message.forEach(dogImageUrl => renderImg(dogImageUrl))
    })
}

function renderImg (url) {
    const imgContainer = document.getElementById('dog-image-container')
    const imageElement = document.createElement('img')
    
    imageElement.src = url
    imgContainer.append(imageElement)
    imageElement.style.width = '200px'
    imageElement.style.height = '200px'
}

function fetchBreed() {
    fetch(breedUrl)
    // parses the response as JSON
    .then(response => response.json())
    .then(results => {
        const array = Object.keys(results.message)
        array.forEach(dogBreed => renderListItem(dogBreed))
    })
}

function renderListItem (name) {
    const list = document.getElementById('dog-breeds')
    const listItem = document.createElement('li')

    listItem.innerText = name
    list.append(listItem)
    
    listItem.addEventListener('click', () => {
        listItem.style.color = 'tomato';
    })

}




