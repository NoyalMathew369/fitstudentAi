// FitStudent AI - Core Application Script

/* -------------------------------------------------------------
   1. Curated Local Generator Databases (Mock AI Templates)
   ------------------------------------------------------------- */

// Exercise Database mapped by equipment type
const EXERCISE_DATABASE = {
    "Bodyweight Only (Dorm Friendly)": {
        chest: [
            { name: "Push-ups", reps: "12-15", sets: 3, instructions: ["Start in a plank position with hands slightly wider than shoulders.", "Lower your body until your chest nearly touches the floor.", "Push back up to the starting position, keeping your core tight."] },
            { name: "Decline Push-ups", reps: "10-12", sets: 3, instructions: ["Place your feet on an elevated surface like a dorm bed or chair.", "Perform a push-up, focusing on pushing through the upper chest.", "Maintain a rigid line from head to heels."] },
            { name: "Incline Push-ups", reps: "12-15", sets: 3, instructions: ["Place your hands on an elevated surface like a desk or chair.", "Lower your chest to the surface and push back up.", "Great for beginners or building lower chest definition."] }
        ],
        back: [
            { name: "Doorframe Row / Towel Row", reps: "12-15", sets: 4, instructions: ["Stand in a doorway and grip the frame with your fingers.", "Lean back so your arms are straight, keeping feet near the base of the wall.", "Pull your body toward the doorframe, squeezing your shoulder blades together."] },
            { name: "Reverse Iron Cross", reps: "15-20", sets: 3, instructions: ["Lie flat on your stomach with arms out to the sides.", "Squeeze your upper back to raise your chest and arms off the floor.", "Hold for 2 seconds at the top before lowering."] },
            { name: "Prone Cobra", reps: "Hold 30s", sets: 3, instructions: ["Lie face down, arms by your side, thumbs pointing up.", "Lift your chest and hands off the floor, rotating your thumbs outward.", "Hold for the designated time, squeezing the upper back and lower traps."] }
        ],
        legs: [
            { name: "Bodyweight Squats", reps: "15-20", sets: 4, instructions: ["Stand with feet shoulder-width apart.", "Lower your hips down and back as if sitting in a chair, keeping chest up.", "Drive through the heels to stand back up."] },
            { name: "Bulgarian Split Squats", reps: "10-12 (each)", sets: 3, instructions: ["Place one foot behind you on a bed or desk chair.", "Lower your hips until your back knee is just above the floor.", "Keep your front knee aligned over your toes and drive back up."] },
            { name: "Glute Bridges", reps: "15-20", sets: 3, instructions: ["Lie on your back with knees bent and feet flat on the floor.", "Drive your hips upward by squeezing your glutes.", "Lower down slowly under control."] }
        ],
        shoulders: [
            { name: "Pike Push-ups", reps: "8-10", sets: 3, instructions: ["Get into a push-up position, then walk your feet forward to lift your hips high, forming an inverted V-shape.", "Lower the top of your head toward the floor between your hands.", "Push back up to the starting position."] },
            { name: "Prone Y-T-W Raises", reps: "12-15", sets: 3, instructions: ["Lie face down on the floor. Raise arms up in a 'Y' shape, thumbs up.", "Move to a 'T' shape and squeeze shoulders. Move to a 'W' shape bending elbows.", "Great for shoulder health and posture."] }
        ],
        arms: [
            { name: "Dorm Chair Dips", reps: "12-15", sets: 3, instructions: ["Place your hands on the edge of a sturdy desk or chair, feet out in front.", "Lower your body by bending your elbows to 90 degrees.", "Push through your palms to return to the top position."] },
            { name: "Towel Bicep Isometric Curls", reps: "Hold 20s", sets: 3, instructions: ["Place a towel under your foot and grip the ends.", "Curl the towel up with maximum effort, creating static resistance.", "Hold for 20 seconds, squeezing your biceps hard."] }
        ],
        core: [
            { name: "Plank", reps: "45-60s", sets: 3, instructions: ["Rest on your forearms and toes, keeping your body in a straight line.", "Engage your abs and squeeze your glutes.", "Do not let your hips sag."] },
            { name: "Bicycle Crunches", reps: "20 (total)", sets: 3, instructions: ["Lie on your back, hands behind your head.", "Bring opposite elbow to opposite knee, extending the other leg straight.", "Alternate in a fluid, pedaling motion."] }
        ]
    },
    "Resistance Bands": {
        chest: [
            { name: "Banded Chest Press", reps: "12-15", sets: 4, instructions: ["Anchor the band behind your back or around a heavy bedpost.", "Press the bands forward until your arms are fully locked.", "Squeeze your chest at the peak contraction."] },
            { name: "Banded Chest Flyes", reps: "15", sets: 3, instructions: ["Anchor the band behind you. Keep a slight bend in your elbows.", "Bring your hands together in a hugging motion, squeezing the chest.", "Control the stretch on the way back."] }
        ],
        back: [
            { name: "Banded Pull-aparts", reps: "15-20", sets: 4, instructions: ["Hold the band in front of you at shoulder height with straight arms.", "Pull your hands outward to your sides, stretching the band across your chest.", "Squeeze your upper back blades together."] },
            { name: "Banded Standing Row", reps: "12-15", sets: 4, instructions: ["Wrap the band around a door anchor or sturdy post.", "Pull the band towards your chest, driving your elbows back.", "Squeeze your lats and keep your spine neutral."] }
        ],
        legs: [
            { name: "Banded Squats", reps: "15", sets: 4, instructions: ["Stand on the band, pulling the other end over your shoulders.", "Squat down, keeping weight in your heels.", "Stand up against the band resistance, squeezing glutes at the top."] },
            { name: "Banded Hamstring Curls", reps: "15", sets: 3, instructions: ["Anchor the band near the floor. Wrap the loop around your ankle.", "Lie face down and curl your heel toward your glutes against the tension.", "Squeeze and control the release."] }
        ],
        shoulders: [
            { name: "Banded Shoulder Press", reps: "10-12", sets: 3, instructions: ["Stand on the middle of the band, holding handles at shoulder height.", "Press upward overhead until your arms are straight.", "Lower slowly back to shoulder height."] },
            { name: "Banded Lateral Raises", reps: "12-15", sets: 3, instructions: ["Stand on the band with one foot, holding handles by your side.", "Raise your arms out to the sides until they are parallel to the floor.", "Do not swing your body."] }
        ],
        arms: [
            { name: "Banded Bicep Curls", reps: "15", sets: 3, instructions: ["Stand on the band and curl the handles toward your shoulders.", "Keep your elbows locked to your ribs."] },
            { name: "Banded Overhead Tricep Extensions", reps: "15", sets: 3, instructions: ["Stand on one end of the band. Pull the loop up behind your back.", "Extend your arms overhead, keeping elbows pointing forward."] }
        ],
        core: [
            { name: "Banded Kneeling Pallof Press", reps: "12 (each)", sets: 3, instructions: ["Anchor band at chest height. Hold handle with both hands at your chest.", "Press the band straight out. Resist the band trying to pull you sideways.", "Hold for 2 seconds and bring it back in."] }
        ]
    },
    "Dumbbells Only": {
        chest: [
            { name: "Dumbbell Floor Press", reps: "10-12", sets: 4, instructions: ["Lie flat on the floor with dumbbells, knees bent, feet flat.", "Lower the dumbbells until your triceps touch the floor.", "Press the dumbbells straight back up to lock out."] },
            { name: "Dumbbell Incline Flyes", reps: "12", sets: 3, instructions: ["Prop your mattress or use an inclined board/bench.", "Open weights out in a wide arc, feeling chest stretch.", "Bring them back together at the top, squeezing."] }
        ],
        back: [
            { name: "Single-Arm Dumbbell Row", reps: "10-12 (each)", sets: 4, instructions: ["Support yourself on a desk or chair with one hand.", "Hold a dumbbell in the other hand and pull it up to your hip.", "Drive with the elbow, keeping your shoulder down."] },
            { name: "Dumbbell Romanian Deadlifts", reps: "12", sets: 4, instructions: ["Stand holding dumbbells in front of your thighs.", "Hinge at the hips, lowering weights down your legs while keeping back straight.", "Squeeze your glutes and hamstrings to return to standing."] }
        ],
        legs: [
            { name: "Dumbbell Goblet Squats", reps: "12-15", sets: 4, instructions: ["Hold one dumbbell vertically in front of your chest like a goblet.", "Squat deep, keeping your elbows inside your knees.", "Drive back up to top."] },
            { name: "Dumbbell Walking Lunges", reps: "16 (total)", sets: 3, instructions: ["Hold dumbbells by your sides.", "Step forward and lower your back knee to just above the floor.", "Alternate legs walking forward."] }
        ],
        shoulders: [
            { name: "Dumbbell Shoulder Press", reps: "10-12", sets: 3, instructions: ["Sit upright on a chair or stand holding dumbbells at shoulder level.", "Press the weights overhead until arms are locked.", "Lower slowly back to the start position."] },
            { name: "Dumbbell Lateral Raises", reps: "12-15", sets: 3, instructions: ["Hold dumbbells by your sides. Bend forward slightly.", "Raise dumbbells out to the sides to shoulder height.", "Lower slowly, resisting the weights."] }
        ],
        arms: [
            { name: "Dumbbell Hammer Curls", reps: "12", sets: 3, instructions: ["Hold dumbbells with palms facing each other (neutral grip).", "Curl weights up, keeping elbows stationary."] },
            { name: "Dumbbell Overhead Extensions", reps: "12", sets: 3, instructions: ["Hold one heavy dumbbell with both hands overhead.", "Lower the weight behind your head by bending elbows.", "Extend arms back overhead."] }
        ],
        core: [
            { name: "Dumbbell Russian Twists", reps: "20 (total)", sets: 3, instructions: ["Sit on the floor, lean back slightly, knees bent.", "Hold a dumbbell and twist your torso side to side, tapping the weight."] }
        ]
    },
    "Full Gym / Campus Gym Access": {
        chest: [
            { name: "Barbell Bench Press", reps: "8-10", sets: 4, instructions: ["Lie flat on the bench, grip the barbell wider than shoulders.", "Lower the bar to your chest, elbows at a 45-degree angle.", "Drive the bar up forcefully."] },
            { name: "Cable Chest Crossovers", reps: "12-15", sets: 3, instructions: ["Set cables high. Bring hands down and forward in front of hips.", "Squeeze the chest and return slowly under control."] }
        ],
        back: [
            { name: "Barbell Deadlifts", reps: "5", sets: 3, instructions: ["Stand with feet mid-foot under the bar. Bend and grip the bar.", "Keep chest up and spine flat. Drive through your feet to stand.", "Squeeze glutes at lock out."] },
            { name: "Lat Pulldowns", reps: "10-12", sets: 4, instructions: ["Sit at pulldown station. Grip bar wide.", "Pull the bar down to your collarbone, squeezing your lats.", "Allow the bar to rise slowly."] }
        ],
        legs: [
            { name: "Barbell Back Squats", reps: "8-10", sets: 4, instructions: ["Set barbell on upper back/traps. Feet shoulder-width apart.", "Squat below parallel, keeping knees pushed outward.", "Drive straight up through the middle of the feet."] },
            { name: "Leg Press Machine", reps: "10-12", sets: 3, instructions: ["Sit in leg press machine, feet shoulder-width on platform.", "Unlock safety, lower knees to 90 degrees.", "Press platform away without locking your knees."] }
        ],
        shoulders: [
            { name: "Overhead Barbell Press", reps: "8-10", sets: 3, instructions: ["Hold barbell at collarbone level, standing.", "Press the bar straight overhead, tucking chin briefly as bar passes face.", "Lock out arms at top."] },
            { name: "Cable Lateral Raises", reps: "12-15", sets: 3, instructions: ["Hold cable handle behind your back.", "Raise arm out to side to shoulder height, keeping tension throughout."] }
        ],
        arms: [
            { name: "Barbell Bicep Curls", reps: "10-12", sets: 3, instructions: ["Stand holding barbell with underhand grip.", "Curl the bar up, keeping upper arms stationary."] },
            { name: "Cable Tricep Pushdowns", reps: "12-15", sets: 3, instructions: ["Grip rope attachment at chest height.", "Push down, extending elbows fully and separating rope at bottom."] }
        ],
        core: [
            { name: "Hanging Knee Raises", reps: "12-15", sets: 3, instructions: ["Hang from pull-up bar.", "Raise knees toward your chest, engaging lower abdominals, lower slowly."] }
        ]
    }
};

// Diet and Recipe database mapped by Culture -> Budget Tier
const DIET_DATABASE = {
    "Standard Western": {
        1: [ // Ultra Budget
            {
                type: "Breakfast", name: "High-Protein Banana Oats", cost: 0.90, calories: 480, protein: 18, carbs: 70, fats: 12,
                ingredients: [{ name: "Rolled Oats", qty: "80g", cost: 0.20 }, { name: "Peanut Butter", qty: "2 tbsp", cost: 0.25 }, { name: "Banana", qty: "1 medium", cost: 0.15 }, { name: "Whole Milk", qty: "200ml", cost: 0.30 }],
                directions: ["Boil oats in milk and water until creamy.", "Stir in peanut butter.", "Slice banana on top and serve."]
            },
            {
                type: "Lunch", name: "Budget Tuna Salad Pocket", cost: 1.10, calories: 450, protein: 32, carbs: 40, fats: 14,
                ingredients: [{ name: "Canned Tuna", qty: "1 can", cost: 0.65 }, { name: "Whole Wheat Pita", qty: "1 large", cost: 0.20 }, { name: "Light Mayo", qty: "1 tbsp", cost: 0.10 }, { name: "Celery & Onion", qty: "50g", cost: 0.15 }],
                directions: ["Drain canned tuna and flake into a bowl.", "Mix with mayo and diced celery/onion.", "Stuff into warmed pita bread."]
            },
            {
                type: "Dinner", name: "Baked Chicken Drumsticks & Rice", cost: 1.30, calories: 650, protein: 42, carbs: 75, fats: 18,
                ingredients: [{ name: "Chicken Drumsticks", qty: "250g", cost: 0.80 }, { name: "White Rice", qty: "90g (dry)", cost: 0.15 }, { name: "Frozen Peas & Carrots", qty: "80g", cost: 0.20 }, { name: "Vegetable Oil", qty: "1 tbsp", cost: 0.15 }],
                directions: ["Season chicken with salt, pepper, and garlic powder.", "Bake at 400°F (200°C) for 35 mins.", "Serve with boiled rice and steamed vegetables."]
            },
            {
                type: "Snack", name: "Boiled Eggs & Apple", cost: 0.60, calories: 250, protein: 13, carbs: 22, fats: 10,
                ingredients: [{ name: "Eggs", qty: "2 large", cost: 0.30 }, { name: "Apple", qty: "1 medium", cost: 0.30 }],
                directions: ["Hardboil eggs (approx 9 mins).", "Slice apple and enjoy eggs seasoned with pinch of salt."]
            }
        ],
        2: [ // Moderate Budget
            {
                type: "Breakfast", name: "Greek Yogurt Berry Parfait", cost: 1.80, calories: 420, protein: 30, carbs: 48, fats: 8,
                ingredients: [{ name: "Greek Yogurt (Nonfat)", qty: "250g", cost: 0.90 }, { name: "Frozen Berries", qty: "100g", cost: 0.50 }, { name: "Granola", qty: "40g", cost: 0.30 }, { name: "Honey", qty: "1 tsp", cost: 0.10 }],
                directions: ["Layer Greek yogurt and thawed berries in a cup.", "Top with crispy granola and drizzle of honey."]
            },
            {
                type: "Lunch", name: "Grilled Chicken & Sweet Potato Bowl", cost: 2.50, calories: 580, protein: 44, carbs: 60, fats: 12,
                ingredients: [{ name: "Chicken Breast", qty: "180g", cost: 1.30 }, { name: "Sweet Potato", qty: "200g", cost: 0.50 }, { name: "Broccoli", qty: "100g", cost: 0.40 }, { name: "Olive Oil", qty: "1 tbsp", cost: 0.30 }],
                directions: ["Pan-sear chicken breast seasoned with spices.", "Bake or microwave sweet potato cubes.", "Steam broccoli and toss with olive oil and spices."]
            },
            {
                type: "Dinner", name: "Ground Turkey Stir-Fry Noodles", cost: 2.80, calories: 620, protein: 38, carbs: 70, fats: 16,
                ingredients: [{ name: "Lean Ground Turkey", qty: "150g", cost: 1.50 }, { name: "Ramen Noodles", qty: "1 packet", cost: 0.30 }, { name: "Stir-fry Veggie Mix", qty: "150g", cost: 0.70 }, { name: "Soy Sauce & Ginger", qty: "2 tbsp", cost: 0.30 }],
                directions: ["Brown ground turkey in a hot skillet.", "Boil noodles separately.", "Add veggies to turkey, stir-fry, toss in noodles and sauce."]
            },
            {
                type: "Snack", name: "Cottage Cheese & Almonds", cost: 1.20, calories: 280, protein: 18, carbs: 10, fats: 18,
                ingredients: [{ name: "Cottage Cheese", qty: "150g", cost: 0.70 }, { name: "Whole Almonds", qty: "25g", cost: 0.50 }],
                directions: ["Scoop cottage cheese into bowl, top with almonds and cracked pepper."]
            }
        ],
        3: [ // Premium Protein
            {
                type: "Breakfast", name: "Smoked Salmon & Egg White Scramble", cost: 3.80, calories: 450, protein: 38, carbs: 20, fats: 22,
                ingredients: [{ name: "Egg Whites", qty: "150ml", cost: 1.00 }, { name: "Whole Egg", qty: "1 large", cost: 0.15 }, { name: "Smoked Salmon", qty: "75g", cost: 2.00 }, { name: "Avocado", qty: "1/2 medium", cost: 0.65 }],
                directions: ["Scramble egg whites and whole egg together in a non-stick pan.", "Fold in smoked salmon pieces near the end.", "Serve with sliced avocado on the side."]
            },
            {
                type: "Lunch", name: "Premium Beef & Quinoa Salad Bowl", cost: 4.50, calories: 680, protein: 48, carbs: 55, fats: 24,
                ingredients: [{ name: "Sirloin Steak", qty: "180g", cost: 3.00 }, { name: "Quinoa (Dry)", qty: "70g", cost: 0.50 }, { name: "Spinach & Cherry Tomatoes", qty: "100g", cost: 0.60 }, { name: "Feta Cheese", qty: "20g", cost: 0.40 }],
                directions: ["Grill sirloin steak to desired doneness, slice.", "Cook quinoa in vegetable broth.", "Combine quinoa, spinach, tomatoes, feta, and olive oil dressing."]
            },
            {
                type: "Dinner", name: "Baked Salmon & Asparagus Spears", cost: 5.50, calories: 610, protein: 42, carbs: 25, fats: 32,
                ingredients: [{ name: "Atlantic Salmon Fillet", qty: "200g", cost: 4.20 }, { name: "Asparagus", qty: "120g", cost: 0.80 }, { name: "Olive Oil & Lemon", qty: "2 tbsp", cost: 0.50 }],
                directions: ["Season salmon with lemon juice, dill, and salt.", "Bake salmon and asparagus at 375°F (190°C) for 15-20 mins.", "Drizzle with olive oil."]
            },
            {
                type: "Snack", name: "Whey Protein Shake & Berries", cost: 2.20, calories: 310, protein: 28, carbs: 30, fats: 4,
                ingredients: [{ name: "Whey Protein Powder", qty: "1 scoop", cost: 1.20 }, { name: "Fresh Blueberries", qty: "100g", cost: 0.80 }, { name: "Almond Milk", qty: "250ml", cost: 0.20 }],
                directions: ["Blend protein powder and almond milk in shaker.", "Eat fresh berries alongside."]
            }
        ]
    },
    "Indian Vegetarian": {
        1: [ // Indian Vegetarian - Ultra Budget
            {
                type: "Breakfast", name: "Spiced Masala Oats & Peanut Butter", cost: 0.80, calories: 460, protein: 15, carbs: 68, fats: 14,
                ingredients: [{ name: "Rolled Oats", qty: "80g", cost: 0.20 }, { name: "Masala Spices & Veggies", qty: "50g", cost: 0.15 }, { name: "Peanut Butter", qty: "2 tbsp", cost: 0.25 }, { name: "Milk", qty: "150ml", cost: 0.20 }],
                directions: ["Cook oats with milk, water, pinch of turmeric, garam masala, and finely chopped onions/peas.", "Top with peanut butter to add healthy fats and protein."]
            },
            {
                type: "Lunch", name: "High-Protein Dal Tadka & Rice", cost: 0.95, calories: 590, protein: 24, carbs: 90, fats: 10,
                ingredients: [{ name: "Red Lentils (Masoor Dal)", qty: "90g (dry)", cost: 0.25 }, { name: "Basmati Rice", qty: "90g (dry)", cost: 0.20 }, { name: "Onions, Tomatoes, Spices", qty: "100g", cost: 0.30 }, { name: "Ghee/Oil", qty: "1 tbsp", cost: 0.20 }],
                directions: ["Pressure cook red lentils with turmeric.", "Prepare tempering (tadka) using ghee, cumin seeds, onions, tomatoes, and red chili powder.", "Mix dal and tadka, serve with steamed basmati rice."]
            },
            {
                type: "Dinner", name: "Chana Masala (Spiced Chickpeas) & Roti", cost: 1.10, calories: 570, protein: 20, carbs: 85, fats: 12,
                ingredients: [{ name: "Dry Chickpeas", qty: "100g", cost: 0.30 }, { name: "Whole Wheat Atta Roti", qty: "3 pieces", cost: 0.30 }, { name: "Gravy Base (Tomato, Onion, Garlic)", qty: "120g", cost: 0.35 }, { name: "Oil", qty: "1 tbsp", cost: 0.15 }],
                directions: ["Soak and boil chickpeas.", "Cook onion-tomato masala base with ginger-garlic paste and chana masala powder.", "Simmer chickpeas in gravy, serve with hot rotis."]
            },
            {
                type: "Snack", name: "Roasted Chana & Buttermilk (Chaas)", cost: 0.50, calories: 230, protein: 12, carbs: 32, fats: 5,
                ingredients: [{ name: "Roasted Bengal Gram (Chana)", qty: "50g", cost: 0.25 }, { name: "Yogurt (Curd)", qty: "3 tbsp", cost: 0.15 }, { name: "Mint & Jeera", qty: "pinch", cost: 0.10 }],
                directions: ["Munch on dry roasted chana.", "Blend curd with water, roasted cumin (jeera) powder, and mint for a cooling drink."]
            }
        ],
        2: [ // Indian Vegetarian - Moderate
            {
                type: "Breakfast", name: "Paneer Bhurji Toast", cost: 1.90, calories: 490, protein: 28, carbs: 40, fats: 20,
                ingredients: [{ name: "Paneer (Cottage Cheese)", qty: "120g", cost: 1.10 }, { name: "Whole Wheat Bread", qty: "2 slices", cost: 0.20 }, { name: "Onion, Capsicum, Tomatoes", qty: "80g", cost: 0.40 }, { name: "Butter/Oil", qty: "1 tsp", cost: 0.20 }],
                directions: ["Crumble paneer.", "Sauté onion, green chilies, and capsicum in oil, add turmeric and salt.", "Stir in paneer, cook for 3 mins, serve on toasted wheat bread."]
            },
            {
                type: "Lunch", name: "High-Protein Lentil Khichdi & Curd", cost: 1.70, calories: 560, protein: 22, carbs: 80, fats: 14,
                ingredients: [{ name: "Moong Dal & Rice", qty: "100g combined", cost: 0.35 }, { name: "Spinach (Palak)", qty: "80g", cost: 0.30 }, { name: "Curd (Yogurt)", qty: "150g", cost: 0.60 }, { name: "Ghee", qty: "1 tbsp", cost: 0.45 }],
                directions: ["Cook dal, rice, and chopped spinach in pressure cooker with salt and turmeric.", "Top with warm ghee. Serve with thick curd."]
            },
            {
                type: "Dinner", name: "Soya Chunks Curry & Brown Rice", cost: 1.60, calories: 600, protein: 36, carbs: 82, fats: 10,
                ingredients: [{ name: "Soya Chunks (Mealmaker)", qty: "60g", cost: 0.30 }, { name: "Brown Rice", qty: "90g (dry)", cost: 0.30 }, { name: "Onion-Tomato Curry Base", qty: "150g", cost: 0.50 }, { name: "Oil & Spices", qty: "1 tbsp", cost: 0.50 }],
                directions: ["Boil soya chunks, squeeze out excess water.", "Sauté in onion-tomato-garlic curry paste with garam masala.", "Simmer for 10 mins and serve with steamed brown rice."]
            },
            {
                type: "Snack", name: "Sprouted Moong Salad", cost: 0.80, calories: 210, protein: 11, carbs: 35, fats: 2,
                ingredients: [{ name: "Sprouted Moong Beans", qty: "80g", cost: 0.30 }, { name: "Cucumber, Tomato, Lemon", qty: "80g", cost: 0.40 }, { name: "Chaant Masala", qty: "pinch", cost: 0.10 }],
                directions: ["Toss sprouts with diced cucumber, tomato, green chilies, cilantro, lemon juice, and chaat masala."]
            }
        ],
        3: [ // Indian Vegetarian - Premium Protein
            {
                type: "Breakfast", name: "Whey Protein Oats & Mixed Seeds", cost: 2.80, calories: 510, protein: 35, carbs: 55, fats: 14,
                ingredients: [{ name: "Whey Protein (Vanilla/Chocolate)", qty: "1 scoop", cost: 1.20 }, { name: "Oats", qty: "70g", cost: 0.20 }, { name: "Almond Milk", qty: "200ml", cost: 0.50 }, { name: "Chia & Pumpkin Seeds", qty: "15g", cost: 0.90 }],
                directions: ["Cook oats in almond milk. Remove from heat and let cool slightly.", "Whisk in protein powder.", "Garnish with chia and pumpkin seeds."]
            },
            {
                type: "Lunch", name: "Paneer Tikka Salad Bowl & Quinoa", cost: 3.90, calories: 630, protein: 34, carbs: 42, fats: 32,
                ingredients: [{ name: "Paneer", qty: "160g", cost: 1.60 }, { name: "Quinoa", qty: "60g (dry)", cost: 0.60 }, { name: "Bell Peppers & Broccoli", qty: "120g", cost: 0.90 }, { name: "Hung Curd Marinade", qty: "3 tbsp", cost: 0.80 }],
                directions: ["Marinate paneer cubes and veggies in hung curd and spices.", "Air-fry or grill paneer tikka.", "Serve over cooked quinoa with a squeeze of lime."]
            },
            {
                type: "Dinner", name: "Premium Tofu & Broccoli Almond Stir-Fry", cost: 3.50, calories: 540, protein: 30, carbs: 24, fats: 36,
                ingredients: [{ name: "Extra Firm Tofu", qty: "200g", cost: 1.50 }, { name: "Broccoli & Mushrooms", qty: "150g", cost: 1.00 }, { name: "Almonds Sliced", qty: "20g", cost: 0.50 }, { name: "Olive Oil & Soy Ginger Sauce", qty: "2 tbsp", cost: 0.50 }],
                directions: ["Press tofu and cut into cubes.", "Pan-fry tofu in olive oil until golden.", "Add broccoli and mushrooms, toss in soy-ginger sauce, top with sliced almonds."]
            },
            {
                type: "Snack", name: "Roasted Paneer Cubes & Green Tea", cost: 2.00, calories: 290, protein: 18, carbs: 4, fats: 22,
                ingredients: [{ name: "Paneer", qty: "100g", cost: 1.00 }, { name: "Olive Oil", qty: "1 tsp", cost: 0.20 }, { name: "Black Pepper & Herbs", qty: "pinch", cost: 0.80 }],
                directions: ["Pan-sear paneer cubes with 1 tsp olive oil until warm and crisp. Dust with black pepper and oregano."]
            }
        ]
    },
    "Halal": {
        1: [ // Halal - Ultra Budget
            {
                type: "Breakfast", name: "Sweet Peanut Butter Egg Scramble", cost: 0.85, calories: 440, protein: 20, carbs: 32, fats: 24,
                ingredients: [{ name: "Halal Checked Eggs", qty: "3 large", cost: 0.45 }, { name: "Peanut Butter", qty: "1.5 tbsp", cost: 0.20 }, { name: "Brown Bread", qty: "2 slices", cost: 0.20 }],
                directions: ["Scramble eggs with a touch of butter or oil.", "Spread peanut butter over toasted brown bread and eat together."]
            },
            {
                type: "Lunch", name: "Halal Roasted Chicken Legs & Yellow Rice", cost: 1.40, calories: 680, protein: 44, carbs: 80, fats: 18,
                ingredients: [{ name: "Halal Chicken Leg Quarters", qty: "300g", cost: 0.85 }, { name: "Turmeric Rice", qty: "90g (dry)", cost: 0.20 }, { name: "Onions & Garlic", qty: "50g", cost: 0.15 }, { name: "Oil", qty: "1 tbsp", cost: 0.20 }],
                directions: ["Season chicken with salt, cumin, garlic, and turmeric.", "Roast in oven or pan-cook until fully tender.", "Serve with turmeric spiced yellow rice."]
            },
            {
                type: "Dinner", name: "Spiced Beef Mince & Lentils (Dal Keema)", cost: 1.50, calories: 610, protein: 38, carbs: 55, fats: 22,
                ingredients: [{ name: "Halal Ground Beef", qty: "120g", cost: 0.90 }, { name: "Split Yellow Peas", qty: "60g", cost: 0.20 }, { name: "Ginger, Tomato Base", qty: "100g", cost: 0.25 }, { name: "Oil", qty: "1 tbsp", cost: 0.15 }],
                directions: ["Boil yellow split peas until soft.", "Sauté onions, ginger, and garlic, add ground beef and brown it.", "Add tomatoes, spices, boiled peas, and cook until thick. Serve with boiled rice or flatbread."]
            },
            {
                type: "Snack", name: "Dates & Banana Smoothie", cost: 0.70, calories: 300, protein: 7, carbs: 62, fats: 2,
                ingredients: [{ name: "Halal Dates", qty: "3 pieces", cost: 0.30 }, { name: "Banana", qty: "1 large", cost: 0.15 }, { name: "Skimmed Milk", qty: "200ml", cost: 0.25 }],
                directions: ["Blend dates, banana, and milk together until smooth."]
            }
        ],
        2: [ // Halal - Moderate Budget
            {
                type: "Breakfast", name: "Mediterranean Egg & Feta Scramble", cost: 1.80, calories: 430, protein: 25, carbs: 24, fats: 26,
                ingredients: [{ name: "Halal Eggs", qty: "3 large", cost: 0.45 }, { name: "Feta Cheese", qty: "30g", cost: 0.60 }, { name: "Tomatoes & Spinach", qty: "80g", cost: 0.45 }, { name: "Wheat Toast", qty: "2 slices", cost: 0.30 }],
                directions: ["Whisk eggs. Sauté chopped spinach and tomatoes in a pan.", "Add eggs, scramble, crumble feta cheese on top, serve with toasted bread."]
            },
            {
                type: "Lunch", name: "Halal Chicken Shawarma Plate", cost: 2.70, calories: 600, protein: 42, carbs: 58, fats: 20,
                ingredients: [{ name: "Halal Chicken Breast", qty: "160g", cost: 1.30 }, { name: "Pita Bread", qty: "2 large", cost: 0.40 }, { name: "Cucumbers & Hummus", qty: "100g", cost: 0.70 }, { name: "Shawarma Spices & Yogurt Sauce", qty: "3 tbsp", cost: 0.30 }],
                directions: ["Slice chicken thinly, toss in cumin, paprika, and yogurt marinade, pan-sear.", "Warm pita bread, spread hummus, fill with sliced chicken, cucumber, and garlic sauce."]
            },
            {
                type: "Dinner", name: "Beef & Vegetable Stir-Fry Rice", cost: 2.90, calories: 650, protein: 40, carbs: 75, fats: 18,
                ingredients: [{ name: "Halal Stir-Fry Beef Strips", qty: "150g", cost: 1.80 }, { name: "Jasmine Rice", qty: "80g (dry)", cost: 0.25 }, { name: "Carrots, Bell Peppers, Broccoli", qty: "120g", cost: 0.55 }, { name: "Sesame Oil & Soy Sauce", qty: "2 tbsp", cost: 0.30 }],
                directions: ["Sauté beef strips in sesame oil on high heat.", "Add mixed vegetables and cook until tender-crisp.", "Stir-fry with cooked jasmine rice and soy sauce."]
            },
            {
                type: "Snack", name: "Hummus, Pita Chips & Walnuts", cost: 1.30, calories: 310, protein: 10, carbs: 32, fats: 16,
                ingredients: [{ name: "Hummus", qty: "80g", cost: 0.60 }, { name: "Baked Pita Chips", qty: "40g", cost: 0.30 }, { name: "Walnuts", qty: "15g", cost: 0.40 }],
                directions: ["Serve hummus dip with baked whole-wheat pita chips and a side of healthy walnuts."]
            }
        ],
        3: [ // Halal - Premium Protein
            {
                type: "Breakfast", name: "Avocado, Eggs & Beef Bacon Toast", cost: 3.50, calories: 520, protein: 29, carbs: 28, fats: 32,
                ingredients: [{ name: "Halal Beef Bacon Strips", qty: "2 strips", cost: 1.00 }, { name: "Eggs", qty: "2 large", cost: 0.30 }, { name: "Avocado", qty: "1/2 medium", cost: 0.65 }, { name: "Sourdough Bread", qty: "2 slices", cost: 1.00 }, { name: "Butter", qty: "1 tsp", cost: 0.55 }],
                directions: ["Pan-fry beef bacon until crispy. Fry eggs in butter.", "Mash avocado with salt, pepper, and spread on toasted sourdough.", "Top toast with eggs and crispy beef bacon."]
            },
            {
                type: "Lunch", name: "Premium Grilled lamb & Quinoa Bowl", cost: 4.80, calories: 710, protein: 45, carbs: 50, fats: 30,
                ingredients: [{ name: "Halal Lamb Chop/Cutlet", qty: "180g", cost: 3.20 }, { name: "Quinoa", qty: "70g (dry)", cost: 0.60 }, { name: "Mint Yogurt Dressing", qty: "3 tbsp", cost: 0.50 }, { name: "Mixed Greens Salad", qty: "100g", cost: 0.50 }],
                directions: ["Grill lamb seasoned with rosemary and garlic.", "Boil quinoa.", "Arrange salad greens and quinoa, top with lamb and a drizzle of cool mint yogurt dressing."]
            },
            {
                type: "Dinner", name: "Baked Halal Salmon with Dill Sauce & Asparagus", cost: 5.80, calories: 640, protein: 44, carbs: 22, fats: 38,
                ingredients: [{ name: "Atlantic Salmon Fillet", qty: "200g", cost: 4.20 }, { name: "Asparagus", qty: "120g", cost: 0.80 }, { name: "Herb Cream Dill Sauce", qty: "2 tbsp", cost: 0.80 }],
                directions: ["Drizzle salmon with olive oil, lemon, salt, pepper.", "Bake alongside fresh asparagus for 18 mins.", "Drizzle with dill sauce."]
            },
            {
                type: "Snack", name: "High-Protein Shake & Almonds", cost: 2.20, calories: 320, protein: 32, carbs: 12, fats: 14,
                ingredients: [{ name: "Halal Certified Whey Protein", qty: "1 scoop", cost: 1.30 }, { name: "Almond Milk", qty: "250ml", cost: 0.40 }, { name: "Almonds", qty: "20g", cost: 0.50 }],
                directions: ["Shake protein powder with almond milk. Eat raw almonds on the side."]
            }
        ]
    },
    "Vegan": {
        1: [ // Vegan - Ultra Budget
            {
                type: "Breakfast", name: "Soy Milk Oatmeal & Banana", cost: 0.75, calories: 430, protein: 14, carbs: 75, fats: 8,
                ingredients: [{ name: "Rolled Oats", qty: "80g", cost: 0.20 }, { name: "Soy Milk", qty: "250ml", cost: 0.30 }, { name: "Banana", qty: "1 medium", cost: 0.15 }, { name: "Cinnamon", qty: "pinch", cost: 0.10 }],
                directions: ["Boil oats in soy milk with a pinch of cinnamon.", "Slice banana over the top and serve."]
            },
            {
                type: "Lunch", name: "High-Protein Lentil & Spinach Stew", cost: 0.85, calories: 520, protein: 26, carbs: 82, fats: 8,
                ingredients: [{ name: "Brown Lentils", qty: "100g (dry)", cost: 0.25 }, { name: "Frozen Spinach", qty: "100g", cost: 0.30 }, { name: "Canned Diced Tomato & Garlic", qty: "100g", cost: 0.20 }, { name: "Olive Oil", qty: "1 tsp", cost: 0.10 }],
                directions: ["Boil brown lentils in water.", "Sauté garlic in olive oil, add tomatoes and spinach.", "Add lentils, simmer for 15 mins with salt, cumin, and black pepper. Eat with rice or bread."]
            },
            {
                type: "Dinner", name: "Black Bean & Tofu Burrito Bowl", cost: 1.10, calories: 580, protein: 25, carbs: 88, fats: 12,
                ingredients: [{ name: "Canned Black Beans", qty: "1/2 can", cost: 0.35 }, { name: "Firm Tofu", qty: "120g", cost: 0.40 }, { name: "White Rice", qty: "90g (dry)", cost: 0.15 }, { name: "Salsa", qty: "2 tbsp", cost: 0.20 }],
                directions: ["Boil white rice.", "Crumble tofu, sauté in a pan with taco seasoning.", "Rinse black beans, warm them, combine with tofu and salsa over a bed of rice."]
            },
            {
                type: "Snack", name: "Peanut Butter & Toast", cost: 0.50, calories: 270, protein: 10, carbs: 30, fats: 13,
                ingredients: [{ name: "Peanut Butter", qty: "2 tbsp", cost: 0.30 }, { name: "Vegan Wheat Bread", qty: "2 slices", cost: 0.20 }],
                directions: ["Toast the bread and spread peanut butter evenly."]
            }
        ],
        2: [ // Vegan - Moderate
            {
                type: "Breakfast", name: "Tofu Scramble & Avocado Toast", cost: 1.70, calories: 440, protein: 22, carbs: 32, fats: 25,
                ingredients: [{ name: "Firm Tofu", qty: "150g", cost: 0.60 }, { name: "Avocado", qty: "1/2 medium", cost: 0.65 }, { name: "Wheat Toast", qty: "2 slices", cost: 0.30 }, { name: "Turmeric & Nutritional Yeast", qty: "1 tsp", cost: 0.15 }],
                directions: ["Crumble tofu. Sauté in olive oil with turmeric, salt, pepper, and nutritional yeast until warm.", "Mash avocado onto toast. Serve tofu scramble beside it."]
            },
            {
                type: "Lunch", name: "Tempeh Stir-Fry & Brown Rice", cost: 2.40, calories: 600, protein: 32, carbs: 70, fats: 18,
                ingredients: [{ name: "Tempeh", qty: "120g", cost: 1.20 }, { name: "Brown Rice", qty: "90g (dry)", cost: 0.30 }, { name: "Mix Bell Pepper & Broccoli", qty: "150g", cost: 0.60 }, { name: "Soy Ginger Sauce", qty: "2 tbsp", cost: 0.30 }],
                directions: ["Slice tempeh into cubes and pan-fry in oil.", "Sauté vegetables.", "Mix in cooked brown rice, tempeh, and soy ginger sauce, stir-fry on high heat."]
            },
            {
                type: "Dinner", name: "Chickpea Coconut Curry & Quinoa", cost: 2.60, calories: 630, protein: 24, carbs: 85, fats: 20,
                ingredients: [{ name: "Canned Chickpeas", qty: "1 can", cost: 0.80 }, { name: "Light Coconut Milk", qty: "150ml", cost: 0.50 }, { name: "Quinoa", qty: "70g (dry)", cost: 0.60 }, { name: "Curry Spices & Tomato Paste", qty: "1 tbsp", cost: 0.70 }],
                directions: ["Sauté tomato paste and curry powder.", "Add coconut milk and drained chickpeas. Simmer for 15 mins.", "Serve hot over fluffy boiled quinoa."]
            },
            {
                type: "Snack", name: "Pumpkin Seeds & Soy Yogurt", cost: 1.20, calories: 250, protein: 14, carbs: 20, fats: 12,
                ingredients: [{ name: "Soy Yogurt (Plain)", qty: "150g", cost: 0.70 }, { name: "Pumpkin Seeds (Pepitas)", qty: "20g", cost: 0.50 }],
                directions: ["Top plain unsweetened soy yogurt with roasted pumpkin seeds."]
            }
        ],
        3: [ // Vegan - Premium Protein
            {
                type: "Breakfast", name: "Premium Vegan Protein Power Oats", cost: 2.90, calories: 510, protein: 34, carbs: 54, fats: 15,
                ingredients: [{ name: "Vegan Pea Protein Powder", qty: "1 scoop", cost: 1.30 }, { name: "Rolled Oats", qty: "70g", cost: 0.20 }, { name: "Chia Seeds & Hemp Hearts", qty: "20g", cost: 0.90 }, { name: "Almond Milk", qty: "250ml", cost: 0.50 }],
                directions: ["Cook oats in almond milk.", "Let cool for a minute, then stir in pea protein powder.", "Top with chia seeds and raw hemp hearts."]
            },
            {
                type: "Lunch", name: "Vegan Seitan Steak & Sweet Potato Salad", cost: 3.80, calories: 650, protein: 50, carbs: 62, fats: 20,
                ingredients: [{ name: "High-Protein Seitan (Wheat Gluten)", qty: "180g", cost: 2.00 }, { name: "Sweet Potato", qty: "200g", cost: 0.50 }, { name: "Kale & Cranberry Mix", qty: "100g", cost: 0.80 }, { name: "Tahini Lemon Dressing", qty: "2 tbsp", cost: 0.50 }],
                directions: ["Sear seitan cutlets in a hot pan with olive oil.", "Steam sweet potato cubes.", "Toss kale, sweet potato, and cranberries with creamy tahini lemon dressing, top with sliced seitan."]
            },
            {
                type: "Dinner", name: "Edamame Quinoa Power Salad Bowl", cost: 3.50, calories: 580, protein: 32, carbs: 65, fats: 22,
                ingredients: [{ name: "Shelled Edamame Beans", qty: "150g", cost: 1.20 }, { name: "Quinoa", qty: "80g (dry)", cost: 0.70 }, { name: "Avocado", qty: "1/2 medium", cost: 0.65 }, { name: "Pumpkin Seeds", qty: "15g", cost: 0.45 }, { name: "Sesame Ginger Dressing", qty: "2 tbsp", cost: 0.50 }],
                directions: ["Cook quinoa. Steam edamame.", "Combine quinoa, edamame, and diced avocado.", "Drizzle with dressing and top with pumpkin seeds."]
            },
            {
                type: "Snack", name: "Mixed Organic Nuts & Soy Shake", cost: 2.00, calories: 340, protein: 18, carbs: 15, fats: 24,
                ingredients: [{ name: "Organic Walnuts & Almonds", qty: "30g", cost: 1.00 }, { name: "High Protein Soy Milk", qty: "300ml", cost: 1.00 }],
                directions: ["Drink cold soy milk alongside a handful of mixed nuts."]
            }
        ]
    },
    "East Asian": {
        1: [ // East Asian - Ultra Budget
            {
                type: "Breakfast", name: "Comforting Egg Ginger Congee", cost: 0.60, calories: 360, protein: 15, carbs: 55, fats: 8,
                ingredients: [{ name: "White Rice", qty: "60g", cost: 0.10 }, { name: "Eggs", qty: "2 large", cost: 0.30 }, { name: "Ginger & Scallions", qty: "20g", cost: 0.10 }, { name: "Soy Sauce", qty: "1 tsp", cost: 0.10 }],
                directions: ["Boil rice in plenty of water with ginger strips until it breaks down into thick porridge.", "Swirl in beaten eggs to cook.", "Top with scallions and soy sauce."]
            },
            {
                type: "Lunch", name: "Soy Sauce Braised Tofu & Rice", cost: 0.85, calories: 490, protein: 22, carbs: 75, fats: 10,
                ingredients: [{ name: "Firm Tofu", qty: "150g", cost: 0.45 }, { name: "White Jasmine Rice", qty: "90g (dry)", cost: 0.20 }, { name: "Cabbage Steamed", qty: "120g", cost: 0.10 }, { name: "Soy Sauce & Sesame Oil", qty: "1 tbsp", cost: 0.10 }],
                directions: ["Cut tofu into cubes. Sear in a pan with soy sauce, garlic, and sesame oil.", "Serve over hot jasmine rice with steamed cabbage."]
            },
            {
                type: "Dinner", name: "Egg Fried Rice with Peas & Carrots", cost: 1.10, calories: 600, protein: 22, carbs: 85, fats: 16,
                ingredients: [{ name: "Eggs", qty: "3 large", cost: 0.45 }, { name: "Jasmine Rice (Leftover)", qty: "100g (dry equivalent)", cost: 0.20 }, { name: "Frozen Peas & Carrots", qty: "100g", cost: 0.25 }, { name: "Vegetable Oil & Garlic", qty: "1.5 tbsp", cost: 0.20 }],
                directions: ["Sauté garlic and vegetables in hot oil.", "Add cold cooked rice. Push to side, scramble eggs in the pan.", "Mix all together and season with soy sauce."]
            },
            {
                type: "Snack", name: "Steamed Edamame in Pods", cost: 0.60, calories: 150, protein: 12, carbs: 13, fats: 4,
                ingredients: [{ name: "Frozen Edamame Pods", qty: "120g", cost: 0.50 }, { name: "Coarse Salt", qty: "pinch", cost: 0.10 }],
                directions: ["Steam edamame for 5 mins.", "Toss with coarse sea salt and eat warm (discard pods)."]
            }
        ],
        2: [ // East Asian - Moderate Budget
            {
                type: "Breakfast", name: "Savory Kimchi Egg Pancake (Jeon)", cost: 1.60, calories: 440, protein: 22, carbs: 45, fats: 16,
                ingredients: [{ name: "Kimchi", qty: "100g", cost: 0.70 }, { name: "Eggs", qty: "2 large", cost: 0.30 }, { name: "Flour", qty: "40g", cost: 0.10 }, { name: "Scallions & Soy Dipping Sauce", qty: "2 tbsp", cost: 0.50 }],
                directions: ["Chop kimchi. Mix with flour, beaten eggs, scallions, and water to form batter.", "Pan-fry like a pancake until golden on both sides. Serve with soy dip."]
            },
            {
                type: "Lunch", name: "Teriyaki Chicken Breast & Rice", cost: 2.40, calories: 580, protein: 42, carbs: 70, fats: 12,
                ingredients: [{ name: "Chicken Breast", qty: "170g", cost: 1.30 }, { name: "Jasmine Rice", qty: "80g (dry)", cost: 0.20 }, { name: "Broccoli & Bok Choy", qty: "120g", cost: 0.60 }, { name: "Teriyaki Glaze", qty: "2 tbsp", cost: 0.30 }],
                directions: ["Pan-fry chicken breast, glaze with teriyaki sauce.", "Serve with steamed jasmine rice and bok choy/broccoli."]
            },
            {
                type: "Dinner", name: "Korean Ground Beef Bowl (Beef Bulgogi)", cost: 2.80, calories: 630, protein: 36, carbs: 75, fats: 20,
                ingredients: [{ name: "Lean Ground Beef", qty: "140g", cost: 1.50 }, { name: "White Rice", qty: "85g (dry)", cost: 0.20 }, { name: "Soy, Sesame, Brown Sugar Sauce", qty: "2 tbsp", cost: 0.40 }, { name: "Shredded Carrots & Sesame Seeds", qty: "80g", cost: 0.70 }],
                directions: ["Brown ground beef in skillet with minced garlic.", "Stir in bulgogi seasoning sauce.", "Serve over rice, top with carrots, sesame seeds, and a fried egg (optional)."]
            },
            {
                type: "Snack", name: "Spiced Soy Garlic Tofu Cubes", cost: 1.00, calories: 200, protein: 15, carbs: 10, fats: 12,
                ingredients: [{ name: "Firm Tofu", qty: "120g", cost: 0.40 }, { name: "Soy Sauce, Garlic, Chili Oil", qty: "2 tbsp", cost: 0.60 }],
                directions: ["Pan-sear tofu cubes until crispy. Drizzle with a soy-chili-garlic glaze."]
            }
        ],
        3: [ // East Asian - Premium Protein
            {
                type: "Breakfast", name: "Japanese Salmon & Miso Breakfast Set", cost: 3.50, calories: 480, protein: 32, carbs: 35, fats: 22,
                ingredients: [{ name: "Salmon Fillet Small", qty: "120g", cost: 2.20 }, { name: "Miso Paste & Tofu Cubes", qty: "2 tbsp", cost: 0.50 }, { name: "Nori Seaweed & Rice", qty: "50g (dry)", cost: 0.80 }],
                directions: ["Salt and pan-fry the salmon fillet.", "Prepare hot miso soup with small tofu cubes.", "Serve salmon with hot rice, miso, and nori sheets."]
            },
            {
                type: "Lunch", name: "Shrimp & Egg White Fried Rice", cost: 4.20, calories: 610, protein: 45, carbs: 68, fats: 14,
                ingredients: [{ name: "Raw Medium Shrimp", qty: "180g", cost: 2.50 }, { name: "Egg Whites", qty: "100ml", cost: 0.60 }, { name: "Jasmine Rice", qty: "80g (dry)", cost: 0.20 }, { name: "Asparagus & Snap Peas", qty: "100g", cost: 0.90 }],
                directions: ["Sauté shrimp in sesame oil with ginger.", "Scramble egg whites. Toss in cold cooked rice and snap peas/asparagus.", "Combine all ingredients and serve hot."]
            },
            {
                type: "Dinner", name: "Miso-Glazed Salmon & Edamame Quinoa Bowl", cost: 5.50, calories: 650, protein: 44, carbs: 50, fats: 30,
                ingredients: [{ name: "Atlantic Salmon Fillet", qty: "200g", cost: 4.20 }, { name: "Quinoa", qty: "70g (dry)", cost: 0.60 }, { name: "Edamame Beans", qty: "50g", cost: 0.40 }, { name: "Miso Glaze Sauce", qty: "2 tbsp", cost: 0.30 }],
                directions: ["Coat salmon in miso-sake glaze and broil for 12 mins.", "Toss quinoa with cooked edamame.", "Serve salmon over the edamame quinoa bed."]
            },
            {
                type: "Snack", name: "Gyoza Potstickers & Soy Tea", cost: 1.80, calories: 260, protein: 12, carbs: 35, fats: 8,
                ingredients: [{ name: "Chicken/Veg Gyoza", qty: "6 pieces", cost: 1.20 }, { name: "Soy dipping oil", qty: "1 tbsp", cost: 0.60 }],
                directions: ["Steam-fry gyoza in pan until bottoms are crispy. Serve with dipping sauce."]
            }
        ]
    },
    "Mediterranean": {
        1: [ // Mediterranean - Ultra Budget
            {
                type: "Breakfast", name: "Savory Tomato Herb Omelet", cost: 0.85, calories: 380, protein: 19, carbs: 12, fats: 26,
                ingredients: [{ name: "Eggs", qty: "3 large", cost: 0.45 }, { name: "Canned Diced Tomato", qty: "80g", cost: 0.15 }, { name: "Dried Oregano & Garlic", qty: "1 tsp", cost: 0.10 }, { name: "Olive Oil", qty: "1 tsp", cost: 0.15 }],
                directions: ["Whisk eggs with oregano, salt, and pepper.", "Sauté tomatoes and garlic in olive oil, then pour in eggs.", "Cook until set, fold and serve."]
            },
            {
                type: "Lunch", name: "Mediterranean White Bean & Tuna Salad", cost: 1.15, calories: 510, protein: 32, carbs: 45, fats: 18,
                ingredients: [{ name: "Canned Tuna", qty: "1 can", cost: 0.65 }, { name: "Canned Cannellini Beans", qty: "1/2 can", cost: 0.25 }, { name: "Lemon Juice & Olive Oil", qty: "1 tbsp", cost: 0.15 }, { name: "Red Onion & Parsley", qty: "30g", cost: 0.10 }],
                directions: ["Rinse white beans. Flake tuna.", "Combine beans, tuna, diced red onion, olive oil, lemon juice, and parsley in bowl."]
            },
            {
                type: "Dinner", name: "Spiced Chickpea Pasta with Garlic & Spinach", cost: 1.20, calories: 590, protein: 22, carbs: 80, fats: 16,
                ingredients: [{ name: "Wheat Pasta Noodles", qty: "100g", cost: 0.20 }, { name: "Canned Chickpeas", qty: "1/2 can", cost: 0.25 }, { name: "Frozen Spinach", qty: "100g", cost: 0.35 }, { name: "Olive Oil & Garlic", qty: "1.5 tbsp", cost: 0.40 }],
                directions: ["Boil pasta.", "Sauté garlic and spinach in olive oil, add drained chickpeas.", "Toss pasta with the chickpea spinach mixture, season with salt and red pepper flakes."]
            },
            {
                type: "Snack", name: "Whole Almonds & Dates", cost: 0.70, calories: 230, protein: 5, carbs: 28, fats: 12,
                ingredients: [{ name: "Almonds", qty: "20g", cost: 0.40 }, { name: "Dates", qty: "3 pieces", cost: 0.30 }],
                directions: ["Enjoy raw almonds and dried dates as a quick energy snack."]
            }
        ],
        2: [ // Mediterranean - Moderate
            {
                type: "Breakfast", name: "Greek Yogurt Honey Walnuts", cost: 1.80, calories: 410, protein: 26, carbs: 32, fats: 20,
                ingredients: [{ name: "Greek Yogurt (Low Fat)", qty: "220g", cost: 0.85 }, { name: "English Walnuts", qty: "25g", cost: 0.60 }, { name: "Honey", qty: "1 tbsp", cost: 0.20 }, { name: "Chia Seeds", qty: "1 tsp", cost: 0.15 }],
                directions: ["Scoop yogurt into a bowl.", "Top with chopped walnuts and chia seeds.", "Drizzle honey on top and eat cold."]
            },
            {
                type: "Lunch", name: "Grilled Chicken Greek Salad Bowl", cost: 2.60, calories: 550, protein: 42, carbs: 20, fats: 32,
                ingredients: [{ name: "Chicken Breast", qty: "160g", cost: 1.30 }, { name: "Feta Cheese", qty: "30g", cost: 0.50 }, { name: "Cucumber, Tomato, Olives", qty: "150g", cost: 0.55 }, { name: "Olive Oil & Lemon Dressing", qty: "2 tbsp", cost: 0.25 }],
                directions: ["Grill seasoned chicken breast, slice.", "Chop cucumber, tomato, and black olives. Combine with feta cheese.", "Top salad with chicken, dress with olive oil and lemon juice."]
            },
            {
                type: "Dinner", name: "Baked Cod Fillet with Couscous", cost: 2.90, calories: 590, protein: 38, carbs: 62, fats: 16,
                ingredients: [{ name: "Cod Fillet", qty: "180g", cost: 1.70 }, { name: "Dry Couscous", qty: "80g", cost: 0.40 }, { name: "Mixed Mediterranean Veggies", qty: "120g", cost: 0.50 }, { name: "Olive Oil", qty: "1 tbsp", cost: 0.30 }],
                directions: ["Place cod on baking sheet, season with garlic, oregano, and olive oil. Bake at 375°F (190°C) for 15 mins.", "Pour boiling hot water over couscous, cover and let steam for 5 mins.", "Steam veggies and serve together."]
            },
            {
                type: "Snack", name: "Hummus with Cucumber & Carrot Sticks", cost: 0.90, calories: 190, protein: 7, carbs: 22, fats: 10,
                ingredients: [{ name: "Hummus", qty: "80g", cost: 0.50 }, { name: "Cucumber & Carrots", qty: "100g", cost: 0.40 }],
                directions: ["Slice cucumber and carrots into sticks. Dip in savory hummus."]
            }
        ],
        3: [ // Mediterranean - Premium Protein
            {
                type: "Breakfast", name: "Smoked Salmon Hummus Toast", cost: 3.50, calories: 460, protein: 32, carbs: 32, fats: 22,
                ingredients: [{ name: "Smoked Salmon", qty: "80g", cost: 2.00 }, { name: "Hummus", qty: "3 tbsp", cost: 0.35 }, { name: "Sourdough Toast", qty: "2 slices", cost: 0.90 }, { name: "Capers & Red Onion", qty: "pinch", cost: 0.25 }],
                directions: ["Toast sourdough bread.", "Spread hummus evenly on toast.", "Layer smoked salmon on top and garnish with capers and red onion slices."]
            },
            {
                type: "Lunch", name: "Premium Garlic Shrimp & Quinoa Salad", cost: 4.50, calories: 630, protein: 44, carbs: 55, fats: 26,
                ingredients: [{ name: "Large Raw Shrimp", qty: "180g", cost: 2.80 }, { name: "Quinoa", qty: "75g (dry)", cost: 0.60 }, { name: "Cherry Tomatoes & Arugula", qty: "100g", cost: 0.60 }, { name: "Olive Oil & Pesto Sauce", qty: "1.5 tbsp", cost: 0.50 }],
                directions: ["Sauté shrimp in olive oil and minced garlic.", "Cook quinoa and toss with pesto sauce.", "Serve shrimp and quinoa over arugula and halved cherry tomatoes."]
            },
            {
                type: "Dinner", name: "Baked Salmon, Lemon Herb Potatoes & Asparagus", cost: 5.60, calories: 680, protein: 42, carbs: 38, fats: 34,
                ingredients: [{ name: "Salmon Fillet", qty: "200g", cost: 4.20 }, { name: "Fingerling Potatoes", qty: "150g", cost: 0.40 }, { name: "Asparagus", qty: "100g", cost: 0.60 }, { name: "Olive Oil & Lemon Butter", qty: "2 tbsp", cost: 0.40 }],
                directions: ["Toss cut potatoes in olive oil and roast at 400°F (200°C) for 20 mins.", "Add salmon and asparagus to baking sheet. Season and bake 15 mins more.", "Drizzle lemon butter over salmon before serving."]
            },
            {
                type: "Snack", name: "Premium Pistachios & Greek Yogurt", cost: 2.20, calories: 290, protein: 22, carbs: 12, fats: 16,
                ingredients: [{ name: "Greek Yogurt Plain", qty: "180g", cost: 0.70 }, { name: "Shelled Pistachios", qty: "30g", cost: 1.50 }],
                directions: ["Stir raw shelled pistachios into cold Greek yogurt."]
            }
        ]
    }
};

// Fallbacks for missing budget/culture splits
// Ensure "Gluten-Free / Dairy-Free" maps to "Standard Western" or similar with dairy/gluten removed.
DIET_DATABASE["Gluten-Free / Dairy-Free"] = {
    1: DIET_DATABASE["Vegan"][1],
    2: DIET_DATABASE["Mediterranean"][2],
    3: DIET_DATABASE["Standard Western"][3]
};
DIET_DATABASE["Kosher"] = DIET_DATABASE["Halal"]; // Same clean ingredients template for simulated data

// Weekly shopping tips based on budget level
const BUDGET_TIPS = {
    1: [
        "Buy grains like rice, oats, and lentils in large bulk bags - it reduces cost by up to 70% compared to small boxes.",
        "Eggs and canned tuna are incredibly cheap proteins. Stock up on tuna when on sale.",
        "Frozen spinach and peas have the exact same nutrition as fresh, but won't spoil in your dorm fridge.",
        "Use peanut butter as your primary source of healthy calorie density."
    ],
    2: [
        "Greek yogurt tubs are cheaper than single-serve cups. Buy plain and sweeten with honey yourself.",
        "Meal prep chicken breast on Sunday in bulk to avoid ordering food when study sessions run late.",
        "Sweet potatoes last weeks in a cool dark spot, making them a low-waste carb source.",
        "Compare prices between canned and dry beans; dry is cheaper but canned saves student study time."
    ],
    3: [
        "Buy frozen salmon fillets in bulk bags from wholesale stores rather than fresh at premium counters.",
        "Asparagus can be replaced with broccoli if quality drops; focus on seasonal organic produce.",
        "Invest in a large tub of whey protein; it is cheaper per gram of protein than buying ready-to-drink shakes.",
        "Quinoa can be bought in bulk bins to lower the premium grain markup."
    ]
};

/* -------------------------------------------------------------
   2. State Management & Initializer
   ------------------------------------------------------------- */
let state = {
    userProfile: null,
    activePlan: null,
    dailyTracker: {
        caloriesConsumed: 0,
        proteinConsumed: 0,
        waterConsumed: 0,
        date: ""
    },
    timer: {
        intervalId: null,
        currentTime: 45, // in seconds
        presetTime: 45,
        isRunning: false
    },
    chatHistory: [],
    firebaseConfig: null,
    isFirebaseActive: false,
    isLocalDemoMode: false,
    currentUser: null
};

// Check if data is already in local storage on page load
document.addEventListener("DOMContentLoaded", () => {
    initializeFirebase();
    initializeDate();
    updateThemeFromState();
    
    // Setup Navigation event listeners
    document.querySelectorAll(".nav-item").forEach(btn => {
        btn.addEventListener("click", () => {
            switchToTab(btn.dataset.tab);
        });
    });
    
    // Sync slider indicator text on change
    const budgetSlider = document.getElementById("budget-level");
    if (budgetSlider) {
        budgetSlider.addEventListener("input", (e) => {
            updateSliderTicks(parseInt(e.target.value));
        });
    }

    // Auto-save Settings inputs on change
    const apiKeyInput = document.getElementById("api-key-input");
    const modelSelect = document.getElementById("gemini-model-select");
    const unitSelect = document.getElementById("measurement-unit");
    
    const saveSettingsFunc = () => {
        if (!state.userProfile) {
            state.userProfile = {
                name: "Student Athlete",
                age: 20,
                gender: "Male",
                weight: 70,
                height: 175,
                goal: "Lose Weight (Cut)",
                equipment: "Bodyweight Only (Dorm Friendly)",
                frequency: 3,
                duration: "30 Minutes",
                diet: "Standard Western",
                budget: 1
            };
        }
        state.userProfile.apiKey = apiKeyInput.value.trim();
        state.userProfile.model = modelSelect.value;
        state.userProfile.unit = unitSelect.value;
        saveStateToLocalStorage();
        showToast("Settings saved automatically!");
    };
    
    if (apiKeyInput) apiKeyInput.addEventListener("change", saveSettingsFunc);
    if (modelSelect) modelSelect.addEventListener("change", saveSettingsFunc);
    if (unitSelect) unitSelect.addEventListener("change", saveSettingsFunc);
});

function initializeDate() {
    const today = new Date();
    const dateStr = today.toDateString(); // e.g. "Mon Jun 22 2026"
    
    // Set text display
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("current-date").innerText = today.toLocaleDateString('en-US', options);
    
    // Check if we need to reset trackers for a new day
    if (state.dailyTracker.date !== dateStr) {
        state.dailyTracker.caloriesConsumed = 0;
        state.dailyTracker.proteinConsumed = 0;
        state.dailyTracker.waterConsumed = 0;
        state.dailyTracker.date = dateStr;
        saveStateToLocalStorage();
    }
}

function updateSliderTicks(val) {
    document.querySelectorAll(".slider-ticks .tick").forEach(tick => {
        if (parseInt(tick.dataset.val) === val) {
            tick.classList.add("active");
        } else {
            tick.classList.remove("active");
        }
    });
}

/* -------------------------------------------------------------
   3. View Routing (Tab switcher)
   ------------------------------------------------------------- */
function switchToTab(tabId) {
    // If no plan generated, block tabs except planner & settings
    if (!state.activePlan && tabId !== "planner" && tabId !== "settings") {
        showToast("Please create a plan first in the AI Planner tab!");
        return;
    }
    
    // Update nav links
    document.querySelectorAll(".nav-item").forEach(btn => {
        if (btn.dataset.tab === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    // Update panels
    document.querySelectorAll(".content-panel").forEach(panel => {
        if (panel.id === `panel-${tabId}`) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });
    
    // Update Header title
    const headerTitle = document.getElementById("header-title");
    const headerSubtitle = document.getElementById("header-subtitle");
    const studentName = state.userProfile ? state.userProfile.name : "Student";
    
    switch (tabId) {
        case "dashboard":
            headerTitle.innerText = `Hello, ${studentName}!`;
            headerSubtitle.innerText = "Here is your progress overview for today.";
            break;
        case "planner":
            headerTitle.innerText = "AI Fitness Planner";
            headerSubtitle.innerText = "Customize your AI parameters for diet, budget, and equipment.";
            break;
        case "workout":
            headerTitle.innerText = "Workout Routine";
            headerSubtitle.innerText = "Follow your personalized, resource-adapted exercise split.";
            break;
        case "meals":
            headerTitle.innerText = "Meal & Nutrition Plan";
            headerSubtitle.innerText = "Delicious student recipes adapted to your diet and budget.";
            break;
        case "groceries":
            headerTitle.innerText = "Weekly Grocery Checklist";
            headerSubtitle.innerText = "Budget-optimized aggregated shopping list.";
            break;
        case "settings":
            headerTitle.innerText = "Application Settings";
            headerSubtitle.innerText = "Manage API credentials and UI parameters.";
            break;
    }
}

/* -------------------------------------------------------------
   4. Local Plan Generation Logic
   ------------------------------------------------------------- */
function generateAIPlan(event) {
    event.preventDefault();
    
    // Set UI loading state
    const submitBtn = document.getElementById("submit-btn");
    const btnText = document.getElementById("btn-text");
    const btnSpinner = document.getElementById("btn-spinner");
    
    submitBtn.disabled = true;
    btnSpinner.style.display = "inline-block";
    
    // Gather form inputs
    const profile = {
        name: document.getElementById("student-name").value || "Student",
        age: parseInt(document.getElementById("student-age").value),
        gender: document.getElementById("student-gender").value,
        weight: parseInt(document.getElementById("student-weight").value),
        height: parseInt(document.getElementById("student-height").value),
        goal: document.getElementById("fitness-goal").value,
        equipment: document.getElementById("workout-equipment").value,
        frequency: parseInt(document.getElementById("workout-frequency").value),
        duration: document.getElementById("workout-duration").value,
        diet: document.getElementById("diet-habit").value,
        budget: parseInt(document.getElementById("budget-level").value),
        apiKey: document.getElementById("api-key-input").value || "",
        model: document.getElementById("gemini-model-select").value || "gemini-1.5-flash",
        accentColor: document.getElementById("accent-color-select").value || "electric-blue",
        unit: document.getElementById("measurement-unit").value || "metric"
    };

    // Progress text simulation
    const loadingTexts = [
        "Analyzing profile and calculating target macros...",
        "Tuning recipes to fit a student budget...",
        "Filtering diet against cultural requirements...",
        "Structuring workout routines for available equipment...",
        "Assembling weekly shopping checklist..."
    ];
    
    let textIndex = 0;
    btnText.innerText = loadingTexts[0];
    
    const interval = setInterval(() => {
        textIndex++;
        if (textIndex < loadingTexts.length) {
            btnText.innerText = loadingTexts[textIndex];
        }
    }, 400);

    // If API Key is present, try Gemini API. Else use local generation.
    if (profile.apiKey) {
        setTimeout(() => {
            callGeminiAPI(profile, interval, submitBtn, btnText, btnSpinner);
        }, 100);
    } else {
        setTimeout(() => {
            clearInterval(interval);
            
            // Generate locally
            const plan = generateLocalPlan(profile);
            
            // Save state
            state.userProfile = profile;
            state.activePlan = plan;
            
            // Initialize tracker targets
            state.dailyTracker.caloriesConsumed = 0;
            state.dailyTracker.proteinConsumed = 0;
            state.dailyTracker.waterConsumed = 0;
            
            saveStateToLocalStorage();
            
            // Reset loader button
            submitBtn.disabled = false;
            btnText.innerText = "Generate AI Custom Plan";
            btnSpinner.style.display = "none";
            
            // Show new data
            document.getElementById("dashboard-empty-state").style.display = "none";
            document.getElementById("dashboard-content").style.display = "grid";
            document.getElementById("workout-empty-state").style.display = "none";
            document.getElementById("workout-content").style.display = "grid";
            document.getElementById("meals-empty-state").style.display = "none";
            document.getElementById("meals-content").style.display = "block";
            document.getElementById("groceries-empty-state").style.display = "none";
            document.getElementById("groceries-content").style.display = "block";
            
            updateUIHeaderAndName();
            populateDashboard();
            populateWorkoutView();
            populateMealsView();
            populateGroceryView();
            populateSettingsView();
            
            showToast("Custom student plan generated successfully!");
            switchToTab("dashboard");
            
        }, 2200);
    }
}

function calculateTargetMacros(profile) {
    // Basic BMR calculation (Mifflin-St Jeor Equation)
    let bmr = 0;
    if (profile.gender === "Male") {
        bmr = (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age) + 5;
    } else {
        bmr = (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age) - 161;
    }
    
    // Add activity multiplier based on workout frequency
    let multiplier = 1.2; // Sedentary
    if (profile.frequency === 3) multiplier = 1.375; // Lightly active
    else if (profile.frequency >= 4) multiplier = 1.55; // Moderately active
    
    let tdee = Math.round(bmr * multiplier);
    let targetCalories = tdee;
    let targetProtein = Math.round(profile.weight * 1.6); // 1.6g per kg
    
    // Adjust based on goal
    if (profile.goal.includes("Bulk")) {
        targetCalories += 350; // Surplus
        targetProtein = Math.round(profile.weight * 1.8);
    } else if (profile.goal.includes("Cut")) {
        targetCalories -= 450; // Deficit
        targetProtein = Math.round(profile.weight * 2.0); // Keep protein higher during cut
    }
    
    // Water target: ~35ml per kg of bodyweight
    let targetWater = parseFloat(((profile.weight * 35) / 1000).toFixed(1));
    if (targetWater < 2.0) targetWater = 2.0;
    
    return {
        calories: targetCalories,
        protein: targetProtein,
        water: targetWater
    };
}

function generateLocalPlan(profile) {
    const macros = calculateTargetMacros(profile);
    
    // Build Workout routine
    const workoutPlan = [];
    const equipDb = EXERCISE_DATABASE[profile.equipment] || EXERCISE_DATABASE["Bodyweight Only (Dorm Friendly)"];
    
    // Dynamic Split based on day frequency
    if (profile.frequency === 3) {
        workoutPlan.push({
            day: 1,
            title: "Day 1: Full Body (Push Focus)",
            desc: "Focus on chest, shoulders, and legs. Complete all sets under target duration.",
            exercises: [
                { ...equipDb.chest[0], order: 1, sets: 3, reps: "10-12" },
                { ...equipDb.legs[0], order: 2, sets: 4, reps: "12-15" },
                { ...equipDb.shoulders[1] || equipDb.chest[1], order: 3, sets: 3, reps: "12" },
                { ...equipDb.arms[0], order: 4, sets: 3, reps: "10-12" },
                { ...equipDb.core[0], order: 5, sets: 3, reps: "Plank 45s" }
            ],
            completed: false
        });
        workoutPlan.push({
            day: 2,
            title: "Day 2: Full Body (Pull Focus)",
            desc: "Focus on back muscles, hamstrings, and biceps. Ensure controlled contractions.",
            exercises: [
                { ...equipDb.back[0], order: 1, sets: 4, reps: "12" },
                { ...equipDb.back[1] || equipDb.back[0], order: 2, sets: 3, reps: "15" },
                { ...equipDb.legs[2] || equipDb.legs[0], order: 3, sets: 3, reps: "15" },
                { ...equipDb.arms[1] || equipDb.arms[0], order: 4, sets: 3, reps: "12" },
                { ...equipDb.core[1] || equipDb.core[0], order: 5, sets: 3, reps: "20 Reps" }
            ],
            completed: false
        });
        workoutPlan.push({
            day: 3,
            title: "Day 3: Full Body (Legs Focus)",
            desc: "Target quad development, shoulder posture, and core stamina.",
            exercises: [
                { ...equipDb.legs[1] || equipDb.legs[0], order: 1, sets: 3, reps: "10 (each)" },
                { ...equipDb.chest[1] || equipDb.chest[0], order: 2, sets: 3, reps: "12" },
                { ...equipDb.shoulders[0], order: 3, sets: 3, reps: "8-10" },
                { ...equipDb.legs[2] || equipDb.legs[0], order: 4, sets: 3, reps: "15" },
                { ...equipDb.core[0], order: 5, sets: 3, reps: "Plank 60s" }
            ],
            completed: false
        });
    } else {
        // 4 or 5 days
        const limitDays = profile.frequency;
        const muscleGroups = ["Chest & Arms", "Back & Core", "Legs & Core", "Shoulders & Arms", "Full Body Prep"];
        
        for (let d = 1; d <= limitDays; d++) {
            const groupName = muscleGroups[d - 1];
            let exercises = [];
            
            if (groupName.includes("Chest")) {
                exercises = [
                    { ...equipDb.chest[0], order: 1 },
                    { ...equipDb.chest[1] || equipDb.chest[0], order: 2 },
                    { ...equipDb.arms[0], order: 3 },
                    { ...equipDb.arms[1] || equipDb.arms[0], order: 4 }
                ];
            } else if (groupName.includes("Back")) {
                exercises = [
                    { ...equipDb.back[0], order: 1 },
                    { ...equipDb.back[1] || equipDb.back[0], order: 2 },
                    { ...equipDb.core[0], order: 3 },
                    { ...equipDb.core[1] || equipDb.core[0], order: 4 }
                ];
            } else if (groupName.includes("Legs")) {
                exercises = [
                    { ...equipDb.legs[0], order: 1 },
                    { ...equipDb.legs[1] || equipDb.legs[0], order: 2 },
                    { ...equipDb.legs[2] || equipDb.legs[0], order: 3 },
                    { ...equipDb.core[0], order: 4 }
                ];
            } else if (groupName.includes("Shoulders")) {
                exercises = [
                    { ...equipDb.shoulders[0], order: 1 },
                    { ...equipDb.shoulders[1] || equipDb.shoulders[0], order: 2 },
                    { ...equipDb.arms[0], order: 3 },
                    { ...equipDb.arms[1] || equipDb.arms[0], order: 4 }
                ];
            } else {
                exercises = [
                    { ...equipDb.legs[0], order: 1 },
                    { ...equipDb.chest[0], order: 2 },
                    { ...equipDb.back[0], order: 3 },
                    { ...equipDb.core[0], order: 4 }
                ];
            }
            
            // Add custom props
            exercises = exercises.map((ex, idx) => ({
                ...ex,
                order: idx + 1,
                sets: ex.sets || 3,
                reps: ex.reps || "12"
            }));
            
            workoutPlan.push({
                day: d,
                title: `Day ${d}: ${groupName}`,
                desc: `Follow target sets. Rest 45s between sets using the timer widget.`,
                exercises: exercises,
                completed: false
            });
        }
    }
    
    // Build Meal plan (3 Days of menu rotatable)
    const mealDb = DIET_DATABASE[profile.diet] || DIET_DATABASE["Standard Western"];
    const baseDayMeals = mealDb[profile.budget] || mealDb[1];
    
    const mealPlan = [];
    const daysArr = [1, 2, 3];
    
    daysArr.forEach(d => {
        // Sightly mutate names/macros so the days look unique & generated
        const dayMeals = JSON.parse(JSON.stringify(baseDayMeals));
        
        if (d === 2) {
            // Day 2 minor adjust
            dayMeals[0].name = "Power " + dayMeals[0].name;
            dayMeals[1].calories = Math.round(dayMeals[1].calories * 1.05);
            dayMeals[2].name = "Spiced " + dayMeals[2].name;
        } else if (d === 3) {
            // Day 3 minor adjust
            dayMeals[0].calories = Math.round(dayMeals[0].calories * 0.95);
            dayMeals[2].protein = Math.round(dayMeals[2].protein * 1.1);
            dayMeals[3].name = "Zesty " + dayMeals[3].name;
        }
        
        mealPlan.push({
            day: d,
            meals: dayMeals
        });
    });
    
    // Aggregated Grocery Shopping List
    const groceryMap = {};
    mealPlan.forEach(day => {
        day.meals.forEach(meal => {
            meal.ingredients.forEach(ing => {
                const key = ing.name.toLowerCase();
                // Extract quantity numbers if possible to scale
                const match = ing.qty.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
                let qtyNum = 1;
                let unit = "unit";
                if (match) {
                    qtyNum = parseFloat(match[1]);
                    unit = match[2];
                } else {
                    unit = ing.qty;
                }
                
                if (groceryMap[key]) {
                    groceryMap[key].amount += qtyNum;
                    groceryMap[key].cost += ing.cost;
                } else {
                    groceryMap[key] = {
                        name: ing.name,
                        amount: qtyNum,
                        unit: unit,
                        cost: ing.cost,
                        category: getGroceryCategory(ing.name)
                    };
                }
            });
        });
    });
    
    // Convert grocery list map to array and scale for 7 days (multiplier 7/3 = 2.33)
    const groceryList = Object.values(groceryMap).map(item => {
        const scaledQty = parseFloat((item.amount * 2.33).toFixed(1));
        const scaledCost = parseFloat((item.cost * 2.33).toFixed(2));
        return {
            name: item.name,
            qty: `${scaledQty} ${item.unit}`,
            cost: scaledCost,
            category: item.category,
            checked: false
        };
    });
    
    return {
        workoutPlan,
        mealPlan,
        groceryList,
        dailyTargets: macros
    };
}

function getGroceryCategory(name) {
    const n = name.toLowerCase();
    if (n.includes("egg") || n.includes("milk") || n.includes("cheese") || n.includes("yogurt") || n.includes("paneer") || n.includes("curd")) {
        return "Proteins & Dairy";
    }
    if (n.includes("chicken") || n.includes("steak") || n.includes("beef") || n.includes("lamb") || n.includes("turkey") || n.includes("salmon") || n.includes("tuna") || n.includes("shrimp") || n.includes("fish") || n.includes("tofu") || n.includes("tempeh") || n.includes("seitan")) {
        return "Proteins & Dairy";
    }
    if (n.includes("banana") || n.includes("apple") || n.includes("berry") || n.includes("blueberries") || n.includes("tomato") || n.includes("spinach") || n.includes("broccoli") || n.includes("onion") || n.includes("celery") || n.includes("cabbage") || n.includes("capsicum") || n.includes("bell pepper") || n.includes("ginger") || n.includes("scallion") || n.includes("cucumber") || n.includes("mint") || n.includes("arugula") || n.includes("kale") || n.includes("potato") || n.includes("asparagus") || n.includes("avocado") || n.includes("garlic")) {
        return "Produce (Fruits & Veggies)";
    }
    if (n.includes("oat") || n.includes("rice") || n.includes("pita") || n.includes("bread") || n.includes("wheat") || n.includes("roti") || n.includes("noodle") || n.includes("ramen") || n.includes("quinoa") || n.includes("couscous") || n.includes("pasta") || n.includes("chickpea") || n.includes("bean") || n.includes("lentil") || n.includes("dal")) {
        return "Pantry Staples & Grains";
    }
    return "Fats, Condiments & Others";
}

/* -------------------------------------------------------------
   5. UI Rendering & Tab Populators
   ------------------------------------------------------------- */

function updateUIHeaderAndName() {
    const studentName = state.userProfile ? state.userProfile.name : "Student Athlete";
    document.getElementById("user-display-name").innerText = studentName;
    document.getElementById("header-title").innerText = `Hello, ${studentName}!`;
}

function populateDashboard() {
    const plan = state.activePlan;
    if (!plan) return;
    
    // Set daily macro targets
    document.getElementById("dash-cal-target").innerText = plan.dailyTargets.calories;
    document.getElementById("dash-protein-target").innerText = plan.dailyTargets.protein;
    document.getElementById("dash-water-target").innerText = plan.dailyTargets.water.toFixed(1);
    
    // Update daily tracker progress rings
    updateProgressRings();
    
    // Calc daily budget cost estimate
    const dailyCost = plan.mealPlan[0].meals.reduce((sum, meal) => sum + meal.cost, 0);
    document.getElementById("dash-budget-cost").innerText = `$${dailyCost.toFixed(2)}`;
    
    let budgetText = "Ultra Budget Level";
    if (state.userProfile.budget === 2) budgetText = "Moderate Budget Level";
    if (state.userProfile.budget === 3) budgetText = "Premium Protein Level";
    document.getElementById("dash-budget-level").innerText = budgetText;
    
    // Pop smart swap tip
    const tipsArr = BUDGET_TIPS[state.userProfile.budget] || BUDGET_TIPS[1];
    document.getElementById("dash-smart-swap").innerText = tipsArr[Math.floor(Math.random() * tipsArr.length)];
    
    // Workout Preview today
    const dashWorkoutPlaceholder = document.getElementById("dash-workout-placeholder");
    const activeDay = plan.workoutPlan[0]; // Day 1
    
    if (activeDay) {
        let exRowsHtml = activeDay.exercises.map(ex => `
            <div class="dash-preview-item">
                <div class="preview-info">
                    <div class="preview-avatar">${ex.order}</div>
                    <div class="preview-text">
                        <div class="preview-title">${ex.name}</div>
                        <div class="preview-meta">${ex.sets} Sets x ${ex.reps}</div>
                    </div>
                </div>
                <div class="preview-status-checkbox" onclick="toggleExerciseComplete(event, 0, ${ex.order - 1})"></div>
            </div>
        `).join('');
        
        dashWorkoutPlaceholder.innerHTML = `
            <div style="font-weight:700; font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--primary-color);">${activeDay.title}</div>
            <div class="exercise-cards-grid" style="gap:0.5rem;">${exRowsHtml}</div>
        `;
    }
    
    // Diet Preview today
    const dashDietPlaceholder = document.getElementById("dash-diet-placeholder");
    const todayDiet = plan.mealPlan[0]; // Day 1
    
    if (todayDiet) {
        let mealRowsHtml = todayDiet.meals.map(meal => `
            <div class="dash-preview-item" style="cursor:pointer;" onclick="openRecipeModal(0, '${meal.type}')">
                <div class="preview-info">
                    <div class="preview-avatar" style="background-color: rgba(var(--accent-rgb), 0.15); color: var(--accent-color);">
                        ${meal.type[0]}
                    </div>
                    <div class="preview-text">
                        <div class="preview-title" style="font-size:0.85rem;">${meal.type}: ${meal.name}</div>
                        <div class="preview-meta">${meal.calories} cal | ${meal.protein}g protein | $${meal.cost.toFixed(2)}</div>
                    </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px; height:14px; color:var(--text-muted);"><path d="m9 18 6-6-6-6"/></svg>
            </div>
        `).join('');
        dashDietPlaceholder.innerHTML = `<div class="exercise-cards-grid" style="gap:0.5rem;">${mealRowsHtml}</div>`;
    }
}

function updateProgressRings() {
    const plan = state.activePlan;
    if (!plan) return;
    
    const maxOffset = 314.15; // circumference of radius 50 circle
    
    // Calories
    const calTarget = plan.dailyTargets.calories;
    const calConsumed = state.dailyTracker.caloriesConsumed;
    document.getElementById("dash-cal-consumed").innerText = calConsumed;
    const calOffset = Math.max(0, maxOffset - (calConsumed / calTarget) * maxOffset);
    document.getElementById("calorie-progress-ring").style.strokeDashoffset = calOffset;
    
    // Protein
    const protTarget = plan.dailyTargets.protein;
    const protConsumed = state.dailyTracker.proteinConsumed;
    document.getElementById("dash-protein-consumed").innerText = protConsumed;
    const protOffset = Math.max(0, maxOffset - (protConsumed / protTarget) * maxOffset);
    document.getElementById("protein-progress-ring").style.strokeDashoffset = protOffset;
    
    // Water
    const waterTarget = plan.dailyTargets.water;
    const waterConsumed = state.dailyTracker.waterConsumed;
    document.getElementById("dash-water-consumed").innerText = waterConsumed.toFixed(2);
    const waterOffset = Math.max(0, maxOffset - (waterConsumed / waterTarget) * maxOffset);
    document.getElementById("water-progress-ring").style.strokeDashoffset = waterOffset;
}

function adjustStat(type, amt) {
    if (type === 'calories') {
        state.dailyTracker.caloriesConsumed = Math.max(0, state.dailyTracker.caloriesConsumed + amt);
    } else if (type === 'protein') {
        state.dailyTracker.proteinConsumed = Math.max(0, state.dailyTracker.proteinConsumed + amt);
    } else if (type === 'water') {
        state.dailyTracker.waterConsumed = Math.max(0, state.dailyTracker.waterConsumed + amt);
    }
    
    saveStateToLocalStorage();
    updateProgressRings();
}

function toggleExerciseComplete(e, dayIdx, exIdx) {
    e.stopPropagation();
    const plan = state.activePlan;
    if (!plan) return;
    
    const exercise = plan.workoutPlan[dayIdx].exercises[exIdx];
    // Simple mock toggling animation or tracking
    showToast(`Marked ${exercise.name} completed! Keep going!`);
    
    // If clicked on full Workout Routine page, the main checklist function handles state toggle
}

/* -------------------------------------------------------------
   6. Workout Screen Controller
   ------------------------------------------------------------- */
let selectedWorkoutDay = 0; // Index

function populateWorkoutView() {
    const plan = state.activePlan;
    if (!plan) return;
    
    // Update header info
    document.getElementById("workout-routine-name").innerText = `${state.userProfile.goal} Routine`;
    document.getElementById("workout-equipment-tag").innerText = state.userProfile.equipment;
    
    // Render Days Sidebar List
    const daysContainer = document.getElementById("workout-days-list");
    daysContainer.innerHTML = plan.workoutPlan.map((day, idx) => `
        <button class="day-btn ${idx === selectedWorkoutDay ? 'active' : ''}" onclick="selectWorkoutDay(${idx})">
            <span class="day-btn-title">${day.title.split(":")[0]}</span>
            <span class="day-btn-subtitle">${day.title.split(":")[1] || 'Exercise Split'}</span>
        </button>
    `).join('');
    
    // Render Selected Day Exercises
    renderSelectedDayExercises();
}

function selectWorkoutDay(idx) {
    selectedWorkoutDay = idx;
    populateWorkoutView();
}

function renderSelectedDayExercises() {
    const plan = state.activePlan;
    if (!plan) return;
    
    const day = plan.workoutPlan[selectedWorkoutDay];
    document.getElementById("workout-selected-day-title").innerText = day.title;
    document.getElementById("workout-selected-day-desc").innerText = day.desc;
    
    const container = document.getElementById("exercise-cards-container");
    container.innerHTML = day.exercises.map((ex, exIdx) => {
        const isCompleted = ex.completed || false;
        return `
            <div class="exercise-card ${isCompleted ? 'completed' : ''}" id="ex-card-${selectedWorkoutDay}-${exIdx}">
                <div class="exercise-info-side">
                    <div class="exercise-order-num">${ex.order}</div>
                    <div class="exercise-text-block">
                        <span class="exercise-name">${ex.name}</span>
                        <div class="exercise-tags">
                            <span class="tag-tiny">Target: Chest/Back</span>
                            <span class="tag-tiny">${state.userProfile.equipment.split(" ")[0]}</span>
                        </div>
                    </div>
                </div>
                <div class="exercise-volume-side">
                    <div class="volume-stats">
                        <span class="val">${ex.sets} Sets</span>
                        <span class="lbl">Interval</span>
                    </div>
                    <div class="volume-stats">
                        <span class="val">${ex.reps}</span>
                        <span class="lbl">Reps Target</span>
                    </div>
                    <button class="btn btn-secondary btn-tiny" onclick="openExerciseModal(${selectedWorkoutDay}, ${exIdx})">Instructions</button>
                    
                    <div class="grocery-checkbox-item ${isCompleted ? 'checked' : ''}" style="width: 40px; justify-content: center; padding: 0.5rem;" onclick="toggleExerciseCheck(${selectedWorkoutDay}, ${exIdx})">
                        <div class="custom-checkbox"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleExerciseCheck(dayIdx, exIdx) {
    const plan = state.activePlan;
    if (!plan) return;
    
    const ex = plan.workoutPlan[dayIdx].exercises[exIdx];
    ex.completed = !ex.completed;
    
    saveStateToLocalStorage();
    renderSelectedDayExercises();
    
    if (ex.completed) {
        showToast(`Smashed ${ex.name}! Great effort.`);
    }
}

// Built-in stopwatch rest timer
function setTimerPreset(sec) {
    state.timer.presetTime = sec;
    state.timer.currentTime = sec;
    updateTimerDisplay();
    
    // Highlight active preset
    document.querySelectorAll(".timer-presets .btn-tiny").forEach(btn => {
        if (parseInt(btn.innerText) === sec) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function toggleTimer() {
    const startBtn = document.getElementById("timer-start");
    
    if (state.timer.isRunning) {
        clearInterval(state.timer.intervalId);
        state.timer.isRunning = false;
        startBtn.innerText = "Start";
        startBtn.classList.remove("btn-danger");
        startBtn.classList.add("btn-secondary");
    } else {
        state.timer.isRunning = true;
        startBtn.innerText = "Stop";
        startBtn.classList.remove("btn-secondary");
        startBtn.classList.add("btn-danger");
        
        state.timer.intervalId = setInterval(() => {
            state.timer.currentTime--;
            updateTimerDisplay();
            
            if (state.timer.currentTime <= 0) {
                clearInterval(state.timer.intervalId);
                state.timer.isRunning = false;
                startBtn.innerText = "Start";
                startBtn.classList.remove("btn-danger");
                startBtn.classList.add("btn-secondary");
                
                // Rest over effects
                showToast("Rest Over! Time for the next set.");
                triggerTimerAlertEffect();
                state.timer.currentTime = state.timer.presetTime;
                updateTimerDisplay();
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(state.timer.intervalId);
    state.timer.isRunning = false;
    state.timer.currentTime = state.timer.presetTime;
    updateTimerDisplay();
    
    const startBtn = document.getElementById("timer-start");
    startBtn.innerText = "Start";
    startBtn.classList.remove("btn-danger");
    startBtn.classList.add("btn-secondary");
}

function updateTimerDisplay() {
    const mins = Math.floor(state.timer.currentTime / 60);
    const secs = state.timer.currentTime % 60;
    document.getElementById("timer-display").innerText = 
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function triggerTimerAlertEffect() {
    const timerCard = document.querySelector(".timer-card");
    timerCard.style.borderColor = "var(--accent-color)";
    timerCard.style.boxShadow = "0 0 15px rgba(var(--accent-rgb), 0.5)";
    
    setTimeout(() => {
        timerCard.style.borderColor = "var(--border-color)";
        timerCard.style.boxShadow = "none";
    }, 2000);
}

/* -------------------------------------------------------------
   7. Diet Screen & Recipe Modal Controller
   ------------------------------------------------------------- */
let selectedMealDay = 1; // 1-indexed (Day 1, Day 2, Day 3)

function populateMealsView() {
    const plan = state.activePlan;
    if (!plan) return;
    
    // Set Summary stats
    const totalCals = plan.mealPlan[0].meals.reduce((sum, m) => sum + m.calories, 0);
    const totalProt = plan.mealPlan[0].meals.reduce((sum, m) => sum + m.protein, 0);
    const dailyCost = plan.mealPlan[0].meals.reduce((sum, m) => sum + m.cost, 0);
    
    document.getElementById("meal-summary-macros").innerText = `${totalCals} Cal | ${totalProt}g Protein`;
    document.getElementById("meal-summary-type").innerText = state.userProfile.diet;
    document.getElementById("meal-summary-cost").innerText = `$${dailyCost.toFixed(2)} / day`;
    
    // Settle tab listeners
    const tabContainer = document.getElementById("meal-days-tab-container");
    tabContainer.innerHTML = plan.mealPlan.map(day => `
        <button class="meal-day-tab ${day.day === selectedMealDay ? 'active' : ''}" onclick="selectMealDay(${day.day})">
            Day ${day.day}
        </button>
    `).join('');
    
    // Render Meal Cards
    const mealsContainer = document.getElementById("meals-list-container");
    const activeDayMeals = plan.mealPlan.find(d => d.day === selectedMealDay).meals;
    
    mealsContainer.innerHTML = activeDayMeals.map(meal => `
        <div class="meal-card">
            <div class="meal-type-header">${meal.type}</div>
            <div class="meal-details-body">
                <div>
                    <h4 class="meal-title">${meal.name}</h4>
                    <p class="meal-desc">${meal.description || 'Nutrient dense student meal prep options.'}</p>
                </div>
                <div class="meal-macros-row">
                    <span class="meal-macro-tag">${meal.calories} Cal</span>
                    <span class="meal-macro-tag">${meal.protein}g Protein</span>
                    <span class="meal-macro-tag">${meal.carbs}g Carbs</span>
                    <span class="meal-macro-tag">${meal.fats}g Fats</span>
                </div>
            </div>
            <div class="meal-footer">
                <span class="meal-cost">$${meal.cost.toFixed(2)}</span>
                <button class="btn btn-primary btn-tiny" onclick="openRecipeModal(${selectedMealDay - 1}, '${meal.type}')">View Recipe</button>
            </div>
        </div>
    `).join('');
}

function selectMealDay(dayNum) {
    selectedMealDay = dayNum;
    populateMealsView();
}

// Modals handling
function openRecipeModal(dayIdx, type) {
    const plan = state.activePlan;
    if (!plan) return;
    
    const meal = plan.mealPlan[dayIdx].meals.find(m => m.type === type);
    if (!meal) return;
    
    document.getElementById("modal-recipe-title").innerText = `${meal.type}: ${meal.name}`;
    document.getElementById("modal-recipe-time").innerText = "10-15 mins";
    document.getElementById("modal-recipe-cost").innerText = `$${meal.cost.toFixed(2)}`;
    document.getElementById("modal-recipe-calories").innerText = `${meal.calories} cal`;
    document.getElementById("modal-recipe-protein").innerText = `${meal.protein}g`;
    
    // Populate ingredients
    const ingList = document.getElementById("modal-recipe-ingredients");
    ingList.innerHTML = meal.ingredients.map(ing => `
        <li>${ing.qty} ${ing.name} <span style="font-size:0.75rem; color:var(--text-muted);">($${ing.cost.toFixed(2)})</span></li>
    `).join('');
    
    // Populate directions
    const directionsList = document.getElementById("modal-recipe-steps");
    directionsList.innerHTML = meal.directions.map(step => `
        <li>${step}</li>
    `).join('');
    
    // Toggle active classes
    const modal = document.getElementById("recipe-modal");
    modal.classList.add("active");
}

function openExerciseModal(dayIdx, exIdx) {
    const plan = state.activePlan;
    if (!plan) return;
    
    const ex = plan.workoutPlan[dayIdx].exercises[exIdx];
    if (!ex) return;
    
    document.getElementById("modal-exercise-title").innerText = ex.name;
    document.getElementById("modal-exercise-muscle").innerText = "Main Group";
    document.getElementById("modal-exercise-equipment").innerText = state.userProfile.equipment.split(" ")[0];
    document.getElementById("modal-exercise-volume").innerText = `${ex.sets} Sets x ${ex.reps}`;
    
    const instList = document.getElementById("modal-exercise-instructions");
    instList.innerHTML = ex.instructions.map(inst => `
        <li>${inst}</li>
    `).join('');
    
    const modal = document.getElementById("exercise-modal");
    modal.classList.add("active");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
}

/* -------------------------------------------------------------
   8. Grocery List Screen Controller
   ------------------------------------------------------------- */
function populateGroceryView() {
    const plan = state.activePlan;
    if (!plan) return;
    
    // Total price
    const total = plan.groceryList.reduce((sum, item) => sum + item.cost, 0);
    document.getElementById("grocery-total-price").innerText = `$${total.toFixed(2)}`;
    
    // Sort items by category
    const categories = {};
    plan.groceryList.forEach((item, idx) => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push({ ...item, originalIndex: idx });
    });
    
    const container = document.getElementById("grocery-sections-container");
    container.innerHTML = Object.keys(categories).map(catName => {
        const items = categories[catName];
        const itemsHtml = items.map(item => `
            <div class="grocery-checkbox-item ${item.checked ? 'checked' : ''}" onclick="toggleGroceryItem(${item.originalIndex})">
                <div class="checkbox-label-side">
                    <div class="custom-checkbox"></div>
                    <span class="item-name">${item.name}</span>
                </div>
                <div>
                    <span class="item-qty">${item.qty}</span>
                    <span class="item-cost" style="margin-left:0.5rem;">$${item.cost.toFixed(2)}</span>
                </div>
            </div>
        `).join('');
        
        return `
            <div class="grocery-section-card">
                <h3>${catName}</h3>
                <div class="grocery-items-list">${itemsHtml}</div>
            </div>
        `;
    }).join('');
    
    // Smart Swap tips
    const tipsList = document.getElementById("grocery-savings-tips");
    const budgetTips = BUDGET_TIPS[state.userProfile.budget] || BUDGET_TIPS[1];
    tipsList.innerHTML = budgetTips.map(tip => `<li>${tip}</li>`).join('');
}

function toggleGroceryItem(idx) {
    const plan = state.activePlan;
    if (!plan) return;
    
    plan.groceryList[idx].checked = !plan.groceryList[idx].checked;
    saveStateToLocalStorage();
    populateGroceryView();
}

/* -------------------------------------------------------------
   9. Settings Screen Controller & Direct API
   ------------------------------------------------------------- */
function populateSettingsView() {
    if (state.userProfile) {
        document.getElementById("api-key-input").value = state.userProfile.apiKey || "";
        document.getElementById("gemini-model-select").value = state.userProfile.model || "gemini-1.5-flash";
        document.getElementById("accent-color-select").value = state.userProfile.accentColor || "electric-blue";
        document.getElementById("measurement-unit").value = state.userProfile.unit || "metric";
    }
    
    // Set Firebase Config in settings input
    const configRaw = localStorage.getItem("fitstudent_firebase_config");
    if (configRaw) {
        document.getElementById("firebase-config-settings").value = configRaw;
    }
}

function updateAccentColor(colorClass) {
    // Clear old theme colors from body
    document.body.classList.remove("theme-electric-blue", "theme-neon-emerald", "theme-glowing-purple", "theme-sunset-orange");
    document.body.classList.add(`theme-${colorClass}`);
    
    if (state.userProfile) {
        state.userProfile.accentColor = colorClass;
        saveStateToLocalStorage();
    }
}

function updateThemeFromState() {
    // Theme accent
    if (state.userProfile && state.userProfile.accentColor) {
        updateAccentColor(state.userProfile.accentColor);
    }
    
    // Theme toggle setup
    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const isLight = document.body.classList.contains("light-mode");
            localStorage.setItem("lightModeSetting", isLight ? "true" : "false");
        });
        
        // Load setting
        const storedTheme = localStorage.getItem("lightModeSetting");
        if (storedTheme === "true") {
            document.body.classList.add("light-mode");
        }
    }
}

function resetAppData() {
    if (confirm("Are you sure you want to clear all data? This deletes your planner, routines, and tracking history.")) {
        localStorage.clear();
        state.userProfile = null;
        state.activePlan = null;
        state.dailyTracker = {
            caloriesConsumed: 0,
            proteinConsumed: 0,
            waterConsumed: 0,
            date: ""
        };
        
        // Force reload
        window.location.reload();
    }
}

/* -------------------------------------------------------------
   10. Local Storage Sync & Toasts
   ------------------------------------------------------------- */
function saveStateToLocalStorage() {
    // Save to local cache
    localStorage.setItem("fitstudent_state", JSON.stringify({
        userProfile: state.userProfile,
        activePlan: state.activePlan,
        dailyTracker: state.dailyTracker,
        chatHistory: state.chatHistory
    }));
    
    // Sync to Firestore if Firebase is active and user is logged in
    if (state.isFirebaseActive && state.currentUser) {
        firebase.firestore().collection("users").doc(state.currentUser.uid).set({
            userProfile: state.userProfile || null,
            activePlan: state.activePlan || null,
            dailyTracker: state.dailyTracker || null,
            chatHistory: state.chatHistory || null,
            lastSynced: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true })
        .then(() => {
            console.log("Firestore sync successful");
        })
        .catch(err => {
            console.error("Firestore sync error:", err);
        });
    }
}

function loadStateFromLocalStorage() {
    const raw = localStorage.getItem("fitstudent_state");
    if (raw) {
        try {
            const cache = JSON.parse(raw);
            state.userProfile = cache.userProfile || null;
            state.activePlan = cache.activePlan || null;
            state.dailyTracker = cache.dailyTracker || state.dailyTracker;
            state.chatHistory = cache.chatHistory || [];
        } catch (e) {
            console.error("Error parsing localstorage state", e);
        }
    }
}

function showToast(msg) {
    const toast = document.getElementById("app-toast");
    toast.innerText = msg;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/* -------------------------------------------------------------
   11. Optional Real Gemini API Call Integration
   ------------------------------------------------------------- */
function callGeminiAPI(profile, interval, submitBtn, btnText, btnSpinner) {
    const apiKey = profile.apiKey;
    const modelName = profile.model;
    
    // Construct System Instruction Prompt forcing JSON format
    const systemPrompt = `
You are an expert student physical coach and dietitian. Generate a highly personalized workout split and meal plan.
Respond ONLY with a valid, clean JSON object matching the exact JSON layout defined below. Do NOT wrap it in any markdown formatting (no \`\`\`json blocks), just return the raw JSON text.

JSON Layout structure required:
{
  "workoutPlan": [
    {
      "day": 1,
      "title": "Day 1: Full Body (Push Focus)",
      "desc": "Focus on chest and legs.",
      "exercises": [
        {
          "name": "Exercise Name",
          "sets": 3,
          "reps": "12",
          "instructions": ["Step 1", "Step 2"]
        }
      ]
    }
  ],
  "mealPlan": [
    {
      "day": 1,
      "meals": [
        {
          "type": "Breakfast",
          "name": "Recipe Name",
          "description": "Short description",
          "cost": 1.25,
          "calories": 450,
          "protein": 25,
          "carbs": 60,
          "fats": 10,
          "ingredients": [
            { "name": "Ingredient 1", "qty": "80g", "cost": 0.50 }
          ],
          "directions": ["Step 1 directions"]
        }
      ]
    }
  ],
  "groceryList": [
    {
      "name": "Ingredient 1",
      "qty": "240g",
      "cost": 1.50,
      "category": "Proteins & Dairy",
      "checked": false
    }
  ],
  "dailyTargets": {
    "calories": 2300,
    "protein": 125,
    "water": 3.2
  }
}

Use these user inputs:
- Goal: ${profile.goal}
- Gender: ${profile.gender}, Weight: ${profile.weight} kg, Height: ${profile.height} cm, Age: ${profile.age}
- Cultural Preference: ${profile.diet}
- Equipment available: ${profile.equipment}
- Frequency per week: ${profile.frequency} days
- Daily Budget level tier: ${profile.budget === 1 ? 'Ultra Budget under $5/day' : profile.budget === 2 ? 'Moderate under $12/day' : 'Premium Protein under $20/day'}. Scale meal costs to match this budget strictly!
`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
    
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [{ parts: [{ text: systemPrompt }] }],
            generationConfig: {
                responseMimeType: "application/json"
            }
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`API returned status code ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        clearInterval(interval);
        
        let planText = data.candidates[0].content.parts[0].text;
        // Clean markdown blocks if LLM still returned them
        planText = planText.replace(/```json/g, "").replace(/```/g, "").trim();
        
        const planObj = JSON.parse(planText);
        
        // Save state
        state.userProfile = profile;
        state.activePlan = planObj;
        
        // Reset counters
        state.dailyTracker.caloriesConsumed = 0;
        state.dailyTracker.proteinConsumed = 0;
        state.dailyTracker.waterConsumed = 0;
        
        saveStateToLocalStorage();
        
        // Reset loader button
        submitBtn.disabled = false;
        btnText.innerText = "Generate AI Custom Plan";
        btnSpinner.style.display = "none";
        
        // Switch views
        document.getElementById("dashboard-empty-state").style.display = "none";
        document.getElementById("dashboard-content").style.display = "grid";
        document.getElementById("workout-empty-state").style.display = "none";
        document.getElementById("workout-content").style.display = "grid";
        document.getElementById("meals-empty-state").style.display = "none";
        document.getElementById("meals-content").style.display = "block";
        document.getElementById("groceries-empty-state").style.display = "none";
        document.getElementById("groceries-content").style.display = "block";
        
        updateUIHeaderAndName();
        populateDashboard();
        populateWorkoutView();
        populateMealsView();
        populateGroceryView();
        populateSettingsView();
        
        showToast("Gemini AI plan generated and loaded successfully!");
        switchToTab("dashboard");
    })
    .catch(error => {
        console.error("Gemini API Error, falling back to local database", error);
        clearInterval(interval);
        showToast("Gemini API Key Error! Falling back to local offline generation engine...");
        
        // Fallback to local plan
        const plan = generateLocalPlan(profile);
        state.userProfile = profile;
        state.activePlan = plan;
        state.dailyTracker.caloriesConsumed = 0;
        state.dailyTracker.proteinConsumed = 0;
        state.dailyTracker.waterConsumed = 0;
        
        saveStateToLocalStorage();
        
        // Reset loader
        submitBtn.disabled = false;
        btnText.innerText = "Generate AI Custom Plan";
        btnSpinner.style.display = "none";
        
        // Load layouts
        document.getElementById("dashboard-empty-state").style.display = "none";
        document.getElementById("dashboard-content").style.display = "grid";
        document.getElementById("workout-empty-state").style.display = "none";
        document.getElementById("workout-content").style.display = "grid";
        document.getElementById("meals-empty-state").style.display = "none";
        document.getElementById("meals-content").style.display = "block";
        document.getElementById("groceries-empty-state").style.display = "none";
        document.getElementById("groceries-content").style.display = "block";
        
        updateUIHeaderAndName();
        populateDashboard();
        populateWorkoutView();
        populateMealsView();
        populateGroceryView();
        populateSettingsView();
        
        switchToTab("dashboard");
    });
}

/* -------------------------------------------------------------
   12. AI Chatbot Controller & Gemini Query Integration
   ------------------------------------------------------------- */
function toggleChatbot() {
    const chatWindow = document.getElementById("chatbot-window");
    const toggleBtn = document.getElementById("chatbot-toggle-btn");
    const openIcon = toggleBtn.querySelector(".chat-icon-open");
    const closeIcon = toggleBtn.querySelector(".chat-icon-close");
    
    const isActive = chatWindow.classList.toggle("active");
    
    if (isActive) {
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
        document.getElementById("chatbot-input").focus();
    } else {
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}

function handleChatKeyPress(event) {
    if (event.key === "Enter") {
        sendChatMessage();
    }
}

function formatChatMessageText(text) {
    // Escape standard HTML tags to prevent XSS except our formatting
    let safeText = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Simple markdown parsing for bold text (**text**)
    let html = safeText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Parse single asterisks (* text or - text) as bullet items if starting a line
    html = html.split('\n').map(line => {
        let trimmed = line.trim();
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            return `<li>${trimmed.substring(2)}</li>`;
        }
        return line;
    }).join('\n');
    
    // Group adjacent <li> tags into <ul>
    html = html.replace(/(<li>.*?<\/li>\n?)+/g, match => `<ul>${match}</ul>`);
    
    // Convert line breaks to <br> if not in ul/li
    html = html.replace(/\n/g, '<br>');
    return html;
}

function sendChatMessage() {
    const inputField = document.getElementById("chatbot-input");
    const query = inputField.value.trim();
    if (!query) return;
    
    // Clear input
    inputField.value = "";
    
    // Append user message to UI
    appendChatMessageUI(query, "user");
    
    // Scroll to bottom
    const messagePane = document.getElementById("chatbot-messages");
    messagePane.scrollTop = messagePane.scrollHeight;
    
    // Save to history state
    state.chatHistory.push({ role: "user", parts: [{ text: query }] });
    
    // Check if API Key is configured in settings
    const apiKey = (state.userProfile && state.userProfile.apiKey) || "";
    if (!apiKey) {
        setTimeout(() => {
            const warningMsg = `FitCoach AI needs a Gemini API Key to answer your questions. Please configure one in the <a href="#" onclick="switchToTab('settings'); toggleChatbot(); return false;" style="color:var(--primary-color); font-weight:700; text-decoration:underline;">Settings</a> tab!`;
            appendChatMessageUI(warningMsg, "error");
            messagePane.scrollTop = messagePane.scrollHeight;
        }, 500);
        return;
    }
    
    // Show typing indicator
    const typingIndicatorId = showChatTypingIndicator();
    messagePane.scrollTop = messagePane.scrollHeight;
    
    // Construct request body with FitCoach AI system context instructions
    const systemPrompt = `You are FitCoach AI, an encouraging virtual personal trainer and nutrition coach helper for students. You understand college limitations (dorm cooking, busy classes, tight budgets, no equipment). Keep your replies concise (under 3-4 sentences unless listing a recipe), warm, and highly actionable. Only answer questions related to workouts, exercise forms, hydration, sleep, recipe adjustments, cheap food swaps, and general fitness/nutrition. If asked about anything else (like general trivia, coding, history, etc.), politely decline and remind the user to stay focused on their health goals. Use clear bullet points and simple bold text for readability.`;
    
    const requestBody = {
        contents: state.chatHistory,
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        }
    };
    
    // Model preference or default
    const model = (state.userProfile && state.userProfile.model) || "gemini-1.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`API error code ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        // Remove typing indicator
        removeChatTypingIndicator(typingIndicatorId);
        
        let reply = "Sorry, I couldn't generate a response.";
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
            reply = data.candidates[0].content.parts[0].text;
        }
        
        // Save reply to history
        state.chatHistory.push({ role: "model", parts: [{ text: reply }] });
        
        // Append coach message to UI
        const formattedReply = formatChatMessageText(reply);
        appendChatMessageUI(formattedReply, "coach");
        messagePane.scrollTop = messagePane.scrollHeight;
    })
    .catch(err => {
        console.error("Chatbot Gemini API call failed", err);
        removeChatTypingIndicator(typingIndicatorId);
        
        const errorMsg = "Oops! I encountered an error. Please verify your Gemini API Key in the Settings page and check your connection.";
        appendChatMessageUI(errorMsg, "error");
        messagePane.scrollTop = messagePane.scrollHeight;
    });
}

function appendChatMessageUI(content, sender) {
    const messagePane = document.getElementById("chatbot-messages");
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", `message-${sender}`);
    msgDiv.innerHTML = content;
    messagePane.appendChild(msgDiv);
}

function showChatTypingIndicator() {
    const messagePane = document.getElementById("chatbot-messages");
    const indicatorDiv = document.createElement("div");
    const uniqueId = "typing-" + Date.now();
    indicatorDiv.id = uniqueId;
    indicatorDiv.classList.add("message", "message-coach");
    indicatorDiv.innerHTML = `
        <div class="typing-indicator-dots">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        </div>
    `;
    messagePane.appendChild(indicatorDiv);
    return uniqueId;
}

function removeChatTypingIndicator(indicatorId) {
    const indicator = document.getElementById(indicatorId);
    if (indicator) {
        indicator.remove();
    }
}

/* -------------------------------------------------------------
   13. Firebase Authentication & Firestore Database Integration
   ------------------------------------------------------------- */

function initializeFirebase() {
    let configRaw = localStorage.getItem("fitstudent_firebase_config");
    if (!configRaw) {
        const defaultConfig = {
            apiKey: "AIzaSyCFq9yAm3WSBxkJeUkKbG9_mXA70_MhexE",
            authDomain: "fitstudentai.firebaseapp.com",
            projectId: "fitstudentai",
            storageBucket: "fitstudentai.firebasestorage.app",
            messagingSenderId: "401245936149",
            appId: "1:401245936149:web:c3cb8c3baf0098c37acc1c"
        };
        localStorage.setItem("fitstudent_firebase_config", JSON.stringify(defaultConfig));
        configRaw = JSON.stringify(defaultConfig);
    }
    state.isLocalDemoMode = localStorage.getItem("fitstudent_local_demo") === "true";
    
    if (configRaw && typeof firebase !== 'undefined') {
        try {
            const config = JSON.parse(configRaw);
            firebase.initializeApp(config);
            state.isFirebaseActive = true;
            state.firebaseConfig = config;
            
            // Listen for Auth changes
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    state.currentUser = user;
                    state.isLocalDemoMode = false;
                    document.getElementById("auth-portal").style.display = "none";
                    document.getElementById("sync-warning-banner").style.display = "none";
                    
                    // Show logout actions & update UI
                    document.getElementById("btn-logout-sidebar").style.display = "flex";
                    document.getElementById("btn-logout-settings").style.display = "inline-block";
                    document.getElementById("user-display-status").innerText = "Cloud Synced";
                    
                    // Pull profile details from Firestore
                    loadStateFromFirestore();
                } else {
                    state.currentUser = null;
                    if (state.isLocalDemoMode) {
                        // Skip screen, run offline demo
                        document.getElementById("auth-portal").style.display = "none";
                        document.getElementById("sync-warning-banner").style.display = "flex";
                        document.getElementById("btn-logout-sidebar").style.display = "none";
                        document.getElementById("btn-logout-settings").style.display = "none";
                        document.getElementById("user-display-status").innerText = "Local Offline";
                        
                        loadLocalState();
                    } else {
                        // Prompt Auth panel
                        document.getElementById("auth-portal").style.display = "flex";
                        document.getElementById("auth-setup-card").style.display = "none";
                        document.getElementById("auth-login-card").style.display = "block";
                    }
                }
            });
            return;
        } catch (err) {
            console.error("Firebase Initialization Failed:", err);
            showToast("Failed to initialize Firebase! Checking local cache...");
        }
    }
    
    // Fallback to Setup Wizard if config is empty and not in local demo mode
    state.isFirebaseActive = false;
    if (state.isLocalDemoMode) {
        document.getElementById("auth-portal").style.display = "none";
        document.getElementById("sync-warning-banner").style.display = "flex";
        document.getElementById("user-display-status").innerText = "Local Offline";
        loadLocalState();
    } else {
        document.getElementById("auth-portal").style.display = "flex";
        document.getElementById("auth-setup-card").style.display = "block";
        document.getElementById("auth-login-card").style.display = "none";
    }
}

function loadLocalState() {
    loadStateFromLocalStorage();
    renderApplicationState();
}

function loadStateFromFirestore() {
    if (!state.isFirebaseActive || !state.currentUser) return;
    
    const uid = state.currentUser.uid;
    const db = firebase.firestore();
    
    db.collection("users").doc(uid).get()
    .then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            
            // Sync to local memory state
            state.userProfile = data.userProfile || null;
            state.activePlan = data.activePlan || null;
            state.dailyTracker = data.dailyTracker || state.dailyTracker;
            state.chatHistory = data.chatHistory || [];
            
            // Render layouts
            renderApplicationState();
            console.log("State loaded successfully from Firestore.");
        } else {
            console.log("No profile doc found in Firestore. Checking for local migration...");
            
            // Auto-Migration Checker: Check if local profile exists to migrate
            loadStateFromLocalStorage();
            if (state.userProfile || state.activePlan) {
                showToast("Migrating your local progress to cloud database...");
                saveStateToLocalStorage(); // This will auto-sync it to Firestore!
                renderApplicationState();
            } else {
                // Fresh user, go to planner
                renderApplicationState();
            }
        }
    })
    .catch((err) => {
        console.error("Firestore get error, falling back to local cache", err);
        loadLocalState();
    });
}

function renderApplicationState() {
    if (state.userProfile && state.activePlan) {
        document.getElementById("dashboard-empty-state").style.display = "none";
        document.getElementById("dashboard-content").style.display = "grid";
        document.getElementById("workout-empty-state").style.display = "none";
        document.getElementById("workout-content").style.display = "grid";
        document.getElementById("meals-empty-state").style.display = "none";
        document.getElementById("meals-content").style.display = "block";
        document.getElementById("groceries-empty-state").style.display = "none";
        document.getElementById("groceries-content").style.display = "block";
        
        populateDashboard();
        populateWorkoutView();
        populateMealsView();
        populateGroceryView();
        populateSettingsView();
        updateUIHeaderAndName();
    } else {
        switchToTab("planner");
    }
}

// Wizard connections
function connectFirebase() {
    const configInput = document.getElementById("firebase-config-input").value.trim();
    if (!configInput) {
        alert("Please paste your Firebase Configuration JSON object!");
        return;
    }
    
    try {
        // Strip comments and parse JSON
        const cleanConfig = configInput.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
        const parsed = JSON.parse(cleanConfig);
        if (!parsed.apiKey || !parsed.projectId) {
            throw new Error("Invalid configuration object! apiKey and projectId are required.");
        }
        
        localStorage.setItem("fitstudent_firebase_config", JSON.stringify(parsed));
        localStorage.setItem("fitstudent_local_demo", "false"); // Disable local bypass on config update
        showToast("Firebase Config saved successfully! Re-initializing...");
        
        // Reload to apply configurations
        setTimeout(() => window.location.reload(), 1000);
    } catch (err) {
        alert("Failed to parse config. Please make sure you are pasting a valid JSON object. Error: " + err.message);
    }
}

function saveSettingsFirebaseConfig() {
    const configInput = document.getElementById("firebase-config-settings").value.trim();
    if (!configInput) {
        // Clear Firebase Config if empty
        localStorage.removeItem("fitstudent_firebase_config");
        localStorage.removeItem("fitstudent_local_demo");
        showToast("Firebase Config cleared. Reloading...");
        setTimeout(() => window.location.reload(), 1000);
        return;
    }
    
    try {
        const parsed = JSON.parse(configInput);
        localStorage.setItem("fitstudent_firebase_config", JSON.stringify(parsed));
        localStorage.setItem("fitstudent_local_demo", "false");
        showToast("Firebase Config updated! Reloading...");
        setTimeout(() => window.location.reload(), 1000);
    } catch (err) {
        alert("Invalid JSON configuration. Error: " + err.message);
    }
}

function runInLocalDemoMode() {
    localStorage.setItem("fitstudent_local_demo", "true");
    state.isLocalDemoMode = true;
    
    document.getElementById("auth-portal").style.display = "none";
    document.getElementById("sync-warning-banner").style.display = "flex";
    document.getElementById("user-display-status").innerText = "Local Offline";
    
    loadLocalState();
    showToast("Running in Local Offline Mode. Setup Cloud database anytime in Settings.");
}

// Authentication switch panel
function switchAuthTab(mode) {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const loginTabBtn = document.getElementById("btn-switch-login");
    const registerTabBtn = document.getElementById("btn-switch-register");
    const subtitleText = document.getElementById("auth-card-subtitle");
    
    if (mode === "login") {
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
        loginTabBtn.classList.add("active");
        registerTabBtn.classList.remove("active");
        subtitleText.innerText = "Sign in to sync your fitness planner to the cloud";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
        loginTabBtn.classList.remove("active");
        registerTabBtn.classList.add("active");
        subtitleText.innerText = "Create a student profile to save your AI schedule";
    }
}

function handleLoginSubmit(event) {
    event.preventDefault();
    if (!state.isFirebaseActive) return;
    
    const email = document.getElementById("login-email").value.trim();
    const pass = document.getElementById("login-password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => {
        showToast("Logged in successfully!");
    })
    .catch((err) => {
        console.error("Login failed:", err);
        alert("Authentication Failed: " + err.message);
    });
}

function handleRegisterSubmit(event) {
    event.preventDefault();
    if (!state.isFirebaseActive) return;
    
    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const pass = document.getElementById("register-password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((cred) => {
        // Update Firebase User DisplayName
        return cred.user.updateProfile({
            displayName: name
        }).then(() => {
            // Set initial Firestore Document
            return firebase.firestore().collection("users").doc(cred.user.uid).set({
                userProfile: {
                    name: name,
                    age: 20,
                    gender: "Male",
                    weight: 70,
                    height: 175,
                    goal: "Lose Weight (Cut)",
                    equipment: "Bodyweight Only (Dorm Friendly)",
                    frequency: 3,
                    duration: "30 Minutes",
                    diet: "Standard Western",
                    budget: 1
                },
                activePlan: null,
                dailyTracker: {
                    caloriesConsumed: 0,
                    proteinConsumed: 0,
                    waterConsumed: 0,
                    date: new Date().toDateString()
                },
                chatHistory: [],
                lastSynced: firebase.firestore.FieldValue.serverTimestamp()
            });
        });
    })
    .then(() => {
        showToast("Account created successfully!");
    })
    .catch((err) => {
        console.error("Registration failed:", err);
        alert("Account Creation Failed: " + err.message);
    });
}

function handleGoogleSignIn() {
    if (!state.isFirebaseActive) {
        alert("Firebase is not initialized. Please configure database credentials first.");
        return;
    }
    
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(() => {
        showToast("Logged in with Google!");
    })
    .catch((err) => {
        console.error("Google sign in failed:", err);
        alert("Google Sign-In Failed: " + err.message);
    });
}

function signOutUser() {
    localStorage.removeItem("fitstudent_local_demo"); // Clear bypass flag on logout
    if (state.isFirebaseActive) {
        firebase.auth().signOut()
        .then(() => {
            showToast("Logged out successfully.");
            setTimeout(() => window.location.reload(), 1000);
        })
        .catch((err) => {
            console.error("Logout failed:", err);
            window.location.reload();
        });
    } else {
        window.location.reload();
    }
}

