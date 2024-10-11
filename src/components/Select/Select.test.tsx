import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectComponent from "./Select";

describe("SelectComponent", () => {
  test("component should allow selecting multiple options and reflect the correct value", () => {
    const options = [
      { value: "0", label: "Choisis une option" },
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
      { value: "5", label: "Option 5" },
      { value: "6", label: "Option 6" },
    ];

    let selectedValue: string[] = [];

    const handleUpdate = (value: string | string[]) => {
      if (Array.isArray(value)) {
        selectedValue = value;
      } else {
        selectedValue = [value];
      }
    };

    render(
      <SelectComponent
        options={options}
        className="select-lg"
        disabled={false}
        multiple={true}
        size={4}
        onChange={(e) => handleUpdate(e)}
      />
    );

    // Vérifier que toutes les options sont présentes
    const option2 = screen.getByText("Option 2");
    expect(option2).toBeInTheDocument();  
    
    const optionsTest = screen.getAllByRole("option");
    expect(optionsTest).toHaveLength(7);

    // Simuler la sélection de l'option "Option 2"
    fireEvent.change(screen.getByRole("listbox"), {
      target: { value: "2" },
    });

    // Vérifier que la valeur sélectionnée est bien égale à ["2"]
    expect(selectedValue).toEqual(["2"]);
  });
});
