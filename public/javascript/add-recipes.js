//adding a new post
// async function newFormHandler(event) {
//     event.preventDefault();
  
//     const name = document.querySelector('input[name="recipes-name"]').value;
//     const ingredients = document.querySelector('input[name="recipes-ingredients"]').value;
//     const direction = document.querySelector('input[name="recipes-direction"]').value;
//     const description = document.querySelector('input[name="recipes-description"]').value;
  
//     const response = await fetch(`/api/recipes`, {
//       method: 'POST',
//       body: JSON.stringify({
//         name,
//         ingredients,
//         direction,
//         description

//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }

const addIngredients = () => {
  const list = document.querySelector('.ingredients_list')
  const test = document.querySelector('.ingredient_textarea').value;
  
  var item = document.createElement('li');
  item.append(test)
  console.log(item)
  list.appendChild(item)

  console.log('is working')
  document.querySelector('.ingredient_textarea').value = '';
}

const addDirection = () => {
  const list = document.querySelector('.directions_list')
  const test = document.querySelector('.direction_textarea').value;
  
  var item = document.createElement('li');
  item.append(test)
  console.log(item)
  list.appendChild(item)

  console.log('is working')
  document.querySelector('.direction_textarea').value = '';
}

const newFormHandler = () => {
  var ul = document.querySelectorAll(".ingredients_list li");
  var ingredients = Array.prototype.map.call(ul, function(item) {
      return item.textContent;
  });

  var ol = document.querySelectorAll(".directions_list li");
  var direction = Array.prototype.map.call(ol, function(item) {
      return item.textContent;
  });

  ingredients = ingredients.join('|');
  direction = direction.join('|');

  console.log(ingredients);
  console.log(direction);

}
  
  document.querySelector('.btn').addEventListener('click', newFormHandler);
  document.querySelector('.addIngredient').addEventListener('click', addIngredients);
  document.querySelector('.addDirection').addEventListener('click', addDirection);
  