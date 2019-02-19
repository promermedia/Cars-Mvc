var inputElements = {};

function getInputsFromDom() {
  inputElements.theCategory = document.getElementById("category");
  inputElements.theMake = document.getElementById("make");
  inputElements.theModel = document.getElementById("model");
  inputElements.thePrice = document.getElementById("price");
  inputElements.theimage = document.getElementById("image");
}

function cleanInputs() {
  inputElements.theCategory.value = "";
  inputElements.theMake.value = "";
  inputElements.theModel.value = "";
  inputElements.thePrice.value = "";
  inputElements.theimage.value = "";
}

function showHide(button) {
  var theForm = document.getElementById("formDiv");
  if (theForm.style.display == "block") {
    theForm.style.display = "none";
    button.innerHTML = "Show Form";
  } else {
    theForm.style.display = "block";
    button.innerHTML = "Hide Form";
  }
}

function createHTML() {
  if (cars != null) {
    var mainDiv = document.getElementById("main");
    var toAppend = "";

    mainDiv.innerHTML = "";

    cars.forEach(function(car, i) {
      var newDiv =
        '<div id="car' +
        i +
        '" class="eachCar"><h3 class="category">' +
        car.category +
        '</h3><button class="btn btn-danger button" onclick="deleteCar(this)">X</button><img src="assets/images/' +
        car.image +
        '" alt=""><p class="make">' +
        car.make +
        '</p><p class="model">' +
        car.model +
        '</p><p class="price">' +
        car.price +
        "</p></div>";
      toAppend += newDiv;
    });

    mainDiv.innerHTML = toAppend;
  }
}
