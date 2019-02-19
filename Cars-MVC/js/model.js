var cars = [];

function getJson() {
  var carsJson = localStorage.getItem("allCars");
  cars = JSON.parse(carsJson);  
}

function sendJson() {  
  var carJson = JSON.stringify(cars);
  localStorage.setItem("allCars", carJson);
}

function createCarObj() {
  var category = inputElements.theCategory.value;
  var make = inputElements.theMake.value; 
  var model = inputElements.theModel.value;
  var price = "$" + inputElements.thePrice.value;  
  var image = inputElements.theimage.value
  .toString()
  .split("\\")
  .pop();

  var newCar = new Car(category, make, model, price, image);
  cars.push(newCar);

}

function Car (_category, _make, _model, _price, _image) {
  this.category = _category;
  this.make = _make;
  this.model = _model;
  this.price = _price;
  this.image = _image;
}

function removeData(car) {
  var id = car.parentElement.id.toString();
  var index = id.replace("car", "");
  cars.splice(index, 1);  
}