/* MIDNIGHT RECIPES — single source of truth for all recipe pages */
window.MIDNIGHT_SITE = {
  aboutImages: {
    aboutMe: 'images/about/about-me.jpg',
    aboutRecipes: 'images/about/about-midnight-recipes.jpg'
  }
};

window.MIDNIGHT_RECIPES = [
  {
    slug:'chocolate-cream-comfort-pie', title:'Chocolate Cream Comfort Pie', source:'Movie & TV', original:'JULIE AND JULIA (2009)', dish:'Chocolate Cream Pie', cuisine:'American', course:'Baking', courseDisplay:'Baking, Desserts', meal:'Baking', categories:['Baking','Desserts'], ingredientCategories:['Chocolate','Pie'], dateAdded:'2026-09-26', timeStamp:'12:14 AM',
    description:'A late-night chocolate cream pie inspired by Julie & Julia (2009).',
    heroImage:'images/recipes/chocolate-cream-comfort-pie/hero.jpg', recipeImage:'images/recipes/chocolate-cream-comfort-pie/recipe.jpg', cardImage:'images/recipes/chocolate-cream-comfort-pie/hero.jpg',
    unitOverrides:{imperial:{'unsalted butter':'tbsp','unsalted butter melted':'tbsp'}},
    integerUnits:{metric:['unsweetened cocoa powder']},
    stepQuantityConversion:true,
    usCupFractions:true,
    fractionDenominator:16,
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
      {group:'Crust'},{amount:200,unit:'g',item:'Graham Crackers, finely crushed'},{amount:76,unit:'g',imperialAmount:1/3,imperialUnit:'cup',imperialFraction:{num:1,den:3},item:'Unsalted Butter, melted'},
      {group:'Chocolate Filling'},{amount:150,unit:'g',imperialAmount:1,imperialUnit:'cup',item:'Dark Chocolate, chopped'},{amount:1,unit:'tsp',imperialAmount:1,imperialUnit:'tsp',item:'Espresso powder'},{amount:3,unit:'Tbsp',imperialAmount:3,imperialUnit:'tbsp',item:'Unsweetened Cocoa Powder'},{amount:4,unit:'',imperialAmount:4,imperialUnit:'',item:'Egg Yolks'},{amount:80,unit:'g',imperialAmount:0.5,imperialUnit:'cup',item:'Sugar'},{amount:4,unit:'Tbsp',imperialAmount:4,imperialUnit:'tbsp',item:'Cornstarch'},{amount:1,unit:'pinch',imperialAmount:1,imperialUnit:'pinch',item:'Salt'},{amount:500,unit:'ml',imperialAmount:2,imperialUnit:'cup',item:'Whole Milk'},{amount:21,unit:'g',imperialAmount:1.5,imperialUnit:'tbsp',item:'Unsalted Butter'},
      {group:'Topping (optional)'},{amount:200,unit:'ml',item:'Whipped Cream'},{amount:2,unit:'Tbsp',item:'Sugar'},{unit:'',item:'Cocoa powder, cacao nibs, or flaky sea salt, to finish'}
    ],
    stats:{prep:'15 mins',cook:'15 mins',chill:'4 hrs',total:'4 hrs 30 min',serves:'6–8',pan:'23 cm / 9 inch pie dish',quest:'⭐⭐⭐☆☆'},
    steps:[
      {number:'01',title:'CRUSH IT DOWN',clock:'12:14 AM',paragraphs:[
        'Preheat your oven to 180°C (350°F).',
        'Crush 200g graham crackers finely.',
        '**Food Processor (Fastest):** Pulse for about 30 seconds.',
        '**Quiet Mode (Silent):** Seal in a zip-top bag and roll with a rolling pin—perfect for late-night baking.',
        'Add {{qty:Crust::Unsalted Butter, melted}} melted butter to the crushed graham crackers and mix until the crumbs are evenly coated.',
        'Press the crumb mixture firmly into a 9-inch (23 cm) pie dish using the flat bottom of a cup.',
        'Bake for 8–10 minutes. Let it cool.'
      ],stepNote:'**Midnight Shortcut:** Skip baking and freeze the crust while you make the filling.',stepImages:['images/recipes/chocolate-cream-comfort-pie/step-01-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-01-02.jpg','images/recipes/chocolate-cream-comfort-pie/step-01-03.jpg']},
      {number:'02',title:'MAKE IT GLOSSY',clock:'12:20 AM',paragraphs:[
        'In a saucepan, whisk {{qty:Chocolate Filling::Sugar}} sugar, {{qty:Chocolate Filling::Cornstarch}} cornstarch, {{qty:Chocolate Filling::Unsweetened Cocoa Powder}} cocoa powder, {{qty:Chocolate Filling::Espresso powder}} espresso powder, and {{qty:Chocolate Filling::Salt}} salt.',
        'Slowly pour in {{qty:Chocolate Filling::Whole Milk}} whole milk, whisking thoroughly until completely smooth before turning on the heat.',
        'Cook over medium heat, whisking constantly until the mixture bubbles and thickens into a pudding-like consistency.',
        'Remove the pan from the heat.'
      ],stepImages:['images/recipes/chocolate-cream-comfort-pie/step-02-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-02-02.jpg','images/recipes/chocolate-cream-comfort-pie/step-02-03.jpg','images/recipes/chocolate-cream-comfort-pie/step-02-04.jpg']},
      {number:'03',title:'MAKE IT SILKY',clock:'12:28 AM',paragraphs:[
        'In a separate bowl, whisk 4 egg yolks.',
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
        'Whip 200ml cold cream to soft peaks.',
        'Gradually add 2 Tbsp sugar and whip until medium-firm peaks form.',
        'Dollop generously over the chilled pie and finish with cocoa powder, cacao nibs, or flaky sea salt.'
      ],stepImages:['images/recipes/chocolate-cream-comfort-pie/step-05-01.jpg','images/recipes/chocolate-cream-comfort-pie/step-05-02.jpg']}
    ],
    notes:[['Recreating the Flavor','I use dark chocolate together with cocoa powder and a hint of espresso powder to take the filling beyond a simple cocoa base, creating a deeper and more layered chocolate flavor.'],['Midnight Shortcut','Chilling the crust in the freezer while preparing the filling saves time without adding another complicated step.'],['Midnight Compromises','If you are too exhausted to whisk by hand, store-bought whipped cream works perfectly well. Freshly whipped cream, however, gives a better texture and a prettier finish when you have a few extra minutes.']],
    finePrint:{'Best Eaten':'Tomorrow — the filling becomes firmer and the flavors settle overnight.','Make ahead':'Yes — up to 1 day ahead. Prepare the pie and add the whipped cream just before serving.','Storage':'Refrigerate, covered, for up to 3 days.','Freezer':'Not Recommended.','Reheat':'N/A — serve chilled.'},
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
    meal:'Main Dishes',
    categories:['Main Dishes'],
    ingredientCategories:['Pork'],
    dateAdded:'2026-09-27',
    timeStamp:'11:44 PM',
    description:'A fiery Nagoya-inspired Taiwan mince served over rice with a soft-boiled egg.',
    heroImage:'images/recipes/addictive-spicy-taiwan-ground-pork/hero.jpg', recipeImage:'images/recipes/addictive-spicy-taiwan-ground-pork/recipe.jpg',
    unitOverrides:{imperial:{'sesame oil':'tbsp','soy sauce':'tbsp','Shaoxing wine':'tbsp','doubanjiang':'tbsp','sugar':'tsp'}},
    stepQuantityConversion:true,
    usCupFractions:true,
    integerUnits:{metric:['sesame oil','sugar']},
    richTextNotes:true,
    cardImage:'images/recipes/addictive-spicy-taiwan-ground-pork/hero.jpg',
    story:`*Taiwan Ramen* (台湾ラーメン) at Misen (味仙) is famous in my hometown, Nagoya, Japan. Despite its name, this fiery ramen isn’t actually from Taiwan—the founder named it “Taiwan Ramen” after his own Taiwanese roots. It is one of Nagoya’s local food that evolved entirely in Japan, and this intensely spicy, strangely addictive flavor is so irresistible that I found myself going back to the restaurant again on my last trip home.\n\nTonight, I’m making the Taiwan ground pork the star of the dish, serving it over rice with a soft-boiled egg instead of its original ramen noodles. It might be so spicy that I end up staying awake all night.`,
    ingredientFile:[
      {name:'GROUND PORK',details:[['Flavor','Rich, savory, fatty'],['Substitute','Ground chicken or turkey, although fatty pork gives the closest result']]},
      {name:'FRESH RED CHILI',details:[['Origin','East & Southeast Asia'],['Flavor','Fresh, sharp, bright heat'],['Substitute','Dried Thai chili or red chili flakes'],['Storage','Refrigerate loosely wrapped.'],['Why here?','Plenty of fresh chili and garlic are essential to this recipe!']]},
      {name:'GARLIC',details:[['Flavor','Fresh, garlicky, slightly sweet'],['Why here?','Plenty of fresh chili and garlic are essential to this recipe!']]},
      {name:'DOUBANJIANG',details:[['Origin','China'],['Flavor','Fermented, salty, savory, deeply spicy'],['Substitute','Chili bean paste or, in a pinch, a combination of chili paste and a little miso']]}
    ],
    ingredients:[
      {group:'Taiwan Mince'},
      {amount:454,unit:'g',imperialAmount:1,imperialUnit:'lb',item:'Fatty ground pork'},
      {amount:20,unit:'g',item:'Garlic, finely minced',imperialMinAmount:6,imperialMaxAmount:8,imperialMinUnit:'cloves',imperialMaxUnit:'cloves',instructionImperialMinUnit:'garlic cloves',instructionImperialMaxUnit:'garlic cloves',instructionMetricSuffix:' of garlic',compactRange:true},
      {minAmount:3,maxAmount:5,unit:'',item:'Fresh red chilies, finely minced, seeds included'},
      {amount:45,unit:'ml',item:'Sesame oil'},
      {amount:30,unit:'ml',item:'Soy sauce'},
      {amount:30,unit:'ml',item:'Shaoxing wine'},
      {amount:15,unit:'ml',item:'Doubanjiang'},
      {amount:10,unit:'ml',imperialAmount:2,imperialUnit:'tsp',item:'Oyster sauce'},
      {amount:10,unit:'ml',imperialAmount:2,imperialUnit:'tsp',item:'Gochujang'},
      {amount:2.5,unit:'ml',imperialAmount:0.5,imperialUnit:'tsp',item:'Sugar'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Chicken bouillon powder'},
      {amount:180,unit:'ml',imperialAmount:0.75,imperialUnit:'cup',item:'Water'},
      {unit:'',item:'Black pepper, to taste'},
      {amount:55,unit:'g',imperialAmount:1,imperialUnit:'small bunch',item:'Garlic chives or green onion, cut into 3–4 cm pieces'},
      {minAmount:3,maxAmount:5,unit:'ml',imperialMinAmount:0.5,imperialMaxAmount:1,imperialMinUnit:'tsp',imperialMaxUnit:'tsp',compactRange:true,item:'Sesame oil, for finishing'},
      {group:'To Serve'},
      {unit:'',item:'Hot steamed white rice'},
      {unit:'',item:'Soft-boiled egg'}
    ],
    stats:{prep:'10 mins',cook:'20 mins',total:'30 mins',serves:4,quest:'⭐⭐⭐☆☆'},
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
        'Add {{qty:soy sauce}} soy sauce, {{qty:oyster sauce}} oyster sauce, {{qty:gochujang}} gochujang, {{qty:sugar}} sugar, {{qty:chicken bouillon powder}} chicken bouillon powder, and {{qty:water}} water.',
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
    finePrint:{'Best Eaten':'Fresh','Make ahead':'Yes','Storage':'Airtight container in the refrigerator for up to 3 days','Reheat':'Microwave or stovetop; add a splash of water if the mince becomes too dry','Freezer':'Freeze the Taiwan mince for up to 1–2 months','Fried egg':'Best made fresh'},
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
    meal:'Desserts',
    categories:['Desserts'],
    ingredientCategories:['Fruit'],
    dateAdded:'2026-09-27',
    timeStamp:'11:58 PM',
    description:'Apple crème brûlée inspired by Amélie (2001), with soft tart apples beneath silky custard and brittle caramel.',
    heroImage:'images/recipes/apple-creme-brulee/hero.jpg', recipeImage:'images/recipes/apple-creme-brulee/recipe.jpg',
    cardImage:'images/recipes/apple-creme-brulee/hero.jpg',
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
      {amount:300,unit:'g',item:'Apples, peeled, cored, and cut into 1 cm cubes'},
      {amount:15,unit:'g',item:'Unsalted Butter'},
      {amount:18.75,unit:'g',item:'Brown Sugar'},
      {amount:15,unit:'ml',item:'Lemon Juice'},
      {amount:2,unit:'g',item:'Ground Cinnamon'},
      {amount:1,unit:'pinch',item:'Fine Salt'},
      {group:'Custard'},
      {amount:100,unit:'ml',item:'Whole Milk'},
      {amount:400,unit:'ml',item:'35% Whipping Cream'},
      {amount:5,unit:'',item:'Large Egg Yolks'},
      {amount:62.5,unit:'g',item:'Granulated Sugar'},
      {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'Vanilla Extract'},
      {amount:1,unit:'pinch',item:'Fine Salt'},
      {group:'Brûlée'},
      {unit:'',item:'Granulated Sugar, for brûlée'}
    ],
    stats:{prep:'20 mins',cook:'35 mins',total:'55 mins + chilling',serves:6,quest:'⭐⭐⭐⭐⭐'},
    steps:[
      {number:'01',title:'PREHEAT & SOFTEN THE APPLES',clock:'11:20 PM',paragraphs:[
        'Preheat oven to 140°C / 285°F.',
        'Melt {{qty:unsalted butter}} butter over medium heat.',
        'Add {{qty:apples}} apples, {{qty:brown sugar}} brown sugar, {{qty:lemon juice}} lemon juice, {{qty:ground cinnamon}} cinnamon, and a pinch of salt.',
        'Cook for 5–7 minutes, until the apples are tender but still hold their shape.',
        'If there is excess liquid, cook for another 1–2 minutes until glossy but not wet.',
        'Cool slightly.'
      ],stepImages:['images/recipes/apple-creme-brulee/step-01-01.jpg','images/recipes/apple-creme-brulee/step-01-02.jpg','images/recipes/apple-creme-brulee/step-01-03.jpg','images/recipes/apple-creme-brulee/step-01-04.jpg']},
      {number:'02',title:'MAKE THE CUSTARD',clock:'11:32 PM',paragraphs:[
        'Heat {{qty:whole milk}} whole milk and {{qty:35% whipping cream}} 35% whipping cream over medium-low heat until hot and steaming, but do not boil.',
        'Whisk 5 egg yolks, {{qty:granulated sugar}} sugar, and a pinch of salt gently. Avoid creating too much foam.',
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
    finePrint:{'Best eaten':'The day the sugar is caramelized.','Make ahead':'Yes.','Storage':'Keep the baked custard covered and refrigerated for up to 2 days. Caramelize the sugar just before serving.','Reheat':'Do not reheat. Serve chilled.'},
    tags:['Dessert','French','Apples','CremeBrulee','Custard','Movie'],
    mainIngredients:['Apples','Cream','Milk','Egg Yolks','Vanilla'],
    usualsCategory:''
  },


  {
    slug:'mexican-calabaza-en-tacha-pumpkin-pie',
    title:'Mexican (Calabaza en Tacha) Pumpkin Pie',
    source:'Movie & TV', sourceSecondary:'Family & Tradition', original:'Coco (2017)', dish:'Calabaza en Tacha-inspired Pumpkin Pie', cuisine:'Mexican',
    course:'Baking', courseDisplay:'Baking, Desserts', meal:'Baking', categories:['Baking','Desserts'], ingredientCategories:['Vegetable','Pie'],
    dateAdded:'2026-09-27', timeStamp:'11:48 PM',
    usCupFractions:true, stepQuantityConversion:true, unitOverrides:{metric:{'Cinnamon Stick':'stick'}},
    tags:['Movie','Coco','Pie','Mexican','Pumpkin','DíaDeMuertos','Ofrenda','CalabazaenTacha','Baking','Dessert'],
    heroImage:'images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/hero.jpg',
    recipeTitle:'Calabaza en Tacha Pumpkin Pie', showPan:true,
    recipeImage:'images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/recipe.jpg',
    cardImage:'images/recipes/mexican-calabaza-en-tacha-pumpkin-pie/hero.jpg', usesUsual:'building-block-pie-crust',
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
    stats:{prep:'25 mins',cook:'55–65 mins',total:'1 hr 30 mins',serves:'8',pan:'23 cm / 9-inch pie dish',quest:'⭐⭐⭐⭐☆'},
    ingredients:[
      {group:'PIE CRUST',usualSlug:'building-block-pie-crust',usualLabel:'Building Block Pie Crust'},
      {group:'CALABAZA FILLING'},
      {amount:400,unit:'g',imperialAmount:5/3,imperialUnit:'cup',imperialFraction:{num:5,den:3},item:'Pumpkin Purée'}, {amount:2,unit:'large',imperialAmount:2,imperialUnit:'large',item:'Eggs'}, {amount:180,unit:'ml',imperialAmount:3/4,imperialUnit:'cup',item:'Half & Half / 10% Cream'},
      {amount:60,unit:'g',imperialAmount:1/3,imperialUnit:'cup',imperialFraction:{num:1,den:3},item:'Dark Brown Sugar'}, {amount:10,unit:'g',imperialAmount:1/2,imperialUnit:'tbsp',item:'Molasses'}, {amount:15,unit:'ml',imperialAmount:1,imperialUnit:'tbsp',item:'Orange Juice'}, {amount:0.25,unit:'tsp',imperialAmount:1/4,imperialUnit:'tsp',item:'Salt'},
      {group:'SPICE INFUSION'},
      {amount:0.5,unit:'',imperialAmount:0.5,imperialUnit:'',item:'Cinnamon Stick'}, {amount:2,unit:'',item:'Whole Cloves'}, {amount:1,unit:'',item:'Star Anise'}, {amount:1,unit:'strip',item:'Orange Peel, about 2–3 cm (1 inch) long'},
      {group:'INSTRUCTION-ONLY SYRUP',hideFromIngredients:true},
      {amount:35,unit:'g',imperialAmount:2.5,imperialUnit:'tbsp',item:'Dark Brown Sugar',hideFromIngredients:true}, {amount:5,unit:'g',imperialAmount:1,imperialUnit:'tsp',item:'Molasses',hideFromIngredients:true}, {amount:30,unit:'ml',imperialAmount:2,imperialUnit:'tbsp',item:'Orange Juice',hideFromIngredients:true}, {amount:15,unit:'ml',imperialAmount:1,imperialUnit:'tbsp',item:'Water',hideFromIngredients:true}, {amount:1,unit:'strip',imperialAmount:1,imperialUnit:'strip',item:'Orange Peel, about 2–3 cm (1 inch) long',hideFromIngredients:true}, {amount:1,unit:'pinch',imperialAmount:1,imperialUnit:'pinch',item:'Salt',hideFromIngredients:true}
    ],
    steps:[
      {number:'01',title:'MAKE THE CRUST',clock:'11:48 PM',paragraphs:['Preheat oven to 180°C / 350°F.','Start with one of our usual recipes - Building Block Pie Crust.'],stepNote:'**Midnight Shortcut:** Use a good-quality store-bought pie crust. Tonight is about the filling.'},
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
    finePrint:{'Best eaten':'The next day or fully cooled the same night','Make ahead':'Yes','Storage':'Cover and refrigerate for up to 3 days','Reheat':'Best served cold or at room temperature; no reheating necessary','Syrup':'Store separately in the refrigerator for up to 5 days'},
    tags:['Movie','Coco','Pie','Mexican','Pumpkin','DíaDeMuertos','Ofrenda','CalabazaenTacha','Baking','Dessert'], mainIngredients:['Pumpkin','Orange','Cinnamon','Molasses'],
    footerInspiredBy:'Calabaza en Tacha', footerCuisine:'Mexican, Canadian, North American', footerCourse:'Baking · Dessert', footerMainIngredients:['Pumpkin','Orange','Cinnamon','Molasses']
  },
  {
    slug:'banana-banana-cream-pie', title:'Banana Banana Cream Pie', source:'Midnight Experiment', dish:'Banana Cream Pie', cuisine:'American',
    course:'Baking', courseDisplay:'Baking, Dessert', meal:'Baking', categories:['Baking','Desserts'], ingredientCategories:['Fruit','Pie','Eggs','Pantry'], dateAdded:'2026-09-27', timeStamp:'2:50 AM',
    tags:['Dessert','Baking','Banana','Pie'], heroImage:'images/recipes/banana-banana-cream-pie/hero.jpg', recipeImage:'images/recipes/banana-banana-cream-pie/recipe.jpg', cardImage:'images/recipes/banana-banana-cream-pie/card.jpg',
    unitOverrides:{imperial:{'plain biscuits, finely crushed':'cup','unsalted butter, melted':'cup','whole milk':'cup','granulated sugar':'tbsp','cornstarch':'tbsp','heavy cream':'cup','sugar, to taste':'tbsp'}},
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
    stats:{prep:'20 mins',cook:'30 mins',chill:'3+ hrs',total:'3 hrs 50 mins',serves:'6–8',pan:'9-inch / 23 cm pie plate',quest:'⭐⭐⭐☆☆'}, showPan:true, showChill:true,
    ingredients:[
      {group:'Crust'},
      {amount:200,unit:'g',item:'plain biscuits, finely crushed'}, {amount:0.5,unit:'tsp',imperialAmount:0.5,imperialUnit:'tsp',item:'ground cinnamon'}, {amount:0.25,unit:'tsp',imperialAmount:0.25,imperialUnit:'tsp',item:'ground ginger'}, {amount:1,unit:'pinch',item:'ground nutmeg'}, {amount:0.25,unit:'tsp',imperialAmount:0.25,imperialUnit:'tsp',item:'salt'}, {amount:80,unit:'g',item:'unsalted butter, melted'},
      {group:'Filling'},
      {amount:3,unit:'',item:'bananas (approx. 250 g flesh), very ripe and mashed'}, {amount:2,unit:'',item:'firm-ripe bananas, cut in half lengthwise'}, {amount:400,unit:'ml',item:'Whole Milk'}, {amount:3,unit:'large',item:'egg yolks'}, {amount:35,unit:'g',item:'granulated sugar'}, {amount:35,unit:'g',imperialAmount:4.5,imperialUnit:'tbsp',item:'cornstarch'}, {amount:5,unit:'ml',imperialAmount:1,imperialUnit:'tsp',item:'vanilla extract'}, {amount:1,unit:'pinch',imperialAmount:1,imperialUnit:'pinch',item:'salt'},
      {group:'Topping (Optional)'},
      {amount:180,unit:'ml',item:'heavy cream'}, {minAmount:13,maxAmount:25,unit:'g',imperialMinAmount:1,imperialMaxAmount:2,imperialMinUnit:'tbsp',imperialMaxUnit:'tbsp',imperialCompactRange:true,item:'sugar, to taste'}, {unit:'',item:'Cinnamon or banana chips, to finish',hideIngredientInfo:true}
    ],
    steps:[
      {number:'01',title:'TURN IT UP & MAKE IT JAMMY',clock:'2:55 AM',paragraphs:[
        'Preheat your oven to 180°C/350°F.',
        'Cook {{qty:bananas (approx. 250 g flesh), very ripe and mashed}} very ripe mashed bananas (approx. {{approx:bananas (approx. 250 g flesh), very ripe and mashed}}) in a nonstick skillet over medium-low heat for 8–12 minutes, stirring often.',
        'Keep cooking until the moisture cooks off and the banana turns thick, glossy, and jammy.',
        'No sugar. No butter. Just banana. Set aside.'
      ],stepImages:[]},
      {number:'02',title:'FAKE THE BISCOFF',clock:'3:08 AM',paragraphs:[
        'Crush {{qty:plain biscuits, finely crushed}} plain biscuits finely.',
        '**Food Processor (Fastest):** Pulse for about 30 seconds.',
        '**Quiet Mode (Silent):** Seal in a zip-top bag and roll with a rolling pin—perfect for late-night baking.',
        'Mix with {{qty:ground cinnamon}} cinnamon, {{qty:ground ginger}} ginger, {{qty:ground nutmeg}} nutmeg, {{qty:salt}} salt, and {{qty:unsalted butter, melted}} melted butter.',
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
        'Whip {{qty:heavy cream}} cold heavy cream to soft peaks. Add {{qty:sugar, to taste}} sugar and whip to medium-firm peaks.',
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
    finePrint:{'Best eaten':'Next Day (after chilling thoroughly)','Make ahead':'Yes','Storage':'Airtight container in the fridge for up to 3 days','Reheat':'Enjoy chilled straight from the fridge'},
    mainIngredients:['Banana','Milk','Egg Yolks','Biscuits'], footerInspiredBy:'Midnight Experiment', footerCuisine:'American', footerCourse:'Baking, Dessert', footerMainIngredients:['Banana','Milk','Egg Yolks','Biscuits']
  },
  {
    slug:'sweet-potato-ginger-pie', title:'Sweet Potato Ginger Pie', source:'Midnight Experiment', original:'N/A', cuisine:'Chinese', cuisineSecondary:'American',
    course:'Baking', courseDisplay:'Baking, Dessert', meal:'Baking', categories:['Baking','Desserts'], ingredientCategories:['Sweet Potato','Ginger','Cream','Cinnamon','Pie'], dateAdded:'2026-09-27', timeStamp:'11:35 PM',
    tags:['Midnight Experiment','Dessert','Baking','Chinese','American','Sweet Potato','Ginger','Pie'], heroImage:'images/recipes/sweet-potato-ginger-pie/hero.jpg', recipeImage:'images/recipes/sweet-potato-ginger-pie/recipe.jpg', cardImage:'images/recipes/sweet-potato-ginger-pie/hero.jpg', usesUsual:'building-block-pie-crust', usCupFractions:true, forceCupUnits:true, stepQuantityConversion:true,
    story:`Inspired by traditional Chinese Sweet Potato Ginger Dessert Soup (番薯姜糖水), a simple sweet soup made by simmering sweet potatoes with fresh ginger and sugar in water.

I love how naturally sweet potato and ginger work together—the earthy sweetness of the sweet potato balanced by the warm, peppery kick of fresh ginger. I thought that combination would be perfect in a pie.

Instead of simply replacing pumpkin with sweet potato in a classic pumpkin pie, I wanted a warmer, spicier pie where fresh ginger could shine.

The result is silky and creamy, with naturally sweet roasted sweet potato, warm cinnamon, and a gentle kick of fresh ginger.`,
    ingredientFile:[
      {name:'SWEET POTATOES',details:[['Origin','South America'],['Flavor','Naturally sweet, earthy, creamy'],['Substitute','Japanese or Korean sweet potato works, although it is denser and sweeter.'],['Storage','Store whole sweet potatoes in a cool, dry place. Once cooked, refrigerate in an airtight container for up to 3 days.']]},
      {name:'FRESH GINGER',details:[['Flavor','Warm, peppery, citrusy, spicy'],['Substitute','1½ g ground ginger can replace 6 g fresh ginger, but fresh ginger gives a brighter flavor.'],['Storage','Refrigerate for several weeks or freeze and grate directly from frozen.']]},
      {name:'10% CREAM',details:[['Flavor','Light, creamy, milky'],['Substitute','Half-and-half works well. For a similar fat level, mix 70 g 2% milk + 30 g 35% cream.'],['Storage','Refrigerate after opening.']]}
    ],
    stats:{prep:'30 mins',cook:'1 hr 45 mins',chill:'2 hrs+',total:'4 hrs 15 mins+',serves:'8',quest:'⭐⭐⭐⭐☆'},
    ingredients:[
      {group:'PIE CRUST',usualSlug:'building-block-pie-crust',usualLabel:'Building Block Pie Crust'},
      {group:'FILLING'},
      {amount:400,unit:'g',imperialAmount:2,imperialUnit:'cup',item:'cooked sweet potato flesh'}, {amount:100,unit:'ml',imperialAmount:7,imperialUnit:'tbsp',item:'10% cream'}, {amount:70,unit:'g',imperialAmount:1,imperialUnit:'cup',imperialFraction:{num:1,den:3},item:'white sugar'}, {amount:2,unit:'',item:'large eggs'}, {amount:6,unit:'g',item:'fresh ginger, finely grated'}, {amount:2,unit:'g',imperialAmount:0.75,imperialUnit:'tsp',item:'ground cinnamon'}, {amount:3,unit:'g',imperialAmount:0.5,imperialUnit:'tsp',item:'kosher salt'},
      {group:'TOPPING'},
      {amount:200,unit:'ml',imperialAmount:1,imperialUnit:'cup',imperialFraction:{num:7,den:8},item:'35% whipping cream'}, {amount:2,unit:'Tbsp',imperialAmount:2,imperialUnit:'tbsp',item:'white sugar'}, {unit:'',item:'Cinnamon, for finishing'}
    ],
    steps:[
      {number:'01',title:'COOK THE SWEET POTATO',clock:'11:35 PM',paragraphs:[
        'For the best flavor, roast whole sweet potatoes at 205°C / 400°F for 45–60 minutes, until completely soft.',
        'Midnight Shortcut — Microwave',
        'Peel and cut the sweet potato into chunks. Place in a microwave-safe bowl with a small splash of water and cover.',
        'Midnight Shortcut — Boil',
        'Peel and cut the sweet potato into chunks. Simmer in water for 15–20 minutes, until fork-tender.'
      ],stepImages:[]},
      {number:'02',title:'MAKE THE CRUST',clock:'11:45 PM',paragraphs:[
        'While the sweet potatoes are roasting… start making Building Block Pie Crust.',
        'Prick the bottom well with a fork. Bake in the same oven at 205°C / 400°F for 10–12 minutes, until set and lightly golden.',
        'Midnight Shortcut',
        'Use a good-quality store-bought pie crust. Tonight is about the filling.'
      ],stepImages:[]},
      {number:'03',title:'BLEND THE FILLING',clock:'12:25 AM',paragraphs:[
        'Lower the oven to 175°C / 350°F.',
        'Once the sweet potato is cooked and cool enough to handle, measure {{qty:cooked sweet potato flesh}}.',
        'Finely grate {{qty:fresh ginger, finely grated}} ginger.',
        'Combine {{qty:cooked sweet potato flesh}} sweet potato, {{qty:10% cream}} 10% cream, {{qty:FILLING::white sugar}} white sugar, {{qty:large eggs}} large eggs, {{qty:fresh ginger, finely grated}} fresh ginger, {{qty:ground cinnamon}} ground cinnamon, and {{qty:kosher salt}} kosher salt.',
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
        'Whip {{qty:35% whipping cream}} cold whipping cream to soft peaks.',
        'Gradually add {{qty:TOPPING::white sugar}} sugar and continue whipping until medium-firm peaks form.',
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
    finePrint:{'Best eaten':'The next day, fully chilled','Make ahead':'Yes','Storage':'Cover and refrigerate for up to 3 days','Reheat':'Best served chilled or slightly cool. If you prefer it warm, gently warm individual slices in a low oven.','Best flavor':'After an overnight rest, when the ginger, sweet potato, and cinnamon have had time to come together.'},
    mainIngredients:['Sweet Potato','Ginger','Cream','Cinnamon'], footerInspiredBy:'Traditional', footerCuisine:'Chinese · American', footerCourse:'Dessert', footerMainIngredients:['Sweet Potato','Ginger','Cream','Cinnamon']
  },
  {
    slug:'building-block-pie-crust', title:'Building Block Pie Crust', source:'The Usuals', cuisine:'American', course:'Baking', courseDisplay:'Baking', meal:'Baking', categories:['Baking'], ingredientCategories:['Pie'], dateAdded:'2026-09-27', timeStamp:'',
    isUsuals:true, usualsCategory:'BASES & CRUSTS', foundInIntro:'Recipes that use this crust...', hideRecipeTags:true,
    description:'The crust we make when a pie calls for a crust.',
    usualIntro:'This is our go-to pie crust — the one we come back to whenever a recipe needs a buttery, tender crust.\nNothing fancy. Just a reliable crust that works.\n\nWe use it for sweet pies, savoury pies, and pretty much anything in between.',
    heroImage:'images/recipes/building-block-pie-crust/hero.jpg', recipeImage:'images/recipes/building-block-pie-crust/recipe.jpg', cardImage:'',
    unitOverrides:{imperial:{'all-purpose flour':'cup','cold unsalted butter, cubed':'cup','salt':'tsp'},metric:{'cold water':'ml'}},
    densityOverrides:{'all purpose flour|cup':120,'cold unsalted butter cubed|cup':113},
    stepQuantityConversion:true,
    usCupFractions:true,
    ingredientFile:[],
    ingredients:[
      {amount:180,unit:'g',imperialAmount:1.5,imperialUnit:'cup',item:'All-Purpose Flour'},
      {amount:113,unit:'g',imperialAmount:0.5,imperialUnit:'cup',imperialFraction:{num:1,den:2},item:'Cold Unsalted Butter, cubed'},
      {amount:3,unit:'g',imperialAmount:0.5,imperialUnit:'tsp',item:'Salt'},
      {minAmount:45,maxAmount:60,unit:'ml',imperialMinAmount:3,imperialMaxAmount:4,imperialMinUnit:'tbsp',imperialMaxUnit:'tbsp',item:'Cold Water'},
    ],
    stats:{prep:'15 mins',cook:'15 mins',total:'30 mins',serves:'8',pan:'23 cm / 9-inch pie dish',quest:'⭐⭐⭐⭐☆'},
    steps:[
      {number:'01',title:'MAKE THE CRUST',clock:'',paragraphs:[
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
    tags:['The Usuals','Bases & Crusts','Pie'], mainIngredients:['Flour','Butter','Salt','Pie']
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
window.MIDNIGHT_INGREDIENTS = ['Chicken','Beef','Pork','Fish & Seafood','Vegetable','Potatoes','Sweet Potato','Rice','Noodles','Eggs','Cheese','Fruit','Pantry','Herbs & Spices','Ginger','Cream','Cinnamon','Chocolate','Pie'];
window.MIDNIGHT_MEALS = window.MIDNIGHT_COURSES;

window.MIDNIGHT_USUALS_CATEGORIES = ['SAUCES & DRESSINGS','BASES & CRUSTS','TOPPINGS & EXTRAS','SWEET STAPLES','FROZEN','MAYBE MORE…'];
