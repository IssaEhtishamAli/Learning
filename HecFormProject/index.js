var titles = document.getElementById('titles');
const full_name = document.getElementById('full_name');
const martial_status = document.getElementById('martial_status');
const gender = document.getElementById('gender');
const dates = document.getElementById('dates');
const month = document.getElementById('month');
const year = document.getElementById('year');
const domicile_province = document.getElementById('domicile_province');
const country_birth = document.getElementById('country_birth');
const domicile_city = document.getElementById('domicile_city');
const stdType = document.getElementById('stdType');
const address = document.getElementById('address');
const country = document.getElementById('country');
const postal_code = document.getElementById('postal_code');
const city = document.getElementById('city');
//Event listeners
titles.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
  let str = titles.value;
  if (regex.test(str)) {
    titles.classList.remove('is-invalid')
  }
  if (str == "Choose") {
    titles.classList.add('is-invalid')
    return false;
  }
})
full_name.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){5,15}/;
  let str = full_name.value;
  if (regex.test(str)) {
    full_name.classList.remove("is-invalid")
  }
  else {
    full_name.classList.add('is-invalid')
    return false;
  }
})
martial_status.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]{0,10}/;
  let str = martial_status.value;
  if (regex.test(str)) {
    martial_status.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    martial_status.classList.add('is-invalid')
    return false;
  }
})
gender.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
  let str = gender.value;
  if (regex.test(str)) {
    gender.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    gender.classList.add('is-invalid')
    return false;
  }
})
dates.addEventListener('blur', () => {
  let regex = /^[0-9]{1,10}/;
  let str = dates.value;
  if (regex.test(str)) {
    dates.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    dates.classList.add('is-invalid')
    return false;
  }
})
month.addEventListener('blur', () => {
  let regex = /^[0-9]{1,10}/;
  let str = month.value;
  if (regex.test(str)) {
    month.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    month.classList.add('is-invalid')
    return false;
  }
})
year.addEventListener('blur', () => {
  let regex = /^[0-9]{1,10}/;
  let str = year.value;
  if (regex.test(str)) {
    year.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    year.classList.add('is-invalid')
    return false;
  }
})
domicile_province.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){5,10}/;
  let str = domicile_province.value;
  if (regex.test(str)) {
    domicile_province.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    domicile_province.classList.add('is-invalid')
    return false;
  }
})
country_birth.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]{5,10}/;
  let str = country_birth.value;
  if (regex.test(str)) {
    country_birth.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    country_birth.classList.add('is-invalid')
    return false;
  }
})
domicile_city.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]{5,10}/;
  let str = domicile_city.value;
  if (regex.test(str)) {
    domicile_city.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    domicile_city.classList.add('is-invalid')
    return false;
  }
})
stdType.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]{2,10}/;
  let str = stdType.value;
  if (regex.test(str)) {
    stdType.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    stdType.classList.add('is-invalid')
    return false;
  }
})
address.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}/;
  let str = address.value;
  if (regex.test(str)) {
    address.classList.remove("is-invalid")
  }
  else {
    address.classList.add('is-invalid')
    return false;
  }
})
country.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]{5,30}/;
  let str = country.value;
  if (regex.test(str)) {
    country.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    country.classList.add('is-invalid')
    return false;
  }
})
postal_code.addEventListener('blur', () => {
  let regex = /^([0-9]){0,10}/;
  let str = postal_code.value;
  if (regex.test(str)) {
    postal_code.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    postal_code.classList.add('is-invalid')
    return false;
  }
})
city.addEventListener('blur', () => {
  let regex = /^[a-zA-Z]{0,10}/;
  let str = city.value;
  if (regex.test(str)) {
    city.classList.remove("is-invalid")
  }
  else if (str == "Choose") {
    city.classList.add('is-invalid')
    return false;
  }
})
//this function saves all the information in grid table 
function addStudent() {
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));
  var td8 = tr.appendChild(document.createElement('td'));
  var td9 = tr.appendChild(document.createElement('td'));
  var td10 = tr.appendChild(document.createElement('td'));
  var td11 = tr.appendChild(document.createElement('td'));
  var td12 = tr.appendChild(document.createElement('td'));
  var td13 = tr.appendChild(document.createElement('td'));
  //Age calculation
  var d1 = document.getElementById('dates').value;
  var m1 = document.getElementById('month').value;
  var y1 = document.getElementById('year').value;
  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;
  var z = y + m + d;
  td1.innerHTML = titles.value;
  if (td1.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td2.innerHTML = full_name.value;
  if (td2.innerHTML == " ") {
    alert("Please fill the field")
    return false;
  }
  td3.innerHTML = martial_status.value;
  if (td3.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td4.innerHTML = gender.value;
  if (td4.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td5.innerHTML = z;
  if (td5.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  if (d == "Choose" | m1 == "Choose" | year.value == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td6.innerHTML = country_birth.value;
  if (td6.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td7.innerHTML = domicile_province.value;
  if (td6.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td8.innerHTML = domicile_city.value;
  if (td8.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td9.innerHTML = stdType.value;
  if (td9.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td10.innerHTML = address.value;
  if (td10.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td11.innerHTML = country.value;
  if (td11.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td12.innerHTML = postal_code.value;
  if (td12.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  td13.innerHTML = city.value;
  if (td13.innerHTML == "Choose") {
    alert("Please fill the field")
    return false;
  }
  document.getElementById("tbl").appendChild(tr);
  return true;
}
//Image save in localstorage after refresh the page image will sohwn in preview
var imgStore = document.querySelector("#myFileInput").addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem("recent-image", reader.result)
  });
  reader.readAsDataURL(this.files[0]);
})
document.addEventListener("DOMContentLoaded", () => {
  const recentImageDataUrl = localStorage.getItem("recent-image");
  if (recentImageDataUrl) {
    document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
  }
})
function Delete() {
  localStorage.removeItem('recent-image')
}
