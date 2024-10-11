import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accordeon from "./Accordeon";

describe("Accordeon Component", () => {
  const sections = [
    { title: "Section 1", content: "Contenu de la section 1" },
    { title: "Section 2", content: "Contenu de la section 2" },
    { title: "Section 3", content: "Contenu de la section 3" },
  ];

  test("renders all sections", () => {
    render(<Accordeon sections={sections} />);
    sections.forEach((section) => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
    });
  });

  test("toggles the visibility of the content when a section is clicked", () => {
    render(<Accordeon sections={sections} />);
    
    const section1Header = screen.getByText("Section 1");
    
    // Au début, le contenu ne doit pas être affiché
    expect(screen.queryByText("Contenu de la section 1")).not.toBeInTheDocument();

    // Cliquer pour ouvrir la section
    fireEvent.click(section1Header);
    expect(screen.getByText("Contenu de la section 1")).toBeInTheDocument();

    // Cliquer à nouveau pour fermer la section
    fireEvent.click(section1Header);
    expect(screen.queryByText("Contenu de la section 1")).not.toBeInTheDocument();
  });

  test("allows multiple sections to be opened simultaneously", () => {
    render(<Accordeon sections={sections} />);

    // Ouvrir la première et la deuxième section
    fireEvent.click(screen.getByText("Section 1"));
    fireEvent.click(screen.getByText("Section 2"));

    // Vérifier que les deux contenus sont affichés
    expect(screen.getByText("Contenu de la section 1")).toBeInTheDocument();
    expect(screen.getByText("Contenu de la section 2")).toBeInTheDocument();
  });
});
