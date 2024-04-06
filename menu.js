// Fonction pour rechercher des héros
function search() {
    var input = document.querySelector('input[type="text"]').value.toLowerCase();

    var heroes = document.querySelectorAll('#menu-list section');

    heroes.forEach(function(hero) {
        var name = hero.textContent.toLowerCase();

        if (name.includes(input)) {
            hero.style.display = 'block';
        } else {
            hero.style.display = 'none';
        }
    });
}