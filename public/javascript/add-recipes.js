var imageUploadWidget = cloudinary.createUploadWidget(
  {
    cloud_name: 'dpujq7zfe',
    uploadPreset: 'yi4pogss',
   
     sources: ['local', 'url']
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
      // document.querySelector('input[name="image-url"]').value = result.info.secure_url;
      document.querySelector('input[name="image-url"]').value = `${result.info.url}`;
    }
  }
)


//adding a new post
async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="recipes-name"]').value;
  const image_url = document.querySelector('input[name="image-url"]').value;
  const ingredients = document.querySelector('textarea[name="recipes-ingredients"]').value;
  const direction = document.querySelector('textarea[name="recipes-direction"]').value;
  const description = document.querySelector('input[name="recipes-description"]').value;

  const response = await fetch(`/api/recipes`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      ingredients,
      direction,
      description,
      image_url
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
document.querySelector('#upload-image').addEventListener('click', function (event) {
  event.preventDefault();
  imageUploadWidget.open();
}, false);


//document.querySelector('.new-recipes-form').addEventListener('submit', newFormHandler);


const addIngredients = () => {
  const list = document.querySelector('.ingredients_list')
  const test = document.querySelector('textarea[name="recipes-ingredients"]').value;
  
  var item = document.createElement('li');
  item.append(test)
  console.log(item)
  list.appendChild(item)

  console.log('is working')
  document.querySelector('textarea[name="recipes-ingredients"]').value = '';
  }

  const addDirection = () => {
  const list = document.querySelector('.directions_list')
  const test = document.querySelector('textarea[name="recipes-direction"]').value;
  
  var item = document.createElement('li');
  item.append(test)
  console.log(item)
  list.appendChild(item)

  console.log('is working')
  document.querySelector('textarea[name="recipes-direction"]').value = '';
}



  document.querySelector('.addIngredient').addEventListener('click', addIngredients);
  document.querySelector('.addDirection').addEventListener('click', addDirection);
  document.querySelector('.new-recipes-form').addEventListener('submit', newFormHandler);
  