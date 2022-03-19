//editing a post
var imageUploadWidget = cloudinary.createUploadWidget(
  {
    cloud_name: 'djrbfeg4e',
    upload_preset: 'j2vg8six',
    sources: ['local', 'url']
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
      // document.querySelector('input[name="image-url"]').value = result.info.secure_url;
      document.querySelector('input[name="image-url"]').value = `https://res.cloudinary.com/djrbfeg4e/image/upload/w_300,c_pad,r_20/${result.info.url}`;
    }
  }
)

async function editFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="recipes-name"]').value.trim();;
    const image_url = document.querySelector('input[name="image-url"]').value;

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
        description,
        image_url
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
  document.querySelector('#upload-image').addEventListener('click', function (event) {
    event.preventDefault();
    imageUploadWidget.open();
  }, false);
  
   
  document.querySelector('.edit-recipes-form').addEventListener('submit', editFormHandler);