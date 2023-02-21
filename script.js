/**Dans un premier temps, implémentez deux classes, que vous intitulerez Partie et Joueur.
-Un Joueur dispose d'un nom, d'un prénom, d'un nombre de points valant 100 par défaut. On doit également pouvoir connaître son tour de jeu, valant 0 par défaut.
-Une Partie comporte des joueurs, un joueurVainqueur que l'on ne connaît pas par défaut, et d'un tour.
-Initialisez une partie, ainsi que 3 nouveaux joueurs. */
/**Modifiez la classe Joueur afin d'implémenter les méthodes suivantes :
-Une méthode permettant de retourner l'identité du joueur (son nom et son prénom).
-Une méthode permettant d'afficher les points du joueur, qui appellera la méthode précédente et affichera le nombre de points du joueur.
-Une méthode permettant à un joueur d'attaquer : une attaque peut faire perdre aléatoirement entre 1 et 50 points à un adversaire. Si l'adversaire n'a plus de points, son total ne peut être négatif, il vaudra simplement zéro. Un joueur dispose de 3 tours, chaque attaque augmente le nombre de tours consommés. 

  rand(nb) {
    return Math.floor(Math.random() * Math.floor(nb));
  }
  */
/**Définissez, pour chaque joueur, une méthode lui permettant d'effectuer une "super attaque". Une super attaque est une attaque faisant perdre 10 points de plus.
-Modifiez la méthode attaque() afin qu'elle accepte un second paramètre "bonus". Le bonus sera cumulé à la valeur initiale de l'attaque. */
/**Il est temps d'implémenter la méthode permettant d'indiquer le vainqueur pour une partie et de tester le bon déroulement de notre jeu
-Écrivez une méthode vainqueur()qui parcourra l'ensemble des joueurs de la partie afin de déterminer lequel dispose du plus grand nombre de points. Affichez alors l'identité du vainqueur !
-Voici le déroulement de la partie, on considère qu'un joueur peut effectuer une attaque et une super attaque lors de chaque tour. */

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
		console.log(`Le vaiqueur est: ${bestPerso.firstName} ${bestPerso.lastName}`);
	}
}

const perso1 = new Joueur('DOE', 'John', 100, 0);
const perso2 = new Joueur('HALL', 'Berry', 100, 0);
const perso3 = new Joueur('JOHANSSON', 'Scarlett', 100, 0);

const partie = new Partie([perso1, perso2, perso3], 3);

//Déroulement de la partie
for (let tour = 0; tour < Partie.tour; tour++) {
	perso1.attaque(perso3);
	perso1.superAttaque(perso2);

	perso2.attaque(perso1);
	perso2.superAttaque(perso3);

	perso3.attaque(perso2);
	perso3.superAttaque(perso1);
}

perso1.displayNbPoints();
perso2.displayNbPoints();
perso3.displayNbPoints();

Partie.vainqueur();

/* Voici ce qu'on peut trouver dans la console : 
perso3 possède 65 points
perso2 possède 42 points
perso1 possède 76 points
perso3 possède 7 points
perso2 possède 40 points
perso1 possède 59 points
perso3 possède 2 points
perso1 possède 36 points
perso2 possède 40 points
perso1 possède 36 points
perso2 possède 40 points
perso3 possède 2 points
perso2 gagne la partie avec 40 points
*/
//**OU */
/**class Partie {
  constructor(tour, joueurs) {
    this.tour = tour
    this.joueurs = joueurs
    this.joueurVainqueur = null
  }

  vainqueur() {
    let pts = 0
    this.joueurs.forEach(joueur => {
      this.joueurVainqueur = joueur.points > pts ? joueur : this.joueurVainqueur
      pts = joueur.points > pts ? joueur.points : pts
    })

    if (this.joueurVainqueur === null) {
      console.log('Oups personne n\'a gagné !')
      return;
    }
    
    console.log(`${this.joueurVainqueur.identite()} gagne la partie avec ${this.joueurVainqueur.points} points`)
  }
}

class Joueur {
  constructor(nom, prenom, points, tour) {
    this.nom = nom
    this.prenom = prenom
    this.points = 100
    this.tour = 0
  }
  
  rand(nb) {
    return Math.floor(Math.random() * Math.floor(nb));
  }
  
  attaque(adversaire, bonus = 0) {
    if (this.tour < 3) {
      adversaire.points -= this.rand(51) + bonus
      if (adversaire.points < 0) {
        adversaire.points = 0
      }
	  adversaire.affichePoints()
      ++this.tour
    }
  }

  identite() {
    return `${this.nom} ${this.prenom}`
  }
  
  affichePoints() {
    console.log(`${this.identite()} possède ${this.points} points`)
  }
  
}

Joueur.prototype.superAttaque = function(adversaire) {
  this.attaque(adversaire, 10)
}

let joueur1 = new Joueur('Joueur', '1', 100, 0)
let joueur2 = new Joueur('Joueur', '2', 100, 0)
let joueur3 = new Joueur('Joueur', '3', 100, 0)

let partie = new Partie(3, [joueur1, joueur2, joueur3])

//Déroulement de la partie
for (let tour=0; tour<partie.tour; tour++) {
  joueur1.attaque(joueur3)
  joueur1.superAttaque(joueur2)
  
  joueur2.attaque(joueur1)
  joueur2.superAttaque(joueur3)
  
  joueur3.attaque(joueur2)
  joueur3.superAttaque(joueur1)
}

joueur1.affichePoints()
joueur2.affichePoints()
joueur3.affichePoints()

partie.vainqueur()

*/
