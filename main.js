class Person {
  constructor(ssn, name, age) {
    this.ssn = ssn;
    this.name = name;
    this.age = parseInt(age);
  }
}

let ssn = document.getElementById("ssn");
let name = document.getElementById("name");
let age = document.getElementById("age");
let submit = document.getElementById("submit");
let reverse = document.getElementById("reverse");
let sort = document.getElementById("sort");
let personList = [];

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (ssn.value === "" || name.value === "" || age.value === "") {
    alert("Please fill all the fields");
    return;
  } else if (personList.find((person) => person.ssn === ssn.value)) {
    alert("Person with the same SSN already exists");
    return;
  } else if (parseInt(age.value) < 0) {
    alert("Age should be a positive number");
    return;
  } else if (isNaN(parseInt(ssn.value))) {
    alert("SSN should be a number");
    return;
  }
  let person = new Person(ssn.value, name.value, age.value);
  personList.push(person);
  let li = document.createElement("li");
  let span1 = document.createElement("span");
  span1.classList.add("ssn");
  span1.innerText = person.ssn;
  let span2 = document.createElement("span");
  span2.classList.add("name");
  span2.innerText = person.name;
  let span3 = document.createElement("span");
  span3.classList.add("age");
  span3.innerText = person.age;
  let button = document.createElement("button");
  button.classList.add("delete");
  button.classList.add("btn");
  button.innerText = "Delete";
  button.addEventListener("click", function () {
    li.remove();
    personList = personList.filter((person) => person.ssn !== ssn.value);
  });
  li.appendChild(span1);
  li.appendChild(span2);
  li.appendChild(span3);
  li.appendChild(button);
  document.getElementById("list").appendChild(li);
});

sort.addEventListener("click", function sortList() {
  if (personList.length >= 2) {
    if (personList[0].ssn > personList[1].ssn) {
      personList.sort((a, b) => a.ssn - b.ssn);
    } else {
      personList.sort((a, b) => b.ssn - a.ssn);
    }
    let list = document.getElementById("list");
    list.innerHTML = "";
    let li = document.createElement("li");
    let span1 = document.createElement("span");
    span1.classList.add("ssn");
    span1.innerText = "SSN";
    let span2 = document.createElement("span");
    span2.classList.add("name");
    span2.innerText = "NAME";
    let span3 = document.createElement("span");
    span3.classList.add("age");
    span3.innerText = "AGE";
    let span4 = document.createElement("span");
    span4.classList.add("delete");
    span4.innerText = "DELETE";
    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);
    li.appendChild(span4);
    list.appendChild(li);
    personList.forEach((person) => {
      let li = document.createElement("li");
      let span1 = document.createElement("span");
      span1.classList.add("ssn");
      span1.innerText = person.ssn;
      let span2 = document.createElement("span");
      span2.classList.add("name");
      span2.innerText = person.name;
      let span3 = document.createElement("span");
      span3.classList.add("age");
      span3.innerText = person.age;
      let button = document.createElement("button");
      button.classList.add("delete");
      button.classList.add("btn");
      button.innerText = "Delete";
      button.addEventListener("click", function () {
        li.remove();
      });
      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(span3);
      li.appendChild(button);
      list.appendChild(li);
    });
  }
});
