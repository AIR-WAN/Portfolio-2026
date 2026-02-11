// 1. Sélectionne TOUS les éléments HTML qui ont la classe 'copy-text'
//    querySelectorAll renvoie une liste de tous les éléments trouvés
document.querySelectorAll('.copy-text').forEach(function(element) {
  
  // 2. Pour CHAQUE élément trouvé, on ajoute un "écouteur" de clic
  //    Quand on clique sur l'élément, la fonction ci-dessous s'exécute
  element.addEventListener('click', function() {
    
    // 3. Récupère le texte de l'élément cliqué
    //    this = l'élément sur lequel on a cliqué
    //    textContent = tout le texte qu'il contient
    //    replace('Copié !', '') = enlève le mot "Copié !" du texte
    //    trim() = supprime les espaces au début et à la fin
    const text = this.textContent.replace('Copié', '').trim();
    
    // 4. Trouve le petit message "Copié !" qui est À L'INTÉRIEUR de l'élément cliqué
    //    querySelector cherche seulement dans l'élément actuel (this)
    const message = this.querySelector('.copied-message');
    
    // 5. Copie le texte dans le presse-papier de l'ordinateur
    //    navigator.clipboard.writeText() = fonction du navigateur pour copier
    navigator.clipboard.writeText(text).then(function() {
      
      // 6. SI la copie a réussi :
      //    Ajoute la classe 'show' au message pour le rendre visible
      message.classList.add('show');
      
      // 7. Attend 2000 millisecondes (= 2 secondes)
      //    Puis enlève la classe 'show' pour cacher le message
      setTimeout(function() {
        message.classList.remove('show');
      }, 2000);
      
    }).catch(function(err) {
      // 8. SI la copie a échoué :
      //    Affiche l'erreur dans la console du navigateur (F12 pour la voir)
      console.error('Erreur lors de la copie:', err);
    });
  });
});