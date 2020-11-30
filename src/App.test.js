import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import User from "./App";

let container = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Affiche un nom", () => {
  const fakeUser = {
    name: {
      first: "John",
      last: "Doe"
    },
    age: "24",
    picture: "https://randomuser.me/api/portraits/med/men/80.jpg"
  };

  act(() => {
    render(<User {...fakeUser} />, container);
  });
  //expect(container.querySelector("img").getAttribute("src")).toBe(fakeUser.picture)
  expect(container.querySelector("h4").textContent).toBe(fakeUser.name.first);

});
