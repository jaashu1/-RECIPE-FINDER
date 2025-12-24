// Enhanced Recipe Finder JavaScript

// Recipes Database
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        cuisine: "Italian",
        category: "dinner",
        image: "images/spaghetti-carbonara.svg",
        description: "Creamy pasta dish with eggs, cheese, pancetta, and black pepper.",
        rating: 4.8,
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["pasta", "italian", "creamy"],
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale",
            "2 large eggs",
            "100g Pecorino Romano cheese",
            "Freshly ground black pepper",
            "Salt to taste"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
            "While pasta cooks, heat a large skillet over medium heat and cook pancetta until crispy.",
            "In a bowl, whisk together eggs and grated cheese until well combined.",
            "Reserve 1 cup of pasta water before draining.",
            "Add hot spaghetti to the skillet with pancetta and toss quickly.",
            "Remove from heat and immediately add egg mixture, tossing vigorously to create a creamy sauce.",
            "Add pasta water gradually if sauce is too thick.",
            "Season with black pepper and serve immediately."
        ],
        nutrition: {
            calories: 520,
            protein: 22,
            carbs: 65,
            fat: 18
        }
    },
    {
        id: 2,
        title: "Chicken Teriyaki Bowl",
        cuisine: "Japanese",
        category: "lunch",
        image: "images/chicken-teriyaki.svg",
        description: "Tender chicken glazed with sweet and savory teriyaki sauce over steamed rice.",
        rating: 4.6,
        prepTime: "10 mins",
        cookTime: "20 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["chicken", "asian", "rice"],
        ingredients: [
            "2 chicken breasts",
            "1/4 cup soy sauce",
            "2 tbsp honey",
            "1 tbsp rice vinegar",
            "1 tsp sesame oil",
            "2 cloves garlic, minced",
            "1 tsp ginger, grated",
            "2 cups cooked rice",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Slice chicken breasts into thin strips.",
            "Mix soy sauce, honey, rice vinegar, sesame oil, garlic, and ginger in a bowl.",
            "Marinate chicken in half the sauce for 15 minutes.",
            "Cook chicken in a hot skillet until done, then add remaining sauce.",
            "Simmer until sauce thickens and coats the chicken.",
            "Serve over steamed rice and garnish with sesame seeds."
        ],
        nutrition: {
            calories: 450,
            protein: 35,
            carbs: 55,
            fat: 8
        }
    },
    {
        id: 3,
        title: "Avocado Toast with Poached Egg",
        cuisine: "American",
        category: "breakfast",
        image: "images/avocado-toast.svg",
        description: "Healthy and delicious breakfast with creamy avocado and perfectly poached egg.",
        rating: 4.4,
        prepTime: "5 mins",
        cookTime: "5 mins",
        servings: 1,
        difficulty: "Easy",
        tags: ["healthy", "vegetarian", "quick"],
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "1 egg",
            "1 tsp lemon juice",
            "Salt and pepper",
            "Red pepper flakes (optional)",
            "Cherry tomatoes for garnish"
        ],
        instructions: [
            "Toast bread slices until golden.",
            "Mash avocado with lemon juice, salt, and pepper.",
            "Spread avocado mixture on toast.",
            "Poach egg in simmering water for 3-4 minutes.",
            "Place poached egg on top of avocado toast.",
            "Season with salt, pepper, and red pepper flakes.",
            "Garnish with halved cherry tomatoes."
        ],
        nutrition: {
            calories: 320,
            protein: 12,
            carbs: 28,
            fat: 18
        }
    },
    {
        id: 4,
        title: "Chocolate Lava Cake",
        cuisine: "French",
        category: "dessert",
        image: "images/chocolate-lava-cake.svg",
        description: "Decadent chocolate cake with a molten center that flows out when cut.",
        rating: 4.9,
        prepTime: "10 mins",
        cookTime: "12 mins",
        servings: 2,
        difficulty: "Medium",
        tags: ["chocolate", "dessert", "decadent"],
        ingredients: [
            "100g dark chocolate",
            "50g butter",
            "2 eggs",
            "50g sugar",
            "25g flour",
            "Pinch of salt",
            "Vanilla ice cream for serving"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C).",
            "Melt chocolate and butter together.",
            "Whisk eggs and sugar until pale and fluffy.",
            "Fold in melted chocolate mixture.",
            "Sift in flour and salt, fold gently.",
            "Pour into greased ramekins.",
            "Bake for 12 minutes until edges are set but center is soft.",
            "Let cool for 1 minute, then invert onto plates.",
            "Serve with vanilla ice cream."
        ],
        nutrition: {
            calories: 380,
            protein: 8,
            carbs: 35,
            fat: 24
        }
    },
    {
        id: 5,
        title: "Thai Green Curry",
        cuisine: "Thai",
        category: "dinner",
        image: "images/thai-green-curry.svg",
        description: "Aromatic and spicy Thai curry with coconut milk, vegetables, and your choice of protein.",
        rating: 4.7,
        prepTime: "15 mins",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["curry", "spicy", "coconut"],
        ingredients: [
            "2 tbsp green curry paste",
            "400ml coconut milk",
            "200g chicken or tofu",
            "1 cup bamboo shoots",
            "1 cup bell peppers, sliced",
            "1 cup eggplant, cubed",
            "2 tbsp fish sauce",
            "1 tbsp palm sugar",
            "Thai basil leaves",
            "Jasmine rice for serving"
        ],
        instructions: [
            "Heat oil in a wok and fry curry paste for 1 minute.",
            "Add thick part of coconut milk and simmer until oil separates.",
            "Add protein and cook until done.",
            "Add remaining coconut milk, vegetables, fish sauce, and sugar.",
            "Simmer for 10-15 minutes until vegetables are tender.",
            "Stir in Thai basil leaves.",
            "Serve hot with jasmine rice."
        ],
        nutrition: {
            calories: 420,
            protein: 28,
            carbs: 15,
            fat: 30
        }
    },
    {
        id: 6,
        title: "Greek Salad",
        cuisine: "Greek",
        category: "lunch",
        image: "images/greek-salad.svg",
        description: "Fresh Mediterranean salad with tomatoes, cucumbers, feta, and olive oil dressing.",
        rating: 4.3,
        prepTime: "10 mins",
        cookTime: "0 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["salad", "healthy", "mediterranean"],
        ingredients: [
            "4 tomatoes, chopped",
            "1 cucumber, sliced",
            "1 red onion, thinly sliced",
            "200g feta cheese, cubed",
            "20 kalamata olives",
            "4 tbsp olive oil",
            "2 tbsp red wine vinegar",
            "1 tsp oregano",
            "Salt and pepper"
        ],
        instructions: [
            "Combine tomatoes, cucumber, onion, and olives in a bowl.",
            "Add cubed feta cheese on top.",
            "Whisk together olive oil, vinegar, oregano, salt, and pepper.",
            "Drizzle dressing over salad.",
            "Let sit for 10 minutes to allow flavors to meld.",
            "Serve at room temperature."
        ],
        nutrition: {
            calories: 280,
            protein: 10,
            carbs: 12,
            fat: 22
        }
    },
    {
        id: 7,
        title: "Beef Tacos",
        cuisine: "Mexican",
        category: "dinner",
        image: "images/beef-tacos.svg",
        description: "Authentic Mexican tacos with seasoned ground beef, fresh toppings, and corn tortillas.",
        rating: 4.5,
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["mexican", "beef", "spicy"],
        ingredients: [
            "500g ground beef",
            "8 small corn tortillas",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "1 tbsp chili powder",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and pepper",
            "Fresh cilantro",
            "Lime wedges",
            "Salsa and guacamole"
        ],
        instructions: [
            "Heat oil in a large skillet over medium-high heat.",
            "Add onion and garlic, cook until softened.",
            "Add ground beef and cook until browned.",
            "Stir in chili powder, cumin, paprika, salt, and pepper.",
            "Cook for 2-3 more minutes until spices are fragrant.",
            "Warm tortillas in a dry skillet or microwave.",
            "Fill tortillas with beef mixture.",
            "Top with cilantro, salsa, and guacamole.",
            "Serve with lime wedges."
        ],
        nutrition: {
            calories: 380,
            protein: 28,
            carbs: 25,
            fat: 18
        }
    },
    {
        id: 8,
        title: "Mediterranean Quinoa Bowl",
        cuisine: "Mediterranean",
        category: "lunch",
        image: "images/mediterranean-quinoa.svg",
        description: "Healthy grain bowl with quinoa, roasted vegetables, feta, and lemon-tahini dressing.",
        rating: 4.4,
        prepTime: "10 mins",
        cookTime: "20 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["healthy", "vegetarian", "quinoa"],
        ingredients: [
            "1 cup quinoa",
            "1 zucchini, sliced",
            "1 bell pepper, chopped",
            "1 cup cherry tomatoes, halved",
            "1/2 red onion, sliced",
            "100g feta cheese",
            "2 tbsp olive oil",
            "2 tbsp tahini",
            "1 lemon, juiced",
            "Fresh herbs (parsley, mint)"
        ],
        instructions: [
            "Cook quinoa according to package directions.",
            "Preheat oven to 400°F (200°C).",
            "Toss vegetables with olive oil, salt, and pepper.",
            "Roast vegetables for 15-20 minutes until tender.",
            "Mix tahini with lemon juice and 2 tbsp water for dressing.",
            "Assemble bowls with quinoa, roasted vegetables, and feta.",
            "Drizzle with tahini dressing.",
            "Garnish with fresh herbs."
        ],
        nutrition: {
            calories: 420,
            protein: 15,
            carbs: 45,
            fat: 20
        }
    },
    {
        id: 9,
        title: "Blueberry Pancakes",
        cuisine: "American",
        category: "breakfast",
        image: "images/blueberry-pancakes.svg",
        description: "Fluffy homemade pancakes loaded with fresh blueberries and maple syrup.",
        rating: 4.7,
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["pancakes", "sweet", "blueberries"],
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "2 tbsp sugar",
            "1 tbsp baking powder",
            "1/4 tsp salt",
            "1 1/4 cups milk",
            "1 egg",
            "3 tbsp melted butter",
            "1 cup fresh blueberries",
            "Maple syrup for serving"
        ],
        instructions: [
            "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
            "In another bowl, mix milk, egg, and melted butter.",
            "Combine wet and dry ingredients until just mixed.",
            "Fold in blueberries gently.",
            "Heat a non-stick skillet over medium heat.",
            "Pour 1/4 cup batter for each pancake.",
            "Cook until bubbles form and edges look set.",
            "Flip and cook until golden brown.",
            "Serve with maple syrup."
        ],
        nutrition: {
            calories: 320,
            protein: 8,
            carbs: 50,
            fat: 10
        }
    },
    {
        id: 10,
        title: "Butter Chicken",
        cuisine: "Indian",
        category: "dinner",
        image: "images/butter-chicken.svg",
        description: "Rich and creamy Indian curry with tender chicken in a tomato-based sauce.",
        rating: 4.8,
        prepTime: "20 mins",
        cookTime: "30 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "curry", "creamy"],
        ingredients: [
            "500g chicken breast, cubed",
            "2 tbsp butter",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1 tbsp ginger, grated",
            "2 tbsp garam masala",
            "1 tsp turmeric",
            "1 tsp chili powder",
            "400g crushed tomatoes",
            "200ml heavy cream",
            "Fresh cilantro",
            "Naan bread for serving"
        ],
        instructions: [
            "Marinate chicken with yogurt, ginger, garlic, and spices for 30 minutes.",
            "Heat butter in a large pan over medium heat.",
            "Cook onions until golden brown.",
            "Add marinated chicken and cook until browned.",
            "Stir in crushed tomatoes and simmer for 15 minutes.",
            "Add cream and simmer for another 10 minutes.",
            "Garnish with cilantro.",
            "Serve with naan bread and rice."
        ],
        nutrition: {
            calories: 450,
            protein: 35,
            carbs: 15,
            fat: 28
        }
    },
    {
        id: 11,
        title: "Caprese Salad",
        cuisine: "Italian",
        category: "lunch",
        image: "images/caprese-salad.svg",
        description: "Simple and elegant Italian salad with fresh tomatoes, mozzarella, and basil.",
        rating: 4.2,
        prepTime: "10 mins",
        cookTime: "0 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["italian", "salad", "fresh"],
        ingredients: [
            "4 large tomatoes, sliced",
            "200g fresh mozzarella, sliced",
            "Fresh basil leaves",
            "3 tbsp extra virgin olive oil",
            "2 tbsp balsamic vinegar",
            "Salt and pepper",
            "Balsamic glaze (optional)"
        ],
        instructions: [
            "Arrange tomato and mozzarella slices alternately on a plate.",
            "Tuck basil leaves between the slices.",
            "Drizzle with olive oil and balsamic vinegar.",
            "Season with salt and pepper.",
            "Let sit for 10 minutes to allow flavors to meld.",
            "Drizzle with balsamic glaze if desired.",
            "Serve at room temperature."
        ],
        nutrition: {
            calories: 280,
            protein: 12,
            carbs: 8,
            fat: 22
        }
    },
    {
        id: 12,
        title: "Chocolate Chip Cookies",
        cuisine: "American",
        category: "dessert",
        image: "images/chocolate-chip-cookies.svg",
        description: "Classic homemade chocolate chip cookies that are crispy on the outside and chewy inside.",
        rating: 4.9,
        prepTime: "15 mins",
        cookTime: "12 mins",
        servings: 24,
        difficulty: "Easy",
        tags: ["cookies", "chocolate", "baking"],
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup butter, softened",
            "3/4 cup sugar",
            "3/4 cup brown sugar",
            "2 eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Mix flour, baking soda, and salt in a bowl.",
            "Cream butter and both sugars until fluffy.",
            "Beat in eggs and vanilla.",
            "Gradually add flour mixture.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons onto ungreased baking sheets.",
            "Bake for 9-11 minutes until golden brown.",
            "Cool on baking sheet for 2 minutes before removing."
        ],
        nutrition: {
            calories: 180,
            protein: 2,
            carbs: 25,
            fat: 8
        }
    },
    {
        id: 13,
        title: "Sushi Rolls",
        cuisine: "Japanese",
        category: "lunch",
        image: "images/sushi-rolls.svg",
        description: "Homemade sushi rolls with fresh fish, vegetables, and seasoned rice.",
        rating: 4.6,
        prepTime: "30 mins",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["japanese", "sushi", "seafood"],
        ingredients: [
            "2 cups sushi rice",
            "2 cups water",
            "1/4 cup rice vinegar",
            "2 tbsp sugar",
            "1 tsp salt",
            "4 nori sheets",
            "200g fresh salmon or tuna",
            "1 cucumber, julienned",
            "1 avocado, sliced",
            "Soy sauce and wasabi for serving"
        ],
        instructions: [
            "Cook rice and mix with vinegar, sugar, and salt.",
            "Let rice cool to room temperature.",
            "Place nori sheet on sushi mat, shiny side down.",
            "Spread rice evenly, leaving 1 inch border.",
            "Arrange fish and vegetables in a line across center.",
            "Roll tightly using the mat.",
            "Slice into 8 pieces.",
            "Serve with soy sauce and wasabi."
        ],
        nutrition: {
            calories: 350,
            protein: 20,
            carbs: 50,
            fat: 8
        }
    },
    {
        id: 14,
        title: "Vegetable Stir Fry",
        cuisine: "Chinese",
        category: "dinner",
        image: "images/vegetable-stir-fry.svg",
        description: "Colorful vegetable stir fry with tofu in a savory soy-ginger sauce.",
        rating: 4.3,
        prepTime: "15 mins",
        cookTime: "10 mins",
        servings: 3,
        difficulty: "Easy",
        tags: ["chinese", "vegetarian", "healthy"],
        ingredients: [
            "200g firm tofu, cubed",
            "2 cups broccoli florets",
            "1 bell pepper, sliced",
            "1 carrot, julienned",
            "1 cup snap peas",
            "2 cloves garlic, minced",
            "1 tbsp ginger, grated",
            "3 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tbsp cornstarch",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Press tofu and cut into cubes.",
            "Heat oil in wok over high heat.",
            "Fry tofu until golden, then remove.",
            "Add garlic and ginger, stir for 30 seconds.",
            "Add vegetables and stir fry for 3-4 minutes.",
            "Return tofu to wok.",
            "Mix soy sauce, sesame oil, and cornstarch slurry.",
            "Add sauce and cook until thickened.",
            "Garnish with sesame seeds.",
            "Serve over rice."
        ],
        nutrition: {
            calories: 220,
            protein: 12,
            carbs: 18,
            fat: 12
        }
    },
    {
        id: 15,
        title: "French Toast",
        cuisine: "French",
        category: "breakfast",
        image: "images/french-toast.svg",
        description: "Golden and crispy French toast topped with powdered sugar and fresh berries.",
        rating: 4.5,
        prepTime: "5 mins",
        cookTime: "10 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["french", "sweet", "bread"],
        ingredients: [
            "4 thick slices bread",
            "2 eggs",
            "1/2 cup milk",
            "1 tsp vanilla extract",
            "1/2 tsp cinnamon",
            "2 tbsp butter",
            "Powdered sugar",
            "Fresh berries",
            "Maple syrup"
        ],
        instructions: [
            "Whisk eggs, milk, vanilla, and cinnamon.",
            "Heat butter in a skillet over medium heat.",
            "Dip bread slices in egg mixture, coating both sides.",
            "Cook bread until golden brown on both sides.",
            "Dust with powdered sugar.",
            "Top with fresh berries.",
            "Serve with maple syrup."
        ],
        nutrition: {
            calories: 380,
            protein: 12,
            carbs: 45,
            fat: 16
        }
    },
    {
        id: 16,
        title: "Pad Thai",
        cuisine: "Thai",
        category: "dinner",
        image: "images/pad-thai.svg",
        description: "Authentic Thai stir-fried noodles with shrimp, tofu, and tamarind sauce.",
        rating: 4.7,
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: 3,
        difficulty: "Medium",
        tags: ["thai", "noodles", "spicy"],
        ingredients: [
            "200g rice noodles",
            "200g shrimp, peeled",
            "100g firm tofu, cubed",
            "2 eggs",
            "2 cloves garlic, minced",
            "2 tbsp tamarind paste",
            "1 tbsp fish sauce",
            "1 tbsp soy sauce",
            "1 tbsp palm sugar",
            "Bean sprouts and peanuts for garnish",
            "Lime wedges"
        ],
        instructions: [
            "Soak rice noodles in hot water for 10 minutes.",
            "Heat oil in wok over high heat.",
            "Cook shrimp until pink, then remove.",
            "Scramble eggs in the wok, then remove.",
            "Add garlic and tofu, stir fry for 2 minutes.",
            "Add drained noodles and toss.",
            "Mix tamarind, fish sauce, soy sauce, and sugar.",
            "Add sauce to noodles and toss.",
            "Return shrimp and eggs to wok.",
            "Garnish with bean sprouts, peanuts, and lime."
        ],
        nutrition: {
            calories: 420,
            protein: 25,
            carbs: 55,
            fat: 10
        }
    },
    {
        id: 17,
        title: "Caesar Salad",
        cuisine: "American",
        category: "lunch",
        image: "images/caesar-salad.svg",
        description: "Classic Caesar salad with crisp romaine, parmesan, croutons, and creamy dressing.",
        rating: 4.4,
        prepTime: "15 mins",
        cookTime: "0 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["salad", "classic", "creamy"],
        ingredients: [
            "1 head romaine lettuce",
            "1/2 cup croutons",
            "1/4 cup parmesan cheese",
            "2 tbsp Caesar dressing",
            "1 tbsp olive oil",
            "1 tsp lemon juice",
            "1 clove garlic, minced",
            "Anchovy fillets (optional)",
            "Fresh ground pepper"
        ],
        instructions: [
            "Wash and chop romaine lettuce.",
            "Rub bowl with garlic clove.",
            "Add lettuce to bowl.",
            "Mix dressing with olive oil and lemon juice.",
            "Toss lettuce with dressing.",
            "Add croutons and parmesan.",
            "Toss gently.",
            "Season with black pepper.",
            "Serve immediately."
        ],
        nutrition: {
            calories: 220,
            protein: 8,
            carbs: 12,
            fat: 16
        }
    },
    {
        id: 18,
        title: "Banana Bread",
        cuisine: "American",
        category: "dessert",
        image: "images/banana-bread.svg",
        description: "Moist and flavorful banana bread with walnuts and a hint of cinnamon.",
        rating: 4.6,
        prepTime: "15 mins",
        cookTime: "60 mins",
        servings: 8,
        difficulty: "Easy",
        tags: ["bread", "banana", "baking"],
        ingredients: [
            "3 ripe bananas, mashed",
            "1/3 cup melted butter",
            "1/2 cup sugar",
            "1 egg, beaten",
            "1 tsp vanilla extract",
            "1 tsp baking soda",
            "Pinch of salt",
            "1 1/2 cups all-purpose flour",
            "1/2 cup chopped walnuts"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "Grease a 4x8 inch loaf pan.",
            "Mix mashed bananas with melted butter.",
            "Mix in sugar, egg, and vanilla.",
            "Sprinkle baking soda and salt over mixture.",
            "Add flour and mix until just combined.",
            "Fold in walnuts.",
            "Pour into prepared pan.",
            "Bake for 50-60 minutes until toothpick comes out clean.",
            "Cool in pan for 10 minutes before removing."
        ],
        nutrition: {
            calories: 280,
            protein: 5,
            carbs: 40,
            fat: 12
        }
    },
    {
        id: 19,
        title: "Scrambled Eggs with Smoked Salmon",
        cuisine: "American",
        category: "breakfast",
        image: "images/scrambled-eggs-salmon.svg",
        description: "Creamy scrambled eggs topped with smoked salmon and fresh herbs.",
        rating: 4.6,
        prepTime: "5 mins",
        cookTime: "5 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["eggs", "salmon", "protein"],
        ingredients: [
            "4 large eggs",
            "2 tbsp cream or milk",
            "4 oz smoked salmon",
            "1 tbsp butter",
            "Fresh dill or chives",
            "Salt and pepper",
            "Lemon wedges"
        ],
        instructions: [
            "Whisk eggs with cream, salt, and pepper.",
            "Heat butter in a non-stick pan over medium heat.",
            "Add egg mixture and stir gently until just set.",
            "Remove from heat while still slightly runny.",
            "Top with smoked salmon and fresh herbs.",
            "Serve with lemon wedges."
        ],
        nutrition: {
            calories: 320,
            protein: 25,
            carbs: 3,
            fat: 22
        }
    },
    {
        id: 20,
        title: "Shakshuka",
        cuisine: "Middle Eastern",
        category: "breakfast",
        image: "images/shakshuka.svg",
        description: "North African eggs poached in spiced tomato sauce with peppers and onions.",
        rating: 4.7,
        prepTime: "10 mins",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["eggs", "spicy", "tomato"],
        ingredients: [
            "6 large eggs",
            "1 onion, diced",
            "1 red bell pepper, diced",
            "4 cloves garlic, minced",
            "1 can crushed tomatoes",
            "2 tsp cumin",
            "1 tsp paprika",
            "1/2 tsp cayenne pepper",
            "Fresh cilantro",
            "Olive oil"
        ],
        instructions: [
            "Heat olive oil in a large skillet over medium heat.",
            "Sauté onion and bell pepper until softened.",
            "Add garlic and spices, cook for 1 minute.",
            "Add crushed tomatoes and simmer for 10 minutes.",
            "Make 6 wells in the sauce and crack eggs into them.",
            "Cover and cook until eggs are set.",
            "Garnish with cilantro and serve with bread."
        ],
        nutrition: {
            calories: 220,
            protein: 12,
            carbs: 15,
            fat: 12
        }
    },
    {
        id: 21,
        title: "Huevos Rancheros",
        cuisine: "Mexican",
        category: "breakfast",
        image: "images/huevos-rancheros.svg",
        description: "Mexican breakfast with fried eggs on corn tortillas with salsa and beans.",
        rating: 4.5,
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["eggs", "mexican", "beans"],
        ingredients: [
            "4 corn tortillas",
            "4 large eggs",
            "1 cup refried beans or black beans",
            "1 cup salsa",
            "1 avocado, sliced",
            "1/4 cup crumbled queso fresco",
            "Fresh cilantro",
            "Lime wedges"
        ],
        instructions: [
            "Warm tortillas in a dry skillet or microwave.",
            "Fry eggs to desired doneness.",
            "Heat beans in a small saucepan.",
            "Assemble: tortilla, beans, fried egg, salsa.",
            "Top with avocado, cheese, and cilantro.",
            "Serve with lime wedges."
        ],
        nutrition: {
            calories: 380,
            protein: 18,
            carbs: 35,
            fat: 18
        }
    },
    {
        id: 22,
        title: "Overnight Oats with Berries",
        cuisine: "American",
        category: "breakfast",
        image: "images/overnight-oats.svg",
        description: "No-cook breakfast with oats, yogurt, and fresh berries prepared the night before.",
        rating: 4.4,
        prepTime: "5 mins",
        cookTime: "0 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["oats", "healthy", "no-cook"],
        ingredients: [
            "1 cup rolled oats",
            "1 cup Greek yogurt",
            "1 cup milk or almond milk",
            "1 cup mixed berries",
            "2 tbsp chia seeds",
            "2 tbsp honey or maple syrup",
            "1 tsp vanilla extract",
            "Sliced almonds for topping"
        ],
        instructions: [
            "Mix oats, yogurt, milk, chia seeds, honey, and vanilla.",
            "Divide into 2 jars and refrigerate overnight.",
            "In the morning, top with fresh berries.",
            "Add sliced almonds if desired.",
            "Enjoy cold or at room temperature."
        ],
        nutrition: {
            calories: 280,
            protein: 15,
            carbs: 45,
            fat: 6
        }
    },
    {
        id: 23,
        title: "Korean Bibimbap",
        cuisine: "Korean",
        category: "lunch",
        image: "images/korean-bibimbap.svg",
        description: "Korean rice bowl with vegetables, meat, and gochujang sauce.",
        rating: 4.8,
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: 2,
        difficulty: "Medium",
        tags: ["korean", "rice", "vegetables"],
        ingredients: [
            "2 cups cooked rice",
            "200g ground beef or tofu",
            "2 carrots, julienned",
            "1 zucchini, sliced",
            "2 cups spinach",
            "2 eggs",
            "2 tbsp gochujang",
            "1 tbsp sesame oil",
            "Soy sauce",
            "Sesame seeds"
        ],
        instructions: [
            "Cook rice and keep warm.",
            "Stir-fry beef with soy sauce until cooked.",
            "Sauté vegetables separately with sesame oil.",
            "Fry eggs sunny-side up.",
            "Arrange rice in bowls, top with vegetables and meat.",
            "Place fried egg on top.",
            "Mix gochujang with a little water for sauce.",
            "Drizzle sauce over bowl and garnish with sesame seeds."
        ],
        nutrition: {
            calories: 450,
            protein: 25,
            carbs: 55,
            fat: 15
        }
    },
    {
        id: 24,
        title: "Falafel Wrap",
        cuisine: "Middle Eastern",
        category: "lunch",
        image: "images/falafel-wrap.svg",
        description: "Crispy falafel balls wrapped in pita with tahini sauce and vegetables.",
        rating: 4.6,
        prepTime: "15 mins",
        cookTime: "10 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["falafel", "middle-eastern", "vegetarian"],
        ingredients: [
            "1 can chickpeas, drained",
            "1 onion, chopped",
            "2 cloves garlic",
            "1/4 cup fresh parsley",
            "1/4 cup fresh cilantro",
            "2 tbsp flour",
            "1 tsp cumin",
            "1 tsp coriander",
            "4 pita breads",
            "Tahini sauce",
            "Lettuce, tomato, cucumber"
        ],
        instructions: [
            "Blend chickpeas, onion, garlic, herbs, and spices.",
            "Mix in flour and form into balls.",
            "Fry in hot oil until golden brown.",
            "Warm pita breads.",
            "Fill with falafel, vegetables, and tahini sauce.",
            "Roll up and serve immediately."
        ],
        nutrition: {
            calories: 380,
            protein: 12,
            carbs: 50,
            fat: 14
        }
    },
    {
        id: 25,
        title: "Chicken Shawarma",
        cuisine: "Middle Eastern",
        category: "lunch",
        image: "images/chicken-shawarma.svg",
        description: "Marinated chicken with Middle Eastern spices served with rice or in pita.",
        rating: 4.7,
        prepTime: "15 mins",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["chicken", "middle-eastern", "spicy"],
        ingredients: [
            "500g chicken thighs",
            "2 tbsp yogurt",
            "2 cloves garlic, minced",
            "1 tbsp lemon juice",
            "1 tsp cumin",
            "1 tsp paprika",
            "1 tsp turmeric",
            "1/2 tsp cinnamon",
            "Salt and pepper",
            "Olive oil"
        ],
        instructions: [
            "Mix marinade ingredients and coat chicken.",
            "Marinate for at least 1 hour.",
            "Grill or bake chicken until cooked through.",
            "Slice chicken thinly.",
            "Serve with rice, pita, or salad.",
            "Garnish with fresh herbs and lemon."
        ],
        nutrition: {
            calories: 280,
            protein: 35,
            carbs: 5,
            fat: 12
        }
    },
    {
        id: 26,
        title: "Vietnamese Pho",
        cuisine: "Vietnamese",
        category: "lunch",
        image: "images/vietnamese-pho.svg",
        description: "Fragrant Vietnamese noodle soup with beef, herbs, and rice noodles.",
        rating: 4.9,
        prepTime: "20 mins",
        cookTime: "2 hours",
        servings: 4,
        difficulty: "Medium",
        tags: ["vietnamese", "noodles", "soup"],
        ingredients: [
            "500g beef bones",
            "300g beef sirloin",
            "200g rice noodles",
            "1 onion, charred",
            "2 inches ginger, charred",
            "2 star anise",
            "1 cinnamon stick",
            "2 tbsp fish sauce",
            "Fresh herbs (basil, cilantro)",
            "Bean sprouts",
            "Lime wedges"
        ],
        instructions: [
            "Roast bones and make rich broth with spices.",
            "Simmer for 2 hours, skimming foam.",
            "Cook rice noodles according to package.",
            "Slice beef thinly.",
            "Assemble bowls: noodles, hot broth, raw beef.",
            "Beef will cook in hot broth.",
            "Top with herbs, sprouts, and lime."
        ],
        nutrition: {
            calories: 320,
            protein: 28,
            carbs: 35,
            fat: 8
        }
    },
    {
        id: 27,
        title: "Moroccan Tagine",
        cuisine: "Moroccan",
        category: "dinner",
        image: "images/moroccan-tagine.svg",
        description: "Slow-cooked Moroccan stew with chicken, apricots, and warm spices.",
        rating: 4.7,
        prepTime: "15 mins",
        cookTime: "45 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["moroccan", "chicken", "slow-cook"],
        ingredients: [
            "500g chicken thighs",
            "1 onion, sliced",
            "2 carrots, chopped",
            "1 cup dried apricots",
            "1/2 cup almonds",
            "2 tsp cumin",
            "1 tsp cinnamon",
            "1 tsp ginger",
            "1 cup chicken broth",
            "Couscous for serving"
        ],
        instructions: [
            "Brown chicken in a tagine or heavy pot.",
            "Add onions and spices, cook until fragrant.",
            "Add carrots, apricots, and broth.",
            "Simmer covered for 35-40 minutes.",
            "Stir in almonds in the last 5 minutes.",
            "Serve over couscous with harissa if desired."
        ],
        nutrition: {
            calories: 420,
            protein: 32,
            carbs: 35,
            fat: 16
        }
    },
    {
        id: 28,
        title: "Paella",
        cuisine: "Spanish",
        category: "dinner",
        image: "images/paella.svg",
        description: "Spanish rice dish with seafood, chicken, and saffron.",
        rating: 4.8,
        prepTime: "20 mins",
        cookTime: "30 mins",
        servings: 6,
        difficulty: "Medium",
        tags: ["spanish", "seafood", "rice"],
        ingredients: [
            "2 cups short-grain rice",
            "500g mixed seafood (shrimp, mussels, clams)",
            "200g chicken, cubed",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 red bell pepper, sliced",
            "1 tsp saffron threads",
            "4 cups chicken broth",
            "1 cup peas",
            "Lemon wedges"
        ],
        instructions: [
            "Heat oil in a large paella pan.",
            "Cook chicken until browned, then remove.",
            "Sauté onion, garlic, and pepper.",
            "Add rice and saffron, stir to coat.",
            "Add hot broth and bring to boil.",
            "Arrange seafood and chicken on top.",
            "Simmer until rice is cooked and seafood done.",
            "Sprinkle with peas and serve with lemon."
        ],
        nutrition: {
            calories: 380,
            protein: 28,
            carbs: 50,
            fat: 8
        }
    },
    {
        id: 29,
        title: "Schnitzel",
        cuisine: "German",
        category: "dinner",
        image: "images/schnitzel.svg",
        description: "Breaded and fried veal or pork cutlet, a German classic.",
        rating: 4.5,
        prepTime: "15 mins",
        cookTime: "10 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["german", "breaded", "fried"],
        ingredients: [
            "4 veal or pork cutlets",
            "1 cup flour",
            "2 eggs, beaten",
            "1 cup breadcrumbs",
            "Salt and pepper",
            "Vegetable oil for frying",
            "Lemon wedges",
            "Fresh parsley"
        ],
        instructions: [
            "Pound cutlets thin between plastic wrap.",
            "Season with salt and pepper.",
            "Dredge in flour, then egg, then breadcrumbs.",
            "Heat oil in a large skillet.",
            "Fry cutlets until golden brown on both sides.",
            "Drain on paper towels.",
            "Serve with lemon wedges and parsley."
        ],
        nutrition: {
            calories: 420,
            protein: 35,
            carbs: 25,
            fat: 18
        }
    },
    {
        id: 30,
        title: "Fish and Chips",
        cuisine: "British",
        category: "dinner",
        image: "images/fish-chips.svg",
        description: "Classic British dish with beer-battered fish and crispy fries.",
        rating: 4.6,
        prepTime: "15 mins",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["british", "fish", "fried"],
        ingredients: [
            "4 white fish fillets (cod or haddock)",
            "1 cup flour",
            "1 cup beer",
            "1 tsp baking powder",
            "4 large potatoes",
            "Vegetable oil for frying",
            "Salt and vinegar",
            "Tartar sauce"
        ],
        instructions: [
            "Cut potatoes into fries and soak in water.",
            "Mix flour, beer, and baking powder for batter.",
            "Heat oil to 350°F (175°C).",
            "Fry potatoes until golden, drain.",
            "Dip fish in batter and fry until golden.",
            "Season with salt and malt vinegar.",
            "Serve with tartar sauce."
        ],
        nutrition: {
            calories: 520,
            protein: 28,
            carbs: 55,
            fat: 22
        }
    },
    {
        id: 31,
        title: "Feijoada",
        cuisine: "Brazilian",
        category: "dinner",
        image: "images/feijoada.svg",
        description: "Brazilian black bean stew with pork and served with rice.",
        rating: 4.7,
        prepTime: "30 mins",
        cookTime: "3 hours",
        servings: 8,
        difficulty: "Medium",
        tags: ["brazilian", "beans", "pork"],
        ingredients: [
            "1 lb black beans",
            "1 lb pork ribs",
            "1 lb pork shoulder",
            "200g smoked sausage",
            "1 onion, chopped",
            "4 cloves garlic, minced",
            "2 bay leaves",
            "Orange slices",
            "Cooked rice for serving"
        ],
        instructions: [
            "Soak beans overnight, then drain.",
            "Cook pork meats in a large pot until tender.",
            "Add beans, onion, garlic, and bay leaves.",
            "Simmer for 2-3 hours until beans are soft.",
            "Season with salt and serve with rice.",
            "Garnish with orange slices."
        ],
        nutrition: {
            calories: 480,
            protein: 32,
            carbs: 45,
            fat: 18
        }
    },
    {
        id: 32,
        title: "Tiramisu",
        cuisine: "Italian",
        category: "dessert",
        image: "images/tiramisu.svg",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
        rating: 4.9,
        prepTime: "20 mins",
        cookTime: "0 mins",
        servings: 8,
        difficulty: "Medium",
        tags: ["italian", "coffee", "creamy"],
        ingredients: [
            "6 egg yolks",
            "3/4 cup sugar",
            "1 cup mascarpone cheese",
            "1 1/2 cups heavy cream",
            "2 cups strong coffee, cooled",
            "24 ladyfinger cookies",
            "Cocoa powder for dusting",
            "Dark chocolate shavings"
        ],
        instructions: [
            "Beat egg yolks and sugar until pale.",
            "Mix in mascarpone until smooth.",
            "Whip cream and fold into mascarpone mixture.",
            "Dip ladyfingers in coffee and layer in dish.",
            "Alternate with cream mixture.",
            "Refrigerate for at least 4 hours.",
            "Dust with cocoa and chocolate shavings before serving."
        ],
        nutrition: {
            calories: 380,
            protein: 8,
            carbs: 35,
            fat: 22
        }
    },
    {
        id: 33,
        title: "Baklava",
        cuisine: "Greek",
        category: "dessert",
        image: "images/baklava.svg",
        description: "Sweet pastry made of layers of filo filled with nuts and honey syrup.",
        rating: 4.8,
        prepTime: "30 mins",
        cookTime: "45 mins",
        servings: 24,
        difficulty: "Medium",
        tags: ["greek", "nuts", "honey"],
        ingredients: [
            "1 lb filo pastry",
            "2 cups mixed nuts (walnuts, pistachios)",
            "1 cup butter, melted",
            "1 cup sugar",
            "1 cup honey",
            "1 cup water",
            "1 cinnamon stick",
            "Lemon slices"
        ],
        instructions: [
            "Chop nuts finely and mix with cinnamon.",
            "Layer filo sheets in a baking dish, brushing with butter.",
            "Sprinkle nut mixture between layers.",
            "Cut into diamond shapes before baking.",
            "Bake at 350°F for 45 minutes until golden.",
            "Make syrup with honey, sugar, water, and lemon.",
            "Pour hot syrup over cooled baklava."
        ],
        nutrition: {
            calories: 280,
            protein: 4,
            carbs: 32,
            fat: 16
        }
    },
    {
        id: 34,
        title: "Churros",
        cuisine: "Spanish",
        category: "dessert",
        image: "images/churros.svg",
        description: "Crispy fried dough rolled in cinnamon sugar, served with chocolate sauce.",
        rating: 4.6,
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 6,
        difficulty: "Medium",
        tags: ["spanish", "fried", "cinnamon"],
        ingredients: [
            "1 cup water",
            "2 tbsp sugar",
            "1/2 tsp salt",
            "2 tbsp vegetable oil",
            "1 cup flour",
            "1 tsp vanilla extract",
            "Oil for frying",
            "1 cup sugar + 2 tsp cinnamon",
            "Chocolate sauce for dipping"
        ],
        instructions: [
            "Heat water, sugar, salt, and oil to boiling.",
            "Remove from heat and stir in flour until dough forms.",
            "Pipe dough into hot oil using a star tip.",
            "Fry until golden brown.",
            "Roll in cinnamon sugar mixture.",
            "Serve warm with chocolate sauce."
        ],
        nutrition: {
            calories: 220,
            protein: 3,
            carbs: 35,
            fat: 8
        }
    },
    {
        id: 35,
        title: "Panna Cotta",
        cuisine: "Italian",
        category: "dessert",
        image: "images/panna-cotta.svg",
        description: "Silky smooth Italian custard topped with berry compote.",
        rating: 4.5,
        prepTime: "10 mins",
        cookTime: "5 mins",
        servings: 6,
        difficulty: "Easy",
        tags: ["italian", "custard", "creamy"],
        ingredients: [
            "2 cups heavy cream",
            "1/2 cup sugar",
            "1 vanilla bean or 1 tsp extract",
            "2 tsp gelatin powder",
            "2 tbsp cold water",
            "Mixed berries for topping",
            "Mint leaves for garnish"
        ],
        instructions: [
            "Sprinkle gelatin over cold water to soften.",
            "Heat cream, sugar, and vanilla until sugar dissolves.",
            "Remove from heat and stir in softened gelatin.",
            "Pour into molds and refrigerate for 4 hours.",
            "Make berry compote by cooking berries with sugar.",
            "Unmold panna cotta and top with compote."
        ],
        nutrition: {
            calories: 280,
            protein: 3,
            carbs: 25,
            fat: 18
        }
    },
    {
        id: 36,
        title: "Kimchi Fried Rice",
        cuisine: "Korean",
        category: "lunch",
        image: "images/kimchi-fried-rice.svg",
        description: "Spicy Korean fried rice with kimchi, vegetables, and a fried egg.",
        rating: 4.7,
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["korean", "spicy", "rice"],
        ingredients: [
            "2 cups cooked rice",
            "1 cup kimchi, chopped",
            "1/2 cup kimchi juice",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "2 green onions, chopped",
            "2 tbsp gochujang",
            "1 tbsp sesame oil",
            "2 eggs",
            "Sesame seeds"
        ],
        instructions: [
            "Heat oil in a wok or large skillet.",
            "Sauté onion and garlic until fragrant.",
            "Add kimchi and cook for 2 minutes.",
            "Add rice and kimchi juice, stir well.",
            "Mix in gochujang and green onions.",
            "Push rice to sides and fry eggs in center.",
            "Mix everything together and garnish with sesame seeds."
        ],
        nutrition: {
            calories: 380,
            protein: 12,
            carbs: 55,
            fat: 12
        }
    },
    {
        id: 37,
        title: "Ratatouille",
        cuisine: "French",
        category: "dinner",
        image: "images/ratatouille.svg",
        description: "Provençal vegetable stew with eggplant, zucchini, and tomatoes.",
        rating: 4.4,
        prepTime: "20 mins",
        cookTime: "40 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["french", "vegetarian", "stew"],
        ingredients: [
            "1 eggplant, cubed",
            "2 zucchini, sliced",
            "1 red bell pepper, chopped",
            "1 yellow bell pepper, chopped",
            "4 tomatoes, chopped",
            "1 onion, sliced",
            "2 cloves garlic, minced",
            "2 tbsp olive oil",
            "Fresh thyme and basil",
            "Salt and pepper"
        ],
        instructions: [
            "Sauté onion and garlic in olive oil.",
            "Add eggplant and cook until softened.",
            "Add zucchini and bell peppers.",
            "Stir in tomatoes and herbs.",
            "Simmer covered for 30 minutes.",
            "Season with salt and pepper.",
            "Serve hot or at room temperature."
        ],
        nutrition: {
            calories: 180,
            protein: 5,
            carbs: 25,
            fat: 8
        }
    },
    {
        id: 38,
        title: "Pierogi",
        cuisine: "Polish",
        category: "dinner",
        image: "images/pierogi.svg",
        description: "Polish dumplings filled with potato and cheese, served with sour cream.",
        rating: 4.6,
        prepTime: "45 mins",
        cookTime: "20 mins",
        servings: 6,
        difficulty: "Medium",
        tags: ["polish", "dumplings", "potato"],
        ingredients: [
            "2 cups flour",
            "1 egg",
            "1/2 cup water",
            "2 cups mashed potatoes",
            "1 cup cheddar cheese, grated",
            "1 onion, finely chopped",
            "Salt and pepper",
            "Butter for frying",
            "Sour cream for serving"
        ],
        instructions: [
            "Mix flour, egg, and water for dough.",
            "Knead until smooth, let rest.",
            "Mix potatoes, cheese, and onion for filling.",
            "Roll out dough and cut circles.",
            "Fill with potato mixture and seal edges.",
            "Boil pierogi until they float.",
            "Fry in butter until golden.",
            "Serve with sour cream."
        ],
        nutrition: {
            calories: 320,
            protein: 10,
            carbs: 45,
            fat: 12
        }
    },
    {
        id: 39,
        title: "Miso Soup",
        cuisine: "Japanese",
        category: "lunch",
        image: "images/miso-soup.svg",
        description: "Traditional Japanese soup with miso paste, tofu, and seaweed.",
        rating: 4.3,
        prepTime: "5 mins",
        cookTime: "10 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["japanese", "soup", "healthy"],
        ingredients: [
            "4 cups dashi stock",
            "3 tbsp miso paste",
            "100g firm tofu, cubed",
            "2 green onions, chopped",
            "1 sheet nori, cut into strips",
            "1 tbsp wakame seaweed",
            "Silken tofu (optional)"
        ],
        instructions: [
            "Heat dashi stock to simmering.",
            "Dissolve miso paste in a small amount of hot stock.",
            "Add miso mixture back to pot.",
            "Add tofu and seaweed.",
            "Simmer for 2-3 minutes.",
            "Garnish with green onions and nori strips.",
            "Serve immediately."
        ],
        nutrition: {
            calories: 80,
            protein: 6,
            carbs: 8,
            fat: 3
        }
    },
    {
        id: 40,
        title: "Borscht",
        cuisine: "Russian",
        category: "dinner",
        image: "images/borscht.svg",
        description: "Ukrainian beet soup with cabbage, potatoes, and sour cream.",
        rating: 4.5,
        prepTime: "20 mins",
        cookTime: "45 mins",
        servings: 6,
        difficulty: "Medium",
        tags: ["russian", "soup", "beets"],
        ingredients: [
            "3 beets, peeled and grated",
            "2 carrots, grated",
            "1 onion, chopped",
            "2 potatoes, cubed",
            "2 cups cabbage, shredded",
            "4 cups vegetable broth",
            "2 tbsp tomato paste",
            "2 tbsp vinegar",
            "Sour cream for serving",
            "Fresh dill"
        ],
        instructions: [
            "Sauté onion in oil until translucent.",
            "Add beets and carrots, cook for 5 minutes.",
            "Add potatoes, cabbage, and broth.",
            "Bring to boil, then simmer for 30 minutes.",
            "Stir in tomato paste and vinegar.",
            "Season with salt and pepper.",
            "Serve with sour cream and dill."
        ],
        nutrition: {
            calories: 150,
            protein: 4,
            carbs: 28,
            fat: 3
        }
    },
    {
        id: 41,
        title: "Ceviche",
        cuisine: "Peruvian",
        category: "lunch",
        image: "images/ceviche.svg",
        description: "Fresh fish marinated in lime juice with onions, cilantro, and chili.",
        rating: 4.6,
        prepTime: "20 mins",
        cookTime: "0 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["peruvian", "seafood", "citrus"],
        ingredients: [
            "500g fresh white fish",
            "1 red onion, thinly sliced",
            "2 limes, juiced",
            "2 lemons, juiced",
            "1 chili pepper, minced",
            "1/4 cup fresh cilantro",
            "1 cucumber, diced",
            "Salt to taste",
            "Corn kernels",
            "Sweet potato"
        ],
        instructions: [
            "Cut fish into small cubes.",
            "Mix with lime and lemon juice.",
            "Add onion, chili, and cilantro.",
            "Let marinate for 15-20 minutes.",
            "Add cucumber and season with salt.",
            "Serve with corn and sweet potato.",
            "Garnish with additional cilantro."
        ],
        nutrition: {
            calories: 180,
            protein: 28,
            carbs: 12,
            fat: 2
        }
    },
    {
        id: 42,
        title: "Goulash",
        cuisine: "Hungarian",
        category: "dinner",
        image: "images/goulash.svg",
        description: "Hungarian beef stew with paprika, served over egg noodles.",
        rating: 4.7,
        prepTime: "15 mins",
        cookTime: "2 hours",
        servings: 6,
        difficulty: "Medium",
        tags: ["hungarian", "beef", "stew"],
        ingredients: [
            "1 kg beef chuck, cubed",
            "2 onions, chopped",
            "3 cloves garlic, minced",
            "2 tbsp sweet paprika",
            "1 tsp caraway seeds",
            "2 carrots, sliced",
            "2 potatoes, cubed",
            "2 cups beef broth",
            "1 tbsp tomato paste",
            "Sour cream for serving"
        ],
        instructions: [
            "Brown beef in a large pot.",
            "Add onions and garlic, cook until softened.",
            "Stir in paprika and caraway seeds.",
            "Add vegetables, broth, and tomato paste.",
            "Simmer covered for 1.5-2 hours.",
            "Season with salt and pepper.",
            "Serve with sour cream over noodles."
        ],
        nutrition: {
            calories: 380,
            protein: 35,
            carbs: 20,
            fat: 18
        }
    },
    {
        id: 43,
        title: "Frittata",
        cuisine: "Italian",
        category: "breakfast",
        image: "images/frittata.svg",
        description: "Italian open-faced omelette with vegetables and cheese.",
        rating: 4.4,
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["italian", "eggs", "vegetables"],
        ingredients: [
            "8 eggs",
            "1/2 cup milk",
            "1 zucchini, diced",
            "1 bell pepper, diced",
            "1 onion, chopped",
            "1 cup spinach",
            "1/2 cup cheese, grated",
            "2 tbsp olive oil",
            "Salt and pepper",
            "Fresh herbs"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Sauté vegetables in olive oil until tender.",
            "Whisk eggs with milk, salt, and pepper.",
            "Add cheese and herbs to egg mixture.",
            "Pour over vegetables in oven-safe skillet.",
            "Cook on stovetop for 5 minutes.",
            "Transfer to oven and bake for 10 minutes.",
            "Serve hot or at room temperature."
        ],
        nutrition: {
            calories: 240,
            protein: 16,
            carbs: 8,
            fat: 16
        }
    },
    {
        id: 44,
        title: "Bao Buns",
        cuisine: "Chinese",
        category: "lunch",
        image: "images/bao-buns.svg",
        description: "Steamed Chinese buns filled with barbecue pork or vegetables.",
        rating: 4.8,
        prepTime: "2 hours",
        cookTime: "15 mins",
        servings: 8,
        difficulty: "Medium",
        tags: ["chinese", "steamed", "pork"],
        ingredients: [
            "2 cups flour",
            "1 tsp instant yeast",
            "1 tsp sugar",
            "3/4 cup warm water",
            "300g char siu pork",
            "Hoisin sauce",
            "Cucumber slices",
            "Green onions",
            "Sesame seeds"
        ],
        instructions: [
            "Mix flour, yeast, sugar, and water for dough.",
            "Knead for 10 minutes, let rise for 1 hour.",
            "Punch down and divide into 8 portions.",
            "Roll each into a circle and fold into bun shape.",
            "Let rise for 30 minutes.",
            "Steam for 12-15 minutes.",
            "Fill with pork, sauce, and vegetables."
        ],
        nutrition: {
            calories: 280,
            protein: 12,
            carbs: 45,
            fat: 6
        }
    },
    {
        id: 45,
        title: "Spanakopita",
        cuisine: "Greek",
        category: "lunch",
        image: "images/spanakopita.svg",
        description: "Greek spinach and feta pie wrapped in flaky phyllo pastry.",
        rating: 4.6,
        prepTime: "20 mins",
        cookTime: "40 mins",
        servings: 6,
        difficulty: "Medium",
        tags: ["greek", "spinach", "pie"],
        ingredients: [
            "1 lb spinach, chopped",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "200g feta cheese",
            "2 eggs",
            "1/4 cup olive oil",
            "1/2 lb phyllo pastry",
            "Butter for brushing",
            "Sesame seeds"
        ],
        instructions: [
            "Sauté onion and garlic in olive oil.",
            "Add spinach and cook until wilted.",
            "Mix with feta, eggs, and herbs.",
            "Layer phyllo sheets in a baking dish.",
            "Brush each layer with butter.",
            "Add filling and top with more phyllo.",
            "Brush top with butter and sprinkle sesame seeds.",
            "Bake at 375°F for 35-40 minutes."
        ],
        nutrition: {
            calories: 320,
            protein: 12,
            carbs: 28,
            fat: 18
        }
    },
    {
        id: 46,
        title: "Ramen",
        cuisine: "Japanese",
        category: "lunch",
        image: "images/ramen.svg",
        description: "Japanese noodle soup with rich broth, noodles, and toppings.",
        rating: 4.8,
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["japanese", "noodles", "soup"],
        ingredients: [
            "2 packets ramen noodles",
            "4 cups chicken or vegetable broth",
            "2 eggs",
            "100g pork or tofu",
            "2 green onions, sliced",
            "Nori sheets",
            "Bamboo shoots",
            "Soy sauce and sesame oil"
        ],
        instructions: [
            "Cook noodles according to package.",
            "Heat broth and season with soy sauce.",
            "Add cooked toppings to bowls.",
            "Pour hot broth over noodles and toppings.",
            "Top with soft-boiled eggs.",
            "Garnish with green onions and nori."
        ],
        nutrition: {
            calories: 420,
            protein: 18,
            carbs: 55,
            fat: 12
        }
    },
    {
        id: 47,
        title: "Moussaka",
        cuisine: "Greek",
        category: "dinner",
        image: "images/moussaka.svg",
        description: "Greek casserole with eggplant, ground meat, and béchamel sauce.",
        rating: 4.7,
        prepTime: "30 mins",
        cookTime: "1 hour",
        servings: 8,
        difficulty: "Medium",
        tags: ["greek", "eggplant", "casserole"],
        ingredients: [
            "2 large eggplants",
            "500g ground lamb or beef",
            "1 onion, chopped",
            "2 cups tomato sauce",
            "2 tbsp butter",
            "2 tbsp flour",
            "2 cups milk",
            "2 eggs",
            "1/2 cup parmesan cheese",
            "Nutmeg"
        ],
        instructions: [
            "Slice and fry eggplant slices.",
            "Brown meat with onion, add tomato sauce.",
            "Make béchamel: melt butter, add flour, then milk.",
            "Stir in eggs and cheese for sauce.",
            "Layer eggplant, meat, and béchamel in dish.",
            "Bake at 375°F for 45 minutes.",
            "Let rest before serving."
        ],
        nutrition: {
            calories: 380,
            protein: 22,
            carbs: 20,
            fat: 24
        }
    },
    {
        id: 48,
        title: "Empanadas",
        cuisine: "Spanish",
        category: "lunch",
        image: "images/empanadas.svg",
        description: "Spanish pastries filled with meat, cheese, or vegetables.",
        rating: 4.5,
        prepTime: "30 mins",
        cookTime: "25 mins",
        servings: 12,
        difficulty: "Medium",
        tags: ["spanish", "pastries", "meat"],
        ingredients: [
            "2 cups flour",
            "1/2 cup butter",
            "1/2 cup water",
            "300g ground beef",
            "1 onion, chopped",
            "1 egg, hard-boiled and chopped",
            "1/2 cup olives, chopped",
            "Paprika and cumin",
            "Oil for frying"
        ],
        instructions: [
            "Make dough with flour, butter, and water.",
            "Chill for 30 minutes.",
            "Cook beef with onion and spices.",
            "Mix with egg and olives.",
            "Roll out dough and cut circles.",
            "Fill with meat mixture and seal.",
            "Fry until golden brown.",
            "Serve hot or at room temperature."
        ],
        nutrition: {
            calories: 220,
            protein: 10,
            carbs: 20,
            fat: 12
        }
    },
    {
        id: 49,
        title: "Creme Brulee",
        cuisine: "French",
        category: "dessert",
        image: "images/creme-brulee.svg",
        description: "Rich custard topped with caramelized sugar crust.",
        rating: 4.8,
        prepTime: "15 mins",
        cookTime: "45 mins",
        servings: 6,
        difficulty: "Medium",
        tags: ["french", "custard", "caramel"],
        ingredients: [
            "2 cups heavy cream",
            "1 vanilla bean",
            "4 egg yolks",
            "1/3 cup sugar",
            "2 tbsp sugar for topping",
            "Hot water for bain-marie"
        ],
        instructions: [
            "Heat cream with vanilla bean.",
            "Whisk egg yolks with sugar.",
            "Temper eggs with hot cream.",
            "Strain and pour into ramekins.",
            "Bake in water bath at 325°F for 40 minutes.",
            "Chill for at least 2 hours.",
            "Sprinkle sugar on top and caramelize with torch.",
            "Serve immediately."
        ],
        nutrition: {
            calories: 320,
            protein: 5,
            carbs: 25,
            fat: 22
        }
    },
    {
        id: 50,
        title: "Bibimbap",
        cuisine: "Korean",
        category: "lunch",
        image: "images/bibimbap.svg",
        description: "Korean mixed rice bowl with vegetables, meat, and egg.",
        rating: 4.7,
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: 2,
        difficulty: "Medium",
        tags: ["korean", "rice", "vegetables"],
        ingredients: [
            "2 cups cooked rice",
            "2 carrots, julienned",
            "1 zucchini, sliced",
            "2 cups spinach",
            "100g beef, thinly sliced",
            "2 eggs",
            "2 tbsp gochujang",
            "1 tbsp sesame oil",
            "Soy sauce",
            "Sesame seeds"
        ],
        instructions: [
            "Cook rice and keep warm.",
            "Stir-fry each vegetable separately.",
            "Cook beef with soy sauce.",
            "Fry eggs sunny-side up.",
            "Arrange everything over rice.",
            "Add gochujang in center.",
            "Mix everything together before eating.",
            "Garnish with sesame seeds."
        ],
        nutrition: {
            calories: 450,
            protein: 22,
            carbs: 55,
            fat: 14
        }
    },
    {
        id: 51,
        title: "Bouillabaisse",
        cuisine: "French",
        category: "dinner",
        image: "images/bouillabaisse.svg",
        description: "Provençal fish stew with saffron and served with rouille.",
        rating: 4.8,
        prepTime: "30 mins",
        cookTime: "45 mins",
        servings: 6,
        difficulty: "Medium",
        tags: ["french", "seafood", "stew"],
        ingredients: [
            "1 kg mixed fish (sea bass, monkfish, etc.)",
            "500g shellfish (mussels, clams)",
            "1 onion, chopped",
            "2 leeks, sliced",
            "2 tomatoes, chopped",
            "4 cloves garlic, minced",
            "1 tsp saffron",
            "1 cup white wine",
            "4 cups fish stock",
            "French bread and rouille"
        ],
        instructions: [
            "Sauté vegetables in olive oil.",
            "Add wine and reduce by half.",
            "Add stock, saffron, and tomatoes.",
            "Add fish and shellfish in stages.",
            "Simmer until cooked through.",
            "Serve with toasted bread and rouille sauce."
        ],
        nutrition: {
            calories: 320,
            protein: 35,
            carbs: 12,
            fat: 12
        }
    },
    {
        id: 52,
        title: "Peking Duck",
        cuisine: "Chinese",
        category: "dinner",
        image: "images/peking-duck.svg",
        description: "Crispy roasted duck with pancakes, cucumber, and hoisin sauce.",
        rating: 4.9,
        prepTime: "1 hour",
        cookTime: "1 hour",
        servings: 4,
        difficulty: "Hard",
        tags: ["chinese", "duck", "roasted"],
        ingredients: [
            "1 whole duck (about 2kg)",
            "2 tbsp honey",
            "2 tbsp soy sauce",
            "1 tbsp rice vinegar",
            "Chinese pancakes",
            "Cucumber, julienned",
            "Green onions, sliced",
            "Hoisin sauce"
        ],
        instructions: [
            "Clean and prepare duck.",
            "Boil water and pour over duck to tighten skin.",
            "Hang duck to dry for 4 hours.",
            "Roast at 375°F for 1 hour until crispy.",
            "Carve duck and slice thinly.",
            "Serve with pancakes, vegetables, and sauce.",
            "Let guests assemble their own wraps."
        ],
        nutrition: {
            calories: 480,
            protein: 28,
            carbs: 25,
            fat: 30
        }
    },
    {
        id: 53,
        title: "Risotto alla Milanese",
        cuisine: "Italian",
        category: "dinner",
        image: "images/risotto-milanese.svg",
        description: "Creamy saffron risotto from Milan, rich and flavorful.",
        rating: 4.7,
        prepTime: "10 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["italian", "rice", "saffron"],
        ingredients: [
            "1 1/2 cups Arborio rice",
            "1 onion, finely chopped",
            "4 cups chicken broth",
            "1/2 cup white wine",
            "1/2 tsp saffron threads",
            "1/2 cup parmesan cheese",
            "2 tbsp butter",
            "Salt and pepper"
        ],
        instructions: [
            "Heat broth and keep warm.",
            "Sauté onion in butter until translucent.",
            "Add rice and toast for 2 minutes.",
            "Add wine and stir until absorbed.",
            "Add broth gradually, stirring constantly.",
            "Stir in saffron after 10 minutes.",
            "Continue until rice is creamy and al dente.",
            "Stir in parmesan and butter.",
            "Serve immediately."
        ],
        nutrition: {
            calories: 380,
            protein: 12,
            carbs: 55,
            fat: 10
        }
    },
    {
        id: 54,
        title: "Korma",
        cuisine: "Indian",
        category: "dinner",
        image: "images/korma.svg",
        description: "Mild and creamy Indian curry with yogurt and coconut.",
        rating: 4.6,
        prepTime: "15 mins",
        cookTime: "30 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "curry", "creamy"],
        ingredients: [
            "500g chicken or vegetables",
            "1 onion, blended",
            "2 cloves garlic, minced",
            "1 inch ginger, grated",
            "1 cup yogurt",
            "1/2 cup coconut milk",
            "2 tbsp korma paste",
            "1 tsp garam masala",
            "Fresh cilantro",
            "Almonds for garnish"
        ],
        instructions: [
            "Blend onion, garlic, and ginger.",
            "Cook paste in oil for 2 minutes.",
            "Add meat/vegetables and brown.",
            "Stir in yogurt and coconut milk.",
            "Simmer for 20-25 minutes.",
            "Season with garam masala.",
            "Garnish with cilantro and almonds.",
            "Serve with rice or naan."
        ],
        nutrition: {
            calories: 350,
            protein: 28,
            carbs: 12,
            fat: 22
        }
    },
    {
        id: 55,
        title: "Quiche Lorraine",
        cuisine: "French",
        category: "lunch",
        image: "images/quiche-lorraine.svg",
        description: "Savory French tart with bacon, cheese, and custard filling.",
        rating: 4.5,
        prepTime: "20 mins",
        cookTime: "35 mins",
        servings: 6,
        difficulty: "Medium",
        tags: ["french", "bacon", "tart"],
        ingredients: [
            "1 pie crust",
            "200g bacon, cooked and crumbled",
            "1 cup gruyere cheese, grated",
            "4 eggs",
            "1 cup heavy cream",
            "1/2 cup milk",
            "1/4 tsp nutmeg",
            "Salt and pepper",
            "Fresh thyme"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Blind bake crust for 10 minutes.",
            "Layer bacon and cheese in crust.",
            "Whisk eggs, cream, milk, and seasonings.",
            "Pour over bacon and cheese.",
            "Bake for 30-35 minutes until set.",
            "Let cool slightly before serving.",
            "Garnish with fresh thyme."
        ],
        nutrition: {
            calories: 420,
            protein: 18,
            carbs: 20,
            fat: 30
        }
    },
    {
        id: 56,
        title: "Gazpacho",
        cuisine: "Spanish",
        category: "lunch",
        image: "images/gazpacho.svg",
        description: "Cold Spanish tomato soup with cucumber, peppers, and garlic.",
        rating: 4.4,
        prepTime: "15 mins",
        cookTime: "0 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["spanish", "cold", "soup"],
        ingredients: [
            "6 ripe tomatoes",
            "1 cucumber, peeled",
            "1 red bell pepper",
            "1 green bell pepper",
            "2 cloves garlic",
            "1/4 cup olive oil",
            "2 tbsp vinegar",
            "Salt and pepper",
            "Croutons for serving",
            "Fresh herbs"
        ],
        instructions: [
            "Chop vegetables roughly.",
            "Blend all ingredients until smooth.",
            "Chill for at least 2 hours.",
            "Adjust seasoning if needed.",
            "Serve cold with croutons.",
            "Garnish with chopped vegetables and herbs."
        ],
        nutrition: {
            calories: 180,
            protein: 4,
            carbs: 18,
            fat: 12
        }
    },
    {
        id: 57,
        title: "Cannoli",
        cuisine: "Italian",
        category: "dessert",
        image: "images/cannoli.svg",
        description: "Crispy Sicilian pastry tubes filled with sweet ricotta cream.",
        rating: 4.8,
        prepTime: "30 mins",
        cookTime: "15 mins",
        servings: 12,
        difficulty: "Medium",
        tags: ["italian", "pastry", "ricotta"],
        ingredients: [
            "2 cups flour",
            "2 tbsp sugar",
            "1/4 tsp salt",
            "2 tbsp butter",
            "1/2 cup marsala wine",
            "1 egg",
            "Oil for frying",
            "15 oz ricotta cheese",
            "1 cup powdered sugar",
            "Chocolate chips",
            "Pistachios"
        ],
        instructions: [
            "Mix flour, sugar, salt, and butter.",
            "Add wine and egg to form dough.",
            "Roll out thin and cut into rectangles.",
            "Wrap around cannoli tubes and fry.",
            "Mix ricotta with powdered sugar and chocolate.",
            "Fill cooled shells with cream.",
            "Dip ends in pistachios.",
            "Dust with powdered sugar."
        ],
        nutrition: {
            calories: 280,
            protein: 8,
            carbs: 35,
            fat: 12
        }
    },
    {
        id: 58,
        title: "Black Forest Cake",
        cuisine: "German",
        category: "dessert",
        image: "images/black-forest-cake.svg",
        description: "Rich chocolate cake with cherries, cream, and kirsch.",
        rating: 4.7,
        prepTime: "45 mins",
        cookTime: "30 mins",
        servings: 12,
        difficulty: "Hard",
        tags: ["german", "chocolate", "cake"],
        ingredients: [
            "2 cups flour",
            "2 cups sugar",
            "3/4 cup cocoa powder",
            "2 tsp baking soda",
            "1 tsp baking powder",
            "2 eggs",
            "1 cup milk",
            "1/2 cup oil",
            "2 cups heavy cream",
            "1 can cherry pie filling",
            "Kirsch liqueur",
            "Chocolate shavings"
        ],
        instructions: [
            "Bake chocolate cake layers.",
            "Whip cream with sugar.",
            "Layer cake with cherries and cream.",
            "Brush with kirsch liqueur.",
            "Frost entire cake with whipped cream.",
            "Decorate with chocolate shavings and cherries.",
            "Chill before serving."
        ],
        nutrition: {
            calories: 420,
            protein: 6,
            carbs: 55,
            fat: 20
        }
    },
    {
        id: 59,
        title: "Massaman Curry",
        cuisine: "Thai",
        category: "dinner",
        image: "images/massaman-curry.svg",
        description: "Mild Thai curry with potatoes, peanuts, and coconut milk.",
        rating: 4.6,
        prepTime: "15 mins",
        cookTime: "35 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["thai", "curry", "peanuts"],
        ingredients: [
            "500g beef or chicken",
            "2 tbsp massaman curry paste",
            "400ml coconut milk",
            "2 potatoes, cubed",
            "1 onion, quartered",
            "2 tbsp fish sauce",
            "2 tbsp tamarind paste",
            "1/4 cup peanuts",
            "Cardamom and cinnamon",
            "Jasmine rice"
        ],
        instructions: [
            "Brown meat in oil.",
            "Add curry paste and cook for 2 minutes.",
            "Add coconut milk and simmer.",
            "Add potatoes, onion, and spices.",
            "Simmer for 25-30 minutes.",
            "Stir in peanuts and tamarind.",
            "Serve with jasmine rice."
        ],
        nutrition: {
            calories: 480,
            protein: 32,
            carbs: 25,
            fat: 28
        }
    },
    {
        id: 60,
        title: "Cottage Pie",
        cuisine: "British",
        category: "dinner",
        image: "images/cottage-pie.svg",
        description: "British comfort food with ground meat topped with mashed potatoes.",
        rating: 4.5,
        prepTime: "20 mins",
        cookTime: "40 mins",
        servings: 6,
        difficulty: "Medium",
        tags: ["british", "comfort", "potatoes"],
        ingredients: [
            "500g ground beef",
            "1 onion, chopped",
            "2 carrots, chopped",
            "2 tbsp flour",
            "1 cup beef broth",
            "2 tbsp Worcestershire sauce",
            "1 kg potatoes",
            "1/2 cup milk",
            "2 tbsp butter",
            "1 cup cheddar cheese"
        ],
        instructions: [
            "Brown beef with onion and carrots.",
            "Stir in flour, then broth and Worcestershire.",
            "Simmer for 10 minutes.",
            "Boil and mash potatoes with milk and butter.",
            "Spread meat mixture in baking dish.",
            "Top with mashed potatoes and cheese.",
            "Bake at 400°F for 25 minutes until golden."
        ],
        nutrition: {
            calories: 420,
            protein: 25,
            carbs: 35,
            fat: 20
        }
    },
    {
        id: 61,
        title: "Ful Medames",
        cuisine: "Egyptian",
        category: "breakfast",
        image: "images/ful-medames.svg",
        description: "Egyptian fava bean stew served with pita and topped with tahini.",
        rating: 4.4,
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["egyptian", "beans", "tahini"],
        ingredients: [
            "2 cans fava beans",
            "2 cloves garlic, minced",
            "2 tbsp tahini",
            "2 tbsp lemon juice",
            "1 tsp cumin",
            "Olive oil",
            "Fresh parsley",
            "Pita bread",
            "Chopped tomatoes and onions"
        ],
        instructions: [
            "Heat beans with their liquid.",
            "Mash slightly with a fork.",
            "Mix tahini with lemon juice and garlic.",
            "Stir tahini mixture into beans.",
            "Season with cumin and salt.",
            "Serve with pita, tomatoes, and parsley.",
            "Drizzle with olive oil."
        ],
        nutrition: {
            calories: 280,
            protein: 15,
            carbs: 40,
            fat: 8
        }
    },
    {
        id: 62,
        title: "Pierogi Ruskie",
        cuisine: "Polish",
        category: "dinner",
        image: "images/pierogi-ruskie.svg",
        description: "Polish potato and cheese pierogi, boiled and pan-fried.",
        rating: 4.6,
        prepTime: "1 hour",
        cookTime: "20 mins",
        servings: 6,
        difficulty: "Medium",
        tags: ["polish", "dumplings", "cheese"],
        ingredients: [
            "2 cups flour",
            "1 egg",
            "3/4 cup water",
            "2 cups mashed potatoes",
            "1 cup farmer's cheese",
            "1 onion, finely chopped",
            "Salt and pepper",
            "Butter for frying",
            "Sour cream"
        ],
        instructions: [
            "Make dough and let rest.",
            "Mix potatoes, cheese, and onion for filling.",
            "Roll dough and cut circles.",
            "Fill and seal pierogi.",
            "Boil in salted water until they float.",
            "Fry in butter until golden.",
            "Serve with sour cream."
        ],
        nutrition: {
            calories: 320,
            protein: 12,
            carbs: 45,
            fat: 10
        }
    },
    {
        id: 63,
        title: "Khao Man Gai",
        cuisine: "Thai",
        category: "lunch",
        image: "images/khao-man-gai.svg",
        description: "Thai chicken and rice with ginger sauce and cucumber.",
        rating: 4.5,
        prepTime: "15 mins",
        cookTime: "30 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["thai", "chicken", "rice"],
        ingredients: [
            "4 chicken thighs",
            "2 cups jasmine rice",
            "2 cups chicken broth",
            "1 inch ginger, sliced",
            "2 cloves garlic",
            "2 tbsp soy sauce",
            "1 tbsp sugar",
            "Cucumber slices",
            "Green onions",
            "Ginger sauce"
        ],
        instructions: [
            "Poach chicken in broth with ginger and garlic.",
            "Cook rice in the same broth.",
            "Make sauce with ginger, soy, and sugar.",
            "Shred chicken and serve over rice.",
            "Top with cucumber and green onions.",
            "Serve sauce on the side."
        ],
        nutrition: {
            calories: 380,
            protein: 25,
            carbs: 50,
            fat: 8
        }
    },
    {
        id: 64,
        title: "Souvlaki",
        cuisine: "Greek",
        category: "lunch",
        image: "images/souvlaki.svg",
        description: "Greek grilled skewers of pork with tzatziki and pita.",
        rating: 4.7,
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["greek", "grilled", "skewers"],
        ingredients: [
            "500g pork shoulder, cubed",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "1 tbsp oregano",
            "Juice of 1 lemon",
            "Salt and pepper",
            "Pita bread",
            "Tzatziki sauce",
            "Tomatoes and onions"
        ],
        instructions: [
            "Marinate pork with oil, garlic, oregano, and lemon.",
            "Thread onto skewers.",
            "Grill for 10-12 minutes, turning occasionally.",
            "Warm pita bread.",
            "Serve skewers in pita with tzatziki.",
            "Add tomatoes, onions, and feta."
        ],
        nutrition: {
            calories: 380,
            protein: 32,
            carbs: 25,
            fat: 16
        }
    },
    {
        id: 65,
        title: "Coq au Vin",
        cuisine: "French",
        category: "dinner",
        image: "images/coq-au-vin.svg",
        description: "Classic French chicken in red wine with mushrooms and onions.",
        rating: 4.8,
        prepTime: "20 mins",
        cookTime: "1 hour",
        servings: 6,
        difficulty: "Medium",
        tags: ["french", "chicken", "wine"],
        ingredients: [
            "1 whole chicken, cut into pieces",
            "200g bacon, diced",
            "12 pearl onions",
            "200g mushrooms",
            "2 cups red wine",
            "2 cups chicken broth",
            "2 tbsp flour",
            "2 cloves garlic",
            "Fresh thyme",
            "Parsley"
        ],
        instructions: [
            "Brown chicken and bacon.",
            "Sauté onions and mushrooms.",
            "Add flour to make roux.",
            "Deglaze with wine and broth.",
            "Add chicken back with herbs.",
            "Simmer covered for 45 minutes.",
            "Garnish with parsley.",
            "Serve with crusty bread."
        ],
        nutrition: {
            calories: 420,
            protein: 35,
            carbs: 12,
            fat: 22
        }
    },
    {
        id: 66,
        title: "Tres Leches Cake",
        cuisine: "Mexican",
        category: "dessert",
        image: "images/tres-leches-cake.svg",
        description: "Sponge cake soaked in three kinds of milk, topped with whipped cream.",
        rating: 4.7,
        prepTime: "20 mins",
        cookTime: "30 mins",
        servings: 12,
        difficulty: "Medium",
        tags: ["mexican", "cake", "milk"],
        ingredients: [
            "1 cup flour",
            "1 1/2 tsp baking powder",
            "1/2 cup butter",
            "1 cup sugar",
            "5 eggs",
            "1 tsp vanilla",
            "1 can evaporated milk",
            "1 can condensed milk",
            "1 cup heavy cream",
            "Whipped cream for topping"
        ],
        instructions: [
            "Bake vanilla sponge cake.",
            "Mix three milks together.",
            "Poke holes in cake and pour milk mixture over.",
            "Refrigerate for several hours.",
            "Top with whipped cream.",
            "Decorate with strawberries or cinnamon.",
            "Serve chilled."
        ],
        nutrition: {
            calories: 380,
            protein: 8,
            carbs: 45,
            fat: 18
        }
    },
    {
        id: 67,
        title: "Chicken Kiev",
        cuisine: "Russian",
        category: "dinner",
        image: "images/chicken-kiev.svg",
        description: "Chicken breast stuffed with herb butter, breaded and fried.",
        rating: 4.6,
        prepTime: "25 mins",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["russian", "chicken", "stuffed"],
        ingredients: [
            "4 chicken breasts",
            "1/2 cup butter, softened",
            "2 tbsp parsley, chopped",
            "2 cloves garlic, minced",
            "1 cup flour",
            "2 eggs, beaten",
            "1 cup breadcrumbs",
            "Oil for frying",
            "Lemon wedges"
        ],
        instructions: [
            "Mix butter with herbs and garlic.",
            "Pound chicken thin and stuff with butter.",
            "Roll up and secure with toothpicks.",
            "Bread chicken with flour, egg, breadcrumbs.",
            "Fry until golden and cooked through.",
            "Drain on paper towels.",
            "Serve with lemon wedges."
        ],
        nutrition: {
            calories: 480,
            protein: 35,
            carbs: 25,
            fat: 28
        }
    },
    {
        id: 68,
        title: "Pancit Canton",
        cuisine: "Filipino",
        category: "lunch",
        image: "images/pancit-canton.svg",
        description: "Filipino stir-fried noodles with vegetables and meat or seafood.",
        rating: 4.5,
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["filipino", "noodles", "stir-fry"],
        ingredients: [
            "400g canton noodles",
            "200g chicken or shrimp",
            "2 cups mixed vegetables",
            "2 cloves garlic, minced",
            "1 onion, sliced",
            "2 tbsp soy sauce",
            "2 tbsp oyster sauce",
            "1 cup chicken broth",
            "Calamansi or lemon",
            "Green onions"
        ],
        instructions: [
            "Cook noodles according to package.",
            "Stir-fry meat until cooked.",
            "Add garlic, onion, and vegetables.",
            "Add sauces and broth.",
            "Add noodles and toss to combine.",
            "Cook until sauce is absorbed.",
            "Garnish with green onions and serve with calamansi."
        ],
        nutrition: {
            calories: 380,
            protein: 20,
            carbs: 55,
            fat: 8
        }
    },
    {
        id: 69,
        title: "Beef Wellington",
        cuisine: "British",
        category: "dinner",
        image: "images/beef-wellington.svg",
        description: "Beef tenderloin coated with pâté and duxelles in puff pastry.",
        rating: 4.9,
        prepTime: "45 mins",
        cookTime: "30 mins",
        servings: 6,
        difficulty: "Hard",
        tags: ["british", "beef", "pastry"],
        ingredients: [
            "1 kg beef tenderloin",
            "200g mushrooms, finely chopped",
            "2 shallots, minced",
            "2 tbsp butter",
            "100g pâté",
            "1 sheet puff pastry",
            "1 egg, beaten",
            "Salt and pepper",
            "Fresh thyme"
        ],
        instructions: [
            "Sear beef on all sides.",
            "Sauté mushrooms and shallots until dry.",
            "Spread pâté on beef, top with duxelles.",
            "Wrap in puff pastry.",
            "Brush with egg wash.",
            "Bake at 425°F for 25-30 minutes.",
            "Rest before slicing."
        ],
        nutrition: {
            calories: 520,
            protein: 35,
            carbs: 25,
            fat: 32
        }
    },
    {
        id: 70,
        title: "Mochi",
        cuisine: "Japanese",
        category: "dessert",
        image: "images/mochi.svg",
        description: "Chewy Japanese rice cakes filled with sweet red bean paste.",
        rating: 4.4,
        prepTime: "30 mins",
        cookTime: "20 mins",
        servings: 12,
        difficulty: "Medium",
        tags: ["japanese", "rice", "sweet"],
        ingredients: [
            "1 cup glutinous rice flour",
            "1/2 cup sugar",
            "1 cup water",
            "Cornstarch for dusting",
            "Red bean paste (anko)",
            "Food coloring (optional)",
            "Kinako powder"
        ],
        instructions: [
            "Mix rice flour, sugar, and water.",
            "Steam for 15-20 minutes until translucent.",
            "Knead while hot until smooth.",
            "Divide and fill with bean paste.",
            "Shape into balls and dust with cornstarch.",
            "Roll in kinako powder.",
            "Serve at room temperature."
        ],
        nutrition: {
            calories: 120,
            protein: 2,
            carbs: 28,
            fat: 0
        }
    },
    {
        id: 71,
        title: "Chicken Adobo",
        cuisine: "Filipino",
        category: "dinner",
        image: "images/chicken-adobo.svg",
        description: "Filipino national dish of chicken braised in vinegar, soy sauce, and garlic.",
        rating: 4.6,
        prepTime: "10 mins",
        cookTime: "45 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["filipino", "chicken", "braised"],
        ingredients: [
            "1 kg chicken pieces",
            "1/2 cup soy sauce",
            "1/2 cup vinegar",
            "1 head garlic, minced",
            "2 bay leaves",
            "1 tsp whole peppercorns",
            "2 tbsp brown sugar",
            "2 cups water",
            "Oil for frying"
        ],
        instructions: [
            "Marinate chicken in soy, vinegar, garlic, and spices.",
            "Bring to boil, then simmer for 30 minutes.",
            "Remove chicken and reduce sauce.",
            "Fry chicken until crispy.",
            "Return to sauce and simmer.",
            "Serve with steamed rice."
        ],
        nutrition: {
            calories: 320,
            protein: 35,
            carbs: 12,
            fat: 14
        }
    },
    {
        id: 72,
        title: "Kottbullar",
        cuisine: "Swedish",
        category: "dinner",
        image: "images/kottbullar.svg",
        description: "Swedish meatballs in creamy gravy with lingonberry sauce.",
        rating: 4.5,
        prepTime: "20 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["swedish", "meatballs", "creamy"],
        ingredients: [
            "500g ground beef",
            "1/4 cup breadcrumbs",
            "1/4 cup milk",
            "1 egg",
            "1 onion, grated",
            "1/4 tsp allspice",
            "2 tbsp butter",
            "2 tbsp flour",
            "2 cups beef broth",
            "Lingonberry jam"
        ],
        instructions: [
            "Mix meatball ingredients and form balls.",
            "Brown meatballs in butter.",
            "Make gravy with flour, broth, and cream.",
            "Return meatballs to gravy.",
            "Simmer for 10 minutes.",
            "Serve with lingonberry jam.",
            "Traditionally with boiled potatoes."
        ],
        nutrition: {
            calories: 420,
            protein: 28,
            carbs: 20,
            fat: 24
        }
    },
    {
        id: 73,
        title: "Poutine",
        cuisine: "Canadian",
        category: "lunch",
        image: "images/poutine.svg",
        description: "Canadian fries topped with cheese curds and hot gravy.",
        rating: 4.3,
        prepTime: "10 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["canadian", "fries", "cheese"],
        ingredients: [
            "4 large potatoes",
            "2 cups cheese curds",
            "2 cups beef or chicken gravy",
            "Oil for frying",
            "Salt",
            "Fresh parsley (optional)"
        ],
        instructions: [
            "Cut potatoes into fries.",
            "Fry twice: once at 325°F, then at 375°F.",
            "Heat gravy until hot.",
            "Place fries in bowls.",
            "Top with cheese curds.",
            "Pour hot gravy over top.",
            "Let cheese melt slightly.",
            "Serve immediately."
        ],
        nutrition: {
            calories: 520,
            protein: 18,
            carbs: 55,
            fat: 25
        }
    },
    {
        id: 74,
        title: "Chicken Tikka Masala",
        cuisine: "Indian",
        category: "dinner",
        image: "images/chicken-tikka-masala.svg",
        description: "Marinated chicken in creamy tomato curry sauce.",
        rating: 4.8,
        prepTime: "20 mins",
        cookTime: "30 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "chicken", "curry"],
        ingredients: [
            "500g chicken breast, cubed",
            "1 cup yogurt",
            "2 tbsp tikka masala spice",
            "1 onion, blended",
            "2 cloves garlic",
            "1 inch ginger",
            "400g crushed tomatoes",
            "1 cup heavy cream",
            "2 tbsp butter",
            "Fresh cilantro"
        ],
        instructions: [
            "Marinate chicken in yogurt and spices.",
            "Grill or broil chicken until charred.",
            "Sauté onion, garlic, ginger in butter.",
            "Add tomatoes and simmer.",
            "Stir in cream and cooked chicken.",
            "Simmer for 10 minutes.",
            "Garnish with cilantro.",
            "Serve with rice or naan."
        ],
        nutrition: {
            calories: 420,
            protein: 32,
            carbs: 15,
            fat: 26
        }
    },
    {
        id: 75,
        title: "Bibimbap",
        cuisine: "Korean",
        category: "lunch",
        image: "images/bibimbap-2.svg",
        description: "Korean mixed rice bowl with seasoned vegetables and protein.",
        rating: 4.7,
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: 2,
        difficulty: "Medium",
        tags: ["korean", "rice", "vegetables"],
        ingredients: [
            "2 cups cooked rice",
            "2 carrots, julienned",
            "1 zucchini, sliced",
            "2 cups spinach",
            "100g beef or tofu",
            "2 eggs",
            "2 tbsp gochujang",
            "1 tbsp sesame oil",
            "Soy sauce",
            "Sesame seeds"
        ],
        instructions: [
            "Cook rice and keep warm.",
            "Stir-fry each vegetable separately.",
            "Cook protein with soy sauce.",
            "Fry eggs sunny-side up.",
            "Arrange everything over rice.",
            "Add gochujang in center.",
            "Mix everything together.",
            "Garnish with sesame seeds."
        ],
        nutrition: {
            calories: 450,
            protein: 22,
            carbs: 55,
            fat: 14
        }
    },
    {
        id: 76,
        title: "Osso Buco",
        cuisine: "Italian",
        category: "dinner",
        image: "images/osso-buco.svg",
        description: "Milanese veal shanks braised with vegetables and white wine.",
        rating: 4.7,
        prepTime: "15 mins",
        cookTime: "2 hours",
        servings: 4,
        difficulty: "Medium",
        tags: ["italian", "veal", "braised"],
        ingredients: [
            "4 veal shanks",
            "1 onion, chopped",
            "2 carrots, chopped",
            "2 celery stalks, chopped",
            "2 cloves garlic",
            "1 cup white wine",
            "2 cups beef broth",
            "1 can tomatoes",
            "Fresh rosemary",
            "Gremolata (parsley, garlic, lemon zest)"
        ],
        instructions: [
            "Brown veal shanks on both sides.",
            "Sauté vegetables and garlic.",
            "Deglaze with wine.",
            "Add broth, tomatoes, and herbs.",
            "Return veal and braise covered for 1.5 hours.",
            "Make gremolata and sprinkle on top.",
            "Serve with risotto or polenta."
        ],
        nutrition: {
            calories: 380,
            protein: 42,
            carbs: 12,
            fat: 14
        }
    },
    {
        id: 77,
        title: "Khao Soi",
        cuisine: "Thai",
        category: "lunch",
        image: "images/khao-soi.svg",
        description: "Northern Thai curry noodle soup with chicken and crispy noodles.",
        rating: 4.6,
        prepTime: "20 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["thai", "noodles", "curry"],
        ingredients: [
            "400g egg noodles",
            "500g chicken",
            "2 tbsp red curry paste",
            "400ml coconut milk",
            "2 cups chicken broth",
            "2 tbsp fish sauce",
            "1 tbsp curry powder",
            "Pickled mustard greens",
            "Lime and shallots"
        ],
        instructions: [
            "Fry some noodles until crispy for topping.",
            "Cook curry paste in oil.",
            "Add coconut milk and broth.",
            "Add chicken and simmer until cooked.",
            "Cook remaining noodles in broth.",
            "Serve noodles with curry sauce.",
            "Top with crispy noodles and condiments."
        ],
        nutrition: {
            calories: 480,
            protein: 28,
            carbs: 45,
            fat: 20
        }
    },
    {
        id: 78,
        title: "Boeuf Bourguignon",
        cuisine: "French",
        category: "dinner",
        image: "images/boeuf-bourguignon.svg",
        description: "French beef stew braised in red wine with mushrooms and onions.",
        rating: 4.8,
        prepTime: "30 mins",
        cookTime: "3 hours",
        servings: 6,
        difficulty: "Medium",
        tags: ["french", "beef", "wine"],
        ingredients: [
            "1 kg beef chuck, cubed",
            "200g bacon, diced",
            "12 pearl onions",
            "200g mushrooms",
            "2 cups red wine",
            "2 cups beef broth",
            "2 tbsp flour",
            "2 cloves garlic",
            "Fresh thyme",
            "Parsley"
        ],
        instructions: [
            "Brown beef and bacon.",
            "Sauté onions and mushrooms.",
            "Make roux with flour.",
            "Deglaze with wine and broth.",
            "Add beef back with herbs.",
            "Braise covered for 2.5 hours.",
            "Garnish with parsley.",
            "Serve with crusty bread or potatoes."
        ],
        nutrition: {
            calories: 450,
            protein: 38,
            carbs: 12,
            fat: 24
        }
    },
    {
        id: 79,
        title: "Biryani",
        cuisine: "Indian",
        category: "dinner",
        image: "images/biryani.svg",
        description: "Fragrant basmati rice dish layered with spiced meat, caramelized onions, and saffron.",
        rating: 4.9,
        prepTime: "30 mins",
        cookTime: "1 hour",
        servings: 6,
        difficulty: "Medium",
        tags: ["indian", "rice", "spiced"],
        ingredients: [
            "2 cups basmati rice",
            "500g chicken or lamb",
            "3 onions, thinly sliced",
            "2 tomatoes, chopped",
            "1 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "2 tbsp biryani masala",
            "1 tsp saffron strands",
            "1/2 cup milk",
            "Fresh cilantro and mint",
            "4 boiled eggs",
            "Fried onions for garnish"
        ],
        instructions: [
            "Marinate meat with yogurt, ginger-garlic paste, and spices for 2 hours.",
            "Cook basmati rice until 70% done, drain and set aside.",
            "Fry onions until golden brown.",
            "Cook marinated meat until tender.",
            "Layer rice and meat mixture in a pot.",
            "Add saffron milk, fried onions, and boiled eggs.",
            "Cover and cook on low heat for 20-25 minutes.",
            "Garnish with cilantro, mint, and nuts.",
            "Serve with raita and salad."
        ],
        nutrition: {
            calories: 520,
            protein: 32,
            carbs: 65,
            fat: 18
        }
    },
    {
        id: 80,
        title: "Paneer Tikka",
        cuisine: "Indian",
        category: "lunch",
        image: "images/paneer-tikka.svg",
        description: "Marinated paneer cubes grilled to perfection with vegetables and spices.",
        rating: 4.7,
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "vegetarian", "grilled"],
        ingredients: [
            "400g paneer, cubed",
            "1 bell pepper, cubed",
            "1 onion, cubed",
            "1 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "1 tbsp tikka masala",
            "1 tsp red chili powder",
            "1 tsp garam masala",
            "2 tbsp lemon juice",
            "2 tbsp oil",
            "Salt to taste",
            "Fresh cilantro"
        ],
        instructions: [
            "Mix yogurt with all spices, ginger-garlic paste, and lemon juice.",
            "Add paneer and vegetable cubes to the marinade.",
            "Marinate for at least 30 minutes.",
            "Thread onto skewers alternating paneer and vegetables.",
            "Preheat grill or oven to 400°F (200°C).",
            "Grill for 10-15 minutes, turning occasionally.",
            "Brush with oil while grilling.",
            "Serve hot with mint chutney and lemon wedges."
        ],
        nutrition: {
            calories: 320,
            protein: 18,
            carbs: 12,
            fat: 22
        }
    },
    {
        id: 81,
        title: "Dal Makhani",
        cuisine: "Indian",
        category: "dinner",
        image: "images/dal-makhani.svg",
        description: "Creamy black lentils slow-cooked with butter, cream, and aromatic spices.",
        rating: 4.8,
        prepTime: "15 mins",
        cookTime: "1 hour",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "lentils", "creamy"],
        ingredients: [
            "1 cup whole black lentils (urad dal)",
            "1/4 cup kidney beans (rajma)",
            "2 onions, finely chopped",
            "2 tomatoes, pureed",
            "2 tbsp ginger-garlic paste",
            "1/2 cup cream",
            "4 tbsp butter",
            "1 tsp cumin seeds",
            "1 tsp garam masala",
            "1 tsp red chili powder",
            "Fresh cilantro",
            "Salt to taste"
        ],
        instructions: [
            "Soak lentils and beans overnight, then pressure cook until soft.",
            "Heat butter in a pan, add cumin seeds and onions.",
            "Add ginger-garlic paste and cook until fragrant.",
            "Add tomato puree and spices, cook for 5 minutes.",
            "Add cooked lentils and simmer for 30 minutes.",
            "Stir in cream and adjust consistency.",
            "Finish with garam masala and cilantro.",
            "Serve with rice or naan bread."
        ],
        nutrition: {
            calories: 380,
            protein: 16,
            carbs: 45,
            fat: 16
        }
    },
    {
        id: 82,
        title: "Aloo Gobi",
        cuisine: "Indian",
        category: "lunch",
        image: "images/aloo-gobi.svg",
        description: "Classic North Indian dish of potatoes and cauliflower cooked with spices.",
        rating: 4.5,
        prepTime: "15 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "vegetarian", "potatoes"],
        ingredients: [
            "4 potatoes, cubed",
            "1 cauliflower, cut into florets",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "1 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp turmeric powder",
            "1 tsp coriander powder",
            "1 tsp garam masala",
            "2 green chilies, slit",
            "Fresh cilantro",
            "2 tbsp oil"
        ],
        instructions: [
            "Heat oil in a pan, add cumin seeds and onions.",
            "Add ginger-garlic paste and green chilies.",
            "Add tomatoes and cook until mushy.",
            "Add all spices and cook for 2 minutes.",
            "Add potatoes and cauliflower, mix well.",
            "Add 1/2 cup water, cover and cook for 15-20 minutes.",
            "Stir occasionally and add water if needed.",
            "Garnish with cilantro and serve hot."
        ],
        nutrition: {
            calories: 220,
            protein: 6,
            carbs: 35,
            fat: 8
        }
    },
    {
        id: 83,
        title: "Chana Masala",
        cuisine: "Indian",
        category: "lunch",
        image: "images/chana-masala.svg",
        description: "Spicy chickpea curry with tomatoes, onions, and aromatic spices.",
        rating: 4.6,
        prepTime: "10 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "vegetarian", "chickpeas"],
        ingredients: [
            "2 cans chickpeas, drained",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "1 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp coriander powder",
            "1 tsp garam masala",
            "1 tsp amchur powder",
            "2 green chilies, chopped",
            "Fresh cilantro",
            "2 tbsp oil",
            "Lemon wedges"
        ],
        instructions: [
            "Heat oil, add cumin seeds and onions.",
            "Add ginger-garlic paste and green chilies.",
            "Add tomatoes and cook until soft.",
            "Add all spices and cook for 2 minutes.",
            "Add chickpeas and 1/2 cup water.",
            "Simmer for 15 minutes until thick.",
            "Mash some chickpeas for thicker consistency.",
            "Garnish with cilantro and serve with lemon."
        ],
        nutrition: {
            calories: 280,
            protein: 12,
            carbs: 45,
            fat: 8
        }
    },
    {
        id: 84,
        title: "Palak Paneer",
        cuisine: "Indian",
        category: "lunch",
        image: "images/palak-paneer.svg",
        description: "Creamy spinach curry with paneer cubes and aromatic spices.",
        rating: 4.7,
        prepTime: "15 mins",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "vegetarian", "spinach"],
        ingredients: [
            "400g paneer, cubed",
            "500g spinach, blanched",
            "2 onions, chopped",
            "2 tomatoes, pureed",
            "1 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp garam masala",
            "1/2 tsp turmeric",
            "2 green chilies",
            "1/2 cup cream",
            "2 tbsp butter",
            "Fresh cilantro"
        ],
        instructions: [
            "Blanch spinach and blend into puree.",
            "Heat butter, add cumin seeds and onions.",
            "Add ginger-garlic paste and green chilies.",
            "Add tomato puree and spices, cook for 5 minutes.",
            "Add spinach puree and simmer for 10 minutes.",
            "Add paneer cubes and cream.",
            "Cook for 5 more minutes.",
            "Garnish with cream swirls and cilantro."
        ],
        nutrition: {
            calories: 340,
            protein: 16,
            carbs: 12,
            fat: 26
        }
    },
    {
        id: 85,
        title: "Rajma",
        cuisine: "Indian",
        category: "dinner",
        image: "images/rajma.svg",
        description: "Kidney bean curry from Punjab, rich and flavorful with aromatic spices.",
        rating: 4.6,
        prepTime: "15 mins",
        cookTime: "45 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "beans", "punjabi"],
        ingredients: [
            "2 cups kidney beans, soaked",
            "2 onions, finely chopped",
            "2 tomatoes, pureed",
            "1 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp coriander powder",
            "1 tsp garam masala",
            "1 tsp red chili powder",
            "2 green chilies, slit",
            "2 tbsp butter",
            "Fresh cilantro",
            "Lemon wedges"
        ],
        instructions: [
            "Pressure cook soaked kidney beans until soft.",
            "Heat butter, add cumin seeds and onions.",
            "Add ginger-garlic paste and green chilies.",
            "Add tomato puree and all spices.",
            "Cook for 5-7 minutes until oil separates.",
            "Add cooked beans and 1 cup water.",
            "Simmer for 20 minutes until thick.",
            "Mash some beans for creamier texture.",
            "Garnish with cilantro and serve with rice."
        ],
        nutrition: {
            calories: 320,
            protein: 18,
            carbs: 50,
            fat: 8
        }
    },
    {
        id: 86,
        title: "Samosa",
        cuisine: "Indian",
        category: "lunch",
        image: "images/samosa.svg",
        description: "Crispy fried pastries filled with spiced potatoes and peas.",
        rating: 4.8,
        prepTime: "30 mins",
        cookTime: "20 mins",
        servings: 12,
        difficulty: "Medium",
        tags: ["indian", "snack", "fried"],
        ingredients: [
            "2 cups all-purpose flour",
            "4 potatoes, boiled and mashed",
            "1/2 cup green peas",
            "2 green chilies, chopped",
            "1 tbsp ginger, grated",
            "1 tsp cumin seeds",
            "1 tsp coriander powder",
            "1 tsp garam masala",
            "1 tsp amchur powder",
            "Fresh cilantro",
            "Oil for frying",
            "Salt to taste"
        ],
        instructions: [
            "Make dough with flour, water, and oil, rest for 30 minutes.",
            "Heat oil, add cumin seeds, chilies, and ginger.",
            "Add mashed potatoes and peas, cook for 5 minutes.",
            "Add all spices and cilantro, mix well.",
            "Divide dough into 12 balls, roll into circles.",
            "Cut each circle in half, form cones.",
            "Fill with potato mixture, seal edges.",
            "Deep fry until golden brown.",
            "Serve hot with chutney and ketchup."
        ],
        nutrition: {
            calories: 180,
            protein: 4,
            carbs: 25,
            fat: 7
        }
    },
    {
        id: 87,
        title: "Pakora",
        cuisine: "Indian",
        category: "lunch",
        image: "images/pakora.svg",
        description: "Crispy fritters made with chickpea flour and mixed vegetables.",
        rating: 4.5,
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "snack", "vegetables"],
        ingredients: [
            "1 cup chickpea flour (besan)",
            "2 potatoes, thinly sliced",
            "1 onion, thinly sliced",
            "1 cup spinach leaves",
            "2 green chilies, chopped",
            "1 tsp ginger, grated",
            "1 tsp cumin seeds",
            "1 tsp coriander powder",
            "1/2 tsp turmeric",
            "Oil for frying",
            "Salt to taste",
            "Water as needed"
        ],
        instructions: [
            "Mix chickpea flour with spices and salt.",
            "Add water gradually to make thick batter.",
            "Add sliced vegetables and mix well.",
            "Heat oil in a deep pan.",
            "Drop spoonfuls of batter into hot oil.",
            "Fry until golden brown on both sides.",
            "Remove and drain on paper towels.",
            "Serve hot with mint chutney or ketchup.",
            "Can be made with paneer, chicken, or fish too."
        ],
        nutrition: {
            calories: 220,
            protein: 8,
            carbs: 25,
            fat: 10
        }
    },
    {
        id: 88,
        title: "Gulab Jamun",
        cuisine: "Indian",
        category: "dessert",
        image: "images/gulab-jamun.svg",
        description: "Soft milk dumplings soaked in rose-flavored sugar syrup.",
        rating: 4.9,
        prepTime: "20 mins",
        cookTime: "30 mins",
        servings: 12,
        difficulty: "Medium",
        tags: ["indian", "sweet", "milk"],
        ingredients: [
            "1 cup milk powder",
            "1/4 cup all-purpose flour",
            "1/4 tsp baking soda",
            "2 tbsp ghee",
            "1/4 cup milk",
            "2 cups sugar",
            "2 cups water",
            "4-5 cardamom pods",
            "Few saffron strands",
            "Rose essence",
            "Oil for frying"
        ],
        instructions: [
            "Mix milk powder, flour, baking soda, and ghee.",
            "Add milk gradually to make soft dough.",
            "Knead well and let rest for 10 minutes.",
            "Make small balls, ensure no cracks.",
            "Heat sugar and water, add cardamom and saffron.",
            "Simmer syrup for 10 minutes, add rose essence.",
            "Heat oil/ghee, fry balls on low heat until golden.",
            "Soak fried balls in warm syrup for 2 hours.",
            "Serve warm or chilled."
        ],
        nutrition: {
            calories: 160,
            protein: 3,
            carbs: 28,
            fat: 5
        }
    },
    {
        id: 89,
        title: "Masala Dosa",
        cuisine: "Indian",
        category: "breakfast",
        image: "images/masala-dosa.svg",
        description: "Crispy fermented crepe filled with spiced potato filling.",
        rating: 4.7,
        prepTime: "12 hours",
        cookTime: "30 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "south-indian", "fermented"],
        ingredients: [
            "2 cups rice",
            "1/2 cup urad dal",
            "4 potatoes, boiled",
            "2 onions, chopped",
            "2 green chilies, chopped",
            "1 tsp mustard seeds",
            "1 tsp cumin seeds",
            "Curry leaves",
            "1/2 tsp turmeric",
            "Oil for cooking",
            "Salt to taste"
        ],
        instructions: [
            "Soak rice and dal separately for 6 hours.",
            "Grind to smooth batter, ferment overnight.",
            "Heat griddle, pour batter, spread thin.",
            "Cook until golden and crispy.",
            "For filling: heat oil, add mustard and cumin.",
            "Add onions, chilies, and curry leaves.",
            "Add mashed potatoes and spices.",
            "Cook for 5 minutes.",
            "Fill dosa with potato mixture and serve."
        ],
        nutrition: {
            calories: 320,
            protein: 8,
            carbs: 65,
            fat: 4
        }
    },
    {
        id: 90,
        title: "Lassi",
        cuisine: "Indian",
        category: "dessert",
        image: "images/lassi.svg",
        description: "Refreshing yogurt-based drink, sweet or salty, served chilled.",
        rating: 4.4,
        prepTime: "5 mins",
        cookTime: "0 mins",
        servings: 2,
        difficulty: "Easy",
        tags: ["indian", "drink", "yogurt"],
        ingredients: [
            "2 cups yogurt",
            "1 cup milk",
            "2 tbsp sugar (for sweet lassi)",
            "1/2 tsp cardamom powder",
            "Ice cubes",
            "For salty lassi: salt, cumin powder, mint",
            "For mango lassi: 1 mango, saffron strands",
            "Rose syrup (optional)",
            "Chopped pistachios for garnish"
        ],
        instructions: [
            "Blend yogurt, milk, and sugar until smooth.",
            "Add cardamom powder and ice cubes.",
            "Blend again until frothy.",
            "For variations: add mango for mango lassi.",
            "For salty: add salt, cumin, and black pepper.",
            "Pour into glasses.",
            "Garnish with pistachios or saffron.",
            "Serve chilled immediately.",
            "Can be made thicker or thinner as preferred."
        ],
        nutrition: {
            calories: 180,
            protein: 8,
            carbs: 25,
            fat: 6
        }
    },
    {
        id: 91,
        title: "Chicken Biryani",
        cuisine: "Indian",
        category: "dinner",
        image: "images/chicken-biryani.svg",
        description: "Aromatic South Indian rice dish with marinated chicken, saffron, and spices.",
        rating: 4.9,
        prepTime: "30 mins",
        cookTime: "45 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "south-indian", "rice", "chicken", "spiced"],
        ingredients: [
            "500g chicken, cut into pieces",
            "2 cups basmati rice",
            "2 onions, sliced",
            "2 tomatoes, chopped",
            "1 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "1 tsp turmeric",
            "2 tsp red chili powder",
            "1 tsp garam masala",
            "1 tsp cumin seeds",
            "4 cloves",
            "2 cinnamon sticks",
            "4 green cardamom",
            "Saffron strands",
            "Fresh coriander and mint",
            "Oil or ghee",
            "Salt to taste"
        ],
        instructions: [
            "Marinate chicken with yogurt, ginger-garlic paste, turmeric, chili powder, and salt for 1 hour.",
            "Wash and soak rice for 30 minutes.",
            "Heat oil/ghee, add whole spices (cumin, cloves, cinnamon, cardamom).",
            "Add sliced onions and fry until golden.",
            "Add tomatoes and cook until soft.",
            "Add marinated chicken and cook for 10 minutes.",
            "Add soaked rice and 4 cups water.",
            "Add garam masala, saffron, and fresh herbs.",
            "Cover and cook on low heat until rice is done.",
            "Garnish with boiled eggs, nuts, and serve hot."
        ],
        nutrition: {
            calories: 450,
            protein: 28,
            carbs: 55,
            fat: 15
        }
    },
    {
        id: 92,
        title: "Idli",
        cuisine: "Indian",
        category: "breakfast",
        image: "images/idli.svg",
        description: "Steamed South Indian rice cakes made from fermented batter.",
        rating: 4.5,
        prepTime: "12 hours",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "south-indian", "steamed", "vegetarian", "fermented"],
        ingredients: [
            "2 cups rice",
            "1/2 cup urad dal",
            "1/4 tsp fenugreek seeds",
            "Salt to taste",
            "Oil for greasing"
        ],
        instructions: [
            "Soak rice and dal separately for 6 hours.",
            "Grind to smooth batter, add fenugreek seeds.",
            "Mix and ferment overnight in warm place.",
            "Grease idli molds and pour batter.",
            "Steam for 10-12 minutes until cooked.",
            "Serve hot with sambar and chutney."
        ],
        nutrition: {
            calories: 120,
            protein: 4,
            carbs: 25,
            fat: 1
        }
    },
    {
        id: 93,
        title: "Medu Vada",
        cuisine: "Indian",
        category: "breakfast",
        image: "images/medu-vada.svg",
        description: "Crispy South Indian lentil donuts, deep-fried and served with chutney.",
        rating: 4.6,
        prepTime: "8 hours",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "south-indian", "deep-fried", "vegetarian", "lentils"],
        ingredients: [
            "1 cup urad dal",
            "1 onion, finely chopped",
            "2 green chilies, chopped",
            "1 tsp ginger, grated",
            "Curry leaves, chopped",
            "1/2 tsp cumin seeds",
            "Oil for deep frying",
            "Salt to taste"
        ],
        instructions: [
            "Soak urad dal for 4-6 hours and grind to smooth paste.",
            "Add chopped onions, chilies, ginger, curry leaves, cumin, and salt.",
            "Mix well and let rest for 10 minutes.",
            "Heat oil in a deep pan.",
            "Wet hands, take small portion of batter, make hole in center.",
            "Carefully slide into hot oil and fry until golden.",
            "Drain on paper towels and serve hot."
        ],
        nutrition: {
            calories: 180,
            protein: 8,
            carbs: 20,
            fat: 8
        }
    },
    {
        id: 94,
        title: "Sambar",
        cuisine: "Indian",
        category: "lunch",
        image: "images/sambar.svg",
        description: "South Indian lentil stew with vegetables and tamarind.",
        rating: 4.4,
        prepTime: "15 mins",
        cookTime: "30 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "south-indian", "vegetarian", "lentils", "stew"],
        ingredients: [
            "1 cup toor dal",
            "2 tomatoes, chopped",
            "1 onion, chopped",
            "2 carrots, chopped",
            "1 potato, chopped",
            "1 drumstick, chopped",
            "2 tbsp sambar powder",
            "1 tbsp tamarind paste",
            "1 tsp mustard seeds",
            "Curry leaves",
            "1 tsp turmeric",
            "Oil for tempering",
            "Salt to taste"
        ],
        instructions: [
            "Cook toor dal with turmeric until soft.",
            "Add chopped vegetables and cook until tender.",
            "Add sambar powder, tamarind paste, and salt.",
            "Simmer for 10 minutes.",
            "For tempering: heat oil, add mustard seeds and curry leaves.",
            "Pour over sambar and serve hot with rice or idli."
        ],
        nutrition: {
            calories: 220,
            protein: 12,
            carbs: 35,
            fat: 4
        }
    },
    {
        id: 95,
        title: "Rasam",
        cuisine: "Indian",
        category: "lunch",
        image: "images/rasam.svg",
        description: "Tangy South Indian soup made with tamarind and spices.",
        rating: 4.3,
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "south-indian", "soup", "vegetarian", "tangy"],
        ingredients: [
            "1 tomato, chopped",
            "1 tbsp tamarind paste",
            "1 tsp rasam powder",
            "1 tsp mustard seeds",
            "1 tsp cumin seeds",
            "Curry leaves",
            "1 tsp turmeric",
            "1 tsp ghee or oil",
            "Fresh coriander",
            "Salt to taste"
        ],
        instructions: [
            "Boil tomato with tamarind paste and spices.",
            "Add rasam powder and turmeric.",
            "Simmer for 5-7 minutes.",
            "For tempering: heat ghee, add mustard seeds, cumin, and curry leaves.",
            "Pour over rasam.",
            "Garnish with coriander and serve hot."
        ],
        nutrition: {
            calories: 80,
            protein: 2,
            carbs: 12,
            fat: 3
        }
    },
    {
        id: 96,
        title: "Chicken Chettinad",
        cuisine: "Indian",
        category: "dinner",
        image: "images/chicken-chettinad.svg",
        description: "Spicy South Indian chicken curry from Chettinad region.",
        rating: 4.7,
        prepTime: "20 mins",
        cookTime: "35 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "south-indian", "chicken", "curry", "spicy"],
        ingredients: [
            "500g chicken, cut into pieces",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "2 tbsp Chettinad masala",
            "1 tbsp ginger-garlic paste",
            "1 tsp turmeric",
            "2 tsp red chili powder",
            "1 cup coconut milk",
            "2 tbsp oil",
            "Curry leaves",
            "Salt to taste"
        ],
        instructions: [
            "Heat oil and sauté onions until golden.",
            "Add ginger-garlic paste and tomatoes.",
            "Cook until tomatoes are soft.",
            "Add Chettinad masala, turmeric, and chili powder.",
            "Add chicken pieces and cook for 10 minutes.",
            "Add coconut milk and simmer until chicken is tender.",
            "Garnish with curry leaves and serve hot."
        ],
        nutrition: {
            calories: 380,
            protein: 25,
            carbs: 15,
            fat: 22
        }
    },
    {
        id: 97,
        title: "Appam",
        cuisine: "Indian",
        category: "breakfast",
        image: "images/appam.svg",
        description: "Fermented South Indian rice pancakes with crispy edges.",
        rating: 4.5,
        prepTime: "12 hours",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "south-indian", "fermented", "vegetarian", "rice"],
        ingredients: [
            "2 cups rice",
            "1/2 cup cooked rice",
            "1/2 cup coconut milk",
            "1 tsp sugar",
            "1/2 tsp baking soda",
            "Salt to taste",
            "Oil for cooking"
        ],
        instructions: [
            "Soak rice for 6 hours and grind with cooked rice.",
            "Add coconut milk, sugar, and salt.",
            "Ferment overnight.",
            "Add baking soda before cooking.",
            "Heat appam pan, pour batter, swirl to coat edges.",
            "Cover and cook until center is set and edges are crispy.",
            "Serve with stew or curry."
        ],
        nutrition: {
            calories: 150,
            protein: 3,
            carbs: 30,
            fat: 2
        }
    },
    {
        id: 98,
        title: "Pongal",
        cuisine: "Indian",
        category: "breakfast",
        image: "images/pongal.svg",
        description: "South Indian rice and lentil dish seasoned with ghee and spices.",
        rating: 4.4,
        prepTime: "10 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "south-indian", "vegetarian", "rice", "lentils"],
        ingredients: [
            "1 cup rice",
            "1/4 cup moong dal",
            "4 cups water",
            "1 tsp cumin seeds",
            "1 tsp black pepper",
            "2 tbsp ghee",
            "Curry leaves",
            "1 tsp ginger, grated",
            "Cashews for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Cook rice and dal with water until soft.",
            "Heat ghee, add cumin, pepper, curry leaves, and ginger.",
            "Pour tempering over cooked pongal.",
            "Mix well and garnish with cashews.",
            "Serve hot with sambar or chutney."
        ],
        nutrition: {
            calories: 280,
            protein: 8,
            carbs: 45,
            fat: 8
        }
    },
    {
        id: 99,
        title: "Fish Curry",
        cuisine: "Indian",
        category: "dinner",
        image: "images/fish-curry.svg",
        description: "Tangy South Indian fish curry with coconut and tamarind.",
        rating: 4.6,
        prepTime: "15 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "south-indian", "fish", "curry", "tangy"],
        ingredients: [
            "500g fish fillets",
            "2 onions, sliced",
            "2 tomatoes, chopped",
            "1 cup coconut milk",
            "2 tbsp tamarind paste",
            "1 tbsp red chili powder",
            "1 tsp turmeric",
            "1 tbsp coriander powder",
            "2 tbsp oil",
            "Curry leaves",
            "Salt to taste"
        ],
        instructions: [
            "Marinate fish with turmeric, chili powder, and salt.",
            "Heat oil, sauté onions until golden.",
            "Add tomatoes and spices, cook for 5 minutes.",
            "Add tamarind paste and coconut milk.",
            "Bring to boil, add marinated fish.",
            "Simmer for 10-15 minutes until fish is cooked.",
            "Garnish with curry leaves and serve with rice."
        ],
        nutrition: {
            calories: 320,
            protein: 28,
            carbs: 12,
            fat: 18
        }
    },
    {
        id: 100,
        title: "Uttapam",
        cuisine: "Indian",
        category: "breakfast",
        image: "images/uttapam.svg",
        description: "Thick South Indian rice pancake topped with vegetables.",
        rating: 4.5,
        prepTime: "12 hours",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "south-indian", "vegetarian", "rice", "vegetables"],
        ingredients: [
            "2 cups rice",
            "1/2 cup urad dal",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "2 green chilies, chopped",
            "Curry leaves",
            "1/2 tsp cumin seeds",
            "Oil for cooking",
            "Salt to taste"
        ],
        instructions: [
            "Soak rice and dal for 6 hours, grind to batter.",
            "Ferment overnight.",
            "Heat griddle, pour thick layer of batter.",
            "Top with chopped vegetables, chilies, and spices.",
            "Drizzle oil around edges.",
            "Cook until golden and crispy.",
            "Serve hot with chutney."
        ],
        nutrition: {
            calories: 200,
            protein: 6,
            carbs: 38,
            fat: 3
        }
    },
    {
        id: 101,
        title: "Hyderabadi Biryani",
        cuisine: "Indian",
        category: "dinner",
        image: "images/hyderabadi-biryani.svg",
        description: "Royal South Indian biryani with layers of marinated meat and saffron rice.",
        rating: 4.8,
        prepTime: "45 mins",
        cookTime: "1 hour",
        servings: 6,
        difficulty: "Hard",
        tags: ["indian", "south-indian", "rice", "lamb", "spiced", "royal"],
        ingredients: [
            "1kg mutton or chicken",
            "3 cups basmati rice",
            "4 onions, sliced",
            "4 tomatoes, chopped",
            "2 cups yogurt",
            "4 tbsp ginger-garlic paste",
            "2 tsp turmeric",
            "3 tsp red chili powder",
            "2 tsp biryani masala",
            "1 tsp garam masala",
            "6 cloves",
            "4 cinnamon sticks",
            "8 green cardamom",
            "2 bay leaves",
            "Saffron strands",
            "Fresh mint and coriander",
            "4 boiled eggs",
            "Fried onions",
            "Ghee or oil",
            "Salt to taste"
        ],
        instructions: [
            "Marinate meat with yogurt, ginger-garlic paste, and spices for 2 hours.",
            "Cook rice with whole spices until 70% done.",
            "Layer meat mixture and rice in a heavy pot.",
            "Add saffron milk, fried onions, and herbs between layers.",
            "Seal with dough and cook on dum for 45 minutes.",
            "Garnish with boiled eggs, nuts, and serve with raita."
        ],
        nutrition: {
            calories: 520,
            protein: 35,
            carbs: 60,
            fat: 18
        }
    },
    {
        id: 102,
        title: "Vegetable Biryani",
        cuisine: "Indian",
        category: "lunch",
        image: "images/vegetable-biryani.svg",
        description: "Aromatic South Indian rice dish with mixed vegetables and spices.",
        rating: 4.6,
        prepTime: "30 mins",
        cookTime: "40 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "south-indian", "rice", "vegetarian", "spiced"],
        ingredients: [
            "2 cups basmati rice",
            "2 carrots, chopped",
            "2 potatoes, cubed",
            "1 cup cauliflower florets",
            "1 cup green peas",
            "2 onions, sliced",
            "2 tomatoes, chopped",
            "1 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "1 tsp turmeric",
            "2 tsp red chili powder",
            "1 tsp garam masala",
            "1 tsp cumin seeds",
            "4 cloves",
            "2 cinnamon sticks",
            "Saffron strands",
            "Fresh coriander and mint",
            "Oil or ghee",
            "Salt to taste"
        ],
        instructions: [
            "Cook rice with whole spices until fluffy.",
            "Sauté vegetables with spices and yogurt.",
            "Layer rice and vegetable mixture.",
            "Add saffron and herbs.",
            "Cover and cook on low heat for 15 minutes.",
            "Serve hot with raita or salad."
        ],
        nutrition: {
            calories: 380,
            protein: 12,
            carbs: 70,
            fat: 8
        }
    },
    {
        id: 103,
        title: "Chicken 65",
        cuisine: "Indian",
        category: "appetizer",
        image: "images/chicken-65.svg",
        description: "Spicy, crispy South Indian fried chicken bites.",
        rating: 4.7,
        prepTime: "15 mins",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "south-indian", "chicken", "spicy", "fried", "appetizer"],
        ingredients: [
            "500g chicken breast, cubed",
            "2 tbsp red chili powder",
            "1 tbsp ginger-garlic paste",
            "2 tbsp cornstarch",
            "1 egg",
            "2 tbsp soy sauce",
            "1 tbsp vinegar",
            "Curry leaves",
            "2 green chilies, chopped",
            "1 tsp mustard seeds",
            "Oil for deep frying",
            "Salt to taste"
        ],
        instructions: [
            "Marinate chicken with chili powder, ginger-garlic paste, soy sauce, vinegar, and salt.",
            "Add cornstarch and egg, mix well.",
            "Deep fry chicken pieces until golden and crispy.",
            "In a separate pan, heat oil and temper mustard seeds, curry leaves, and chilies.",
            "Add fried chicken and toss quickly.",
            "Serve hot as appetizer."
        ],
        nutrition: {
            calories: 280,
            protein: 25,
            carbs: 15,
            fat: 14
        }
    },
    {
        id: 104,
        title: "Dahi Vada",
        cuisine: "Indian",
        category: "appetizer",
        image: "images/dahi-vada.svg",
        description: "Soft lentil dumplings soaked in spiced yogurt.",
        rating: 4.5,
        prepTime: "30 mins",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "south-indian", "vegetarian", "lentils", "yogurt"],
        ingredients: [
            "1 cup urad dal",
            "2 cups yogurt",
            "2 tbsp tamarind chutney",
            "2 tbsp green chutney",
            "1 tsp cumin powder",
            "1 tsp red chili powder",
            "Fresh coriander",
            "Oil for deep frying",
            "Salt to taste"
        ],
        instructions: [
            "Soak and grind urad dal to smooth paste.",
            "Add salt and mix well.",
            "Drop small portions in hot oil and fry until golden.",
            "Soak fried vadas in water for 10 minutes.",
            "Squeeze out water and place in yogurt.",
            "Top with chutneys, spices, and coriander.",
            "Refrigerate for 1 hour before serving."
        ],
        nutrition: {
            calories: 220,
            protein: 10,
            carbs: 25,
            fat: 8
        }
    },
    {
        id: 105,
        title: "Puttu",
        cuisine: "Indian",
        category: "breakfast",
        image: "images/puttu.svg",
        description: "Steamed South Indian rice cake with coconut.",
        rating: 4.4,
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "south-indian", "steamed", "vegetarian", "rice"],
        ingredients: [
            "2 cups rice flour",
            "1 cup grated coconut",
            "1/2 tsp salt",
            "Water as needed"
        ],
        instructions: [
            "Mix rice flour with salt and sprinkle water gradually.",
            "Layer flour and coconut in puttu maker.",
            "Steam for 10-12 minutes until cooked.",
            "Serve hot with banana or curry."
        ],
        nutrition: {
            calories: 180,
            protein: 4,
            carbs: 35,
            fat: 3
        }
    },
    {
        id: 106,
        title: "Avial",
        cuisine: "Indian",
        category: "lunch",
        image: "images/avial.svg",
        description: "Kerala-style mixed vegetable curry with coconut.",
        rating: 4.3,
        prepTime: "20 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "south-indian", "vegetarian", "coconut", "curry"],
        ingredients: [
            "2 carrots, chopped",
            "2 potatoes, cubed",
            "1 cup pumpkin, cubed",
            "1 cup drumsticks",
            "1 cup raw banana, cubed",
            "1 cup coconut, grated",
            "4 green chilies",
            "1 tsp cumin seeds",
            "1 cup yogurt",
            "2 tbsp coconut oil",
            "Curry leaves",
            "Salt to taste"
        ],
        instructions: [
            "Cook all vegetables with salt until tender.",
            "Grind coconut, chilies, and cumin to paste.",
            "Add paste to cooked vegetables.",
            "Stir in yogurt and simmer for 5 minutes.",
            "Temper with coconut oil and curry leaves.",
            "Serve with rice."
        ],
        nutrition: {
            calories: 240,
            protein: 6,
            carbs: 35,
            fat: 10
        }
    },
    {
        id: 107,
        title: "Payasam",
        cuisine: "Indian",
        category: "dessert",
        image: "images/payasam.svg",
        description: "Rich South Indian rice pudding with nuts and saffron.",
        rating: 4.8,
        prepTime: "10 mins",
        cookTime: "30 mins",
        servings: 6,
        difficulty: "Easy",
        tags: ["indian", "south-indian", "vegetarian", "rice", "sweet", "dessert"],
        ingredients: [
            "1/2 cup rice",
            "1 liter milk",
            "1 cup sugar",
            "1/4 cup ghee",
            "10 cashews",
            "10 raisins",
            "4 cardamom pods",
            "Saffron strands",
            "2 tbsp almonds, sliced"
        ],
        instructions: [
            "Cook rice in milk until soft.",
            "Add sugar and cardamom, cook until thick.",
            "Fry nuts and raisins in ghee.",
            "Add to payasam with saffron.",
            "Serve warm or chilled."
        ],
        nutrition: {
            calories: 320,
            protein: 8,
            carbs: 45,
            fat: 12
        }
    },
    {
        id: 108,
        title: "Butter Chicken",
        cuisine: "Indian",
        category: "dinner",
        image: "images/butter-chicken.svg",
        description: "Creamy North Indian chicken curry with rich tomato sauce.",
        rating: 4.9,
        prepTime: "20 mins",
        cookTime: "35 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "north-indian", "chicken", "creamy", "curry"],
        ingredients: [
            "500g chicken breast, cubed",
            "2 onions, pureed",
            "4 tomatoes, pureed",
            "1 cup cream",
            "4 tbsp butter",
            "2 tbsp ginger-garlic paste",
            "2 tsp red chili powder",
            "1 tsp turmeric",
            "2 tsp garam masala",
            "1 tbsp kasuri methi",
            "Fresh cream for garnish",
            "Salt to taste"
        ],
        instructions: [
            "Marinate chicken with yogurt, ginger-garlic paste, and spices.",
            "Cook chicken until tender, set aside.",
            "In same pan, add butter and sauté onion puree.",
            "Add tomato puree and spices, cook until oil separates.",
            "Add cream and cooked chicken.",
            "Simmer for 10 minutes.",
            "Garnish with cream and serve with naan."
        ],
        nutrition: {
            calories: 420,
            protein: 28,
            carbs: 15,
            fat: 28
        }
    },
    {
        id: 109,
        title: "Paneer Tikka",
        cuisine: "Indian",
        category: "appetizer",
        image: "images/paneer-tikka.svg",
        description: "Marinated cottage cheese cubes grilled to perfection.",
        rating: 4.6,
        prepTime: "30 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "north-indian", "vegetarian", "grilled", "cheese"],
        ingredients: [
            "400g paneer, cubed",
            "1 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "2 tsp red chili powder",
            "1 tsp turmeric",
            "2 tsp garam masala",
            "1 tsp cumin powder",
            "2 tbsp lemon juice",
            "2 onions, cubed",
            "2 bell peppers, cubed",
            "Oil for brushing",
            "Salt to taste"
        ],
        instructions: [
            "Mix yogurt with all spices and lemon juice.",
            "Add paneer and vegetables, marinate for 30 minutes.",
            "Thread onto skewers.",
            "Grill or bake at 200°C for 15 minutes.",
            "Brush with oil while cooking.",
            "Serve hot with mint chutney."
        ],
        nutrition: {
            calories: 280,
            protein: 18,
            carbs: 15,
            fat: 16
        }
    },
    {
        id: 110,
        title: "California Roll",
        cuisine: "Japanese",
        category: "appetizer",
        image: "images/california-roll.svg",
        description: "Popular sushi roll with crab, avocado, and cucumber.",
        rating: 4.5,
        prepTime: "30 mins",
        cookTime: "0 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["japanese", "seafood", "rice", "vegetables", "sushi"],
        ingredients: [
            "2 cups sushi rice",
            "4 nori sheets",
            "200g imitation crab",
            "1 avocado, sliced",
            "1 cucumber, julienned",
            "2 tbsp rice vinegar",
            "2 tbsp sugar",
            "1 tsp salt",
            "Sesame seeds",
            "Soy sauce for serving",
            "Wasabi and pickled ginger"
        ],
        instructions: [
            "Cook sushi rice and season with vinegar mixture.",
            "Place nori on sushi mat, spread rice evenly.",
            "Flip nori, add crab, avocado, and cucumber.",
            "Roll tightly using mat.",
            "Cut into 8 pieces each.",
            "Sprinkle with sesame seeds.",
            "Serve with soy sauce, wasabi, and ginger."
        ],
        nutrition: {
            calories: 220,
            protein: 8,
            carbs: 40,
            fat: 4
        }
    },
    {
        id: 111,
        title: "Mutton Biryani",
        cuisine: "Indian",
        category: "dinner",
        image: "images/mutton-biryani.svg",
        description: "Rich and flavorful South Indian biryani with tender mutton.",
        rating: 4.8,
        prepTime: "45 mins",
        cookTime: "1 hour",
        servings: 6,
        difficulty: "Hard",
        tags: ["indian", "south-indian", "rice", "mutton", "spiced"],
        ingredients: [
            "1kg mutton, cut into pieces",
            "3 cups basmati rice",
            "4 onions, sliced",
            "4 tomatoes, chopped",
            "2 cups yogurt",
            "4 tbsp ginger-garlic paste",
            "2 tsp turmeric",
            "3 tsp red chili powder",
            "2 tsp biryani masala",
            "1 tsp garam masala",
            "Whole spices (cloves, cinnamon, cardamom)",
            "Saffron strands",
            "Fresh mint and coriander",
            "4 boiled eggs",
            "Fried onions",
            "Ghee",
            "Salt to taste"
        ],
        instructions: [
            "Marinate mutton with yogurt and spices for 2 hours.",
            "Cook rice with whole spices until 70% done.",
            "Fry onions until golden and caramelized.",
            "Cook marinated mutton until tender.",
            "Layer rice and mutton mixture in a heavy pot.",
            "Add saffron, fried onions, and herbs.",
            "Seal and cook on dum for 45 minutes.",
            "Serve with raita and boiled eggs."
        ],
        nutrition: {
            calories: 550,
            protein: 38,
            carbs: 58,
            fat: 20
        }
    },
    {
        id: 112,
        title: "Chicken Tikka Masala",
        cuisine: "Indian",
        category: "dinner",
        image: "images/chicken-tikka-masala.svg",
        description: "Grilled chicken in rich, creamy tomato-based curry sauce.",
        rating: 4.7,
        prepTime: "30 mins",
        cookTime: "40 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["indian", "north-indian", "chicken", "creamy", "curry"],
        ingredients: [
            "500g chicken breast, cubed",
            "2 cups yogurt",
            "2 tbsp ginger-garlic paste",
            "2 tsp red chili powder",
            "1 tsp turmeric",
            "2 tsp garam masala",
            "3 onions, pureed",
            "4 tomatoes, pureed",
            "1 cup cream",
            "4 tbsp butter",
            "1 tbsp kasuri methi",
            "Fresh coriander",
            "Salt to taste"
        ],
        instructions: [
            "Marinate chicken with yogurt and spices for 1 hour.",
            "Grill or bake chicken until charred.",
            "In a pan, heat butter and sauté onion puree.",
            "Add tomato puree and spices, cook until thick.",
            "Add grilled chicken and cream.",
            "Simmer for 10 minutes, add kasuri methi.",
            "Garnish with coriander and serve with rice or naan."
        ],
        nutrition: {
            calories: 450,
            protein: 32,
            carbs: 18,
            fat: 28
        }
    },
    {
        id: 113,
        title: "Palak Paneer",
        cuisine: "Indian",
        category: "lunch",
        image: "images/palak-paneer.svg",
        description: "Creamy spinach curry with soft paneer cubes.",
        rating: 4.6,
        prepTime: "15 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["indian", "north-indian", "vegetarian", "spinach", "creamy"],
        ingredients: [
            "400g paneer, cubed",
            "500g spinach, blanched",
            "2 onions, chopped",
            "2 tomatoes, chopped",
            "2 green chilies",
            "1 tbsp ginger-garlic paste",
            "1 tsp cumin seeds",
            "1 tsp turmeric",
            "2 tsp coriander powder",
            "1 tsp garam masala",
            "2 tbsp cream",
            "2 tbsp oil",
            "Salt to taste"
        ],
        instructions: [
            "Blanch spinach and blend to smooth paste.",
            "Heat oil, add cumin seeds and sauté onions.",
            "Add ginger-garlic paste and tomatoes.",
            "Add spices and cook until oil separates.",
            "Add spinach paste and simmer for 10 minutes.",
            "Add paneer cubes and cream.",
            "Cook for 5 more minutes.",
            "Serve hot with roti or rice."
        ],
        nutrition: {
            calories: 320,
            protein: 18,
            carbs: 15,
            fat: 22
        }
    },
    {
        id: 114,
        title: "Mexican Tacos",
        cuisine: "Mexican",
        category: "lunch",
        image: "images/mexican-tacos.svg",
        description: "Soft tortillas filled with seasoned meat, cheese, and fresh toppings.",
        rating: 4.5,
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["mexican", "beef", "cheese", "spicy", "street-food"],
        ingredients: [
            "500g ground beef",
            "8 small tortillas",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "1 cup lettuce, shredded",
            "1 cup cheddar cheese, grated",
            "2 tbsp taco seasoning",
            "1 tsp cumin powder",
            "1 tsp chili powder",
            "Sour cream",
            "Salsa",
            "Guacamole",
            "Fresh cilantro",
            "Lime wedges",
            "Oil for cooking"
        ],
        instructions: [
            "Cook ground beef with taco seasoning until browned.",
            "Warm tortillas in a dry pan.",
            "Fill tortillas with beef, cheese, and vegetables.",
            "Top with sour cream, salsa, and guacamole.",
            "Garnish with cilantro and serve with lime.",
            "Fold and enjoy immediately."
        ],
        nutrition: {
            calories: 380,
            protein: 25,
            carbs: 30,
            fat: 18
        }
    },
    {
        id: 115,
        title: "Thai Green Curry",
        cuisine: "Thai",
        category: "dinner",
        image: "images/thai-green-curry.svg",
        description: "Aromatic Thai curry with coconut milk and fresh herbs.",
        rating: 4.7,
        prepTime: "15 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["thai", "curry", "coconut", "spicy", "herbs"],
        ingredients: [
            "400g chicken or tofu",
            "2 tbsp green curry paste",
            "1 can coconut milk",
            "1 cup bamboo shoots",
            "1 cup bell peppers, sliced",
            "1 cup eggplant, cubed",
            "2 tbsp fish sauce",
            "1 tbsp palm sugar",
            "Thai basil leaves",
            "Kaffir lime leaves",
            "Jasmine rice for serving",
            "Fresh chilies",
            "Oil for cooking"
        ],
        instructions: [
            "Heat oil and fry curry paste for 1 minute.",
            "Add thick coconut cream and simmer.",
            "Add chicken/tofu and cook until done.",
            "Add vegetables and thin coconut milk.",
            "Season with fish sauce and palm sugar.",
            "Add basil and lime leaves.",
            "Serve hot with jasmine rice."
        ],
        nutrition: {
            calories: 420,
            protein: 28,
            carbs: 25,
            fat: 24
        }
    },
    {
        id: 116,
        title: "Margherita Pizza",
        cuisine: "Italian",
        category: "dinner",
        image: "images/margherita-pizza.svg",
        description: "Classic Italian pizza with tomato sauce, mozzarella, and basil.",
        rating: 4.8,
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["italian", "cheese", "vegetarian", "baked", "pizza"],
        ingredients: [
            "1 pizza dough (store-bought or homemade)",
            "1/2 cup tomato sauce",
            "200g fresh mozzarella, sliced",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "1 tsp dried oregano",
            "Salt and pepper",
            "Fresh tomatoes, sliced (optional)",
            "Parmesan cheese, grated"
        ],
        instructions: [
            "Preheat oven to 250°C (475°F).",
            "Roll out pizza dough on floured surface.",
            "Spread tomato sauce evenly, leaving border.",
            "Add mozzarella slices and tomato slices.",
            "Drizzle with olive oil and season.",
            "Bake for 12-15 minutes until crust is golden.",
            "Top with fresh basil and parmesan.",
            "Slice and serve immediately."
        ],
        nutrition: {
            calories: 320,
            protein: 15,
            carbs: 40,
            fat: 12
        }
    },
    {
        id: 117,
        title: "Beef Stroganoff",
        cuisine: "Russian",
        category: "dinner",
        image: "images/beef-stroganoff.svg",
        description: "Tender beef strips in creamy mushroom sauce served over noodles.",
        rating: 4.6,
        prepTime: "15 mins",
        cookTime: "25 mins",
        servings: 4,
        difficulty: "Medium",
        tags: ["russian", "beef", "creamy", "mushrooms", "pasta"],
        ingredients: [
            "500g beef sirloin, sliced thin",
            "200g mushrooms, sliced",
            "1 onion, sliced",
            "2 cloves garlic, minced",
            "1 cup beef broth",
            "1 cup sour cream",
            "2 tbsp flour",
            "2 tbsp butter",
            "2 tbsp oil",
            "1 tsp paprika",
            "Salt and pepper",
            "Fresh parsley",
            "Egg noodles for serving"
        ],
        instructions: [
            "Season beef with salt, pepper, and paprika.",
            "Heat oil and brown beef strips, set aside.",
            "In same pan, sauté onions and mushrooms.",
            "Add garlic and flour, cook for 1 minute.",
            "Add broth and bring to simmer.",
            "Stir in sour cream and return beef.",
            "Simmer until sauce thickens.",
            "Serve over cooked egg noodles with parsley."
        ],
        nutrition: {
            calories: 480,
            protein: 35,
            carbs: 25,
            fat: 28
        }
    },
    {
        id: 118,
        title: "Chicken Shawarma",
        cuisine: "Middle Eastern",
        category: "lunch",
        image: "images/chicken-shawarma.svg",
        description: "Marinated chicken wrapped in pita with garlic sauce and vegetables.",
        rating: 4.7,
        prepTime: "30 mins",
        cookTime: "20 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["middle-eastern", "chicken", "spiced", "wrap", "street-food"],
        ingredients: [
            "500g chicken thighs, boneless",
            "4 pita breads",
            "2 tbsp yogurt",
            "2 tbsp lemon juice",
            "2 cloves garlic, minced",
            "1 tsp cumin",
            "1 tsp paprika",
            "1 tsp turmeric",
            "1/2 tsp cinnamon",
            "Tahini sauce",
            "Pickled vegetables",
            "Fresh tomatoes, sliced",
            "Lettuce leaves",
            "Onions, sliced",
            "Oil for cooking"
        ],
        instructions: [
            "Marinate chicken with yogurt, lemon, garlic, and spices for 2 hours.",
            "Grill or pan-fry chicken until cooked through.",
            "Slice chicken into strips.",
            "Warm pita breads.",
            "Fill with chicken, vegetables, and tahini sauce.",
            "Roll tightly and serve immediately."
        ],
        nutrition: {
            calories: 380,
            protein: 28,
            carbs: 35,
            fat: 14
        }
    },
    {
        id: 119,
        title: "Vegetable Fried Rice",
        cuisine: "Chinese",
        category: "lunch",
        image: "images/vegetable-fried-rice.svg",
        description: "Wok-tossed rice with mixed vegetables and aromatic seasonings.",
        rating: 4.4,
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["chinese", "vegetarian", "rice", "wok", "quick"],
        ingredients: [
            "3 cups cooked rice, cooled",
            "1 cup mixed vegetables (carrots, peas, corn, beans)",
            "2 eggs, beaten",
            "2 cloves garlic, minced",
            "1 inch ginger, grated",
            "2 green onions, chopped",
            "2 tbsp soy sauce",
            "1 tbsp oyster sauce",
            "1 tsp sesame oil",
            "2 tbsp oil for cooking",
            "Salt and pepper",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Heat oil in wok, scramble eggs and set aside.",
            "Add garlic and ginger, stir-fry for 30 seconds.",
            "Add vegetables and stir-fry until tender-crisp.",
            "Add rice and toss to combine.",
            "Add soy sauce, oyster sauce, and sesame oil.",
            "Mix in scrambled eggs and green onions.",
            "Season with salt and pepper.",
            "Garnish with sesame seeds and serve hot."
        ],
        nutrition: {
            calories: 280,
            protein: 10,
            carbs: 45,
            fat: 8
        }
    },
    {
        id: 120,
        title: "Greek Salad",
        cuisine: "Greek",
        category: "appetizer",
        image: "images/greek-salad.svg",
        description: "Fresh Mediterranean salad with feta cheese and olive oil dressing.",
        rating: 4.5,
        prepTime: "15 mins",
        cookTime: "0 mins",
        servings: 4,
        difficulty: "Easy",
        tags: ["greek", "vegetarian", "salad", "fresh", "mediterranean"],
        ingredients: [
            "4 tomatoes, chopped",
            "1 cucumber, sliced",
            "1 red onion, thinly sliced",
            "200g feta cheese, cubed",
            "1/2 cup Kalamata olives",
            "1/4 cup olive oil",
            "2 tbsp red wine vinegar",
            "1 tsp dried oregano",
            "Salt and pepper",
            "Fresh parsley, chopped"
        ],
        instructions: [
            "Combine tomatoes, cucumber, and onion in a bowl.",
            "Add feta cheese and olives.",
            "Whisk together olive oil, vinegar, oregano, salt, and pepper.",
            "Pour dressing over salad and toss gently.",
            "Let sit for 10 minutes to meld flavors.",
            "Garnish with parsley before serving.",
            "Serve as appetizer or side dish."
        ],
        nutrition: {
            calories: 220,
            protein: 8,
            carbs: 12,
            fat: 16
        }
    }
];

// Favorites storage
let favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];
let showingFavorites = false;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const recipesContainer = document.getElementById('recipesContainer');
const filterBtns = document.querySelectorAll('.filter-btn');
const showFavoritesBtn = document.getElementById('showFavoritesBtn');
const modal = document.getElementById('recipeModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// Initialize the app
function init() {
    displayRecipes(recipes);
    setupEventListeners();
}

// Display recipes in grid
function displayRecipes(recipeList) {
    recipesContainer.innerHTML = '';

    if (recipeList.length === 0) {
        recipesContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px; color: white;">
                <h3>No recipes found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    recipeList.forEach(recipe => {
        const isFavorited = favorites.includes(recipe.id);
        const card = createRecipeCard(recipe, isFavorited);
        recipesContainer.appendChild(card);
    });
}

// Create recipe card element
function createRecipeCard(recipe, isFavorited) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = () => openModal(recipe);

    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" onerror="this.src='images/placeholder.svg'">
        <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite(event, ${recipe.id})">
            ${isFavorited ? '❤️' : '🤍'}
        </button>
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-meta">
                <span class="recipe-cuisine">${recipe.cuisine}</span>
                <span class="recipe-rating">${'★'.repeat(Math.floor(recipe.rating))}</span>
            </div>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-tags">
                ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

// Toggle favorite status
function toggleFavorite(event, recipeId) {
    event.stopPropagation();

    const index = favorites.indexOf(recipeId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(recipeId);
    }

    localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

// Update favorite buttons
function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const recipeId = parseInt(btn.onclick.toString().match(/\d+/)[0]);
        const isFavorited = favorites.includes(recipeId);
        btn.classList.toggle('favorited', isFavorited);
        btn.innerHTML = isFavorited ? '❤️' : '🤍';
    });
}

// Open recipe modal
function openModal(recipe) {
    const isFavorited = favorites.includes(recipe.id);

    modalContent.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="modal-recipe-image" onerror="this.src='images/placeholder.svg'">
        <div class="modal-content-inner">
            <h2 class="modal-recipe-title">${recipe.title}</h2>
            <div class="modal-recipe-meta">
                <span>🍽️ ${recipe.servings} servings</span>
                <span>⏱️ ${recipe.prepTime} prep</span>
                <span>🔥 ${recipe.cookTime} cook</span>
                <span>📊 ${recipe.difficulty}</span>
            </div>
            <p class="modal-recipe-description">${recipe.description}</p>

            <div class="ingredients-section">
                <h3 class="section-title">Ingredients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>

            <div class="instructions-section">
                <h3 class="section-title">Instructions</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            </div>

            <div class="nutrition-info">
                <h3 class="section-title">Nutrition (per serving)</h3>
                <div class="nutrition-grid">
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.calories}</div>
                        <div class="nutrition-label">Calories</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.protein}g</div>
                        <div class="nutrition-label">Protein</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.carbs}g</div>
                        <div class="nutrition-label">Carbs</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.fat}g</div>
                        <div class="nutrition-label">Fat</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // Favorites toggle
    showFavoritesBtn.addEventListener('click', toggleFavoritesView);

    // Modal close
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Handle search
function handleSearch(e) {
    const searchText = e.target.value.toLowerCase();
    let filteredRecipes = recipes;

    if (searchText) {
        filteredRecipes = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchText) ||
            recipe.cuisine.toLowerCase().includes(searchText) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchText)) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchText))
        );
    }

    // Apply current filter if not showing all
    const activeFilter = document.querySelector('.filter-btn.active');
    if (activeFilter && activeFilter.dataset.filter !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.category === activeFilter.dataset.filter
        );
    }

    displayRecipes(filteredRecipes);
}

// Handle filter
function handleFilter(e) {
    // Clear search when filter is clicked
    searchInput.value = '';

    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    const category = e.target.dataset.filter;
    let filteredRecipes = category === 'all' ? recipes : recipes.filter(recipe => recipe.category === category);

    displayRecipes(filteredRecipes);
}

// Toggle favorites view
function toggleFavoritesView() {
    showingFavorites = !showingFavorites;

    if (showingFavorites) {
        const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));
        displayRecipes(favoriteRecipes);
        showFavoritesBtn.textContent = '🔙 Show All Recipes';
        showFavoritesBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    } else {
        displayRecipes(recipes);
        showFavoritesBtn.textContent = '❤️ Show Favorites';
        showFavoritesBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
    }

    // Reset filters
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
    searchInput.value = '';
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);                     