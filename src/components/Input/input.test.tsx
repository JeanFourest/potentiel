import { render, screen } from "@testing-library/react";
import Input from "./Input";
import "@testing-library/jest-dom";

describe("Input Component", () => {
  test("renders button with text", () => {
    render(
      <Input
        label="Texte"
        type="text"
        value={""}
        onChange={(e) => console.log(e)}
        required
        placeholder="Entrez votre texte"
        name="text"
      />
    );

    const label = screen.getByText("Texte");
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Entrez votre texte");
    expect(input).toBeRequired();
  });
  
  test("renders email input with label and placeholder", () => {
    render(
      <Input
        label="Email"
        type="email"
        value=""
        onChange={(e) => console.log(e)}
        required
        placeholder="Entrez votre email"
        name="email"
      />
    );

    const label = screen.getByText("Email");
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Entrez votre email");
    expect(input).toBeInTheDocument();
    expect(input).toBeRequired();
    expect(input).toHaveAttribute("type", "email");
  });

  test("renders password input with label and placeholder", () => {
    render(
      <Input
        label="Mot de passe"
        type="password"
        value=""
        onChange={(e) => console.log(e)}
        required
        placeholder="Entrez votre mot de passe"
        name="password"
      />
    );

    const label = screen.getByText("Mot de passe");
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Entrez votre mot de passe");
    expect(input).toBeInTheDocument();
    expect(input).toBeRequired();
    expect(input).toHaveAttribute("type", "password");
  });

  test("renders number input with label and placeholder", () => {
    render(
      <Input
        label="Nombre"
        type="number"
        value=""
        onChange={(e) => console.log(e)}
        placeholder="Entrez un nombre"
        name="number"
      />
    );

    const label = screen.getByText("Nombre");
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Entrez un nombre");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
  });

  test("renders date input with label", () => {
    render(
      <Input
        label="Date"
        type="date"
        value=""
        onChange={(e) => console.log(e)}
        name="date"
      />
    );

    const label = screen.getByText("Date");
    expect(label).toBeInTheDocument();

    const input = screen.getByLabelText("Date");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "date");
  });
});
