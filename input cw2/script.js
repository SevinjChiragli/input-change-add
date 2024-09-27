let ford = [
    { brand: "Ford", model: "Mustang", year: 2022,  },
    { brand: "Ford", model: "Mustang1", year: 2022,},
    { brand: "Ford", model: "F-150-2", year: 2023,  },
    { brand: "Ford", model: "F-150-4", year: 2023,  },
];
 
let bmw = [
    { brand: "BMW", model: "X5-1", year: 2022,},
    { brand: "BMW", model: "3 Series-1", year: 2023 },
    { brand: "BMW", model: "X5 -2", year: 2022, },
    { brand: "BMW", model: "3 Series-2", year: 2023 },
];
 
let added = [
    {thing:'CHEXOL'},
    {thing:'TONIROVKA'},
    {thing:'PODSVETKA'},
    {thing:'DISKI'},
]
 
let car
 
let fords = document.getElementById('fords')
let bmws = document.getElementById('bmws')
let adding = document.getElementById('adding')
 
ford.forEach((item) => {
    let car = document.createElement('option')
    car.innerText = item.model
    car.value = item.model
    fords.appendChild(car)
})
 
bmw.forEach((item) => {
    let car = document.createElement('option')
    car.innerText = item.model
    car.value = item.model
    bmws.appendChild(car)
})
 
added.forEach((item) => {
    let label = document.createElement('label')
    label.innerHTML = `${item.thing}<input type="checkbox">`
    adding.appendChild(label)
})
 
document.getElementById('fords').addEventListener('change', (ev) => {
    car = ev.target.value
})
 
document.getElementById('bmws').addEventListener('change', (ev) => {
    car = ev.target.value
})
 
 
document.getElementById('add').addEventListener('click',() => {
    console.log(car)
    document.querySelectorAll('div label input').forEach(element => {
        if(element.checked){
            console.log(element.parentElement.innerText)
        }
    });
})
 
 