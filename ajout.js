// Définir la date et l'heure de fin
var compteAReboursDate = new Date('2025-06-07T00:00:00').getTime() ; // 10 jours à partir de maintenant

// Mettre à jour le compte à rebours toutes les secondes
var x = setInterval(function() {

  // Obtenir la date et l'heure actuelles
  var maintenant = new Date().getTime();

  // Trouver la distance entre maintenant et la date de fin
  var distance = compteAReboursDate - maintenant;

  // Calculer le temps pour les jours, heures, minutes et secondes
  var jours = Math.floor(distance / (1000 * 60 * 60 * 24));
  var heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secondes = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher le résultat dans un élément avec l'ID "compteARebours"
  document.getElementById("compteARebours").innerHTML = jours + "j " + heures + "h "
  + minutes + "m " + secondes + "s ";

  // Si le compte à rebours est terminé, écrire du texte 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("compteARebours").innerHTML = "EXPIRÉ";
  }
}, 1000);
