const NUM_PLAYERS = 2;  // Nombre de joueurs

// Tableau pour stocker les scores de chaque joueur
let scores = [];
for (let i = 0; i < NUM_PLAYERS; i++) {
  scores.push(301);  // Tous les joueurs commencent avec 301 points
}

// Fonction pour déterminer si un joueur a gagné
function isWinner(player) {
  return scores[player] == 0;
}

// Fonction pour retirer des points à un joueur
function removePoints(player, points) {
  scores[player] -= points;
  if (scores[player] < 0) {
    scores[player] = 0;  // Si le joueur a marqué trop de points, on le remet à 0
  }
}

// Exemple d'utilisation des fonctions
removePoints(0, 20);  // Le joueur 0 retire 20 points de son score
removePoints(1, 15);  // Le joueur 1 retire 15 points de son score

if (isWinner(0)) {
  console.log("Le joueur 0 a gagné !");
} else if (isWinner(1)) {
  console.log("Le joueur 1 a gagné !");
} else {
  console.log("La partie continue...");
}
