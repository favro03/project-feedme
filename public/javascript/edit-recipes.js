//editing a post
async function editFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="recipes-name"]').value.trim();;
    const ingredients = document.querySelector('input[name="recipes-ingredients"]').value.trim();;
    const direction = document.querySelector('input[name="recipes-direction"]').value.trim();;
    const description = document.querySelector('input[name="recipes-description"]').value.trim();;
  
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/recipes/${id}`, {
      method: 'PUT',
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
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-recipes-form').addEventListener('submit', editFormHandler);