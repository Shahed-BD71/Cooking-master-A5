// https://www.themealdb.com/api/json/v1/1/search.php?f=a

// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

const searchCooks = () => {
    const searchItem = document.getElementById('search-cook').value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`
    // load data.
    fetch(url)
    .then (res => res.json())
    .then (data => displayCooks(data.meals));
}

    // display Cook..
const displayCooks = cooks => {
    const cookContainer = document.getElementById('cook-container');
    cookContainer.innerText = " ";
    cooks.forEach(cook => {
        const cookDiv = document.createElement('div');
        // cookDiv.className = ""
        cookDiv.innerHTML = `
        <div onclick="cookDetails(${cook.idMeal})">
            <img class="cook-image" src="${cook.strMealThumb}">
            <h3 class='cook-title'> ${cook.strMeal}</h3>
        </div>
        <div>
            <div onclick="></div>
        </div>`
    document.getElementById('cook-list').appendChild(cookDiv);
    })
}

const cookDetails = (cookId) => {
    url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cookId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCook(data.meals[0]))
}
    // display selected cook.
 const displayCook = cook => {
 const singleCook = document.getElementById('single-cook');
 singleCook.innerHTML = 
 `<div class = "container">
    <div>
        <img src="${cook.strMealThumb}">
        <h2>${cook.strMeal}</h2>
    </div>
    <div>
        <h5>Ingredients</h5>
        <ul id="ingredient-list"></ul>
    </div>
 <div>`;
``

for (let i = 1; i <= 10; i++) {
    let ingredient = 'strIngredient' + i;
    let quantity = 'strMeasure' + i;

   
const li = document.createElement("li");
    li.innerHTML = `
    <li>${cook[quantity]} , ${cook[ingredient]}</li>
    `;
}
    document.getElementById("ingredient-list").appendChild(li)
}










// const singleDiv = document.createElement('li');
// console.log(cook[ingredient])
// singleDiv.innerHTML = `${cook['ingredient']}`;
// document.getElementById('ingredient-list').appendChild('singleDiv');
// document.getElementById("single-cook") = "singleDiv"

// for (let i = 1; i <= 10; i++) {
//     let ingredient = 'strIngredient' + i;
//     let quantity = 'strMeasure' + i;

//     if (cook[ingredient] === "" || cook[ingredient] == null) {
//         break;
//     }
    // const li = document.createElement("li");
    // li.innerHTML = `
    // <li>'${cook[quantity]}' $'{cook[ingredient]}'</li>
    // `;
//     document.getElementById("ingredient-list").appendChild(li)
//     }
//     document.getElementById("cook-details").style.display = "block";
//  }