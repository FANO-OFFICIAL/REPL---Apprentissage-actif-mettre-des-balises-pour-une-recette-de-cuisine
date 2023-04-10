var section = document.querySelector('section');
var textareaHTML = document.querySelector('.playable-html');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');

var codeResult = '\n'+ 
'<h1>Recette rapide de l\'houmous</h1>\n'+ 
'\n'+ 
'<p>Cette recette fait du houmous rapide et savoureux, sans gâchis. Il a été adapté d\'un certain nombre de recettes différentes que j\'ai lues au fil des ans.</p>\n'+ 
'\n'+ 
'<p>Le houmous est une délicieuse pâte épaisse largement utilisée dans les plats grecs et moyen-orientaux. Il est très savoureux avec de la salade, des viandes grillées et des pains pita.</p>\n'+ 
'\n'+ 
'<h2>Ingrédients</h2>\n'+ 
'\n'+ 
'<ul>\n'+ 
'  <li>1 boîte (400g) de pois chiches (garbanzo)</li>\n'+ 
'  <li>175g de tahin</li>\n'+ 
'  <li>6 tomates séchées</li>\n'+ 
'  <li>Un demi poivron rouge</li>\n'+ 
'  <li>Une pincée de poivre de cayenne</li>\n'+ 
'  <li>1 gousse d\'ail</li>\n'+ 
'  <li>Un filet d\'huile d\'olive</li>\n'+ 
'</ul>\n'+ 
'<h2>Instructions</h2>\n'+ 
'\n'+ 
'<ol>\n'+ 
'  <li>Retirer la peau de l\'ail et hacher grossièrement</li>\n'+ 
'  <li>Retirer toutes les graines et le pédoncule du piment et hacher grossièrement</li>\n'+ 
'  <li>Ajouter tous les ingrédients dans un robot culinaire</li>\n'+ 
'  <li>Transformez tous les ingrédients en une pâte.</li>\n'+ 
'  <li>Si vous voulez un houmous grossier "gros", traitez-le pendant une courte période</li>\n'+ 
'  <li>Si vous voulez un houmous lisse, traitez-le plus longtemps</li>\n'+ 
'</ol>\n'+ 
'\n'+ 
'<p>Pour une saveur différente, vous pouvez essayer de mélanger une petite mesure de citron et de coriandre, de piment, de citron vert et de chipotle, d\'harissa et de menthe ou d\'épinards et de fromage feta. Expérimentez et voyez ce qui fonctionne pour vous.</p>\n'+ 
'\n'+ 
'<h2>Conservation</h2>\n'+ 
'\n'+ 
'<p>Réfrigérez le houmous fini dans un récipient hermétique. Vous devriez pouvoir l\'utiliser pendant environ une semaine après l\'avoir fait. S\'il commence à devenir pétillant, vous devez absolument le jeter.</p>\n'+ 
'\n'+ 
'<p>Le houmous convient à la congélation; vous devriez le décongeler et l\'utiliser dans quelques mois.</p>\n'+ 
'\n'+ 
'';
var htmlCodeInit = '\n'+ 
'Recette rapide de l\'houmous\n'+ 
'\n'+ 
'Cette recette fait du houmous rapide et savoureux, sans gâchis. Il a été adapté d\'un certain nombre de recettes différentes que j\'ai lues au fil des ans.\n'+ 
'\n'+ 
'Le houmous est une délicieuse pâte épaisse largement utilisée dans les plats grecs et moyen-orientaux. Il est très savoureux avec de la salade, des viandes grillées et des pains pita.\n'+ 
'Ingrédients\n'+ 
'\n'+ 
'    1 boîte (400g) de pois chiches (garbanzo)\n'+ 
'    175g de tahin\n'+ 
'    6 tomates séchées\n'+ 
'    Un demi poivron rouge\n'+ 
'    Une pincée de poivre de cayenne\n'+ 
'    1 gousse d\'ail\n'+ 
'    Un filet d\'huile d\'olive\n'+ 
'\n'+ 
'Instructions\n'+ 
'\n'+ 
'    Retirer la peau de l\'ail et hacher grossièrement\n'+ 
'    Retirer toutes les graines et le pédoncule du piment et hacher grossièrement\n'+ 
'    Ajouter tous les ingrédients dans un robot culinaire\n'+ 
'    Transformez tous les ingrédients en une pâte.\n'+ 
'    Si vous voulez un houmous grossier "gros", traitez-le pendant une courte période\n'+ 
'    Si vous voulez un houmous lisse, traitez-le plus longtemps\n'+ 
'\n'+ 
'Pour une saveur différente, vous pouvez essayer de mélanger une petite mesure de citron et de coriandre, de piment, de citron vert et de chipotle, d\'harissa et de menthe ou d\'épinards et de fromage feta. Expérimentez et voyez ce qui fonctionne pour vous.\n'+ 
'Conservation\n'+ 
'\n'+ 
'Réfrigérez le houmous fini dans un récipient hermétique. Vous devriez pouvoir l\'utiliser pendant environ une semaine après l\'avoir fait. S\'il commence à devenir pétillant, vous devez absolument le jeter.\n'+ 
'\n'+ 
'Le houmous convient à la congélation; vous devriez le décongeler et l\'utiliser dans quelques mois.\n'+ 
'';
textareaHTML.value = htmlCodeInit;

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);