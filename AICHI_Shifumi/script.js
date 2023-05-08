const CHOIX_HUMAIN = document.querySelector('#votreChoix');
const CHOIX_ORDI = document.querySelector('#ordiChoix');
const AFFICHER_RESULTAT = document.querySelector('#resultat');
const CHOIX_POSSIBLES = document.querySelectorAll('.choix');
let joueur;
let ordi;
let resultat;

CHOIX_POSSIBLES.forEach(button => button.addEventListener("click", () => {
    joueur = button.textContent;
    tourOrdi();
    CHOIX_HUMAIN.textContent = `${joueur}`;
    CHOIX_ORDI.textContent = `${ordi}`;
    AFFICHER_RESULTAT.textContent = quiGagne();
}))

function tourOrdi() {
    const random = Math.floor(Math.random() * 3) + 1;

    switch (random) {
        case 1:
            ordi = "pierre";
            break;
        case 2:
            ordi = "feuille";
            break;
        case 3:
            ordi = "ciseaux";
            break;
    }
}

function quiGagne(){
    if (joueur === ordi) {
        return "Egalité !";
        }
    else if (ordi == "pierre"){
        return(joueur == "feuille") ? "Vous avez gagné! !" : "Vous avez perdu"
    }
    else if (ordi == "feuille"){
        return(joueur == "ciseaux") ? "Vous avez gagné! !" : "Vous avez perdu"
    }
    else if (ordi == "ciseaux"){
        return(joueur == "pierre") ? "Vous avez gagné! !" : "Vous avez perdu"
    }

}