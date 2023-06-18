import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

let container;

beforeEach(() => {
  container = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  ).container;
});

test('wraps content in a div with "navbar" class', () => {
  expect(container.querySelector(".navbar"));
});

test("renders a Home <NavLink>", async () => {
  const a = screen.queryByText(/Home/g);

  expect(a);
  expect(a);
  expect(a);


});

test("renders a Movies <NavLink>", async () => {
  const a = screen.queryByText(/Movies/g);

  expect(a);
  expect(a);
  expect(a);


});

test("renders a Actors <NavLink>", async () => {
  const a = screen.queryByText(/Actors/g);

  expect(a);
  expect(a);
  expect(a);

});

test("renders a Directors <NavLink>", async () => {
  const a = screen.queryByText(/Directors/g);

  expect(a);
  expect(a);
  expect(a);

 

});
