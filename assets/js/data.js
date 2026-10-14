/* MIDNIGHT RECIPES — single source of truth for all recipe pages */
window.MIDNIGHT_SITE = {
  // Reviews are only stored in the visitor's own browser, so the form is hidden until a shared backend exists.
  reviewsEnabled: false,
  aboutImages: {
    aboutMe: 'images/about/about-me.jpg',
    aboutRecipes: 'images/about/about-midnight-recipes.jpg'
  }
};

window.MIDNIGHT_RECIPES = [
  {
    slug:'chocolate-cream-comfort-pie', title:'Chocolate Cream Comfort Pie', source:'Movie & TV', original:'JULIE AND JULIA (2009)', dish:'Chocolate Cream Pie', cuisine:'American', course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'], ingredientCategories:['Chocolate','Pie'], dateAdded:'2026-09-26', timeStamp:'11:20 PM',
    description:'A late-night chocolate cream pie inspired by Julie & Julia (2009).',
    heroImage:'images/recipes/chocolate-cream-comfort-pie/hero.jpg', recipeImage:'images/recipes/chocolate-cream-comfort-pie/recipe.jpg',
    unitOverrides:{imperial:{'unsalted butter':'tbsp','unsalted butter melted':'tbsp'}},
    integerUnits:{metric:['unsweetened cocoa powder']},
    stepQuantityConversion:true,
    usCupFractions:true,
    scaleMinimums:{'salt|pinch':1},
    fixedStepPhotoCells:true,
    storyQuote:'“You know what I like about cooking? I love that after a day when nothing is sure, and when I say nothing I mean nothing, you can come home and absolutely know that if you add egg yolks to chocolate and sugar and milk, it will get thick. It’s such a comfort.”',
    story:`*Reine de Saba* (chocolate cake with sliced almonds) might be the most famous dessert from this movie, but it was Julie’s whole emotional breakdown over making a chocolate cream pie that totally spoke to me. No matter how crazy or messy the day gets, the kitchen is always my ultimate comfort zone to reset!`,
    original:'JULIE AND JULIA (2009)',
    ingredientFile:[
      {name:'GRAHAM CRACKERS',details:[['Origin','Graham crackers are used in the pie shown in *Julie & Julia*.'],['Substitute','Store-bought pie crust, chocolate wafers, or Oreo-style cookies.']]},
      {name:'DARK CHOCOLATE',details:[['Flavor','The chocolate is the heart of this pie, so use a good-quality chocolate you genuinely enjoy eating.'],['Best choice','60–70% dark chocolate.'],['Substitute','Semi-sweet chocolate.'],['Midnight Fix','If using sweeter chocolate, reduce the sugar to 50–60g.']]},
      {name:'ESPRESSO POWDER',details:[['Flavor','A small amount intensifies the chocolate flavor without making the pie taste like coffee.'],['Substitute','Instant coffee powder.']]},
      {name:'UNSWEETENED COCOA POWDER',details:[['Role','Adds concentrated chocolate flavor without adding extra sweetness.'],['Best choice','Dutch-processed cocoa powder for a darker, smoother chocolate flavor.'],['Substitute','Natural unsweetened cocoa powder.'],["Can't find cocoa powder?",'Leave it out and add an extra 20–30g dark chocolate to the filling. The chocolate flavor will be slightly richer, and the filling may be a little softer.']]},
      {name:'WHOLE MILK',details:[['Why Whole Milk','The higher fat content gives the chocolate filling a richer, creamier mouthfeel.'],['Substitute','2% milk works too, but the filling will be slightly lighter.'],['Midnight Fix','If using 2% milk, add 1 Tbsp extra butter for a richer texture.']]}
    ],
    ingredients:[
      {group:'Crust'},{amount:200,unit:'g',item:'Graham Crackers, Finely Crushed'},{amount:76,unit:'g',imperialAmount:1/3,imperialUnit:'cup',item:'Unsalted Butter, Melted'},
      {group:'Chocolate Filling'},{amount:150,unit:'g',imperialAmount:1,imperialUnit:'cup',item:'Dark Chocolate, Chopped'},{amount:1,unit:'tsp',imperialAmount:1,imperialUnit:'tsp',item:'Espresso Powder'},{amount:3,unit:'Tbsp',imperialAmount:3,imperialUnit:'tbsp',item:'Unsweetened Cocoa Powder'},{amount:4,unit:'',imperialAmount:4,imperialUnit:'',item:'Egg Yolks'},{amount:80,unit:'g',imperialAmount:0.5,imperialUnit:'cup',item:'Granulated Sugar'},{amount:4,unit:'Tbsp',imperialAmount:4,imperialUnit:'tbsp',item:'Cornstarch'},{amount:1,unit:'pinch',imperialAmount:1,imperialUnit:'pinch',item:'Salt'},{amount:500,unit:'ml',imperialAmount:2,imperialUnit:'cup',item:'Whole Milk'},{amount:21,unit:'g',imperialAmount:1.5,imperialUnit:'tbsp',item:'Unsalted Butter'},
      {group:'Topping (optional)'},{amount:237,unit:'ml',imperialAmount:1,imperialUnit:'cup',item:'35% Whipping Cream'},{amount:38,unit:'g',imperialAmount:3,imperialUnit:'tbsp',item:'Granulated Sugar'},{unit:'',item:'Cocoa Powder, Cacao Nibs, or Flaky Sea Salt, to Finish'}
    ],
    stats:{prep:'15 mins',cook:'15 mins',chill:'4 hrs',total:'4 hrs 30 min',serves:'6–8',pan:'23 cm / 9 inch pie dish',quiet:'⭐⭐⭐☆☆'},
    steps:[
      {number:'01',title:'CRUSH IT DOWN',clock:'11:20 PM',paragraphs:[
        'Preheat your oven to 175°C / 350°F.',
        'Crush 200g graham crackers finely.',
        '**Food Processor (Fastest):** Pulse for about 30 seconds.',
        '**Quiet Mode (Silent):** Seal in a zip-top bag and roll with a rolling pin—perfect for late-night baking.',
        'Add {{qty:Crust::Unsalted Butter, melted}} melted butter to the crushed graham crackers and mix until the crumbs are evenly coated.',
        'Press the crumb mixture firmly into a 9-inch (23 cm) pie dish using the flat bottom of a cup.',
        'Bake for 8–10 minutes. Let it cool.'
      ],stepNote:'**Midnight Shortcut:** Skip baking and freeze the crust while you make the filling.',stepImages:['images/recipes/chocolate-cream-comfort-pie/step-01-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-01-02.jpg','images/recipes/chocolate-cream-comfort-pie/step-01-03.jpg']},
      {number:'02',title:'MAKE IT GLOSSY',clock:'12:20 AM',paragraphs:[
        'In a saucepan, whisk {{qty:Chocolate Filling::Granulated Sugar}} sugar, {{qty:Chocolate Filling::Cornstarch}} cornstarch, {{qty:Chocolate Filling::Unsweetened Cocoa Powder}} cocoa powder, {{qty:Chocolate Filling::Espresso powder}} espresso powder, and {{qty:Chocolate Filling::Salt}} salt.',
        'Slowly pour in {{qty:Chocolate Filling::Whole Milk}} whole milk, whisking thoroughly until completely smooth before turning on the heat.',
        'Cook over medium heat, whisking constantly until the mixture bubbles and thickens into a pudding-like consistency.',
        'Remove the pan from the heat.'
      ],stepImages:['images/recipes/chocolate-cream-comfort-pie/step-02-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-02-02.jpg','images/recipes/chocolate-cream-comfort-pie/step-02-03.jpg','images/recipes/chocolate-cream-comfort-pie/step-02-04.jpg']},
      {number:'03',title:'MAKE IT SILKY',clock:'12:28 AM',paragraphs:[
        'In a separate bowl, whisk {{qty:Egg Yolks}} egg yolks.',
        'Slowly whisk half of the hot chocolate cream into the yolks to warm them up, then pour the yolk mixture back into the pan.',
        'Return to low heat for 1 minute, whisking constantly until thick and glossy.',
        'Remove from heat, then stir in {{qty:Chocolate Filling::Dark Chocolate, chopped}} chopped dark chocolate and {{qty:Chocolate Filling::Unsalted Butter}} butter until fully melted and smooth.'
      ],stepImages:['images/recipes/chocolate-cream-comfort-pie/step-03-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-03-02.jpg','images/recipes/chocolate-cream-comfort-pie/step-03-03.jpg','images/recipes/chocolate-cream-comfort-pie/step-03-04.jpg']},
      {number:'04',title:'POUR AND WAIT',clock:'12:35 AM',paragraphs:[
        'Pour the warm chocolate filling into your chilled pie crust.',
        'Tap the pie dish gently on the counter 2–3 times to level the surface and release trapped air bubbles.',
        'Refrigerate for at least 4 hours. Overnight works best.'
      ],stepImages:['images/recipes/chocolate-cream-comfort-pie/step-04-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-04-02.jpg']},
      {number:'05',title:'WHIP IT LATE',clock:'Optional',paragraphs:[
        'Whip 237 ml cold 35% Whipping Cream to soft peaks.',
        'Gradually add 3 tbsp Granulated Sugar and whip until medium-firm peaks form.',
        'Dollop generously over the chilled pie and finish with cocoa powder, cacao nibs, or flaky sea salt.'
      ],stepImages:['images/recipes/chocolate-cream-comfort-pie/step-05-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-05-02.jpg']}
    ],
    notes:[['Recreating the Flavor','I use dark chocolate together with cocoa powder and a hint of espresso powder to take the filling beyond a simple cocoa base, creating a deeper and more layered chocolate flavor.'],['Midnight Shortcut','Chilling the crust in the freezer while preparing the filling saves time without adding another complicated step.'],['Midnight Compromises','If you are too exhausted to whisk by hand, store-bought whipped cream works perfectly well. Freshly whipped cream, however, gives a better texture and a prettier finish when you have a few extra minutes.']],
    finePrint:{
      'BEST EATEN':'Tomorrow — the filling becomes firmer and the flavors settle overnight.',
      'MAKE AHEAD':'Yes. Prepare up to 1 day ahead. Add the whipped cream just before serving.',
      'STORAGE':'Refrigerate, covered, for up to 3 days.',
      'FREEZER':'Not applicable.',
      'REHEAT':'Not applicable.'
    },
    tags:['Movie & TV','Baking','Desserts','American','Chocolate','Pie'], mainIngredients:['Chocolate','Pie'], usualsCategory:''
  },

  {
    slug:'addictive-spicy-taiwan-ground-pork',
    title:'Addictive Spicy Taiwan Ground Pork',
    source:'Restaurant',
    original:'Misen 味仙, Nagoya, Japan',
    dish:'Taiwan Ramen — Taiwan Mince',
    cuisine:'Taiwan', cuisineSecondary:'Japanese',
    course:'Main Dishes',
    categories:['Main Dishes'],
    ingredientCategories:['Pork'],
    dateAdded:'2026-09-27',
    timeStamp:'11:14 PM',
    description:'A fiery Nagoya-inspired Taiwan mince served over rice with a soft-boiled egg.',
    heroImage:'images/recipes/addictive-spicy-taiwan-ground-pork/hero.jpg', recipeImage:'images/recipes/addictive-spicy-taiwan-ground-pork/recipe.jpg',
    unitOverrides:{imperial:{'sesame oil':'tbsp','soy sauce':'tbsp','Shaoxing wine':'tbsp','doubanjiang':'tbsp','sugar':'tsp'}},
    stepQuantityConversion:true,
    usCupFractions:true,
    integerUnits:{metric:['sesame oil','sugar']},
    richTextNotes:true,
    story:`*Taiwan Ramen* (台湾ラーメン) at Misen (味仙) is famous in my hometown, Nagoya, Japan. Despite its name, this fiery ramen isn’t actually from Taiwan—the founder named it “Taiwan Ramen” after his own Taiwanese roots. It is one of Nagoya’s local food that evolved entirely in Japan, and this intensely spicy, strangely addictive flavor is so irresistible that I found myself going back to the restaurant again on my last trip home.\n\nTonight, I’m making the Taiwan ground pork the star of the dish, serving it over rice with a soft-boiled egg instead of its original ramen noodles. It might be so spicy that I end up staying awake all night.`,
    ingredientFile:[
      {name:'GROUND PORK',details:[['Flavor','Rich, savory, fatty'],['Substitute','Ground chicken or turkey, although fatty pork gives the closest result']]},
      {name:'FRESH RED CHILI',details:[['Origin','East & Southeast Asia'],['Flavor','Fresh, sharp, bright heat'],['Substitute','Dried Thai chili or red chili flakes'],['Storage','Refrigerate loosely wrapped.'],['Why here','Plenty of fresh chili and garlic are essential to this recipe!']]},
      {name:'GARLIC',details:[['Flavor','Fresh, garlicky, slightly sweet'],['Why here','Plenty of fresh chili and garlic are essential to this recipe!']]},
      {name:'DOUBANJIANG',details:[['Origin','China'],['Flavor','Fermented, salty, savory, deeply spicy'],['Substitute','Chili bean paste or, in a pinch, a combination of chili paste and a little miso']]}
    ],
    ingredients:[
      {group:'Taiwan Mince'},
      {amount:454,unit:'g',imperialAmount:1,imperialUnit:'lb',item:'Fatty Ground Pork'},
      {amount:20,unit:'g',item:'Garlic, Finely Minced',imperialMinAmount:6,imperialMaxAmount:8,imperialMinUnit:'cloves',imperialMaxUnit:'cloves',instructionImperialMinUnit:'garlic cloves',instructionImperialMaxUnit:'garlic cloves',instructionMetricSuffix:' of garlic',compactRange:true},
      {minAmount:3,maxAmount:5,unit:'',item:'Fresh Red Chilies, Finely Minced, Seeds Included'},
      {amount:45,unit:'ml',item:'Sesame Oil'},
      {amount:30,unit:'ml',item:'Soy Sauce'},
      {amount:30,unit:'ml',item:'Shaoxing Wine'},
      {amount:15,unit:'ml',item:'Doubanjiang'},
      {amount:10,unit:'ml',imperialAmount:2,imperialUnit:'tsp',item:'Oyster Sauce'},
      {amount:10,unit:'ml',imperialAmount:2,imperialUnit:'tsp',item:'Gochujang'},
      {amount:2.5,unit:'ml',imperialAmount:0.5,imperialUnit:'tsp',item:'Granulated Sugar'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Chicken Bouillon Powder'},
      {amount:180,unit:'ml',imperialAmount:0.75,imperialUnit:'cup',item:'Water'},
      {unit:'',item:'Black Pepper, to Taste'},
      {amount:55,unit:'g',imperialAmount:1,imperialUnit:'small bunch',item:'Garlic Chives or Green Onion, Cut into 3–4 cm Pieces'},
      {minAmount:3,maxAmount:5,unit:'ml',imperialMinAmount:0.5,imperialMaxAmount:1,imperialMinUnit:'tsp',imperialMaxUnit:'tsp',compactRange:true,item:'Sesame Oil, for Finishing'},
      {group:'To Serve'},
      {unit:'',item:'Hot Steamed White Rice'},
      {unit:'',item:'Soft-boiled Egg'}
    ],
    stats:{prep:'10 mins',cook:'20 mins',total:'30 mins',serves:'4',quiet:'⭐⭐⭐☆☆'},
    steps:[
      {number:'01',title:'BUILD THE CHILI-GARLIC OIL',clock:'11:14 PM',paragraphs:[
        'Add {{qty:sesame oil}} sesame oil, minced {{qty:garlic}}, and {{qty:fresh red chilies}} finely minced fresh red chilies to a cold frying pan.',
        'Turn the heat to low and gently cook for 1–2 minutes.',
        'Keep the garlic pale. You want the oil infused with garlic and chili, not burnt garlic.'
      ],stepImages:['images/recipes/addictive-spicy-taiwan-ground-pork/step-01-01.JPG','images/recipes/addictive-spicy-taiwan-ground-pork/step-01-02.JPG','images/recipes/addictive-spicy-taiwan-ground-pork/step-01-03.JPG']},
      {number:'02',title:'COOK THE PORK',clock:'11:17 PM',paragraphs:[
        'Increase the heat to medium-high and add {{qty:fatty ground pork}} ground pork.',
        'Let the pork sit against the pan briefly so it develops some browned edges.',
        'Break it apart and continue cooking until deeply browned and the pork fat has rendered.',
        'Push the pork toward one side of the pan. Add {{qty:doubanjiang}} doubanjiang to the exposed oil.',
        'Fry the doubanjiang for 30–45 seconds, then mix it thoroughly into the pork.',
      ],stepImages:['images/recipes/addictive-spicy-taiwan-ground-pork/step-02-01.JPG','images/recipes/addictive-spicy-taiwan-ground-pork/step-02-02.JPG']},
      {number:'03',title:'BRAISE & REDUCE',clock:'11:22 PM',paragraphs:[
        'Add {{qty:Shaoxing wine}} Shaoxing wine and let it bubble for about 30 seconds.',
        'Add {{qty:soy sauce}} soy sauce, {{qty:oyster sauce}} oyster sauce, {{qty:gochujang}} gochujang, {{qty:Granulated Sugar}} sugar, {{qty:chicken bouillon powder}} chicken bouillon powder, and {{qty:water}} water.',
        'Stir everything together and bring to a simmer.',
        'Reduce the heat to low and simmer uncovered for 10–15 minutes.',
        'Do not completely dry out the mince.',
        'The finished meat should be deeply colored, glossy and intensely savory, with a small amount of concentrated sauce and pork fat still coating the pan.'
      ],stepImages:['images/recipes/addictive-spicy-taiwan-ground-pork/step-03-01.JPG','images/recipes/addictive-spicy-taiwan-ground-pork/step-03-02.JPG']},
      {number:'04',title:'FINISH WITH GARLIC CHIVES',clock:'11:34 PM',paragraphs:[
        'Add {{qty:garlic chives or green onion}} garlic chives.',
        'Toss over medium heat for 30–45 seconds.',
        'Turn off the heat.',
        'Add {{qty:sesame oil, for finishing}} sesame oil.',
      ],stepImages:['images/recipes/addictive-spicy-taiwan-ground-pork/step-04-01.JPG','images/recipes/addictive-spicy-taiwan-ground-pork/step-04-02.JPG']},
      {number:'05',title:'BRING IT HOME',clock:'11:37 PM',paragraphs:[
        'Spoon hot steamed white rice into a shallow bowl.',
        'Pile the Taiwan mince generously over the rice.',
        'Make sure some of the concentrated sauce drips down into the rice.',
        'Top with a soft-boiled egg with a runny yolk.'
      ],stepImages:['images/recipes/addictive-spicy-taiwan-ground-pork/step-05-01.jpg']}
    ],
    notes:[
      ['The Fresh Chili Trick','Fresh red chili replaces the dried chili traditionally used in many versions of Taiwan mince. Finely chopping the chili with the seeds and membrane distributes the heat throughout the meat rather than giving you occasional bites of whole chili.'],
      ['Why the Sauce Is Deliberately Generous','This version is designed specifically for rice. The mince shouldn’t be dry like ordinary *soboro* (そぼろ: finely crumbled and seasoned ground meat). It should sit somewhere between a stir-fried mince and a braised mince, with enough concentrated sauce to soak into the rice. The rice is supposed to get spicy, too.']
    ],
    finePrint:{
      'BEST EATEN':'Fresh, served hot over steamed white rice with a freshly cooked fried egg.',
      'MAKE AHEAD':'Yes. Prepare the Taiwan mince ahead of time. Cook the rice and fried egg just before serving.',
      'STORAGE':'Refrigerate the Taiwan mince in an airtight container for up to 3 days. Store the rice separately.',
      'FREEZER':'Freeze the Taiwan mince in an airtight container for up to 1–2 months. Thaw in the refrigerator before reheating.',
      'REHEAT':'Reheat the mince in the microwave or on the stovetop. Add a splash of water if it becomes too dry.'
    },
    tags:['Restaurant','Main Dishes','Japanese','Ground Pork','Garlic','Fresh Red Chili','Garlic Chives','Doubanjiang'],
    mainIngredients:['Ground Pork','Garlic','Fresh Red Chili','Garlic Chives','Doubanjiang'],
    usualsCategory:''
  },

  {
    slug:'apple-creme-brulee',
    title:'Apple Crème Brûlée',
    source:'Movie & TV',
    original:'Amélie (2001)',
    dish:'Crème Brûlée',
    cuisine:'French',
    course:'Desserts',
    categories:['Desserts'],
    ingredientCategories:['Fruit'],
    dateAdded:'2026-09-27',
    timeStamp:'11:20 PM',
    description:'Apple crème brûlée inspired by Amélie (2001), with soft tart apples beneath silky custard and brittle caramel.',
    heroImage:'images/recipes/apple-creme-brulee/hero.jpg', recipeImage:'images/recipes/apple-creme-brulee/recipe.jpg',
    unitOverrides:{metric:{'apples':'g','unsalted butter':'g','brown sugar':'g','lemon juice':'ml','ground cinnamon':'g','whole milk':'ml','35% whipping cream':'ml','granulated sugar':'g','granulated sugar, for brûlée':'g','vanilla extract':'ml'},imperial:{'apples':'cup','unsalted butter':'tbsp','brown sugar':'tbsp','lemon juice':'tbsp','granulated sugar':'tbsp','ground cinnamon':'tsp','vanilla extract':'tsp'}},
    integerUnits:{metric:['apples','unsalted butter','brown sugar','lemon juice','ground cinnamon','whole milk','35% whipping cream','granulated sugar','vanilla extract','granulated sugar, for brûlée','granulated sugar for br l e']},
    usCupFractions:true,
    densityOverrides:{'brown sugar|tbsp':12.5,'granulated sugar|tbsp':12.5},
    stepQuantityConversion:true,
    story:`What is the first thing that comes to mind when you hear crème brûlée?

For me, it is the movie *Amélie*. She is a little awkward, but she knows exactly what she likes and dislikes, and she is good at finding happiness in the smallest things — plunging her fingers into a sack of dried beans, skipping stones across a canal, and, of course, cracking the caramelized top of a crème brûlée with the back of a teaspoon.

Tonight, I wanted to enjoy it a little differently: soft, slightly tart apples tucked underneath the silky custard, waiting quietly beneath that brittle layer of burnt sugar.`,
    ingredientFile:[
      {name:'APPLE',details:[
        ['Origin','Central Asia / cultivated worldwide'],
        ['Flavor','Sweet-tart, crisp, floral'],
        ['Best variety for this recipe in Canada','Honeycrisp — sweet-tart, aromatic, and holds its shape well when cooked. Pink Lady is a good choice for a slightly more tart flavor.'],
        ['Substitute','Pears or other firm fruit'],
        ['Storage','Refrigerate for up to several weeks, depending on variety.']
      ]},
      {name:'WHOLE MILK + 35% WHIPPING CREAM',details:[
        ['Ratio','35% whipping cream : whole milk = 4:1'],
        ['Why this ratio','Many recipes use 100% cream, but for this version, I wanted a little more balance. The apples already bring acidity and moisture, so keeping some milk in the custard gives it just enough lightness to complement the rich cream without making the dessert feel too heavy.']
      ]}
    ],
    ingredients:[
      {group:'Apple mixture'},
      {amount:300,unit:'g',item:'Apples, Peeled, Cored, and Cut into 1 cm Cubes'},
      {amount:15,unit:'g',item:'Unsalted Butter'},
      {amount:18.75,unit:'g',item:'Brown Sugar'},
      {amount:15,unit:'ml',item:'Lemon Juice'},
      {amount:2,unit:'g',item:'Ground Cinnamon'},
      {amount:1,unit:'pinch',item:'Fine Salt'},
      {group:'Custard'},
      {amount:100,unit:'ml',item:'Whole Milk'},
      {amount:400,unit:'ml',item:'35% Whipping Cream'},
      {amount:5,unit:'',item:'Large Egg Yolks'},
      {amount:63,unit:'g',imperialAmount:5,imperialUnit:'tbsp',item:'Granulated Sugar'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Vanilla Extract'},
      {amount:1,unit:'pinch',item:'Fine Salt'},
      {group:'Brûlée'},
      {unit:'',item:'Granulated Sugar, for Brûlée'}
    ],
    stats:{prep:'20 mins',cook:'35 mins',total:'55 mins + chilling',serves:'6',quiet:'⭐⭐⭐⭐⭐'},
    steps:[
      {number:'01',title:'PREHEAT & SOFTEN THE APPLES',clock:'11:20 PM',paragraphs:[
        'Preheat your oven to 140°C / 285°F.',
        'Melt {{qty:unsalted butter}} butter over medium heat.',
        'Add {{qty:apples}} apples, {{qty:brown sugar}} brown sugar, {{qty:lemon juice}} lemon juice, {{qty:Ground Cinnamon}} cinnamon, and a pinch of salt.',
        'Cook for 5–7 minutes, until the apples are tender but still hold their shape.',
        'If there is excess liquid, cook for another 1–2 minutes until glossy but not wet.',
        'Cool slightly.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-01-01.jpg','images/recipes/apple-creme-brulee/step-01-02.jpg','images/recipes/apple-creme-brulee/step-01-03.jpg','images/recipes/apple-creme-brulee/step-01-04.jpg']},
      {number:'02',title:'MAKE THE CUSTARD',clock:'11:32 PM',paragraphs:[
        'Heat {{qty:whole milk}} whole milk and {{qty:35% Whipping Cream}} 35% whipping cream over medium-low heat until hot and steaming, but do not boil.',
        'Whisk {{qty:Large Egg Yolks}} egg yolks, {{qty:Granulated Sugar}} sugar, and a pinch of salt gently. Avoid creating too much foam.',
        'Slowly add the hot dairy while whisking.',
        'Stir in {{qty:vanilla extract}} vanilla extract.',
        'Strain through a fine-mesh sieve.',
        'Let the custard rest for 5–10 minutes, then skim off any foam.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-02-01.jpg','images/recipes/apple-creme-brulee/step-02-02.JPG','images/recipes/apple-creme-brulee/step-02-03.JPG','images/recipes/apple-creme-brulee/step-02-04.JPG']},
      {number:'03',title:'FILL',clock:'11:42 PM',paragraphs:[
        'Divide the apples among mini cocottes.',
        'Pour the custard over the apples, almost to the top.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-03-01.JPG']},
      {number:'04',title:'WATER BATH & BAKE',clock:'11:45 PM',paragraphs:[
        'Place the cocottes in a deep baking dish.',
        'Add hot water until it reaches halfway up the sides of the cocottes.',
        'Bake at 140°C / 285°F for 30–35 minutes.',
        'The edges should be set while the centers still have a gentle, even wobble.',
        'Carefully remove the cocottes from the water bath.',
        'Cool, then refrigerate for at least 2 hours, preferably overnight.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-04-01.jpg']},
      {number:'05',title:'CRACK THE TOP',clock:'DAY',paragraphs:[
        'Blot any moisture from the surface.',
        'Sprinkle sugar evenly over the six custards in a thin layer.',
        'Torch until deeply golden and glassy. Let stand for 2–3 minutes.',
        'Crack the caramelized top with the back of a spoon, like *Amélie*.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-05-01.jpg','images/recipes/apple-creme-brulee/step-05-02.jpg']}
    ],
    notes:[
      ['Keeping the Apples Distinct','Cooking the apples separately concentrates their flavor and removes excess moisture.'],
      ['A Smooth Surface','Gentle mixing, straining, resting, and removing foam help create a smooth custard.'],
      ["Don't Overbake",'The center should still wobble gently when it comes out of the oven. It will continue to set as it cools.']
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow (after chilling thoroughly). Caramelize the sugar just before serving.',
      'MAKE AHEAD':'Yes. Prepare the custard ahead of time and refrigerate. Caramelize the sugar just before serving.',
      'STORAGE':'Cover and refrigerate for up to 3–4 days. Caramelize the sugar just before serving.',
      'FREEZER':'Not applicable.',
      'REHEAT':'Not applicable.'
    },
    tags:['Dessert','French','Apples','CremeBrulee','Custard','Movie'],
    mainIngredients:['Apples','Cream','Milk','Egg Yolks','Vanilla'],
    usualsCategory:''
  },


  {
    slug:'mexican-calabaza-en-tacha-pumpkin-pie',
    title:'Mexican (Calabaza en Tacha) Pumpkin Pie', description:'Inspired by Coco and Día de Muertos, this pumpkin pie reimagines calabaza en tacha with warm spices and the comforting flavors of a traditional Mexican seasonal sweet.',
    source:'Movie & TV', sourceSecondary:'Family & Tradition', original:'Coco (2017)', dish:'Calabaza en Tacha-inspired Pumpkin Pie', cuisine:'Mexican',
    course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'], ingredientCategories:['Vegetable','Pie'],
    dateAdded:'2026-09-27', timeStamp:'11:48 PM',
    usCupFractions:true, stepQuantityConversion:true,
    tags:['Movie','Coco','Pie','Mexican','Pumpkin','DíaDeMuertos','Ofrenda','CalabazaenTacha','Baking','Dessert'],
    heroImage:'images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/hero.jpg',
    recipeTitle:'Calabaza en Tacha Pumpkin Pie', showPan:true,
    recipeImage:'images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/recipe.jpg', usesUsual:'building-block-pie-crust',
    story:`Mexico's *Día de Muertos*, the traditional celebration featured in the movie *Coco*, centers around remembering and welcoming loved ones who have passed away.

Celebrated especially on November 1 and 2, families create *ofrendas*, or altars, decorated with photographs, candles, marigolds, and foods that their loved ones enjoyed.

*Calabaza en Tacha* is a traditional seasonal pumpkin sweet that can also be offered on ofrendas. Traditionally, pieces of pumpkin are slowly cooked with *piloncillo (panela)*, cinnamon, and sometimes cloves, anise, and orange until they become tender and coated in a rich syrup.

Japan has its own summer tradition of welcoming ancestral spirits during *Obon* (お盆). But I wasn't familiar with a tradition that celebrates and remembers the dead in such a bright and lively way. When I watched *Coco*, I found that beauty really special.

Tonight, I'm making a pumpkin pie inspired by Calabaza en Tacha — and taking a moment to remember the people I love.`,
    ingredientFile:[
      {name:'PUMPKIN PURÉE',details:[['Flavor','Earthy, naturally sweet, mellow'],['Substitute','Homemade roasted pumpkin purée'],['Storage','Refrigerate opened purée in an airtight container for up to 3–4 days.']]},
      {name:'DARK BROWN SUGAR + MOLASSES',details:[['Role','Creates the deep, caramel-like sweetness needed to mimic the flavor of piloncillo.'],['Why Dark Brown Sugar + Molasses?','Traditional Calabaza en Tacha is commonly made with pieces of *piloncillo (panela)*. Since piloncillo isn\'t what I have in my pantry, dark brown sugar with a little molasses gives me a similar deep, slightly bitter caramel character.'],['Substitute','If molasses is unavailable, use additional dark brown sugar, although the flavor will be lighter and less complex.']]},
      {name:'CINNAMON STICK',details:[['Flavor','Warm, woody, sweet'],['Why whole','Infusing the Half & Half creates a softer, rounder spice flavor without making the pie taste like conventional pumpkin spice.']]},
      {name:'STAR ANISE',details:[['Flavor','Sweet, aromatic, lightly licorice-like'],['Why whole','A small amount adds a distinctive aromatic note found in some versions of Calabaza en Tacha.']]},
      {name:'WHOLE CLOVES',details:[['Flavor','Warm, intense, slightly sweet and peppery'],['Why whole','Whole cloves are easier to control when infusing. They give the Half & Half a gentle clove aroma without the stronger, more concentrated flavor of ground cloves.']]},
      {name:'ORANGE PEEL',details:[['Flavor','Bright, citrusy, slightly bitter'],['Why peel','The fragrant oils are infused into the Half & Half rather than adding grated zest directly to the custard. This gives the pie a softer, more rounded orange aroma.']]}
    ],
    stats:{prep:'25 mins',cook:'55–65 mins',total:'1 hr 30 mins',serves:'8',pan:'23 cm / 9-inch pie dish',quiet:'⭐⭐⭐⭐☆'},
    ingredients:[
      {group:'PIE CRUST',usualSlug:'building-block-pie-crust',usualLabel:'Building Block Pie Crust'},
      {group:'CALABAZA FILLING'},
      {amount:400,unit:'g',imperialAmount:5/3,imperialUnit:'cup',item:'Pumpkin Purée'}, {amount:2,unit:'large',imperialAmount:2,imperialUnit:'large',item:'Eggs'}, {amount:180,unit:'ml',imperialAmount:3/4,imperialUnit:'cup',item:'Half & Half / 10% Cream'},
      {amount:60,unit:'g',imperialAmount:1/3,imperialUnit:'cup',item:'Dark Brown Sugar'}, {amount:10,unit:'g',imperialAmount:1/2,imperialUnit:'tbsp',item:'Molasses'}, {amount:15,unit:'ml',imperialAmount:1,imperialUnit:'tbsp',item:'Orange Juice'}, {amount:0.25,unit:'tsp',imperialAmount:1/4,imperialUnit:'tsp',item:'Salt'},
      {group:'SPICE INFUSION'},
      {amount:0.5,unit:'',imperialAmount:0.5,imperialUnit:'',item:'Cinnamon Stick'}, {amount:2,unit:'',item:'Whole Cloves'}, {amount:1,unit:'',item:'Star Anise'}, {amount:1,unit:'strip',item:'Orange Peel, About 2–3 cm (1 Inch) Long'},
      {group:'INSTRUCTION-ONLY SYRUP',hideFromIngredients:true},
      {amount:35,unit:'g',imperialAmount:2.5,imperialUnit:'tbsp',item:'Dark Brown Sugar',hideFromIngredients:true}, {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Molasses',hideFromIngredients:true}, {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Orange Juice',hideFromIngredients:true}, {amount:15,unit:'ml',imperialAmount:1,imperialUnit:'tbsp',item:'Water',hideFromIngredients:true}, {amount:1,unit:'strip',imperialAmount:1,imperialUnit:'strip',item:'Orange Peel, About 2–3 cm (1 Inch) Long',hideFromIngredients:true}, {amount:1,unit:'pinch',imperialAmount:1,imperialUnit:'pinch',item:'Salt',hideFromIngredients:true}
    ],
    steps:[
      {number:'01',title:'MAKE THE CRUST',clock:'11:48 PM',paragraphs:['Preheat your oven to 175°C / 350°F.','Start with one of our usual recipes - Building Block Pie Crust.'],stepNote:'**Midnight Shortcut:** Use a good-quality store-bought pie crust. Tonight is about the filling.'},
      {number:'02',title:'INFUSE THE SPICES',clock:'12:05 AM',paragraphs:['Squeeze the orange juice and keep the orange peel strip aside for the filling.','Pour {{qty:Half & Half / 10% Cream}} Half & Half into a small saucepan.','Add 1/2 cinnamon stick, 2 whole cloves, 1 star anise, and 1 strip orange peel.','Warm gently over low heat for 10 minutes. Do not let the Half & Half boil.','Turn off the heat and let the spices steep for another 10 minutes.','Remove the cinnamon stick, cloves, and star anise. Remove the orange peel.','Remove the orange peel if the infusion will steep for longer, as prolonged steeping can make it bitter.','While the infused Half & Half is still warm, whisk in {{qty:Dark Brown Sugar}} dark brown sugar and {{qty:Molasses}} molasses until completely dissolved.'],stepImages:['images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-02-01.jpg','images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-02-02.JPG','images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-02-03.jpg']},
      {number:'03',title:'MAKE THE FILLING',clock:'12:18 AM',paragraphs:['In a large bowl, whisk together {{qty:Pumpkin Purée}} pumpkin purée, {{qty:Eggs}} eggs, {{qty:CALABAZA FILLING::Orange Juice}} orange juice, and {{qty:CALABAZA FILLING::Salt}} salt.','Slowly pour in the warm spiced Half & Half mixture.','Whisk gently until everything is smooth and evenly combined.'],stepImages:['images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-03-01.JPG','images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-03-02.JPG']},
      {number:'04',title:'BAKE',clock:'12:22 AM',paragraphs:['Pour the pumpkin filling into the crust.','Bake for 40–50 minutes.','The edges should be set while the center still has a slight wobble when the pie is gently shaken.','Remove from the oven.','Let the pie cool completely before adding the syrup.','Don\'t worry if the center looks slightly soft when it first comes out. The custard will continue to set as it cools.'],stepImages:['images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-04-01.JPG']},
      {number:'05',title:'FAKE THE PILONCILLO SYRUP',clock:'12:45 AM',paragraphs:['Add {{qty:INSTRUCTION-ONLY SYRUP::Dark Brown Sugar}} dark brown sugar, {{qty:INSTRUCTION-ONLY SYRUP::Molasses}} molasses, {{qty:INSTRUCTION-ONLY SYRUP::Orange Juice}} orange juice, {{qty:INSTRUCTION-ONLY SYRUP::Water}} water, {{qty:INSTRUCTION-ONLY SYRUP::Orange Peel, about 2–3 cm (1 inch) long}} orange peel, about 2–3 cm (1 inch) long, and {{qty:INSTRUCTION-ONLY SYRUP::Salt}} salt to a small saucepan.','Bring to a gentle simmer over medium-low heat.','Cook for 3–5 minutes, stirring occasionally, until the sugar has dissolved and the syrup has thickened slightly.','Remove the orange peel. Let the syrup cool slightly.'],stepImages:['images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-05-01.JPG']},
      {number:'06',title:'FINISH',clock:'NEXT DAY',paragraphs:['Once the pie has cooled completely, brush or spoon a thin layer of the piloncillo syrup over the surface.','The syrup will gradually soak into the pie over time. For the glossiest finish, warm the syrup just before serving and drizzle it over the pie right before eating.'],stepImages:['images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/step-06-01.JPG']}
    ],
    notes:[
      ['Recreating the Flavor','The original Calabaza en Tacha gets much of its character from pumpkin slowly cooked in a dark piloncillo syrup with warm spices.\n\nInstead of putting those flavors directly into a standard pumpkin custard, I split them into two layers:\n\n**Spiced Half & Half → Orange-Molasses Syrup**\n\nThe Half & Half carries the cinnamon, clove, star anise, and orange aroma into the custard, while the syrup recreates the darker caramelized sweetness associated with piloncillo.'],
      ['Midnight Compromises','Traditional Calabaza en Tacha is made with pieces of pumpkin cooked directly in syrup. This isn\'t that.\n\nI used canned pumpkin purée and turned the same flavor profile into a creamy pumpkin pie — because at midnight, opening a can beats peeling and simmering an entire pumpkin.\n\nI also don\'t have piloncillo, so dark brown sugar and a little molasses stand in for its deep, almost caramel-like flavor.'],
      ['Why No Pumpkin Spice?','No ground cinnamon.\n\nNo nutmeg.\n\nNo ginger.\n\nInstead, the spices are infused whole into the Half & Half.\n\nIt\'s warmer, more aromatic, and closer to the syrupy character I wanted from Calabaza en Tacha.']
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow, after chilling overnight. The orange and spices develop a rounder flavor overnight. For the cleanest slices, refrigerate for several hours before serving. Serve cold or at room temperature.',
      'MAKE AHEAD':'Yes. Make the pie the day before serving so it can chill overnight.',
      'STORAGE':'Cover and refrigerate for up to 3 days. Store the orange-molasses syrup separately in a covered container in the refrigerator for up to 5 days.',
      'FREEZER':'Freeze the fully cooled pie, wrapped tightly and placed in a freezer-safe container, for up to 1 month for best quality. Thaw overnight in the refrigerator before serving. The filling may be slightly softer after thawing.',
      'REHEAT':'Gently warm individual slices in a low oven if you prefer the pie warm.'
    },
    tags:['Movie','Coco','Pie','Mexican','Pumpkin','DíaDeMuertos','Ofrenda','CalabazaenTacha','Baking','Dessert'], mainIngredients:['Pumpkin','Orange','Cinnamon','Molasses'],
    footerInspiredBy:'Calabaza en Tacha', footerCuisine:'Mexican, Canadian, North American', footerCourse:'Baking · Desserts', footerMainIngredients:['Pumpkin','Orange','Cinnamon','Molasses']
  },
  {
    slug:'banana-banana-cream-pie', title:'Banana Banana Cream Pie', description:'Made for seriously banana-y flavor, this cream pie uses very ripe bananas cooked down into a sweet, concentrated filling beneath a smooth custard.', source:'Midnight Experiment', dish:'Banana Cream Pie', cuisine:'American',
    course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'], ingredientCategories:['Fruit','Pie','Eggs','Pantry'], dateAdded:'2026-09-27', timeStamp:'2:55 AM',
    tags:['Dessert','Baking','Banana','Pie'], heroImage:'images/recipes/banana-banana-cream-pie/hero.jpg', recipeImage:'images/recipes/banana-banana-cream-pie/recipe.jpg',
    unitOverrides:{imperial:{'plain biscuits, finely crushed':'cup','unsalted butter, melted':'cup','whole milk':'cup','granulated sugar':'tbsp','cornstarch':'tbsp','35% Whipping Cream':'cup','Granulated Sugar, To Taste':'tbsp'}},
    densityOverrides:{'plain biscuits|cup':100,'granulated sugar|tbsp':35/3},
    usCupFractions:true,
    forceCupUnits:true,
    compactStory:true,
    stepQuantityConversion:true,
    story:`A few nearly black bananas had been sitting on my counter for way too long. They were way past the point where I'd normally eat them, but honestly, they were perfect for this pie.

I started looking through banana cream pie recipes and noticed that most of them use just a few slices of fresh banana underneath a whole lot of custard.

I wanted a pie that was seriously banana-y. Not just vanilla custard with a few banana slices hiding underneath.

So I took those super-ripe bananas, cooked them down in a skillet until they were thick and sweet, and blended them right into the custard. Then I tucked fresh banana underneath for a little texture and that beautiful banana cross-section when you slice into it.

Basically, this pie is my answer to one very simple question:

What if we just put way more banana in banana cream pie?`,
    ingredientFile:[
      {name:'BANANA',details:[['Origin','Global / Tropical'],['Flavor','Deep, caramel-like when roasted; fresh and aromatic when raw. The blacker, the better!'],['Where to find','Your Kitchen Counter'],['Storage','Room temperature until fully ripe.'],['Why cook?','Cooking the bananas in a skillet drives off excess moisture and concentrates their natural sugars, creating a thick, jammy texture and deep banana flavor without adding extra sugar.']]},
      {name:'PLAIN BISCUITS',details:[['Substitute','Biscoff cookies'],['Midnight Fix','If using 200g Biscoff, skip the cinnamon, ginger, and nutmeg. Simply combine the crumbs with 80g melted butter.']]},
      {name:'WHOLE MILK',details:[['Why Whole Milk','The higher fat content gives the filling a richer, creamier mouthfeel.'],['Substitute','2% milk works too, but the filling will be slightly lighter.']]}
    ],
    stats:{prep:'20 mins',cook:'30 mins',chill:'3+ hrs',total:'3 hrs 50 mins',serves:'6–8',pan:'9-inch / 23 cm pie plate',quiet:'⭐⭐⭐☆☆'}, showPan:true, showChill:true,
    ingredients:[
      {group:'Crust'},
      {amount:200,unit:'g',item:'Plain Biscuits, Finely Crushed'}, {amount:0.5,unit:'tsp',imperialAmount:0.5,imperialUnit:'tsp',item:'Ground Cinnamon'}, {amount:0.25,unit:'tsp',imperialAmount:0.25,imperialUnit:'tsp',item:'Ground Ginger'}, {amount:1,unit:'pinch',item:'Ground Nutmeg'}, {amount:0.25,unit:'tsp',imperialAmount:0.25,imperialUnit:'tsp',item:'Salt'}, {amount:80,unit:'g',item:'Unsalted Butter, Melted'},
      {group:'Filling'},
      {amount:3,unit:'',item:'Bananas (Approx. 250 g Flesh), Very Ripe and Mashed'}, {amount:2,unit:'',item:'Firm-Ripe Bananas, Cut in Half Lengthwise'}, {amount:400,unit:'ml',item:'Whole Milk'}, {amount:3,unit:'large',item:'Egg Yolks'}, {amount:35,unit:'g',item:'Granulated Sugar'}, {amount:35,unit:'g',imperialAmount:4.5,imperialUnit:'tbsp',item:'Cornstarch'}, {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Vanilla Extract'}, {amount:1,unit:'pinch',imperialAmount:1,imperialUnit:'pinch',item:'Salt'},
      {group:'Topping (Optional)'},
      {amount:180,unit:'ml',item:'35% Whipping Cream'}, {amount:38,unit:'g',imperialAmount:3,imperialUnit:'tbsp',item:'Granulated Sugar'}, {unit:'',item:'Cinnamon or Banana Chips, to Finish',hideIngredientInfo:true}
    ],
    steps:[
      {number:'01',title:'TURN IT UP & MAKE IT JAMMY',clock:'2:55 AM',paragraphs:[
        'Preheat your oven to 175°C / 350°F.',
        'Cook {{qty:bananas (approx. 250 g flesh), very ripe and mashed}} very ripe mashed bananas (approx. {{approx:bananas (approx. 250 g flesh), very ripe and mashed}}) in a nonstick skillet over medium-low heat for 8–12 minutes, stirring often.',
        'Keep cooking until the moisture cooks off and the banana turns thick, glossy, and jammy.',
        'No sugar. No butter. Just banana. Set aside.'
      ],stepImages:[]},
      {number:'02',title:'FAKE THE BISCOFF',clock:'3:08 AM',paragraphs:[
        'Crush {{qty:Plain Biscuits, Finely Crushed}} plain biscuits finely.',
        '**Food Processor (Fastest):** Pulse for about 30 seconds.',
        '**Quiet Mode (Silent):** Seal in a zip-top bag and roll with a rolling pin—perfect for late-night baking.',
        'Mix with {{qty:Ground Cinnamon}} cinnamon, {{qty:Ground Ginger}} ginger, {{qty:Ground Nutmeg}} nutmeg, {{qty:Salt}} salt, and {{qty:Unsalted Butter, Melted}} melted butter.',
        'Press firmly into a 9-inch (23 cm) pie dish.',
        'Bake for 8–10 minutes, then let cool.'
      ],stepNote:'**Midnight Shortcut:** Skip the oven entirely! Just press the crust into the dish and freeze it while making the filling. It won\'t be quite as toasted, but it sets super fast.',stepImages:[]},
      {number:'03',title:'MAKE IT THICK',clock:'3:20 AM',paragraphs:[
        'Whisk {{qty:Filling::granulated sugar}} sugar, {{qty:cornstarch}} cornstarch, and {{qty:Filling::salt}} salt in a saucepan.',
        'Gradually whisk in {{qty:Whole Milk}} whole milk until smooth.',
        'Cook over medium heat, whisking constantly, until the custard becomes very thick and starts to bubble.',
        'Keep whisking and cook for another 1–2 minutes after it starts bubbling.',
        'The whisk should leave a clear trail, and the custard should slowly fill it back in.'
      ],stepImages:[]},
      {number:'04',title:'WARM THE EGGS',clock:'3:25 AM',paragraphs:[
        'Whisk {{qty:egg yolks}} egg yolks in a bowl.',
        'Slowly add the hot custard, a little at a time, whisking constantly.',
        'Pour everything back into the saucepan.',
        'Return to low heat and cook for 1 minute, whisking constantly, until thick and glossy.',
        'Remove from the heat'
      ],stepImages:[]},
      {number:'05',title:'BLEND THE BANANA IN',clock:'3:30 AM',paragraphs:[
        'Add the concentrated banana and {{qty:vanilla extract}} vanilla extract to the warm custard.',
        'Blend until completely smooth and silky.',
        '**Quiet Mode (Silent):** Want a little texture? Skip the food processor and stir it in by hand.'
      ],stepImages:[]},
      {number:'06',title:'HIDE THE BANANAS & NOW WE WAIT',clock:'3:35 AM',paragraphs:[
        'Peel {{qty:firm-ripe bananas, cut in half lengthwise}} firm-ripe bananas and cut each one in half lengthwise.',
        'Arrange the banana halves along the outer edge of the cooled crust, flat-side down.',
        'Pour the banana cream over the top and smooth the surface.',
        'Refrigerate for at least 4 hours. Overnight is even better!'
      ],stepImages:[]},
      {number:'07',title:'TOP IT OFF',clock:'NEXT DAY',paragraphs:[
        'Whip {{qty:35% Whipping Cream}} cold heavy cream to soft peaks. Add {{qty:Granulated Sugar, To Taste}} sugar and whip to medium-firm peaks.',
        'Dollop over the chilled pie and finish with cinnamon or banana chips, if you like.'
      ],stepImages:[]}
    ],
    notes:[
      ['Midnight (Non)Compromises','Even in the middle of the night, concentrating the bananas is a non-negotiable.\n\nThose nearly black bananas are already packed with natural sweetness, so instead of adding more sugar, I cook them down in a skillet until their moisture evaporates and their natural sugars become concentrated.'],
      ['Experiment 1: The Banana Shape','Putting whole round banana slices in the pie made the banana presence too overwhelming.\n\nThe slices took over each bite and made the texture feel repetitive.\n\nCutting the fresh bananas **in half lengthwise** solved that problem.\n\nThe larger pieces create a clean cross-section while giving the pie a firm, juicy banana texture that contrasts with the smooth filling.'],
      ['Experiment 2: Concentrating the Banana','Simply mashing overripe bananas into the custard didn\'t give the banana flavor enough intensity.\n\nCooking the banana in a skillet first changed everything.\n\nThe excess moisture cooks away, the natural sugars become concentrated, and the banana develops a deeper, almost caramel-like flavor.'],
      ['Experiment 3: Blend it All Together','I originally considered keeping the banana and vanilla custards separate, but that meant making two different layers and adding extra steps.\n\nInstead, I decided to blend the concentrated banana directly into the finished custard.\n\nThe food processor turns everything into a completely smooth, silky banana cream while keeping the process simple.\n\nThe result is a filling that tastes intensely of banana from the first bite to the last.'],
      ['The Result','The final pie has a simple but satisfying contrast.\n\nThe fresh banana gives it texture, the concentrated banana brings depth, and the whipped cream adds a light finish.\n\nMost importantly, the banana isn\'t just sitting somewhere underneath the custard.\n\n**The banana is the custard!**']
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow, after chilling thoroughly. Enjoy chilled straight from the fridge.',
      'MAKE AHEAD':'Yes. Prepare the pie the day before serving so it has time to chill thoroughly.',
      'STORAGE':'Store in an airtight container in the refrigerator for up to 3 days.',
      'FREEZER':'Freezing is not recommended. The bananas may darken and the custard filling can become watery or change texture after thawing.',
      'REHEAT':'Not applicable.'
    },
    mainIngredients:['Banana','Milk','Egg Yolks','Biscuits'], footerInspiredBy:'Midnight Experiment', footerCuisine:'American', footerCourse:'Baking, Desserts', footerMainIngredients:['Banana','Milk','Egg Yolks','Biscuits']
  },
  {
    slug:'sweet-potato-ginger-pie', title:'Sweet Potato Ginger Pie', description:'Inspired by Chinese sweet potato ginger dessert soup, this silky pie pairs earthy sweet potato with fresh ginger, cinnamon, and a gentle warming spice.', source:'Midnight Experiment', original:'N/A', cuisine:'Chinese', cuisineSecondary:'American',
    course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'], ingredientCategories:['Sweet Potato','Ginger','Cream','Cinnamon','Pie'], dateAdded:'2026-09-27', timeStamp:'11:35 PM',
    tags:['Midnight Experiment','Dessert','Baking','Chinese','American','Sweet Potato','Ginger','Pie'], heroImage:'images/recipes/sweet-potato-ginger-pie/hero.jpg', recipeImage:'images/recipes/sweet-potato-ginger-pie/recipe.jpg', usesUsual:'building-block-pie-crust', usCupFractions:true, forceCupUnits:true, stepQuantityConversion:true,
    story:`Inspired by traditional Chinese Sweet Potato Ginger Dessert Soup (番薯姜糖水), a simple sweet soup made by simmering sweet potatoes with fresh ginger and sugar in water.

I love how naturally sweet potato and ginger work together—the earthy sweetness of the sweet potato balanced by the warm, peppery kick of fresh ginger. I thought that combination would be perfect in a pie.

Instead of simply replacing pumpkin with sweet potato in a classic pumpkin pie, I wanted a warmer, spicier pie where fresh ginger could shine.

The result is silky and creamy, with naturally sweet roasted sweet potato, warm cinnamon, and a gentle kick of fresh ginger.`,
    ingredientFile:[
      {name:'SWEET POTATOES',details:[['Origin','South America'],['Flavor','Naturally sweet, earthy, creamy'],['Substitute','Japanese or Korean sweet potato works, although it is denser and sweeter.'],['Storage','Store whole sweet potatoes in a cool, dry place. Once cooked, refrigerate in an airtight container for up to 3 days.']]},
      {name:'FRESH GINGER',details:[['Flavor','Warm, peppery, citrusy, spicy'],['Substitute','1½ g ground ginger can replace 6 g fresh ginger, but fresh ginger gives a brighter flavor.'],['Storage','Refrigerate for several weeks or freeze and grate directly from frozen.']]},
      {name:'10% CREAM',details:[['Flavor','Light, creamy, milky'],['Substitute','Half-and-half works well. For a similar fat level, mix 70 g 2% milk + 30 g 35% cream.'],['Storage','Refrigerate after opening.']]}
    ],
    stats:{prep:'30 mins',cook:'1 hr 45 mins',chill:'2 hrs+',total:'4 hrs 15 mins+',serves:'8',quiet:'⭐⭐⭐⭐☆'},
    ingredients:[
      {group:'PIE CRUST',usualSlug:'building-block-pie-crust',usualLabel:'Building Block Pie Crust'},
      {group:'FILLING'},
      {amount:400,unit:'g',imperialAmount:2,imperialUnit:'cup',item:'Cooked Sweet Potato Flesh'}, {amount:87,unit:'g',imperialAmount:7,imperialUnit:'tbsp',item:'10% Cream'}, {amount:70,unit:'g',imperialAmount:1/3,imperialUnit:'cup',item:'Granulated Sugar'}, {amount:2,unit:'',item:'Large Eggs'}, {amount:6,unit:'g',item:'Fresh Ginger, Finely Grated'}, {amount:2,unit:'g',imperialAmount:0.75,imperialUnit:'tsp',item:'Ground Cinnamon'}, {amount:3,unit:'g',imperialAmount:0.5,imperialUnit:'tsp',item:'Kosher Salt'},
      {group:'Topping (optional)'},
      {amount:237,unit:'ml',imperialAmount:1,imperialUnit:'cup',item:'35% Whipping Cream'}, {amount:38,unit:'g',imperialAmount:3,imperialUnit:'tbsp',item:'Granulated Sugar'}, {unit:'',item:'Cinnamon, for Finishing'}
    ],
    steps:[
      {number:'01',title:'COOK THE SWEET POTATO',clock:'11:35 PM',paragraphs:[
        'For the best flavor, roast whole sweet potatoes at 175°C / 350°F for 45–60 minutes, until completely soft.',
        'Midnight Shortcut — Microwave',
        'Peel and cut the sweet potato into chunks. Place in a microwave-safe bowl with a small splash of water and cover.',
        'Midnight Shortcut — Boil',
        'Peel and cut the sweet potato into chunks. Simmer in water for 15–20 minutes, until fork-tender.'
      ],stepImages:[]},
      {number:'02',title:'MAKE THE CRUST',clock:'11:45 PM',paragraphs:[
        'While the sweet potatoes are roasting… start making Building Block Pie Crust.',
        'Prick the bottom well with a fork. Bake in the same oven at 175°C / 350°F for 10–12 minutes, until set and lightly golden.',
        'Midnight Shortcut',
        'Use a good-quality store-bought pie crust. Tonight is about the filling.'
      ],stepImages:[]},
      {number:'03',title:'BLEND THE FILLING',clock:'12:25 AM',paragraphs:[
        'Once the sweet potato is cooked and cool enough to handle, measure {{qty:Cooked Sweet Potato Flesh}}.',
        'Finely grate {{qty:Fresh Ginger, Finely Grated}} ginger.',
        'Combine {{qty:Cooked Sweet Potato Flesh}} sweet potato, {{qty:10% Cream}} 10% cream, {{qty:FILLING::Granulated Sugar}} Granulated Sugar, {{qty:large eggs}} large eggs, {{qty:Fresh Ginger, Finely Grated}} fresh ginger, {{qty:Ground Cinnamon}} ground cinnamon, and {{qty:Kosher Salt}} kosher salt.',
        'Food Processor — Fastest',
        'Blend the sweet potato and all remaining filling ingredients and blend briefly until silky.',
        'Quiet Mode — Silent',
        'Mash the sweet potato thoroughly, add all remaining filling ingredients, and blend directly in the bowl with a hand blender until completely smooth.'
      ],stepImages:[]},
      {number:'04',title:'BAKE',clock:'12:30 AM',paragraphs:[
        'Pour the filling into the crust.',
        'Bake at 175°C / 350°F for 40–50 minutes.',
        'The edges should be set and the centre should still have a slight wobble.',
        'Remove from the oven and cool completely at room temperature.',
        'The filling will continue to set as it cools.'
      ],stepImages:[]},
      {number:'05',title:'CHILL & FINISH',clock:'1:20 AM',paragraphs:[
        'Let the pie cool completely before refrigerating. Once cooled, refrigerate for at least 2 hours, preferably overnight.',
        'Optional:',
        'Whip {{qty:35% Whipping Cream}} cold whipping cream to soft peaks.',
        'Gradually add {{qty:Topping (optional)::Granulated Sugar}} sugar and continue whipping until medium-firm peaks form.',
        'Keep the whipped cream refrigerated until serving.',
        'Slice the chilled pie and top with whipped cream and a light dusting of cinnamon.'
      ],stepImages:[]}
    ],
    notes:[
      ['Recreating the Flavor',`Fresh ginger is the signature. It gives the pie the warm, peppery character inspired by 番薯姜糖水.
Roasting gives the deepest flavor. It removes excess moisture and concentrates the natural sweetness of the sweet potato.
Keep the spices simple. There is no nutmeg, cloves, cardamom, or vanilla. Cinnamon supports the ginger instead of turning this into a classic pumpkin-spice pie.
Don\'t over-sweeten it. The sweet potato provides natural sweetness, while the whipped cream adds another layer of sweetness.`],
      ['Midnight Compromises',`No time to roast? Microwave or boil the sweet potato instead.
Making this at midnight? The filling can be made in one blender or with one hand blender—no separate egg mixture and no extra bowl.
If you use boiled or microwaved sweet potato, let it steam-dry well before weighing. Too much moisture will make the filling softer.`]
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow, after chilling overnight, when the sweet potato, ginger, and cinnamon flavors have had time to come together.',
      'MAKE AHEAD':'Yes. Make the pie the day before serving and refrigerate overnight.',
      'STORAGE':'Cover and refrigerate for up to 4 days.',
      'FREEZER':'Freeze the fully cooled pie, wrapped tightly and placed in a freezer-safe container, for up to 1 month for best quality. Thaw overnight in the refrigerator. The filling may soften slightly after thawing.',
      'REHEAT':'Gently warm individual slices in a low oven if you prefer the pie warm.'
    },
    mainIngredients:['Sweet Potato','Ginger','Cream','Cinnamon'], footerInspiredBy:'Traditional', footerCuisine:'Chinese · American', footerCourse:'Desserts', footerMainIngredients:['Sweet Potato','Ginger','Cream','Cinnamon']
  },
  {
    slug:'building-block-pie-crust', title:'Building Block Pie Crust', source:'The Usuals', cuisine:'American', course:'Baking', courseDisplay:'Baking', categories:['Baking'], ingredientCategories:['Pie'], dateAdded:'2026-09-27', timeStamp:'',
    isUsuals:true, usualsCategory:'BASES & CRUSTS', foundInIntro:'Recipes that use this crust...', hideRecipeTags:true,
    description:'The crust we make when a pie calls for a crust.',
    usualIntro:'This is our go-to pie crust — the one we come back to whenever a recipe needs a buttery, tender crust.\nNothing fancy. Just a reliable crust that works.\n\nWe use it for sweet pies, savoury pies, and pretty much anything in between.',
    heroImage:'images/recipes/building-block-pie-crust/hero.jpg', recipeImage:'images/recipes/building-block-pie-crust/recipe.jpg',
    unitOverrides:{imperial:{'all-purpose flour':'cup','cold unsalted butter, cubed':'cup','salt':'tsp'},metric:{'cold water':'ml'}},
    densityOverrides:{'all purpose flour|cup':120,'cold unsalted butter cubed|cup':113},
    stepQuantityConversion:true,
    usCupFractions:true,
    ingredientFile:[],
    ingredients:[
      {amount:180,unit:'g',imperialAmount:1.5,imperialUnit:'cup',item:'All-Purpose Flour'},
      {amount:113,unit:'g',imperialAmount:0.5,imperialUnit:'cup',item:'Cold Unsalted Butter, Cubed'},
      {amount:3,unit:'g',imperialAmount:0.5,imperialUnit:'tsp',item:'Salt'},
      {minAmount:45,maxAmount:60,unit:'ml',imperialMinAmount:3,imperialMaxAmount:4,imperialMinUnit:'tbsp',imperialMaxUnit:'tbsp',item:'Cold Water'},
    ],
    stats:{prep:'15 mins',cook:'15 mins',total:'30 mins',serves:'8',pan:'23 cm / 9-inch pie dish',quiet:'⭐⭐⭐⭐☆'},
    steps:[
      {number:'01',title:'MAKE THE CRUST',clock:'',paragraphs:[
        'Preheat your oven to 175°C / 350°F.',
        {text:'Mix {{amount:0}} flour, {{amount:1}} butter, and {{amount:2}} salt until coarse crumbs form.',amounts:[{value:180,unit:'g',ingredient:'All-Purpose Flour'},{value:113,unit:'g',ingredient:'Cold Unsalted Butter, cubed'},{value:3,unit:'g',ingredient:'Salt'}]},
        {text:'Add {{amount:0}} cold water gradually until the dough just comes together.',amounts:[{min:45,max:60,unit:'ml',ingredient:'Cold Water'}]},
        'Lightly flour your hands and press the dough directly into the pie dish.',
        'If the butter has softened, chill the crust for 10 minutes before baking.'
      ],stepNote:'**Midnight Shortcut:** Use a food processor to make the dough quickly.',stepImages:['images/recipes/building-block-pie-crust/step-01-01.JPG','images/recipes/building-block-pie-crust/step-01-02.JPG','images/recipes/building-block-pie-crust/step-01-03.JPG','images/recipes/building-block-pie-crust/step-01-04.JPG']},
      {number:'02',title:'BLIND-BAKE',clock:'',paragraphs:[
        'Prick the bottom with a fork. Add parchment paper and pie weights.',
        'Bake at 175°C / 350°F for 15 minutes.',
        'Remove the weights and parchment, then bake for another 5–7 minutes, until lightly golden.'
      ],stepImages:['images/recipes/building-block-pie-crust/step-02-01.JPG','images/recipes/building-block-pie-crust/step-02-02.jpg']}
    ],
    notes:[
      ['The Golden Rule — Blind-Bake','For wet fillings, blind-baking helps keep the bottom from getting soggy. Take the crust only to light golden at this stage; it will continue browning when the filled pie goes back into the oven.'],
      ['Glass Pie Dish','Glass heats more gently than metal, so give the crust enough time to dry and lightly brown. Avoid over-browning during the blind-bake.'],
      ['Midnight Compromise','No rolling pin, pastry board, or complicated pastry work. Press the dough directly into the pie dish, and everything stays contained and easy to clean up.']
    ],
    finePrint:{
      'BEST EATEN':'Use the dough to make your chosen pie crust, following the pie recipe’s baking instructions.',
      'MAKE AHEAD':'Yes. Prepare the dough ahead of time and refrigerate until ready to use.',
      'STORAGE':'Wrap the dough tightly and refrigerate for 2–3 days.',
      'FREEZER':'Wrap the dough tightly and freeze for up to 3 months. Thaw in the refrigerator before rolling out. If the dough is already fitted into a pie pan, it can often be baked straight from frozen; adjust the baking time as needed.',
      'REHEAT':'Not applicable.'
    },
    tags:['The Usuals','Bases & Crusts','Pie'], mainIngredients:['Flour','Butter','Salt','Pie']
  },

  {
    slug:'fun-key-lime-pie', title:'Fun(Key) Lime Pie', source:'Grocery Store Find', original:'', dish:'Lime Pie', cuisine:'American', dateAdded:'2026-10-08',
    course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'], ingredientCategories:['Fruit','Eggs','Cream','Pie'], timeStamp:'11:20 PM',
    description:'A Key Lime Pie-inspired pie made with the limes you can actually find.',
    story:`Key Lime Pie is easy to find in Toronto. I kept seeing it in grocery store freezer sections and bakery counters, almost as if it were just another everyday dessert.\nOne night, I decided to make one myself.\nI went looking for Key limes.\nAnd suddenly, they were nowhere.\nThe pie was easy to find. The Key limes were not.\nSo I stopped looking for the perfect Key lime and started with the limes I could actually buy.\nRegular Persian/Tahiti limes. A little extra zest. Sour cream for more body and tang.\nIt isn't a traditional Key Lime Pie, but it still has the creamy, tart, sweet character I was looking for.\nA Key Lime Pie-inspired pie made with the lime you can actually find!`,
    heroImage:'images/recipes/fun-key-lime-pie/hero.jpg', recipeImage:'images/recipes/fun-key-lime-pie/recipe.jpg',
    stepQuantityConversion:true,
    usCupFractions:true,
    forceCupUnits:true,
    ingredientFile:[
      {name:'Sweetened Condensed Milk',details:[['Flavor','Rich, milky, caramel-like sweetness.'],['Best choice','Use plain full-fat sweetened condensed milk. The entire 300 ml can is used.'],['Why here','The acid in the lime juice reacts with the milk proteins, helping the filling thicken without needing starch or gelatin.'],['Substitute','Evaporated milk is not a direct substitute because it is unsweetened and has a different consistency.'],['Storage','Refrigerate after opening. Keep the unopened can according to the manufacturer\'s instructions.'],['Midnight Fix','Use the entire 300 ml can so there is no leftover condensed milk to deal with.']]},
      {name:'Persian/Tahiti Limes',details:[['Flavor','Bright, tart, fresh, and aromatic.'],['Best choice','Choose firm, heavy limes with fragrant skin. Since the zest is used, organic or unwaxed limes are best. If using waxed limes, scrub and rinse well before zesting.'],['Why here','Regular Persian/Tahiti limes are much easier to find in Toronto while still providing the bright acidity and fresh lime aroma needed for the pie. The extra zest helps make up for the difference from Key limes.'],['Substitute','Key limes can be used if available. Use the same total amount of juice. Bottled Key lime juice can be used in a pinch, but fresh lime juice and zest are preferred for the brightest flavor.'],['Storage','Store whole limes at room temperature for short-term use or refrigerate for longer storage.'],['Tips','One average-sized lime yields about 2 tbsp (30 ml) of fresh lime juice. Roll each lime firmly against the counter before juicing to help release more juice. Cold limes are firmer, which can make the zest easier to grate cleanly. Because both the zest and juice are used, zest the limes before squeezing them.']]},
      {name:'Sour Cream',details:[['Flavor','Creamy, slightly tangy, with a subtle fermented note.'],['Best choice','Use regular full-fat sour cream rather than a very low-fat version.'],['Why here','It adds body, creaminess, and extra tang to the filling without increasing the amount of condensed milk.'],['Substitute','Plain full-fat Greek yogurt can work, although the flavor will be slightly different.'],['Storage','Keep refrigerated.']]},
      {name:'Cream of Tartar',details:[['Flavor','Mildly acidic, but the small amount used here does not noticeably affect the flavor.'],['Why here','Helps stabilize whipped egg whites and create a more stable meringue structure.'],['Substitute','A small amount of lemon juice or white vinegar can help stabilize meringue, but cream of tartar is preferred here because it adds very little additional liquid.'],['Midnight Fix','If you don\'t have cream of tartar, the meringue can still be made without it. Make sure the bowl and beaters are completely clean and dry, and add the sugar gradually.']] }
    ],
    ingredients:[
      {group:'Graham Cracker Crust'},
      {amount:200,unit:'g',item:'Graham Crackers, Finely Crushed'},
      {amount:76,unit:'g',item:'Unsalted Butter, Melted'},
      {group:'Lime Filling'},
      {amount:300,unit:'ml',item:'Sweetened Condensed Milk'},
      {amount:3,unit:'large',item:'Egg Yolks'},
      {amount:58,unit:'g',imperialAmount:1/4,imperialUnit:'cup',item:'Sour Cream'},
      {amount:120,unit:'ml',item:'Fresh Lime Juice'},
      {amount:1,unit:'tbsp',item:'Finely Grated Lime Zest'},
      {group:'Meringue'},
      {amount:3,unit:'large',item:'Egg Whites'},
      {amount:50,unit:'g',item:'Granulated Sugar'},
      {amount:1/8,unit:'tsp',item:'Cream of Tartar'}
    ],
    stats:{prep:'20 mins',cook:'30 mins',total:'4 hrs 50 mins +',serves:'6–8',pan:'23 cm / 9-inch pie dish',quiet:'⭐☆☆☆☆'},
    steps:[
      {number:'01',title:'CRUSH IT DOWN',clock:'11:20 PM',paragraphs:[
        'Preheat your oven to 175°C / 350°F.',
        'Crush {{qty:Graham Cracker Crust::Graham Crackers, Finely Crushed}} graham crackers finely.',
        '**Food Processor (Fastest):** Pulse for about 30 seconds.',
        '**Quiet Mode (Silent):** Seal in a zip-top bag and roll with a rolling pin—perfect for late-night baking.',
        'Add {{qty:Graham Cracker Crust::Unsalted Butter, Melted}} melted butter to the crushed graham crackers and mix until the crumbs are evenly coated.',
        'Press the crumb mixture firmly into a 9-inch (23 cm) pie dish using the flat bottom of a cup.',
        'Bake for 8–10 minutes. Let it cool.'
      ],stepNote:'**Midnight Shortcut:** Skip baking and freeze the crust while you make the filling.',stepImages:['images/recipes/fun-key-lime-pie/step-01-01.jpg','images/recipes/fun-key-lime-pie/step-01-02.jpg','images/recipes/fun-key-lime-pie/step-01-03.jpg']},
      {number:'02',title:'MIX THE LIME FILLING',clock:'11:32 PM',paragraphs:[
        'Finely grate the zest from the limes, then squeeze the limes to make {{qty:Lime Filling::Fresh Lime Juice}} of fresh lime juice.',
        'Separate the eggs, placing the {{qty:Lime Filling::Egg Yolks}} egg yolks in a mixing bowl and reserving the {{qty:Meringue::Egg Whites}} egg whites for the meringue.',
        'Add the {{qty:Lime Filling::Sweetened Condensed Milk}} sweetened condensed milk, {{qty:Lime Filling::Sour Cream}} sour cream, {{qty:Lime Filling::Finely Grated Lime Zest}} lime zest, and {{qty:Lime Filling::Fresh Lime Juice}} lime juice to the egg yolks.',
        'Whisk everything together until completely smooth.'
      ],stepImages:['images/recipes/fun-key-lime-pie/step-02-01.jpg','images/recipes/fun-key-lime-pie/step-02-02.jpg','images/recipes/fun-key-lime-pie/step-02-03.jpg','images/recipes/fun-key-lime-pie/step-02-04.jpg']},
      {number:'03',title:'BAKE THE FILLING',clock:'11:40 PM',paragraphs:[
        'Pour the lime filling into the cooled 23 cm / 9-inch graham cracker crust.',
        'Bake at 175°C / 350°F for 10 minutes.',
        'The edges should be beginning to set while the center still has a gentle jiggle.',
        'Remove the pie from the oven and let it rest for 5–10 minutes while preparing the meringue.'
      ],stepNote:'**Midnight Shortcut:** You can make the meringue before this step and bake the filling and meringue together for about 10 minutes. Doing them separately is a little less risky and gives you more control.',stepImages:['images/recipes/fun-key-lime-pie/step-03-01.jpg','images/recipes/fun-key-lime-pie/step-03-02.jpg']},
      {number:'04',title:'WHIP THE MERINGUE',clock:'11:50 PM',paragraphs:[
        'Place the {{qty:Meringue::Egg Whites}} egg whites in a completely clean and dry bowl. Beat until foamy.',
        'Add {{qty:Meringue::Cream of Tartar}} cream of tartar.',
        'Gradually add the {{qty:Meringue::Granulated Sugar}} granulated sugar, a little at a time, while continuing to beat.',
        'Continue beating until the meringue is glossy and holds stiff peaks.'
      ],stepImages:['images/recipes/fun-key-lime-pie/step-04-01.jpg','images/recipes/fun-key-lime-pie/step-04-02.jpg']},
      {number:'05',title:'MAKE THE PEAKS',clock:'11:55 PM',paragraphs:[
        'Spoon the meringue over the warm lime filling.',
        'Spread the meringue all the way to the edge of the crust, making sure it completely touches and seals against the filling and crust edge. Do not leave gaps between the meringue and the filling.',
        'For the signature peaks, place the back of a spoon gently onto the meringue and pull it straight upward.',
        'Repeat across the surface, creating a mixture of small and tall peaks.'
      ],stepImages:['images/recipes/fun-key-lime-pie/step-05-01.jpg','images/recipes/fun-key-lime-pie/step-05-02.jpg']},
      {number:'06',title:'BROWN THE MERINGUE & CHILL',clock:'12:00 AM',paragraphs:[
        'Return the pie to the 175°C / 350°F oven for 5–10 minutes, until the peaks are lightly golden.',
        'Watch carefully near the end because the tips can brown quickly.',
        'Remove from the oven and let the pie cool completely at room temperature.',
        'Refrigerate for at least 4 hours, preferably overnight.'
      ],stepImages:['images/recipes/fun-key-lime-pie/step-06-01.jpg']}
    ],
    notes:[
      ['This is a seriously easy pie.','If I had to name the most annoying part, it\'s squeezing the limes and grating the zest. Once that\'s done, you\'re basically finished. Everything else is just mixing, baking, and waiting for the pie to chill—which is honestly most of the work. So if you\'re making this at midnight, don\'t let the long recipe card fool you. The lime is the hardest part!'],
      ["Can't Find Key Limes? Not a Problem at All!",'Key limes aren\'t always easy to find in Toronto, so this recipe uses regular Persian/Tahiti limes instead. The extra lime zest keeps the flavor bright and aromatic, so the pie still feels unmistakably lime-forward.'],
      ['Why Sour Cream?','The 300 ml can of condensed milk already brings plenty of sweetness. Sour cream adds body, creaminess, and a little extra tang without requiring more condensed milk.'],
      ['Stable Meringue','The goal here is a soft, fluffy pie meringue, not a crisp meringue-cookie texture. I increased the sugar slightly and added a small amount of cream of tartar to help stabilize the whipped egg whites. When spreading the meringue over the warm filling, make sure it reaches all the way to the edge and seals against the filling and crust. Gaps can allow moisture to collect underneath the meringue as the pie chills. These small details help the meringue stay fluffy and hold together better the next day.']
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow (after chilling thoroughly).',
      'MAKE AHEAD':'Yes. The pie is ideal made the night before.',
      'STORAGE':'Refrigerate, covered, for up to 3 days.',
      'FREEZER':'Freezing is not recommended for this meringue-topped pie. The meringue may weep or become watery, and its texture can change after thawing.',
      'REHEAT':'Not applicable.'
    },
    tags:['Baking','Dessert','American','Lime','Key Lime Pie','Pie','Meringue','Toronto','Grocery Store Find'], mainIngredients:['Lime','Eggs','Cream','Pie'], usualsCategory:''
  },

  {
    slug:'tom-kha-gai',
    title:'Tom Kha Gai (Coconut Chicken Soup)',
    source:'Internet Find',
    original:'TasteAtlas',
    originalUrl:'https://www.tasteatlas.com/',
    dish:'Tom Kha Gai / ต้มข่าไก่',
    cuisine:'Thai',
    course:'Soups',
    courseDisplay:'Soups',
    categories:['Soups'], ingredientCategories:["Chicken", "Coconut Milk", "Galangal", "Lemongrass", "Mushroom", "Soup"],
    dateAdded:'2026-10-08',
    timeStamp:'11:21 PM',
    description:'A Thai coconut chicken soup with galangal, lemongrass, makrut lime leaves, fresh lime, and gentle chili heat—my late-night attempt to see if it deserved its reputation.',
    story:`TasteAtlas had ranked Tom Kha Gai #1 on its list of the world’s best chicken soups. I knew Tom Yum, but somehow Tom Kha Gai had always stayed in the background.
It sounded like the perfect combination: creamy coconut milk, the bright citrus of makrut lime leaf and lemongrass, fresh lime acidity, and the gentle heat and peppery bite of chilies and galangal.
The biggest challenge was finding all the ingredients. The actual cooking is surprisingly simple. And in a diverse city like Toronto, hunting down those ingredients might not be as difficult as it sounds.
If the internet was calling it the world’s best, I had to find out for myself, even at midnight..!`,
    heroImage:'images/recipes/tom-kha-gai/hero.jpg',
    recipeImage:'images/recipes/tom-kha-gai/recipe.jpg',
    stepQuantityConversion:true,
    usCupFractions:true,
    ingredientFile:[
      {name:'Galangal',details:[
        ['Origin','Southeast Asia'],
        ['Flavor','Peppery, citrusy, floral, slightly piney'],
        ['Best choice','Fresh galangal'],
        ['Why here','Fresh galangal gives Tom Kha its distinctive peppery and floral character and tastes noticeably different from ginger.'],
        ['Where to Find','Toronto Asian grocery stores such as Best Fresh Foods, Nations, and T&T are good places to look.'],
        ['Substitute','Fresh ginger plus a little extra lemongrass, although the flavor will be different.'],
        ['Storage','Wrap fresh galangal loosely and refrigerate. Dried galangal should be kept airtight in a cool, dark place.'],
        ['Midnight Fix','Use frozen or dried galangal if fresh galangal is unavailable.']
      ]},
      {name:'Makrut Lime Leaves',details:[
        ['Origin','Thailand / Southeast Asia'],
        ['Flavor','Intensely citrusy, floral, aromatic'],
        ['Best choice','Fresh makrut lime leaves'],
        ['Why here','Makrut lime leaf provides the floral citrus aroma that makes the broth recognizable as Tom Kha.'],
        ['Where to Find','Toronto Asian grocery stores such as Best Fresh Foods, Nations, and T&T are good places to look.'],
        ['Substitute','Fresh lime zest can add some citrus aroma, but it cannot fully replace makrut lime leaf.'],
        ['Storage','Keep dried leaves airtight and away from light and moisture.']
      ]},
      {name:'Lemongrass',details:[
        ['Origin','Southeast Asia'],
        ['Flavor','Bright, citrusy, grassy'],
        ['Best choice','Fresh lemongrass stalks'],
        ['Why here','Lemongrass adds a bright citrus aroma to the broth and works together with galangal and makrut lime leaf.'],
        ['Substitute','Frozen or pre-minced lemongrass'],
        ['Storage','Fresh stalks can be refrigerated for about a week; frozen lemongrass keeps much longer.'],
        ['Midnight Fix','Use 1½ tbsp finely minced lemongrass when whole stalks are inconvenient.'],
      ]}
    ],
    ingredients:[
      {group:'Chicken & Coconut Base'},
      {amount:227,unit:'g',imperialAmount:0.5,imperialUnit:'lb',item:'Boneless, Skinless Chicken Thighs'},
      {amount:150,unit:'g',imperialAmount:1,imperialUnit:'cup',item:'Mushrooms'},
      {amount:400,unit:'ml',imperialAmount:5/3,imperialUnit:'cup',item:'Coconut Milk'},
      {amount:250,unit:'ml',imperialAmount:1,imperialUnit:'cup',item:'Water or Chicken Stock'},
      {group:'Aromatics'},
      {amount:30,unit:'g',imperialMinAmount:10,imperialMaxAmount:12,imperialMinUnit:'slices',imperialMaxUnit:'slices',item:'Fresh Galangal, Thinly Sliced',compactRange:true},
      {minAmount:1,maxAmount:2,unit:'stalks',imperialMinAmount:1,imperialMaxAmount:2,imperialMinUnit:'stalks',imperialMaxUnit:'stalks',item:'Lemongrass, Bruised and Cut Into Pieces',compactRange:true},
      {minAmount:4,maxAmount:5,unit:'leaves',imperialMinAmount:4,imperialMaxAmount:5,imperialMinUnit:'leaves',imperialMaxUnit:'leaves',item:'Makrut Lime Leaves, Rehydrated if Dried',compactRange:true},
      {amount:0.5,unit:'',imperialAmount:0.5,imperialUnit:'',item:'Onion, Sliced'},
      {amount:1,unit:'clove',imperialAmount:1,imperialUnit:'clove',item:'Garlic, Lightly Crushed'},
      {minAmount:2,maxAmount:4,unit:'',imperialMinAmount:2,imperialMaxAmount:4,imperialMinUnit:'',imperialMaxUnit:'',item:'Fresh Chilies, Lightly Crushed',compactRange:true},
      {group:'Seasoning'},
      {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Fish Sauce'},
      {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Fresh Lime Juice'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Palm Sugar or Granulated Sugar'},
      {minAmount:2,maxAmount:3,unit:'g',imperialMinAmount:0.25,imperialMaxAmount:0.5,imperialMinUnit:'tsp',imperialMaxUnit:'tsp',item:'Salt',compactRange:true},
      {group:'Garnish'},
      {unit:'',item:'Cilantro'}
    ],
    stats:{prep:'10 mins',cook:'20 mins',total:'30 mins',serves:'2–3',quiet:'⭐⭐⭐⭐☆'},
    steps:[
      {number:'01',title:'BUILD THE AROMATIC BROTH',clock:'11:21 PM',paragraphs:[
        'If using dried {{qty:Makrut Lime Leaves, Rehydrated if Dried}} makrut lime leaves, soak them in hot water for 5–10 minutes. Drain and gently tear them.',
        'Thinly slice {{qty:Fresh Galangal, Thinly Sliced}} fresh galangal. Remove the tough outer layers from {{qty:Lemongrass, Bruised and Cut Into Pieces}} lemongrass stalks, bruise them with the back of a knife, and cut them into 5–6 cm pieces.',
        'If using minced lemongrass instead, measure 1½ tbsp.',
        'Add {{qty:Water or Chicken Stock}} water or chicken stock, galangal, lemongrass, makrut lime leaves, {{qty:Onion, Sliced}} onion, {{qty:Garlic, Lightly Crushed}} garlic, and {{qty:Fresh Chilies, Lightly Crushed}} fresh chilies to a saucepan.',
        'Bring to a gentle simmer over medium heat and cook for 5–10 minutes, until the broth smells deeply aromatic.'
      ],stepImages:['images/recipes/tom-kha-gai/step-01-01.jpg','images/recipes/tom-kha-gai/step-01-02.jpg','images/recipes/tom-kha-gai/step-01-03.jpg']},
      {number:'02',title:'COOK THE CHICKEN & COCONUT',clock:'11:33 PM',paragraphs:[
        'Cut {{qty:Boneless, Skinless Chicken Thighs}} boneless, skinless chicken thighs into bite-sized pieces.',
        'Add the chicken thighs to the aromatic broth and simmer until just cooked through.',
        'Add {{qty:Mushrooms}} mushrooms and cook for another 2–3 minutes.',
        'Pour in {{qty:Coconut Milk}} coconut milk. Reduce the heat to low and warm gently.',
        'Do not let the coconut milk boil aggressively. Keep the broth smooth and fragrant.'
      ],stepImages:['images/recipes/tom-kha-gai/step-02-01.jpg','images/recipes/tom-kha-gai/step-02-02.jpg','images/recipes/tom-kha-gai/step-02-03.jpg']},
      {number:'03',title:'SEASON & FINISH',clock:'11:41 PM',paragraphs:[
        'Stir in {{qty:Fish Sauce}} fish sauce and {{qty:Palm Sugar or Granulated Sugar}} palm sugar or granulated sugar. Turn off the heat.',
        'Add {{qty:Fresh Lime Juice}} fresh lime juice.',
        'Taste and adjust with a little more fish sauce for saltiness, lime juice for acidity, or sugar if the flavors feel too sharp.',
        'Finish with fresh cilantro.'
      ],stepImages:['images/recipes/tom-kha-gai/step-03-01.jpg','images/recipes/tom-kha-gai/step-03-02.jpg']}
    ],
    notes:[
      ['Recreating the Flavor','The character of Tom Kha Gai comes from the combination of Coconut Milk with Galangal, Lemongrass, and Makrut Lime Leaf. I built the aromatic base directly from the herbs.'],
      ['The Lime Trick','Makrut Lime Leaf gives the soup its floral citrus aroma, while Fresh Lime Juice brings the sharp acidity. Add the juice after turning off the heat to keep that fresh citrus character.'],
      ['Galangal Matters','Ginger is an acceptable emergency substitute, but fresh Galangal gives a distinctly peppery, floral flavor that makes the soup taste much more like Tom Kha.'],
      ['Toronto Pantry Reality','Fresh Galangal and Lemongrass are easy to find at Toronto Asian grocery stores, while dried Makrut Lime Leaves are useful when you want to make this on a random midnight without another grocery run.']
    ],
    finePrint:{
      'BEST EATEN':'Fresh, while the aromatics are fragrant and the lime flavor is bright.',
      'MAKE AHEAD':'Yes. If possible, add the fresh lime juice just before serving rather than before storing.',
      'STORAGE':'Refrigerate in an airtight container for up to 3 days.',
      'FREEZER':'Freezing may cause the coconut broth to separate and the mushrooms to soften. Stir well after reheating.',
      'REHEAT':'Reheat gently on the stovetop or in the microwave. Avoid bringing the soup to a hard boil.'
    },
    tags:['Galangal','Makrut Lime Leaves','Lemongrass','Coconut Milk','Chicken'],
    usualsCategory:''
  }
,

  {
    slug:'sweet-chili-peanut-chicken',
    title:'Sweet Chili Peanut Chicken',
    source:'Travel',
    cuisine:'Thai',
    course:'Main Dishes',
    courseDisplay:'Main Dishes',
    categories:['Main Dishes'], ingredientCategories:["Chicken", "Peanut", "Chili", "Sauce"],
    dateAdded:'2026-10-08',
    timeStamp:'10:15 PM',
    description:'Inspired by sweet chili sauce and crushed peanuts served with Thai fish cakes, this chicken brings together sweet, tangy, spicy, and nutty flavors in a quick homemade dish.',
    story:`I first fell for the combination of sweet chili sauce and peanuts in Thailand, where sweet chili sauce and crushed peanuts were served alongside crispy Thai fish cakes (Tod Mun Pla).
But actually, the sauce was the best part of the dish. That sweet, tangy, slightly spicy, nutty combination stayed with me long after the trip.
Thailand isn't exactly a quick midnight trip from Toronto, so I decided to bring that memory home instead. I had some chicken in the fridge and wondered: what if I gave it that sauce?
This isn't a traditional Thai dish. It's simply my midnight attempt to recreate a Thai-inspired flavor I couldn't forget.`,
    heroImage:'images/recipes/sweet-chili-peanut-chicken/hero.jpg',
    recipeImage:'images/recipes/sweet-chili-peanut-chicken/recipe.jpg',
    stepQuantityConversion:true,
    usCupFractions:true,
    ingredientFile:[
      {name:'100% Peanut Butter',details:[
        ['Flavor','Rich, nutty, roasted, creamy'],
        ['Best choice','Smooth peanut butter made from 100% peanuts, with no added sugar'],
        ['Why here','Adds concentrated roasted-peanut flavor and creates a creamy, glossy sauce without needing a separate peanut sauce.'],
        ['Substitute','Other nut butter']
      ]},
      {name:'Sambal Oelek',details:[
        ['Origin','Indonesia'],
        ['Flavor','Fresh chili heat with a slightly tangy edge'],
        ['Best choice','A simple chili paste with minimal added ingredients'],
        ['Why here','Provides the chili element without making the sauce overwhelmingly spicy.'],
        ['Substitute','Finely minced fresh red chili or a mild chili paste'],
        ['Storage','Refrigerate after opening, following the product label.']
      ]},
      {name:'Rice Vinegar',details:[
        ['Origin','East Asia'],
        ['Flavor','Clean, mild acidity'],
        ['Best choice','Plain, unseasoned rice vinegar'],
        ['Why here','Balances the richness of peanut butter and the sweetness of sugar.'],
        ['Substitute','White vinegar, using slightly less at first and adjusting to taste']
      ]}
    ],
    ingredients:[
      {group:'Chicken'},
      {amount:454,unit:'g',imperialAmount:1,imperialUnit:'lb',item:'Chicken Thighs, Cut Into Bite-Sized Pieces'},
      {amount:20,unit:'g',imperialAmount:2,imperialUnit:'tbsp',item:'Cornstarch'},
      {amount:3,unit:'g',imperialAmount:0.5,imperialUnit:'tsp',item:'Salt'},
      {amount:1,unit:'g',imperialAmount:0.25,imperialUnit:'tsp',item:'Black Pepper'},
      {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Neutral Oil, for Pan-Frying'},
      {group:'Sweet Chili Peanut Sauce'},
      {amount:32,unit:'g',imperialAmount:2,imperialUnit:'tbsp',item:'100% Peanut Butter'},
      {amount:45,unit:'ml',imperialAmount:3,imperialUnit:'tbsp',item:'Water'},
      {amount:30,unit:'g',imperialAmount:2,imperialUnit:'tbsp',item:'Rice Vinegar'},
      {amount:26,unit:'g',imperialAmount:2,imperialUnit:'tbsp',item:'Granulated Sugar'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Soy Sauce'},
      {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Sambal Oelek'},
      {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Garlic, Finely Grated'},
      {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Fresh Ginger, Finely Grated'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Sesame Oil'},
      {amount:1,unit:'g',imperialAmount:0.125,imperialUnit:'tsp',item:'Salt, or to Taste'},
      {group:'Garnish'},
      {unit:'',item:'Roasted Peanuts, Roughly Crushed'},
      {unit:'',item:'Fresh Cilantro, Chopped'},
      {unit:'',item:'1–2 Lime Wedges'}
    ],
    stats:{prep:'10 mins',cook:'15 mins',total:'25 mins',serves:'2',quiet:'⭐⭐⭐☆☆'},
    steps:[
      {number:'01',title:'CRISP THE CHICKEN',clock:'10:15 PM',paragraphs:[
        'Pat the {{qty:Chicken Thighs, Cut Into Bite-Sized Pieces}} chicken thighs dry and cut them into bite-sized pieces.',
        'Toss the chicken with the {{qty:Chicken::Cornstarch}} cornstarch, {{qty:Chicken::Salt}} salt, and {{qty:Black Pepper}} black pepper until evenly coated.',
        'Heat the {{qty:Neutral Oil, for Pan-Frying}} neutral oil in a large skillet over medium-high heat.',
        'Arrange the chicken in a single layer. Cook for 3–4 minutes per side until golden and crisp. Work in batches if needed.',
        'Transfer the chicken to a plate, leaving about 1–2 teaspoons of oil in the skillet.'
      ],stepImages:['images/recipes/sweet-chili-peanut-chicken/step-01-01.jpg','images/recipes/sweet-chili-peanut-chicken/step-01-02.jpg','images/recipes/sweet-chili-peanut-chicken/step-01-03.jpg','images/recipes/sweet-chili-peanut-chicken/step-01-04.jpg']},
      {number:'02',title:'BUILD THE SAUCE',clock:'10:25 PM',paragraphs:[
        'Reduce the heat to medium-low.',
        'Add the {{qty:Sambal Oelek}} sambal oelek, {{qty:Garlic, Finely Grated}} garlic, and {{qty:Fresh Ginger, Finely Grated}} fresh ginger to the skillet. Sauté for 20–30 seconds, stirring gently. Do not let the garlic burn.',
        'Add the {{qty:100% Peanut Butter}} peanut butter, {{qty:Water}} water, {{qty:Rice Vinegar}} rice vinegar, {{qty:Granulated Sugar}} granulated sugar, {{qty:Soy Sauce}} soy sauce, and {{qty:Sweet Chili Peanut Sauce::Salt, or to Taste}} salt.',
        'Stir for 1–2 minutes until the sauce becomes smooth and glossy.',
        'Stir in the {{qty:Sesame Oil}} sesame oil.',
        'Taste and adjust the seasoning. Add a little more salt only if needed. If the sauce is too thick, add water a teaspoon at a time.'
      ],stepImages:['images/recipes/sweet-chili-peanut-chicken/step-02-01.jpg','images/recipes/sweet-chili-peanut-chicken/step-02-02.jpg']},
      {number:'03',title:'COAT THE CHICKEN',clock:'10:29 PM',paragraphs:[
        'Return the crispy chicken to the skillet.',
        'Toss gently for 1–2 minutes until the pieces are evenly coated.',
        'If the sauce is too thick, add 5–10 ml water and toss again. This is extra adjustment water, separate from the sauce water listed in the ingredients.',
        'Remove from the heat once the chicken is coated in the glossy sauce.'
      ],stepImages:['images/recipes/sweet-chili-peanut-chicken/step-03-01.jpg','images/recipes/sweet-chili-peanut-chicken/step-03-02.jpg']},
      {number:'04',title:'GARNISH AND SERVE',clock:'Optional',paragraphs:[
        'Sprinkle with roughly crushed roasted peanuts and chopped cilantro.',
        'Serve with lime wedges for squeezing over the chicken just before eating.'
      ],stepImages:[]}
    ],
    notes:[
      ['The Flavor Memory','The starting point was the sweet chili sauce and crushed peanuts served with Thai fish cakes. The goal wasn\'t to recreate Tod Mun Pla itself, but to bring that sweet, tangy, spicy, nutty combination to crispy chicken.'],
      ['Building the Sweet Chili Base','Instead of using bottled Thai sweet chili sauce, this recipe builds a quick version from vinegar, sugar, chili, garlic, and seasonings. Peanut butter adds a creamy, nutty twist.'],
      ['Keeping It Mild','The sambal provides a gentle chili kick rather than dominating the sauce. Add a little more if you prefer a spicier finish.'],
      ['Crispy First, Sauce Second','Cook the chicken until golden before making the sauce. Coating it too early would prevent the chicken from developing its crisp exterior.'],
      ['The One-Pan Midnight Rule','The chicken and sauce are made in the same skillet. Less cleanup means more time to enjoy dinner.']
    ],
    finePrint:{
      'BEST EATEN':'Immediately after cooking, while the chicken is at its crispest.',
      'MAKE AHEAD':'Yes. Prepare the components ahead, then cook the chicken and combine it with the sauce just before serving.',
      'STORAGE':'Refrigerate leftovers in an airtight container for 3–4 days.',
      'FREEZER':'Freezing may reduce the coating’s crispness. If freezing, store the chicken and sauce separately.',
      'REHEAT':'Reheat in the oven or air fryer to restore some crispness. The microwave is convenient but will soften the coating.'
    },
    tags:['Chicken','Peanut Butter','Sweet Chili','One-Pan','Weeknight Dinner'],
    mainIngredients:['Chicken','Pantry','Herbs & Spices'],
    usualsCategory:''
  },
  {
    slug:'moms-hamburg-steak',
    title:'Mom’s Hamburg Steak', description:'A Japanese-style hamburg steak inspired by my mom’s cooking, served with a rich, sweet-tangy sauce that brings back the comforting taste of home.',
    source:'Memory',
    dish:'Japanese Hamburg Steak',
    cuisine:'Japanese',
    course:'Main Dishes',
    courseDisplay:'Main Dishes',
    categories:['Main Dishes'],
    ingredientCategories:['Ground Meat','Onion','Eggs','Breadcrumbs','Milk','Sauce'],
    dateAdded:'2026-10-08',
    timeStamp:'01:15 AM',
    story:`In Japan, hamburg steak is one of those dishes that feels like “*haha no aji*” (母の味) — literally, “the taste of mother.” It’s that familiar, nostalgic taste we associate with home and childhood.

For me, hamburg steak is one of the dishes my mom used to make. When I was younger, I never really thought much about it. It was just hamburg steak — something that appeared on the dinner table.

But looking back, it’s actually not the easiest dish to make. You have to chop the onion, knead the meat, shape each patty, cook them without drying them out, and then make the sauce. There’s definitely some work involved.

And yet, my mom made it.

The sauce is part of what makes it feel like Japanese hamburg steak, too. Japanese-style *“demi-glace”* sauce is rich, sweet, tangy, and made with familiar pantry staples. It’s the kind of sauce that makes the whole dish feel complete.

Maybe that’s what *haha no aji* really means. Not that every mom made the same dish, but that somewhere along the way, an ordinary meal becomes a taste you remember. And the hamburg steak you make for your own family might just become their favorite — the one they remember most.`,
    heroImage:'images/recipes/moms-hamburg-steak/hero.jpg',
    recipeImage:'images/recipes/moms-hamburg-steak/recipe.jpg',
    stepQuantityConversion:true,
    usCupFractions:true,
    ingredientFile:[
      {name:'Ground Meat',details:[
        ['Flavor','Rich, savory, meaty'],
        ['Best choice','Ground beef, ground pork, or a combination of both'],
        ['Substitute','Beef and pork can be used individually or combined, depending on preference.']
      ]},
      {name:'Onion',details:[
        ['Flavor','Sweet, savory, aromatic'],
        ['Best choice','Yellow onion'],
        ['Why here','Adds moisture and sweetness to the patties.'],
        ['Substitute','Shallot']
      ]},
      {name:'Worcestershire Sauce',details:[
        ['Origin','England'],
        ['Flavor','Tangy, savory, slightly sweet, spiced'],
        ['Best choice','Standard Worcestershire sauce'],
        ['Why here','Adds tangy, savory depth to the quick Japanese-style sauce.'],
        ['Substitute','A little extra ketchup and soy sauce can work in a pinch.']
      ]},
      {name:'Ketchup',details:[
        ['Flavor','Sweet, tangy, tomato-rich'],
        ['Best choice','Regular tomato ketchup'],
        ['Why here','Forms the sweet-tangy base of the quick sauce.']
      ]},
      {name:'Sake',details:[
        ['Origin','Japan'],
        ['Flavor','Mild, lightly sweet, rice-based'],
        ['Best choice','Cooking sake or regular sake'],
        ['Why here','Adds depth to the sauce.'],
        ['Substitute','Dry white wine or Chinese Shaoxing wine'],
      ]}
    ],
    ingredients:[
      {group:'Hamburg Steak'},
      {amount:454,unit:'g',imperialAmount:1,imperialUnit:'lb',item:'Ground Meat'},
      {amount:120,unit:'g',imperialAmount:1,imperialUnit:'cup',item:'Onion, Very Finely Chopped'},
      {amount:1,unit:'large',imperialAmount:1,imperialUnit:'large',item:'Egg'},
      {amount:50,unit:'g',imperialAmount:0.5,imperialUnit:'cup',item:'Breadcrumbs'},
      {amount:60,unit:'ml',imperialAmount:0.25,imperialUnit:'cup',item:'Milk'},
      {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Salt'},
      {amount:0.25,unit:'tsp',imperialAmount:0.25,imperialUnit:'tsp',item:'Black Pepper'},
      {amount:0.125,unit:'tsp',imperialAmount:0.125,imperialUnit:'tsp',item:'Ground Nutmeg'},
      {unit:'',item:'Neutral Oil, for Cooking'},
      {group:'Japanese-Style “Demi-Glace” Sauce'},
      {amount:4,unit:'tbsp',imperialAmount:4,imperialUnit:'tbsp',item:'Sake or Dry White Wine'},
      {amount:4,unit:'tbsp',imperialAmount:4,imperialUnit:'tbsp',item:'Ketchup'},
      {amount:2,unit:'tbsp',imperialAmount:2,imperialUnit:'tbsp',item:'Worcestershire Sauce'},
      {amount:2,unit:'tbsp',imperialAmount:2,imperialUnit:'tbsp',item:'Granulated Sugar'},
      {amount:2,unit:'tbsp',imperialAmount:2,imperialUnit:'tbsp',item:'Soy Sauce'}
    ],
    stats:{prep:'15 mins',cook:'15 mins',total:'30 mins',serves:'4',quiet:'⭐⭐⭐☆☆'},
    steps:[
      {number:'01',title:'MIX',clock:'01:15 AM',paragraphs:[
        'Place {{qty:Hamburg Steak::Ground Meat}} ground meat in a bowl. Add {{qty:Hamburg Steak::Salt}} salt and knead until sticky and cohesive.',
        'Add {{qty:Hamburg Steak::Egg}} egg, {{qty:Hamburg Steak::Breadcrumbs}} breadcrumbs, {{qty:Hamburg Steak::Milk}} milk, {{qty:Hamburg Steak::Onion, Very Finely Chopped}} finely chopped onion, {{qty:Hamburg Steak::Black Pepper}} black pepper, and {{qty:Hamburg Steak::Ground Nutmeg}} ground nutmeg. Mix just until combined.'
      ],stepImages:['images/recipes/moms-hamburg-steak/step-01-01.jpg','images/recipes/moms-hamburg-steak/step-01-02.jpg','images/recipes/moms-hamburg-steak/step-01-03.jpg','images/recipes/moms-hamburg-steak/step-01-04.jpg']},
      {number:'02',title:'SHAPE & SEAR',clock:'01:23 AM',paragraphs:[
        'Divide the mixture into 4 portions. Shape into oval patties about 2–2.5 cm thick and make a shallow indentation in the center of each.',
        'Heat a little oil in a frying pan over medium heat. Cook the patties for 2–3 minutes per side, until well browned.'
      ],stepImages:['images/recipes/moms-hamburg-steak/step-02-01.jpg','images/recipes/moms-hamburg-steak/step-02-02.jpg']},
      {number:'03',title:'STEAM',clock:'01:30 AM',paragraphs:[
        'Add a little water to the pan and cover with a lid. Reduce the heat to medium-low and steam for 5–7 minutes, until cooked through.',
        'Transfer the patties to a plate and rest for 3–5 minutes. Keep the pan for the sauce.'
      ],stepImages:['images/recipes/moms-hamburg-steak/step-03-01.jpg']},
      {number:'04',title:'MAKE THE “DEMI-GLACE” SAUCE',clock:'01:37 AM',paragraphs:[
        'Add {{qty:Japanese-Style “Demi-Glace” Sauce::Sake or Dry White Wine}} sake or dry white wine, {{qty:Japanese-Style “Demi-Glace” Sauce::Ketchup}} ketchup, {{qty:Japanese-Style “Demi-Glace” Sauce::Worcestershire Sauce}} Worcestershire sauce, {{qty:Japanese-Style “Demi-Glace” Sauce::Granulated Sugar}} granulated sugar, and {{qty:Japanese-Style “Demi-Glace” Sauce::Soy Sauce}} soy sauce to the same pan.',
        'Scrape up the browned bits and simmer for 1–2 minutes, until slightly thickened. Spoon the sauce over the hamburg steaks.'
      ],stepImages:['images/recipes/moms-hamburg-steak/step-04-01.jpg']}
    ],
    notes:[
      ['SALT FIRST','Kneading the meat with salt first helps bind the meat proteins together, giving the patties structure and helping them hold onto their juices.'],
      ['RAW ONION','No need to sauté the onion first. Finely chop it and add it straight to the mixture. It cooks while the hamburg steak cooks.'],
      ['SAME PAN','Don’t wash the pan after cooking the patties. Those browned bits add flavor to the sauce.']
    ],
    finePrint:{
      'BEST EATEN':'Fresh, while warm.',
      'MAKE AHEAD':'Shape the patties up to 1 day ahead. Cover and refrigerate.',
      'STORAGE':'Refrigerate in an airtight container for up to 3 days.',
      'FREEZER':'Freeze cooked patties in an airtight, freezer-safe container for up to 3 months for best quality. Cool promptly before freezing and thaw in the refrigerator before reheating.',
      'REHEAT':'Reheat covered in a pan with a splash of water, or gently in the microwave.'
    },
    tags:['Memory','Japanese','Hamburg Steak','Ground Meat','Family Cooking','Demi-Glace Sauce'],
    usualsCategory:''
  }
,
  {
    slug:'silky-cheesecake',
    title:'Silky Cheesecake', description:'Inspired by a memorable moment in Haruki Murakami’s Norwegian Wood, this silky cheesecake reflects on comfort, love, and the small things food can say.',
    source:'Book',
    original:'Norwegian Wood (1987) by Haruki Murakami',
    dish:'Cheesecake',
    cuisine:'American',
    course:'Baking',
    courseDisplay:'Baking, Desserts',
    ingredientCategories:['Cheese','Cream','Eggs','Pantry'],
    categories:['Baking','Desserts'],
    dateAdded:'2026-10-10',
    timeStamp:'10:10 PM',
    heroImage:'images/recipes/silky-cheesecake/hero.jpg', recipeImage:'images/recipes/silky-cheesecake/recipe.jpg',
    story:`In Haruki Murakami's *Norwegian Wood*, Midori has an unusual idea of what it means to be loved.
Imagine someone buying her a strawberry shortcake, only for her to throw it out of the window. Instead of getting angry, she wants him to ask, “Chocolate mousse or cheesecake?”
It's a slightly unreasonable thing to ask of someone, isn't it? But I think that's what makes the scene so memorable. Midori isn't really talking about cake. She wants to know that even when she's difficult, even when she pushes someone away, they might still choose to stay.
I don't completely agree with her, because I don't think love means putting up with everything someone does. We all have our limits, and loving someone doesn't mean ignoring your own feelings. But there's something comforting about being with someone who doesn't give up on you the moment things get difficult. Someone who is willing to ask again, rather than assuming the answer will always be no.
For me, food has always been one of the ways we express love. Cooking for someone is a way of saying, "I thought of you. I want you to be happy. I care about what you need." Sometimes, love is simply remembering what someone likes to eat. And sometimes, it's being willing to ask one more time.
 *"To make it up to you, I'll go out and buy you something else. What would you like? Chocolate mousse? Cheesecake?"*
If you choose cheesecake, try this recipe tonight.`,
    ingredientFile:[
      {name:'Cream Cheese',details:[
        ['Flavor','Smooth, rich, milky, and slightly tangy, with a subtle salty note.'],
        ['Best Choice','Full-fat cream cheese for a richer flavor and creamier texture.'],
        ['Substitute','There is no substitute for the main character!'],
        ['Storage','Keep refrigerated. For this recipe, soften at room temperature before using.']
      ]},
      {name:'Sour Cream',details:[
        ['Flavor','Creamy with a pleasant tang that balances the richness of the cheese and creates a lighter finish.'],
        ['Best Choice','Full-fat sour cream for a creamy texture and balanced tanginess.'],
        ['Why Here','Adds acidity to balance the richness of the cream cheese, creating a smooth texture that doesn\'t feel too heavy.'],
        ['Substitute','Plain Greek yogurt can be used.'],
        ['Storage','Keep refrigerated. For this recipe, bring it close to room temperature before using.'],
        ['Midnight Fix','Replace sour cream with the same amount of plain Greek yogurt. The cheesecake will taste slightly tangier and may have a somewhat lighter, less rich texture. Choose full-fat Greek yogurt if possible for the creamiest result.']
      ]},
      {name:'35% Whipping Cream',details:[
        ['Flavor','Mild, milky, and creamy. It softens the tanginess of the sour cream and contributes to a smooth mouthfeel.'],
        ['Best Choice','35% milk-fat whipping cream for a smooth, rich texture without making the cheesecake as dense as a New York-style cheesecake.'],
        ['Why Here','Adds moisture and milk fat to create a cheesecake that feels silky and creamy without being overly heavy.'],
        ['Substitute','Other creams may have different fat and water contents, so the final texture may vary.'],
        ['Storage','Keep refrigerated until ready to use. For this recipe, bring it close to room temperature before using.'],
        ['Midnight Fix','When using a substitute, consider its fat and water content, as these can affect the cheesecake\'s richness and texture.']
      ]}
    ],
    ingredients:[
      {amount:250,unit:'g',item:'Cream Cheese',imperialAmount:1,imperialUnit:'cup'},
      {amount:85,unit:'g',item:'Granulated Sugar'},
      {amount:173,unit:'g',item:'Sour Cream',imperialAmount:0.75,imperialUnit:'cup'},
      {amount:125,unit:'g',item:'35% Whipping Cream'},
      {amount:2,unit:'',item:'Eggs'},
      {amount:8,unit:'g',item:'Cornstarch'},
      {amount:10,unit:'ml',imperialAmount:2,imperialUnit:'tsp',item:'Lemon Juice'},
      {amount:0.5,unit:'tsp',item:'Vanilla Extract'}
    ],
    stats:{prep:'20 mins',cook:'45–50 mins',chill:'8 hrs+',total:'9 hrs+',serves:'6–8 slices',pan:'18 cm loaf pan',quiet:'⭐⭐⭐⭐⭐'},
    showPan:true,
    showChill:true,
    stepQuantityConversion:true,
    usCupFractions:true,
    steps:[
      {number:'01',title:'PREPARE THE INGREDIENTS',clock:'10:10 PM',paragraphs:[
        'Bring the cream cheese, sour cream, and eggs close to room temperature.',
        'Preheat your oven to 150°C / 300°F. Line an 18 cm loaf pan with parchment paper.',
        'Beat the eggs in a separate bowl and set aside.'
      ],stepImages:[]},
      {number:'02',title:'BUILD THE CREAMY BASE',clock:'10:15 PM',paragraphs:[
        'In a large bowl, mix the {{qty:Cream Cheese}} cream cheese until completely smooth and free of lumps.',
        'Add the {{qty:Granulated Sugar}} granulated sugar, {{qty:Sour Cream}} sour cream, and {{qty:35% Whipping Cream}} whipping cream. Mix until evenly combined.'
      ],stepImages:['images/recipes/silky-cheesecake/step-02-01.jpg','images/recipes/silky-cheesecake/step-02-02.jpg','images/recipes/silky-cheesecake/step-02-03.jpg']},
      {number:'03',title:'FINISH WITH A SILKY BATTER',clock:'10:20 PM',paragraphs:[
        'Gradually add {{qty:Eggs}} beaten eggs in two or three additions, mixing gently after each addition.',
        'Sift in the {{qty:Cornstarch}} cornstarch, then add the {{qty:Lemon Juice}} lemon juice and {{qty:Vanilla Extract}} vanilla extract. Mix until the batter is smooth and uniform.',
        'Pour the batter into the prepared loaf pan. Gently tap the pan against the counter to release large air bubbles.',
        'For an extra-silky texture, strain the batter through a fine-mesh sieve before pouring it into the pan.'
      ],stepNote:'**Midnight Shortcut:** Put all the batter ingredients into the food processor and blend until smooth. Avoid overmixing to prevent unnecessary air incorporation.',stepImages:['images/recipes/silky-cheesecake/step-03-01.jpg','images/recipes/silky-cheesecake/step-03-02.jpg','images/recipes/silky-cheesecake/step-03-03.jpg','images/recipes/silky-cheesecake/step-03-04.jpg']},
      {number:'04',title:'LET THE WATER BATH DO THE WORK',clock:'10:30 PM',paragraphs:[
        'Place the loaf pan inside a larger, deep oven-safe tray. Carefully pour hot water into the outer tray to create a water bath.',
        'Bake at 150°C / 300°F for approximately 45–50 minutes, checking for doneness from around 45 minutes. The edges should be set while the center still jiggles slightly when the pan is gently moved.',
        'While the cheesecake bakes, you can go take a shower. Let the oven do the work for a while.'
      ],stepImages:['images/recipes/silky-cheesecake/step-04-01.jpg']},
      {number:'05',title:'GIVE IT THE NIGHT',clock:'11:15 PM',paragraphs:[
        'Remove the pan from the water bath and let the cheesecake cool in the pan until it reaches room temperature.',
        'Refrigerate overnight for at least 8 hours to allow the texture to set completely.',
        'Once thoroughly chilled, lift the cheesecake out of the pan.'
      ],stepImages:['images/recipes/silky-cheesecake/step-05-01.jpg','images/recipes/silky-cheesecake/step-05-02.jpg']}
    ],
    notes:[
      ['Not Quite New York, Not Quite Soufflé','This cheesecake sits somewhere between a dense New York-style cheesecake and a light Japanese soufflé cheesecake. It has a creamy, silky mouthfeel without feeling quite so heavy, while remaining rich enough to satisfy a cheesecake craving. The goal is a delicate texture that feels just right, even for a late-night slice.'],
      ['Why Bake It in a Water Bath?','A water bath helps moderate the heat around the pan, encouraging the cheesecake to bake more gently and evenly. This is especially useful when aiming for a soft, creamy texture rather than a dry or overly firm one.'],
      ['To Strain or Not to Strain?','Straining is optional, but I recommend it if you want the smoothest texture. A fine-mesh sieve catches small lumps of cream cheese and any undissolved bits that might otherwise affect the finished mouthfeel.'],
      ['The Gentle Jiggle','The cheesecake should still have a slight wobble in the center when it comes out of the oven. It will continue to set as it cools and chills. Waiting until the center is completely firm in the oven may result in a drier texture.']
    ],
    finePrint:{
      'BEST EATEN':'Tomorrow. Let the cheesecake sit at room temperature for 5–10 minutes before serving. This helps soften the texture and bring out its creamy, silky mouthfeel.',
      'MAKE AHEAD':'Yes. Prepare the cheesecake the day before serving and refrigerate overnight to allow it to set completely.',
      'STORAGE':'Cover and refrigerate for up to 4 days.',
      'FREEZER':'Cheesecake can be frozen for longer storage. For the best texture, wrap individual slices tightly and place them in an airtight freezer-safe container. Use within 1 month for best quality. Thaw overnight in the refrigerator before serving. The texture may change slightly after freezing.',
      'REHEAT':'Not applicable.'
    },
    tags:['cheesecake','baked cheesecake','creamy cheesecake','silky texture','cream cheese','water bath','make ahead dessert','Haruki Murakami','Norwegian Wood'],
    usualsCategory:''
  },

  {
    slug:'classic-pumpkin-pie', title:'Classic Pumpkin Pie', description:'My take on a Canadian Thanksgiving classic, with silky pumpkin filling and a warm blend of cinnamon, cloves, and nutmeg—especially comforting on a quiet autumn night.', source:'Family & Tradition', dish:'Pumpkin Pie', cuisine:'Canadian', cuisineSecondary:'American',
    course:'Baking', courseDisplay:'Baking, Desserts', categories:['Baking','Desserts'], ingredientCategories:['Pumpkin','Pie','Eggs','Cream','Cinnamon'],
    dateAdded:'2026-10-11', timeStamp:'12:15 AM',
    heroImage:'images/recipes/classic-pumpkin-pie/hero.jpg', recipeImage:'images/recipes/classic-pumpkin-pie/recipe.jpg',
    usesUsual:'building-block-pie-crust', showPan:true, showChill:true, hideRecipeTags:true,
    stepQuantityConversion:true, usCupFractions:true, fractionDenominator:16,
    story:`Pumpkin pie is *the* Canadian Thanksgiving classic, and I had my very first bite on Thanksgiving Monday back in October during my first year in Canada. Safe to say, I was completely hooked! The smooth, silky pumpkin filling and that warm punch of cinnamon, cloves, and nutmeg were unlike anything I knew back home with Japanese Kabocha. After that, I went a little crazy trying pumpkin pie everywhere I could get my hands on. Fast forward through endless pie runs and tweaking ingredients, I’ve finally nailed my dream spice mix. I make it all the time now, but honestly? Baking it in the middle of a quiet autumn night hits differently.`,
    ingredientFile:[
      {name:'PUMPKIN PURÉE',details:[['Flavor','Earthy, mellow, and mildly sweet; it gives the filling its signature pumpkin flavor and creamy body.'],['Best Choice','In Toronto/Canada, you’ll mostly find E.D. Smith “100% Pure Pumpkin” (make sure it says Pure, not Pumpkin Pie Mix!).'],['Substitute','Steamed and puréed Kabocha squash or sweet potatoes. Avoid butternut squash, as its higher water content can make the filling too loose.'],['Storage','Freeze extra purée in airtight containers or Ziploc bags for up to 3 months.'],['Midnight Fix','Use pure pumpkin purée, not pumpkin pie mix, which already contains sweeteners and spices. If the purée seems unusually watery, drain it briefly before measuring so the filling is less likely to turn loose.']]},
      {name:'BROWN SUGAR',details:[['Flavor','Warm, caramel-like, molasses-rich'],['Role','Adds sweetness and moisture while balancing the earthy pumpkin and warm spices.'],['Best Choice','Light brown sugar gives a balanced flavor; dark brown sugar adds a deeper molasses note. Either can be used.'],['Substitute','White sugar, although the flavor will be slightly lighter.'],['Storage','Keep in an airtight container at room temperature to help prevent it from drying out and hardening.']]}
    ],
    ingredients:[
      {group:'PIE CRUST',usualSlug:'building-block-pie-crust',usualLabel:'Building Block Pie Crust'},
      {group:'PUMPKIN FILLING'},
      {amount:400,unit:'g',imperialAmount:5/3,imperialUnit:'cup',item:'Pumpkin Purée'},
      {amount:70,unit:'g',imperialAmount:1/3,imperialUnit:'cup',item:'Brown Sugar'},
      {amount:2,unit:'large',imperialAmount:2,imperialUnit:'large',item:'Eggs'},
      {amount:79,unit:'ml',imperialAmount:1/3,imperialUnit:'cup',item:'Whole Milk'},
      {amount:78,unit:'g',imperialAmount:1/3,imperialUnit:'cup',item:'35% Whipping Cream'},
      {amount:1,unit:'tsp',imperialAmount:1,imperialUnit:'tsp',item:'Ground Cinnamon'},
      {amount:0.5,unit:'tsp',imperialAmount:0.5,imperialUnit:'tsp',item:'Ground Ginger'},
      {amount:0.25,unit:'tsp',imperialAmount:0.25,imperialUnit:'tsp',item:'Ground Nutmeg'},
      {amount:0.125,unit:'tsp',imperialAmount:0.125,imperialUnit:'tsp',item:'Ground Cloves'},
      {amount:0.25,unit:'tsp',imperialAmount:0.25,imperialUnit:'tsp',item:'Salt'}
    ],
    stats:{prep:'20 mins',cook:'55–60 mins',chill:'2 hrs+',total:'4 hrs 20 mins +',serves:'6–8',pan:'23 cm / 9-inch pie dish',quiet:'⭐⭐⭐⭐☆'},
    steps:[
      {number:'01',title:'MAKE THE CRUST',clock:'12:15 AM',paragraphs:[
        'Preheat your oven to 175°C / 350°F.',
        'Start with one of our usual recipes — Building Block Pie Crust.',
        '**Midnight Shortcut:** Use a good-quality store-bought pie crust. Tonight is about the filling.'
      ],stepImages:[]},
      {number:'02',title:'MAKE THE FILLING',clock:'12:35 AM',paragraphs:[
        'Mix {{qty:PUMPKIN FILLING::Pumpkin Purée}} pumpkin purée, {{qty:PUMPKIN FILLING::Brown Sugar}} brown sugar, {{qty:PUMPKIN FILLING::Eggs}} eggs, {{qty:PUMPKIN FILLING::Whole Milk}} whole milk, {{qty:PUMPKIN FILLING::35% Whipping Cream}} whipping cream, {{qty:PUMPKIN FILLING::Ground Cinnamon}} ground cinnamon, {{qty:PUMPKIN FILLING::Ground Ginger}} ground ginger, {{qty:PUMPKIN FILLING::Ground Nutmeg}} ground nutmeg, {{qty:PUMPKIN FILLING::Ground Cloves}} ground cloves, and {{qty:PUMPKIN FILLING::Salt}} salt until smooth.'
      ],stepImages:['images/recipes/classic-pumpkin-pie/step-02-01.jpg','images/recipes/classic-pumpkin-pie/step-02-02.jpg']},
      {number:'03',title:'POUR & BAKE',clock:'12:50 AM',paragraphs:[
        'Pour the filling into the warm crust.',
        'Bake at 175°C / 350°F for 35–40 minutes, until the edges are set but the center still has a slight wobble.'
      ],stepImages:['images/recipes/classic-pumpkin-pie/step-03-01.jpg']},
      {number:'04',title:'COOL & CHILL',clock:'1:30 AM',paragraphs:[
        'Cool completely, then refrigerate for at least 2 hours or overnight. Slice chilled and serve.'
      ],stepImages:['images/recipes/classic-pumpkin-pie/step-04-01.jpg']}
    ],
    notes:[],
    finePrint:{
      'BEST EATEN':'Tomorrow. The filling becomes smoother and more fully set after chilling.',
      'MAKE AHEAD':'Yes. Ideal to bake the night before.',
      'STORAGE':'Keep covered and refrigerated for up to 4 days.',
      'REHEAT':'Best chilled or at room temperature. For a warm slice, heat at 160°C / 325°F for 5–10 minutes.',
      'FREEZER':'Freeze tightly wrapped individual slices for up to 1 month.',
      'SERVE WITH':'Fresh whipped cream and a light sprinkle of cinnamon.'
    },
    tags:['Thanksgiving','Fall','Baking','Dessert','Pumpkin','Pie','Cinnamon','Make Ahead','Classic Pumpkin Pie'],
    mainIngredients:['Pumpkin','Pie','Eggs','Cream','Cinnamon'],
    footerCuisine:'Canadian · American', footerCourse:'Baking · Desserts', footerMainIngredients:['Pumpkin','Pie','Eggs','Cream','Cinnamon'], usualsCategory:''
  },
];
window.MIDNIGHT_SOURCES = ['Restaurant','Grocery Store Find','Movie & TV','Book','Travel','Family & Tradition','Memory','Internet Find','Midnight Experiment'];
window.MIDNIGHT_COURSES = ['Breakfast & Brunch','Appetizers','Snacks','Soups','Salads','Main Dishes','Sides','Baking','Desserts'];
window.MIDNIGHT_CUISINES = {
  'Asia':['Japanese','Chinese','Korean','Taiwan'],
  'Southeast Asia':['Thai','Vietnamese','Filipino','Indonesian','Malaysian'],
  'South Asia':['Indian','Sri Lankan','Pakistani'],
  'Europe':['Italian','French','Spanish','Greek','Portuguese','British','German','Scandinavian'],
  'Eastern Europe & The Balkans':['Georgian','Ukrainian','Polish','Romanian','Hungarian','Serbian','Croatian','Bulgarian'],
  'Middle East':['Lebanese','Turkish','Persian/Iranian','Israel','Palestinian'],
  'Africa':['Egyptian','Moroccan','Ethiopian'],
  'North America':['Canadian','American','Hawaiian','Mexican'],
  'Central & South America':['Brazilian','Peruvian','Colombian','Argentinian'],
  'Oceania':['Australian','New Zealand']
};

window.MIDNIGHT_USUALS_CATEGORIES = ['SAUCES & DRESSINGS','BASES & CRUSTS','TOPPINGS & EXTRAS','SWEET STAPLES','FROZEN','MAYBE MORE…'];
