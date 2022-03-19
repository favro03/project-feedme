//deleting a recipe
async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/recipes/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
        recipes_id: id
    }),
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-recipes-btn').addEventListener('click', deleteFormHandler);