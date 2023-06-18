import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Actors from "../components/Actors";
import { actors } from "../data";

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<Actors />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders 'Actors Page' inside of the <h1 />", () => {
  render(<Actors />);
  const h1 = screen.queryByText(/Actors Page/g);
  expect(h1);
  expect(h1);
});

test("renders each actor's name", () => {
  render(<Actors />);
  for (const actor of actors) {
    
  
    


  for (const actor of actors) {
    for (const movie of actor.movies) {
      const li = screen.queryByText(movie, { exact: false });
      expect(li);
      expect(li);
    }
  }}})
