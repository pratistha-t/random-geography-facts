var buttonNA = $('.na');
var buttonSA = $('.sa');
var buttonEU = $('.eu');
var buttonAS = $('.as');
var buttonAF = $('.af');
var buttonAO = $('.ao');
var buttonAN = $('.an');
var paragraph = $('.replace');

buttonNA.on("click", na);
buttonSA.on("click", sa);
buttonEU.on("click", eu);
buttonAS.on("click", as);
buttonAF.on("click", af);
buttonAO.on("click", ao);
buttonAN.on("click", an);

function na() {
  var naFacts = ["The word “America” comes from the name of Italian explorer Amerigo Vespucci. He is the first person to have realized that the West Indies and Brazil are actually not connected to Asia (as what most people have conjectured from the voyages of Columbus), but are part of another separate landmass of their own.",
"The most dominant languages in North America are Spanish, French, and English. There are also a large number of people who speak Danish, but they are mostly confined to Greenland.",
"The world’s largest fresh water lake is in North America. Lake Superior, located on the border of United States and Canada, has a total surface area of 82,100 square kilometers. It is also the largest of North America’s Great Lakes.",
"Over four hundred tornadoes rip through the prairies in North America on a yearly basis.",
"Cratons are considered as the geological heart of continents because they are located near the center of tectonic plates and are usually very stable. The craton of North America is called Laurentia."];
var random = Math.random()*naFacts.length;
var final = Math.floor(random);
paragraph.text(naFacts[final]);
}

function sa() {
  var saFacts = ["Brazil is not only the largest country on this continent, but it also has the highest number of UNESCO World Heritage Sites, with 21 in total, with Peru in second place with 12 such sites.",
"Located towards the western coast of the continent, the Andes is the longest mountain range in the world, and its peaks can be found spanning a range of 4,500 miles from the north to the south of the continent.",
"The Amazon rainforest is considered to have the greatest biodiversity in the world, with hundreds of different animals species, around 40,000 plant species and a stunning 2.5 million different species of insects.",
"English, Spanish and Portuguese are the most common languages on this continent, but there are still some indigenous languages spoken among a large number of people, such as Quechua (8,9 million speakers), Guarani (4,9 million speakers), and Aymara (2,8 million speakers). In addition to those, linguists estimate that there are more than 300 languages spoken on a daily basis in South America.",
"About 22% of this continent is forests, and they are full of life. The Amazon rainforest is the largest rainforest, but there are other rainforests and cloud forests as well. They are very important for the oxygen production for humans worldwide, and it is estimated that 20% of all the planet’s oxygen is created in these forests."];
  var random = Math.random()*saFacts.length;
  var final = Math.floor(random);
  paragraph.text(saFacts[final]);
}

function eu() {
  var euFacts = ["More than 50% of the total world production of chocolate is sold and eaten by Europeans. Switzerland has the highest consumption per capita, second to Germany.",
"The first humans arrived here around 38,000 B.C. This time was known as the Upper Palaeolithic and the first Europeans are thought to have come from Central and West Asia. Europeans also have the highest amount of Neanderthal which strengthens the theory of Neanderthals and Modern humans mixed from time to time. Neanderthals lived on the continent before modern humans arrived some 40,000 years ago",
"The Perucica forest in Bosnia and Hercegovina is the last surviving rainforest in Europe. It’s a primeval forest and it is only allowed to explore it in the company of trained rangers. It is located in the Sutjeska National Park.",
"Italy, Spain, and France are the biggest wine producing countries in Europe, and together they account for about 70% of the total wine production in the world",
"The longest town name in Europe is Lanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogo, in Wales"];
var random = Math.random()*euFacts.length;
var final = Math.floor(random);
paragraph.text(euFacts[final]);
}

function as() {
  var asFacts = ["Asia is the largest continent on the planet. It has a total size of 44,579,000 km2 (17,212,000 sq mi), and if that wasn’t enough, it’s also the most populous continent in the world. The largest countries in the world can be found here such as Russia, China, and India.",
  "90% of the world's rice is produced and consumed in Asian countries.",
   "50% of the Asian population lack a liver enzyme to metabolize alcohol.",
   "There are more billionaires in Asia than any other continent in the world. China alone has more billionaires than the U.S.",
   "Asia contains 14 of the tallest mountains in the world, including Mount Everest, the tallest mountain in the world"];
  var random = Math.random()*asFacts.length;
  var final = Math.floor(random);
  paragraph.text(asFacts[final]);
}

function af() {
  var afFacts = ["The median age of all Africans is 19.5 years, which is less than half of the median age of Europe",
"More than 1000 languages are spoken in Africs, and other estimates state that number is closer to 2000",
"Africa's population will double to 2 billion people by 2050",
"The Sahara desert in Africa is the largest desert in the world, and also used to be an ocean",
"The world's largest river, the Nile, is found in Africa"];
  var random = Math.random()*afFacts.length;
  var final = Math.floor(random);
  paragraph.text(afFacts[final]);
}

function ao() {
  var aoFacts = ["The average Aussie drinks 96 liters of beer per year",
"Highway 1 in Australia is the longest national highway in the world",
"There are more kangaroos than people in Australia",
"Australia is home to the world's deadliest spider, snake, octupus, fish, and more",
"Australia has over 10000 beaches"];
  var random = Math.random()*aoFacts.length;
  var final = Math.floor(random);
  paragraph.text(aoFacts[final]);
}

function an() {
  var anFacts = ["Fish flourish in lakes under Antarctica",
"70% of the world's fresh water is found in Antarctica",
"Antarctica is the only continent without time zones",
"Antarctica is actually a desert",
"Antarctica was once a tropical desert, about 52 million years ago."];
  var random = Math.random()*anFacts.length;
  var final = Math.floor(random);
  paragraph.text(anFacts[final]);
}
