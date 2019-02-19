function addCar() {
  getInputsFromDom();
  createCarObj();
  cleanInputs();
  sendJson();
  createHTML();
}

function toggle(button) {
  showHide(button);
}

function deleteCar(car) {
  removeData(car);
  sendJson();
  createHTML();
}
