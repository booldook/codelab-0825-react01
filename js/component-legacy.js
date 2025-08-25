const titleEl = document.querySelector("#title");
const titleEl2 = document.querySelector("#title2");
const titleEl3 = document.querySelector("#title3");
const titleEl4 = document.querySelector("#title4");
const titleEl5 = document.querySelector("#title5");

const onChangeText = (input) => {
  titleEl.innerHTML = input.value;
  titleEl2.innerHTML = input.value;
  titleEl3.innerHTML = input.value;
  titleEl4.innerHTML = input.value;
  titleEl5.innerHTML = input.value;
  console.log(input.value);
};
