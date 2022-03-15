const sequelize = require('../config/connection');
const { User, Recipes } = require('../models');

const recipeData = [
  {
    name: 'Slow Cooker Beef Stew',
    ingredients: '2 pounds beef stew meat, cut into 1-inch pieces|¼ cup all-purpose flour|½ teaspoon salt|½ teaspoon ground black pepper|1 ½ cups beef broth|4 medium carrots, sliced|3 medium potatoes, diced|1 medium onion, chopped|1 stalk celery, chopped|1 teaspoon Worcestershire sauce|1 teaspoon ground paprika|1 clove garlic, minced|1 large bay leaf',
    direction: 'Place meat in slow cooker.|Add beef broth, carrots, potatoes, onion, celery, Worcestershire sauce, paprika, garlic, and bay leave; stir to combine.|Cover, and cook until beef is tender enough to cut with a spoon, on Low for 8 to 12 hours, or on High for 4 to 6 hours.',
    description: 'This easy slow cooker beef stew recipe made with potatoes, carrots, celery, broth, herbs, and spices is hearty and comforting. You wont be slow to say "yum"!',
    image: 'https://www.cookingclassy.com/wp-content/uploads/2021/10/beef-stew-30.jpg',
    user_id: '1'
  },
  {
    name: 'Golden Chicken',
    ingredients:  '4 (12 ounce) chicken leg quarters|2 teaspoons kosher salt, plus more to taste|1 tablespoon olive oil|1 cup diced onion|½ cup diced celery|½ cup diced jalapeño pepper|2 teaspoons ground cumin|1 teaspoon smoked paprika|¼ teaspoon ground coriander|¼ teaspoon ground turmeric|½ teaspoon freshly ground black pepper|⅛ teaspoon cayenne pepper|⅛ teaspoon ground cinnamon|3 cloves garlic, crushed|1 tablespoon tomato paste|3 tablespoons white wine vinegar|2 ½ cups cold water|1 teaspoon saffron threads, crushed|1 teaspoon dried currants|1 teaspoon chicken bouillon base',
    direction: 'Place chicken leg quarters on a work surface with the skin facing up. Make a cut into the thickest part of each drumstick, all the way down to the bone. Then make two cuts, about 1 inch apart, right in the center of each thigh. Season both sides generously with 2 teaspoons kosher salt.|Heat oil in a large skillet over high heat. Add chicken, skin-side down, and sear until skin is nicely browned, 5 to 6 minutes. Flip and sear for 2 more minutes. Turn off the heat and remove chicken to a plate, leaving any rendered fat in the skillet.|Turn the heat back on to medium; add onion, celery, jalapeño, and a pinch of salt to the skillet. Sauté until onion turns translucent and veggies have softened, 5 to 7 minutes. Add cumin, paprika, coriander, turmeric, pepper, cayenne, cinnamon, and garlic; cook and stir until garlic has cooked a bit and spices are toasted, about 2 minutes.|Stir in tomato paste, vinegar, water, and saffron. Increase heat to high and stir in currants and chicken base; bring to a simmer.|Add chicken to the skillet, skin-side up, and reduce heat to low. Baste chicken with the liquid. Cover and cook over low or medium-low heat at a gentle simmer for 1 hour.|Flip chicken, cover, and simmer gently until the meat is fork-tender and almost falling off the bone, about 30 more minutes.|Flip and baste chicken again. Increase heat to medium and cook, uncovered, until chicken is very tender and the braising liquid has reduced a bit, 20 to 30 minutes more|Taste the braising liquid and adjust seasoning if needed before serving.',
    description: 'This chicken dish combines elements from three of my favorite chicken recipes: chicken curry, chicken tagine, and a Creole-style smothered chicken.',
    image: 'https://www.keyingredient.com/media/08/8c/2cb94a108d405f0c7513162e3c7621fec0f0.jpg/rh/slow-cooker-golden-chicken.jpg',
    user_id: '2',
  }
]

const seedRecipes = () => Recipes.bulkCreate(recipeData)

module.exports = seedRecipes