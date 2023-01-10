const recipeInputs = document.querySelector(`.recipe-inputs`);
const recipeName = document.querySelector(`#title`);
const numOfIng = document.querySelector(`#ingredients`);
const btn = document.querySelector(`button`);
const recipe = document.querySelector(`.recipe`);

const Recipe = {
  title: ``,
  numOfIng: ``,
  ingredients: [],
};

let ingredientsCounter = 1;

btn.addEventListener(`click`, () => {
  Recipe.title = recipeName.value;
  Recipe.numOfIng = numOfIng.value;

  const html = `
    <div>
      <h1>${Recipe.title}</h1>
      <label for="ing">Ingredients #${ingredientsCounter}</label>
      <div>
        <input type="text" id="ingredient" />
      </div>
      <div>
        <button id="add">Add</button>
      </div>
    </div>
  `;

  recipeInputs.innerHTML = html;
});

recipeInputs.addEventListener(`click`, (e) => {
  if (!e.target.closest(`#add`)) return;

  ingredientsCounter++;
  const label = recipeInputs.querySelector(`label`);
  label.innerHTML = `Ingredients #${ingredientsCounter}`;
  const ingredient = recipeInputs.querySelector(`#ingredient`);
  Recipe.ingredients.push(ingredient.value);
  ingredient.value = ``;

  let allIngredients = "";
  for (const ing of Recipe.ingredients) {
    allIngredients += `<li>${ing}</li>`;
  }

  let html = ``;
  if (ingredientsCounter <= Recipe.numOfIng) {
    html = `
      <div>
        <h1>${Recipe.title}</h1>
        <ul>
          ${allIngredients}
        </ul>
        <label for="ing">Ingredients #${ingredientsCounter}</label>
        <div>
          <input type="text" id="ingredient" />
        </div>
        <div>
          <button id="add">Add</button>
        </div>
      </div>
    `;
  } else {
    html = `
      <div>
        <h1>${Recipe.title}</h1>
        <ul>
          ${allIngredients}
        </ul>
      </div>
    `;
  }

  recipeInputs.innerHTML = html;

  console.log(Recipe);
});
