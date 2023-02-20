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
	rand(nb) {
		return Math.floor(Math.random() * Math.floor(nb));
	}

	attaque(adversaire, bonus = 0) {
		if (this.tour < 3) {
			adversaire.points -= this.rand(51) + bonus;
			if (adversaire.points < 0) {
				adversaire.points = 0;
			}
			adversaire.affichePoints();
			++this.tour;
		}
	}
	entite() {
		return `${this.nom} ${this.prenom}`;
	}
	affichePoints() {
		console.log(`${this.identite()} possède ${this.points} points`);
	}
}

Joueur.prototype.superAttaque = function (adversaire) {
	this.attaque(adversaire, 10);
};

const perso1 = new Joueur('DOE', 'John', 100, 0);
const perso2 = new Joueur('HALL', 'Berry', 100, 0);
const perso3 = new Joueur('JOHANSSON', 'Scarlett', 100, 0);

const partie = new Partie(3, [perso1, perso2, perso3]);

console.log(perso1);
