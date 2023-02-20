/**Dans un premier temps, implémentez deux classes, que vous intitulerez Partie et Joueur.
-Un Joueur dispose d'un nom, d'un prénom, d'un nombre de points valant 100 par défaut. On doit également pouvoir connaître son tour de jeu, valant 0 par défaut.
-Une Partie comporte des joueurs, un joueurVainqueur que l'on ne connaît pas par défaut, et d'un tour.
-Initialisez une partie, ainsi que 3 nouveaux joueurs. */
class Partie {
	constructor(gamer, winner, round) {
		this.gamer = gamer;
		this.winner = winner;
		this.round = round;
	}
}

class Joueur {
	constructor(lastName, firstName) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.value = 100;
	}
}

let winner = [];

const perso1 = new Joueur('DOE', 'John');
const perso2 = new Joueur('HALL', 'Berry');
const perso3 = new Joueur('JOHANSSON', 'Scarlett');
