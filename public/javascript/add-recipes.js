//adding a new post
async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('textarea[name="recipes-name"]').value;
    const ingredients = document.querySelector('textarea[name="recipes-ingredients"]').value;
    const direction = document.querySelector('textarea[name="recipes-direction"]').value;
    const description = document.querySelector('textarea[name="recipes-description"]').value;
  
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        ingredients,
        direction,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

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
  
  document.querySelector('.new-recipes-form').addEventListener('submit', newFormHandler);
  document.querySelector('.addIngredient').addEventListener('click', addIngredients);
  