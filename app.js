let container = document.getElementById('container');
let tableEl = document.createElement('table');
let cars= [];
function Car(CustomerName, CarModel,image){
    this.CustomerName = CustomerName;
    this.CarModel= CarModel;
    this.iamge = image;
    this.CarPrice = 0;
    cars.push(this);
    saveTolocalStorage();


}
Car.prototype.random = function(){
return this.CarPrice = Math.floor(Math.random() *(max - min) + min);


}



Car.prototype.render = function(){
let trEl = document.createElement('tr');
tableEl.appendChild(trEl);

let tdEl1 = document.createElement('td');
trEl.appendChild(tdEl1);
tdEl.textContent = this.CustomerName;

let tdEl2 = document.createElement('td');
trEl.appendChild(tdEl2);
tdEl.textContent = this.CarModel;

let tdEl3 = document.createElement('td');
trEl.appendChild(tdEl3);
tdEl.textContent = this.CarPrice;

let tdEl4 = documant.createElement('td');
let image = document.createElement('img');
image.setAttribute('src' , this.image);
trEl.appendChild(tdEl4);



}

Car.prototype.createTableHeader= function(){
let trEl = document.createElement('tr');
tableEl.appendChild(trEl);

let thEl1 = documant.createElement('th');
trEl.appendChild(thEl1);
thEl1.textContent = "order Image";


let thEl2 = documant.createElement('th');
trEl.appendChild(thEl2);
thEl1.textContent = "order Details";


}

let myForm = documant.getElementById('myForm');
myForm.addEventListner('submit' , addCars);

function addCars(event){
    event.preventDefault();
    let CustomerName = event.terget.CustomerName.value;
    let CarModel = event.terget.CarModel.value;
    let CarPrice = event.terget.CarPrice.value ;


    let newCar = new Car(CustomerName, CarModel, CarPrice);
    newCar.random(1000, 10000);
    newCar.render();
}
createTableHeader();

function saveTolocalStorage(){
let data = JSON.stringify(cars);
localStorage.setItem('car' , data);

}
function readFromLocalStorage(){
let item = localStorage.getItem('car');
let parse = JSON.parse(item);
cars = parse;
this.cars.render();
}
readFromLocalStorage();