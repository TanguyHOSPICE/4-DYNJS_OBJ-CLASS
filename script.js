/**Dans un premier temps, implémentez deux classes, que vous intitulerez Partie et Joueur.
-Un Joueur dispose d'un nom, d'un prénom, d'un nombre de points valant 100 par défaut. On doit également pouvoir connaître son tour de jeu, valant 0 par défaut.
-Une Partie comporte des joueurs, un joueurVainqueur que l'on ne connaît pas par défaut, et d'un tour.
-Initialisez une partie, ainsi que 3 nouveaux joueurs. */
/**Modifiez la classe Joueur afin d'implémenter les méthodes suivantes :
-Une méthode permettant de retourner l'identité du joueur (son nom et son prénom).
-Une méthode permettant d'afficher les points du joueur, qui appellera la méthode précédente et affichera le nombre de points du joueur.
-Une méthode permettant à un joueur d'attaquer : une attaque peut faire perdre aléatoirement entre 1 et 50 points à un adversaire. Si l'adversaire n'a plus de points, son total ne peut être négatif, il vaudra simplement zéro. Un joueur dispose de 3 tours, chaque attaque augmente le nombre de tours consommés. */
/**Définissez, pour chaque joueur, une méthode lui permettant d'effectuer une "super attaque". Une super attaque est une attaque faisant perdre 10 points de plus.
-Modifiez la méthode attaque() afin qu'elle accepte un second paramètre "bonus". Le bonus sera cumulé à la valeur initiale de l'attaque. */

class Joueur {
	/**
	 *
	 * @param {string} lastName
	 * @param {string} firstName
	 * @param {number} points
	 * @param {number} tour
	 */
	//nbPoints & tour Pas en parama car défini au départ
	constructor(lastName, firstName) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.nbPoints = 100;
		this.tour = 0;
	}
	rand(nb) {
		return Math.floor(Math.random() * Math.floor(nb));
	}

	attaque(adversaire, bonus = 0) {
		//Une attaque fait perdre entre 1 et 50 pts au hasard
		if (this.tour < 3) {
			//on ajoute le bonus
			const pointToLoose = this.rand(50) + bonus;
			const pointsBeforeAttack = adversaire.nbPoints;
			const pointsAfterAttack = pointsBeforeAttack - pointToLoose;

			if (pointsAfterAttack < 0) {
				adversaire.nbPoints = 0;
			} else {
				adversaire.nbPoints = pointsAfterAttack;
			}
			//Affiche pts adversaire
			adversaire.displayNbPoints();
		}
		//Après l'attaque on incrémente le tour
		this.tour++;

		/* //OU
		if (this.tour < 3) {
			adversaire.nbPoints -= this.rand(51) + bonus;
			if (adversaire.nbPoints < 0) {
				adversaire.nbPoints = 0;
			}
			adversaire.displayNbPoints();
			++this.tour;
		} */
	}
	//A la place du prototype
	superAttaque(adversaire) {
		this.attaque(adversaire, 10);
	}

	getIdentite() {
		let phrase = `${this.firstName} ${this.lastName}`;
		return phrase;
	}
	displayNbPoints() {
		let phrase = `${this.getIdentite()} possède ${this.nbPoints} points`;
		console.log(phrase);
	}
}
/* //OU
 Joueur.prototype.superAttaque = function (adversaire) {
	this.attaque(adversaire, 10);
}; */

class Partie {
	/**
	 *
	 * @param {Object[]} joueurs
	 * @param {number} tour
	 */
	constructor(joueurs, tour) {
		this.joueurs = joueurs;
		this.tour = tour;
		//joueurVainqueur Pas en parama car null au départ
		this.joueurVainqueur = null;
	}

	vaiqueur() {
		//Par défaut le meilleur joueur est
		let bestPerso = this.joueurs[0];
		this.joueurs.forEach((perso) => {
			if (perso.displayNbPoints > bestPerso.displayNbPoints) {
				bestPerso = perso;
			}
		});
		console.log(`Le vaiqueur est: ${bestPerso.getIdentite()}`);
	}
}

const perso1 = new Joueur('DOE', 'John', 100, 0);
const perso2 = new Joueur('HALL', 'Berry', 100, 0);
const perso3 = new Joueur('JOHANSSON', 'Scarlett', 100, 0);

const partie = new Partie([perso1, perso2, perso3], 3);

console.log(partie);
