/**Dans un premier temps, implémentez deux classes, que vous intitulerez Partie et Joueur.
-Un Joueur dispose d'un nom, d'un prénom, d'un nombre de points valant 100 par défaut. On doit également pouvoir connaître son tour de jeu, valant 0 par défaut.
-Une Partie comporte des joueurs, un joueurVainqueur que l'on ne connaît pas par défaut, et d'un tour.
-Initialisez une partie, ainsi que 3 nouveaux joueurs. */
class Partie {
	constructor(joueurs, tour, joueurVainqueur) {
		this.joueurs = joueurs;
		this.tour = tour;
		this.joueurVainqueur = null;
	}
}

class Joueur {
	constructor(lastName, firstName, points, tour) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.points = 100;
		this.tour = 0;
	}
}

const perso1 = new Joueur('DOE', 'John', 100, 0);
const perso2 = new Joueur('HALL', 'Berry', 100, 0);
const perso3 = new Joueur('JOHANSSON', 'Scarlett', 100, 0);

const partie = new Partie(3, [perso1, perso2, perso3]);

console.log(partie);
