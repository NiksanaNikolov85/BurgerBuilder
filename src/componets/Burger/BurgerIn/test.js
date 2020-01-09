let ingredients = { salad: 1, bacon: 1, cheese: 2, meat: 2 }

let transformedIngredients = Object.keys(ingredients);
transformedIngredients.map((el) => {
    console.log([...Array(ingredients[el])])

    // el =  salad, 1

    return [...Array(ingredients[el])].map((elem) => {
        console.log(el)
        return el;
    })
}).reduce((arr, el) => {
    return arr.concat(el)
}, []);


