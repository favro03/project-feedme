//adding a new post
async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="recipes-name"]').value;
    const ingredients = document.querySelector('input[name="recipes-ingredients"]').value;
    const direction = document.querySelector('input[name="recipes-direction"]').value;
    const description = document.querySelector('input[name="recipes-description"]').value;
  
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
  
  document.querySelector('.new-recipes-form').addEventListener('submit', newFormHandler);
  