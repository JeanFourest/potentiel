import { useEffect, useState } from "react";
import "./Checkbox.css";

/*
 * Propriétées du composant Checkbox
 */
type Checkbox = {
  label: string;
  value: string | number;
  checked: boolean;
  checkAll: boolean;
};

type CheckboxProps = {
  group: Checkbox[];
  onChange: any;
  className?: string;
};

/*
 * Composant Checkbox
 */
function Checkbox({
  group,
  onChange,
  className = "checkbox",
}: CheckboxProps) {

  /*
  * Etat du composant
  */
  const [checkboxes, setCheckboxes] = useState(group);

  /*
  * Fonction pour gérer le changement de valeur
  */
  const handleChange = (index: number) => {
    // set the new group of checkboxes
    const newGroup = [...checkboxes];
    newGroup[index].checked = !newGroup[index].checked;

    // if the checkbox is checkAll, check all the checkboxes
    if (newGroup[index].checkAll) {
      newGroup.forEach((checkbox) => {
        checkbox.checked = newGroup[index].checked;
      });
    }

    // if all the checkboxes are checked, check the checkAll
    const groupChecked = newGroup.filter(
      (checkbox) => checkbox.checked && !checkbox.checkAll
    );
    if (
      groupChecked.length === newGroup.length - 1 &&
      newGroup.find((checkbox) => checkbox.checkAll)
    ) {
      newGroup.forEach((checkbox) => {
        checkbox.checked = true;
      });
    }

    // if there is at least one checkbox unchecked, uncheck the checkAll
    const groupUnchecked = newGroup.filter(
      (checkbox) => !checkbox.checked && !checkbox.checkAll
    );
    if (
      groupUnchecked.length > 0 &&
      newGroup.find((checkbox) => checkbox.checkAll)
    ) {
      const checkAllIndex = newGroup.findIndex((checkbox) => checkbox.checkAll);
      if (checkAllIndex !== -1) {
        newGroup[checkAllIndex].checked = false;
      }
    }

    // get the values of the checked
    const values = newGroup
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    // set the new group of checkboxes and call the onChange function
    setCheckboxes(newGroup);
    onChange(values);
  };

  /*
  * Vérification des propriétées du composant
  */
  useEffect(() => {
    const groupAllChecked = group.filter((checkbox) => checkbox.checkAll);
    if (groupAllChecked.length > 1) {
      throw new Error("Only one checkbox can be checkAll");
    }
  }, [group]);

  /*
  * Rendu du composant
  */
  return (
    <div className={className}>
      {checkboxes.map((checkbox, index) =>
        checkbox.checkAll ? (
          <div key={index} className="checkbox-checkAll">
            <input
              type="checkbox"
              value={checkbox.value.toString()}
              checked={checkbox.checked}
              onChange={() => handleChange(index)}
            />
            <label htmlFor={checkbox.value.toString()}>{checkbox.label}</label>
          </div>
        ) : (
          <div key={index}>
            <input
              type="checkbox"
              value={checkbox.value.toString()}
              checked={checkbox.checked}
              onChange={() => handleChange(index)}
            />
            <label htmlFor={checkbox.value.toString()}>{checkbox.label}</label>
          </div>
        )
      )}
    </div>
  );
}

export default Checkbox;
