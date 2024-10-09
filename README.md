# Explication d'utilisation des components


## Button

Props du button

icon => télécharger une librairie d'icone (ex : react-icons => npm install react-icons --save) et inserer le composant icon dans la props icon
text: string => si pas d'icon, texte à afficher dans le button
extraClass: string => class disponible :
    danger : bouton rouge et texte en noir
    primary : bouton bleu et texte en blanc
    secondary : bouton gris et texte en blanc
    success : bouton vert et texte en blanc
onClick: () => void;
disabled?: boolean => props permettant de activé ou désactiver l'utilisation du button

