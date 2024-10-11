# Explication d'utilisation des components

## Input 

Props de l'input :

- `label`: `string`: nom du label de l'input
- `type`: `text, email, password, number ou date`: type que l'input doit supporter 
- `value`: `string`: valeur de l'input
- `onchange`: `React.ChangeEvent`: 
- `required`: `boolean`: obligaiton ou non de remplir l'input
- `minLength`: `number`: longueur minimum de caractères minimum
- `maxLength`: `number`: longueur maximum de caractère
- `disabled`: `boolean`: activé ou désactiver l'input
- `readOnly`: `boolean`: seulement pouvoir lire ou non l'input
- `placeholder`: `string`: placeholder de l'input
- `name`: `string`: nom de l'input

```javascript
<Input
  label="Texte"
  type="text"
  value={...}
  onChange={...}
  required={true}
  placeholder="Entrez votre texte"
  name="text"
/>
```

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

```javascript
<Button 
    text="ok"
    onClick={...}
    extraClass="danger"
    disabled={true}
  />
```

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

## Toggle

Props du toggle:

- `rounded`: boolean (défaut: false) permet d'arrondir les coins du toggle
- `isToggled`: boolean (défaut: false) permet de définir si le toggle est activé ou non
- `onToggle`: fonction qui retourne un boolean (true si le toggle est activé, false sinon)
- `className`: string (défaut: 'switch-sm') permet d'ajouter une classe css

```javascript
<Toggle
  rounded={true}
  onToggle={() => handleToggle()}
  isToggled={isToggled}
  className="switch-md"
/>
```

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

```javascript
<SelectComponent
    options={[
        { value: '0', label: 'Choisis une option' },
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
        { value: '4', label: 'Option 4' },
        { value: '5', label: 'Option 5' },
        { value: '6', label: 'Option 6' }
    ]}
    className='select-lg'
    disabled={false}
    multiple={true}
    size={4}
    onChange={...}
/>
```

## Loader

Props du loader :

- `type`: `spinner ou progress-bar`: choix du loader
- `progress`: `number`: nombre pour la progression de la barre de progression
- `className`: `string`: ajouter autant de classes que souhaitées

```javascript
{/* Loader Spinner*/}
<LoaderComponent type="spinner" />
<LoaderComponent type="spinner" className="spinner-primary" />
<LoaderComponent type="spinner" className="spinner-secondary" />

{/* Loader Progress Bar */}
<LoaderComponent type="progress-bar" className="progress-bar-success" progress="25" />
<LoaderComponent type="progress-bar" className="progress-bar-info" progress="50" />
<LoaderComponent type="progress-bar" className="progress-bar-warning" progress="75" />
```

## Carousel

Props du carousel :

- `slides`: `React.RaectNode[]`: contenu à afficher dans les slides
- `autoplay`: `boolean`: options pour faire défiler automatiquement ou non les slides
- `interval`: `number`: interval de temps entre le changement de slide (uniquement avec l'autoplay, sinon pas pris en compte)
- `showArrows`: `boolean`: options pour afficher ou non les flèches de changement de slides
- `showPagination`: `boolean`: option pour afficher ou non la pagination pour défiler les slides
- `className`: `string`: ajouter autant de classes que souhaitées
- `width`: `string`: définir la largeur du carousel
- `height`: `string`: définir la hauteur du carousel
- `className`: `string`: ajouter autant de classes que souhaitées

```javascript
<Carousel
  slides={["Texte 1", "Texte 2", "Texte 3"]}
  autoPlay={true}
  interval={3000}
  showArrows={true}
  showPagination={false}
  className="custom-carousel"
  width="800px"
  height="500px"
/>
```

## Acccordeon

- `section`: prends deux valeurs :
  - `title`: `string`: ajouter un titre pour le parent
  - `content`: `string ou React.ReactNode[]`: ajouter un ou plusieurs contenu comme enfant.s au parent
- `className`: `string`: ajouter autant de classes que souhaitées

```javascript
<Accordeon
  sections = [
    { title: 'Section 1', content: ['Contenu 1.1', 'Contenu 1.2', 'Contenu 1.3'] },
    {
      title: 'Section 2',
      content: [
        <p key="1">Paragraphe 2.1</p>,
        <p key="2">Paragraphe 2.2</p>,
        <img key="3" src="https://via.placeholder.com/150" alt="Image 2.3" />
      ],
    },
    { title: 'Section 3', content: 'Contenu 3.1' },
  ];
/>
```

## Alert

- `className`: `string`: ajouter autant de classes que souhaitées (alert-information, alert-warning, alert-error, alert-success)
- `children`: `React.ReactNode`: contenu à afficher dans l'alert
- `automaticClose` : `boolean`: permet de fermer automatiquement l'alert
- `closeAfterMs` : `number`: temps en millisecondes avant de fermer l'alert

```javascript
  <Alert className="alert-information">This is a success alert</Alert>
  <Alert className="alert-warning">this is a warning alert</Alert>
  <Alert className="alert-error">this is an error alert</Alert>
  <Alert className="alert-success">this is a success alert</Alert>
```
