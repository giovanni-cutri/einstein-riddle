var n = 6;

var colours = new Map();
colours.set("\u2753", "&#10067;");
colours.set("\uD83D\uDFE5", "&#128997;");
colours.set("\uD83D\uDFE9", "&#129001;");
colours.set("\u2B1C", "&#11036;");
colours.set("\uD83D\uDFE8", "&#129000;");
colours.set("\uD83D\uDFE6", "&#128998");

var foods = new Map();
foods.set("\u2753", "&#10067;");
foods.set("\uD83C\uDF55", "&#127829;");
foods.set("\uD83C\uDF5D", "&#127837;");
foods.set("\uD83C\uDF6A", "&#127850;");
foods.set("\uD83C\uDF4E", "&#127822;");
foods.set("\uD83E\uDD5E", "&#129374;");

var drinks = new Map();
drinks.set("\u2753", "&#10067;");
drinks.set("\uD83C\uDF75", "&#127861;");
drinks.set("\u2615", "&#9749;");
drinks.set("\uD83E\uDD5B", "&#129371;");
drinks.set("\uD83C\uDF7A", "&#127866;");
drinks.set("\uD83D\uDCA7", "&#128167;");

var media = new Map();
media.set("\u2753", "&#10067;");
media.set("\uD83D\uDCDA", "&#128218;");
media.set("\uD83C\uDF9E\uFE0F", "&#127902;&#65039;");
media.set("\uD83C\uDFAE", "&#127918;");
media.set("\uD83D\uDCFA", "&#128250;");
media.set("\uD83C\uDFB5", "&#127925;");

var animals = new Map();
animals.set("\u2753", "&#10067;");
animals.set("\uD83D\uDC36", "&#128054;");
animals.set("\uD83D\uDC26", "&#128038;");
animals.set("\uD83D\uDC31", "&#128049;");
animals.set("\uD83D\uDC34", "&#128052;");
animals.set("\uD83D\uDC1F", "&#128031;");

options = document.getElementsByClassName("emoji");
Array.from(options).forEach((colour_option) => {
  colour_option.addEventListener("click", change);
});

function change(evt) {
  type = evt.currentTarget.classList[1];
  current = evt.currentTarget.innerHTML;
  let selected = "";

  switch (type) {
    case "colour":
      let colour_flag = false;
      for (let [key, value] of colours) {
        if (colour_flag == true) {
          selected = colours.get(key);
          break;
        } else if (key == current) {
          colour_flag = true;
        }
      }
      break;

    case "food":
      let food_flag = false;
      for (let [key, value] of foods) {
        if (food_flag == true) {
          selected = foods.get(key);
          break;
        } else if (key == current) {
          food_flag = true;
        }
      }
      break;

    case "drink":
      let drink_flag = false;
      for (let [key, value] of drinks) {
        if (drink_flag == true) {
          selected = drinks.get(key);
          break;
        } else if (key == current) {
          drink_flag = true;
        }
      }
      break;

    case "medium":
      let medium_flag = false;
      for (let [key, value] of media) {
        if (medium_flag == true) {
          selected = media.get(key);
          break;
        } else if (key == current) {
          medium_flag = true;
        }
      }
      break;

    case "animal":
      let animal_flag = false;
      for (let [key, value] of animals) {
        if (animal_flag == true) {
          selected = animals.get(key);
          break;
        } else if (key == current) {
          animal_flag = true;
        }
      }
      break;
  }

  if (selected == "") {
    selected = colours.get("\u2753"); // it doesn't matter which map we choose
  }

  evt.currentTarget.innerHTML = selected;
}

function equalsCheck(a, b) {
  if (a.length != b.length) {
    return false;
  } else {
    let result = false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      } else {
        result = true;
      }
    }

    return result;
  }
}

function check_solution() {
  solution = [
    "\uD83D\uDFE8",
    "\uD83D\uDFE6",
    "\uD83D\uDFE5",
    "\uD83D\uDFE9",
    "\u2B1C",
    "\uD83C\uDF4E",
    "\uD83C\uDF6A",
    "\uD83C\uDF55",
    "\uD83E\uDD5E",
    "\uD83C\uDF5D",
    "\uD83D\uDCA7",
    "\uD83C\uDF75",
    "\uD83E\uDD5B",
    "\u2615",
    "\uD83C\uDF7A",
    "\uD83C\uDF9E\uFE0F",
    "\uD83C\uDFAE",
    "\uD83D\uDCDA",
    "\uD83C\uDFB5",
    "\uD83D\uDCFA",
    "\uD83D\uDC31",
    "\uD83D\uDC34",
    "\uD83D\uDC26",
    "\uD83D\uDC1F",
    "\uD83D\uDC36",
  ];

  selection = document.getElementsByClassName("emoji");
  choices = [];
  for (let i of selection) {
    choices.push(i.innerHTML);
  }

  if (equalsCheck(choices, solution)) {
    return true;
  }

  return false;
}

function submit() {
  response = document.getElementById("response");

  if (check_solution()) {
    response.innerHTML = "Correct!";
    response.style.color = "springgreen";
  } else {
    response.innerHTML = "Incorrect!";
    response.style.color = "red";
  }
}

document.getElementsByTagName("button")[0].addEventListener("click", submit);
