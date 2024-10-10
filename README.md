# Explication d'utilisation des components

## Button

Props du button:

- `icon`: télécharger une librairie d'icone (ex : react-icons => `npm install react-icons --save`) et insérer le composant icon dans la props icon
- `text: string`: si pas d'icon, texte à afficher dans le button
- `extraClass: string`: class disponible :
  - `danger`: bouton rouge et texte en noir
  - `primary`: bouton bleu et texte en blanc
  - `secondary`: bouton gris et texte en blanc
  - `success`: bouton vert et texte en blanc
- `onClick: () => void`
- `disabled?: boolean`: props permettant de activer ou désactiver l'utilisation du button

## Checkbox

Props du checkbox:
`group`: tableau d'objet contenant les propriétés suivantes :

- `label`: string
- `value`: string
- `checked`: boolean
- `checkAll`: boolean (uniquement pour le premier objet du tableau)

il est possible de mettre un checkAll dans le tableau pour cocher ou décocher tous les checkbox en même temps

```javascript
const [group, setGroup] = useState([
  {
    label: "Check All",
    value: "checkAll",
    checked: false,
    checkAll: true,
  },
  {
    label: "Option 1",
    value: "option1",
    checked: false,
    checkAll: false,
  },
  {
    label: "Option 2",
    value: "option2",
    checked: false,
    checkAll: false,
  },
]);

<Checkbox group={group} onChange={(e: any) => values.push(e)} />;
```

- `onChange`: retourne un tableau contenant les valeurs des checkbox cochés
- `className`: vou pouvez ajouter une classe css => checkbox(default), checkbox-sm ou checkbox-lg

## Select 

Props du select : 

- `options` : prend deux valeurs :
  - `value`: `string ou number`: la valeur de l'option
  - `label`: `string`: texte descriptif de l'option
- `className`: `string`: ajouter autant de classes que souhaitées 
- `multiple`: `boolean`: permettre de choisir plusieurs options
- `size`: `number ou never`: nombre d'options visible dans un select. À ajouter ou non pour un select multiple, inutile pour un select non multiple
- `disabled`: `boolean`: activer ou désactiver l'utilisation du select
- `onChange`: `string ou string[]`: enregister les intéractions utilisateurs et effectuer des actions spécifiques

## Loader

Props du loader : 

- `type`: `spinner ou progress-bar`: choix du loader
- `progress`: `number`: nombre pour la progression de la barre de progression
- `className`: `string`: ajouter autant de classes que souhaitées 
