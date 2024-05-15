// Fonction pour rechercher des héros
function search() {
    var input = document.querySelector('input[type="text"]').value.trim().toLowerCase();

    var heroes = [
        {
            id: 'tony-stark',
            name: 'Tony Stark',
            alias: 'Iron Man'
        },
        {
            id: 'bruce-banner',
            name: 'Bruce Banner',
            alias: 'Hulk'
        },
        {
            id: 'thor',
            name: 'Thor',
            alias: 'Dieu du Tonnerre'
        }
    ];

    heroes.forEach(hero => {
        var nameID = document.getElementById(hero.id);
        var found = hero.name.toLowerCase().includes(input) || (hero.alias && hero.alias.toLowerCase().includes(input));
        nameID.style.display = found ? 'block' : 'none';
    });
}
