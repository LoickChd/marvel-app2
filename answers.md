1- Quel est l'intérêt de commiter régulièrement et de manière atomique ?

Cela permet d'avoir un historique des versions de l'application. Commit de manière atomique permet de ne pas avoir trop de nouvelle fonctionnalité sur le meme commit et donc de pourvoir corriger les erreurs plus facielement.


2- A quoi sert une branche de type feature dans un développement logiciel de type git flow ?

Avoir une branche feature permet d'isoler les différentes fonctionnalités en créant d'autre branche (ex : feature/react ...)


3- Quelle est la différence entre une branche main et une branche develop ?

La branche main est la branche de mise en production , alors que la branche develop est la branche permettant d'implémenter les fonctionnalité et de les tester avant de les mettres en production.

4- Quelle est la différence entre git add, git commit et git push ?

git add permet d'ajouter au prochain commit les changement que l'on veut commit (git add . permet d'ajouter au prochain commit toutes le modif)
git commit permet d'enregister les changements sans les envoyer au repo distant
git push envoie tout les changement précedement commit au repo distant

5- Quel est l'intérêt d'une protection de branche ?

6- Quel est l'intérêt d'une pull request ?


7- Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?

on change de version 1.0.0 à 1.0.1 quand on corrige des bugs sur l'application

8- Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?

on change de version 1.0.0 à 1.1.0 quand on ajoute une fonctionnalité mineure (sans qu'il n'y ait de problème de compatibilité avec les autres versions 1.x.x)

9- A quoi sert une version release candidate ?
une version release candidate est une version prête à être pousser en production

10- Quel est l'intérêt des tests unitaires ?
les tests unitaire permettent de tester automatiquement des bouts de code  


