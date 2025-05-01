const mainDishes = [
  {
    name: "Turkey lettuce wraps with cilantro lime yogurt sauce",
    image: "IMG_3542.jpeg",
    turkey: ["Avocado oil", "Seasonings", "Cheese"],
    sauce: [
      "Greek yogurt plain",
      "1/2 large lime juice with full lime zest",
      "Cilantro",
      "3 Garlic cloves",
      "Salt/pepper"
    ],
    toppings: ["Avocado", "cholula hot sauce", "Chili oil or salsa match"]
  },
  {
    name: "Ground turkey and arugula salad",
    image: "turkeyandarugula.jpeg",
    turkey: ["Avocado oil", "Seasonings", "Cheese"],
    arugula_salad: [
      "olive oil",
      "lemon",
      "balsamic",
      "salt/pepper",
      "parmesan",
      "almond shavings"
    ],
    veggies: ["Raw broccoli + carrots"]
  },
  {
    name: "Chicken, broccoli, & potatoes",
    image: "chickenandbroccoli.jpeg",
    chicken: ["Avocado oil", "cajun, or Montreal Chicken"],
    veggies: ["Raw broccoli"],
    potatoes: [
      "Avocado oil spray",
      "Cajun, or salt/pepper garlic",
      "Truffle salt (optional)"
    ]
  },
  {
    name: "Salmon filet w/side cabbage stir fry",
    image: "salmonfiletcabbage.jpeg",
    salmon: ["Salt", "Pepper", "Garlic powder", "Old bay seasoning"],
    cabbage_stir_fry: "Recipe 1 (below under Side dishes)",
    grain: ["Rice"]
  },
  {
    name: "Steak and potatoes w/onions and bell peppers",
    image: "steakpotatoesandveggies.jpeg",
    skirt_steak: ["Montreal steak seasoning", "Kerrygold unsalted butter"],
    onions_bell_peppers: ["deglaze pan with onions and bell peppers"],
    potatoes: [
      "Avocado oil spray",
      "salt and pepper, or cajun, or truffle salt",
      "airfry or bake"
    ]
  },
  {
    name: "Cajun shrimp with cauliflower rice and cucumber",
    image: "cajunshrimp.jpeg",
    shrimp: [
      "peel and de-vein",
      "wash and pat dry",
      "cajun seasoning",
      "butter",
      "Flip once and squeeze lemon juice"
    ],
    veggies: ["Celery + cucumber"]
  },
  {
    name: "Cajun chicken with broccoli, carrots, rice or quinoa",
    image: "cajunchicken.jpeg",
    chicken_breast: ["bake or air fry", "cajun seasoning"],
    veggies: ["raw broccoli and carrot"],
    grain: ["Brown rice or white rice"]
  },
  {
    name: "Quinoa turkey bowls",
    image: "quinoabowls.jpeg",
    stir_fry: ["Garlic", "Bell pepper", "Onion", "Green onion", "Olive oil"],
    sear: ["Ground turkey", "Steam", "Quinoa"],
    top_with: ["Lime slice", "Cilantro", "Avocado", "Salsa"]
  },
  {
    name: "Asian tuna salad",
    image: "asiantunasalad.jpeg",
    link: "https://www.instagram.com/reel/DDIYr2WzSD2/?igsh=N2RmYjBzenN4M2Rh"
  },
  {
    name: "Shrimp sushi bowls",
    image: "shrimpsushibowls.jpeg",
    link: "https://www.instagram.com/reel/DFBn7fxSOMi/?igsh=Z3lhcHhtdzg0eWd1"
  },
  {
    name: "Chicken caesar salad",
    image: "chickencaesarsalad.jpeg",
    items: [
      "Mary's caesar dressing",
      "kale or lettuce",
      "salt",
      "lemon juice",
      "freshly grated parmigiano"
    ]
  },
  {
    name: "Lettuce burgers and sweet potato fries airfryed",
    image: "lettuceburgers.jpeg",
    burgers: [
      "Wash and dry lettuce leaves",
      "Cook patties and add montreal steak seasoning",
      "add desired cheese",
      "add desired condiments and toppings"
    ],
    fries: [
      "Sweet potatoes",
      "avocado oil spray",
      "salt/pepper (or truffle salt)"
    ]
  },
  {
    name: "Chicken Gyro Wraps",
    image: "gyrowraps.jpeg",
    tzatziki_sauce: [
      "cup Greek Yogurt",
      "Salt",
      "Pepper",
      "3 garlic cloves",
      "tablespoon of olive oil",
      "Juice of 1 lemon",
      "cucumber grated AND strained",
      "chopped dill"
    ],
    chicken_marinade: [
      "cup Greek Yogurt",
      "Salt",
      "Pepper",
      "3 garlic cloves",
      "tablespoon of red wine vinegar",
      "tablespoon of olive oil",
      "teaspoon of ground coriander",
      "tablespoon of oregano",
      "teaspoon of smoked paprika",
      "Juice of 1 lemon"
    ],
    vegetable_meadly: [
      "1 cucumber",
      "2 roma tomato",
      "1/2 red onion",
      "1 tablespoon red wine vinegar",
      "1/4 cup parsley",
      "salt",
      "pepper"
    ]
  },
  {
    name: "Turkish pasta",
    image: "turkishpasta.jpeg",
    main: [
      "ground beef",
      "Pasta",
      "Paprika",
      "Curry powder",
      "Onion powder",
      "Salt/pepper",
      "Yellow onion",
      "Cherry Tomato",
      "Parsley"
    ],
    sauce: ["Greek yogurt", "Garlic", "Sauce"],
    butter_sauce: [
      "melted butter",
      "Dried mint",
      "Olive oil",
      "Chili flakes",
      "Paprika"
    ],
    side: ["Broccolini and carrots"]
  }
];
const createColumnsContainer = () => {
  // Create the dynamic columns container
  const columnsContainer = document.createElement("div");
  columnsContainer.style.display = "flex";
  columnsContainer.style.justifyContent = "space-between";
  columnsContainer.style.gap = "20px";
  columnsContainer.style.marginTop = "20px";

  // Get the keys of the current dish, excluding 'name' and 'image'
  const keys = Object.keys(mainDishes[randomIndex]).filter(
    key => key !== "name" && key !== "image"
  );

  // Iterate over the keys to create columns
  keys.forEach((key, index) => {
    const column = document.createElement("div");
    column.style.flex = "1";
    column.style.borderRight =
      index < keys.length - 1 ? "1px solid #ddd" : "none";
    column.style.padding = "0 10px";

    // Create the key heading
    const keyHeading = document.createElement("h3");
    keyHeading.textContent = key.replace(/_/g, " ").toUpperCase();
    keyHeading.style.textAlign = "center";
    keyHeading.style.color = "#333";
    keyHeading.style.marginBottom = "10px";
    column.appendChild(keyHeading);

    // Create the value list
    const valueList = document.createElement("ul");
    valueList.style.listStyleType = "none";
    valueList.style.padding = "0";
    valueList.style.margin = "0";
    valueList.style.textAlign = "left";

    const value = mainDishes[randomIndex][key];
    if (Array.isArray(value)) {
      value.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.style.marginBottom = "5px";
        listItem.style.color = "#555";
        valueList.appendChild(listItem);
      });
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = value;
      listItem.style.color = "#555";
      valueList.appendChild(listItem);
    }

    column.appendChild(valueList);
    columnsContainer.appendChild(column);
  });
  return columnsContainer;
};
// Create the card element
const card = document.createElement("div");
card.style.maxWidth = "600px";
card.style.margin = "20px auto";
card.style.padding = "20px";
card.style.borderRadius = "12px";
card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
card.style.backgroundColor = "#ffffff";
card.style.fontFamily = "Arial, sans-serif";
card.style.textAlign = "center";

let randomIndex = Math.floor(Math.random() * mainDishes.length);

// Create the heading
const heading = document.createElement("h2");
heading.textContent = `Dish suggestion: ${mainDishes[randomIndex].name}`;
heading.style.color = "#333333";
card.appendChild(heading);

// Create the image
const image = document.createElement("img");
image.src = mainDishes[randomIndex].image; // Replace with your image URL
image.alt = "dish image";
image.style.width = "100%";
image.style.height = "auto";
image.style.borderRadius = "8px";
image.style.margin = "15px 0";
card.appendChild(image);

let columnsContainer = createColumnsContainer();
card.appendChild(columnsContainer);

// create a button to get a new dish
const button = document.createElement("button");
button.textContent = "Get New Dish";
button.style.marginTop = "20px";

button.addEventListener("click", function () {
  randomIndex = Math.floor(Math.random() * mainDishes.length);
  heading.textContent = `Dish suggestion: ${mainDishes[randomIndex].name}`;
  image.src = mainDishes[randomIndex].image;
  columnsContainer = createColumnsContainer();
  card.replaceChild(columnsContainer, card.lastChild);
});

document.getElementById("update-rec-btn").appendChild(button);
// Add the card to the container
document.getElementById("card-container").appendChild(card);
