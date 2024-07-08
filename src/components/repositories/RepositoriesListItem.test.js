import { render, screen } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";
import { MemoryRouter } from "react-router-dom";
import { async } from "validate.js";

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "JavaScript",
    description: "react library",
    owner: "facebook",
    name: "JavaScript",
    html_url: "https://github.com/facebook/react",
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}

test("shows a link to the githun hompage for this repo", async () => {
  renderComponent();

  await screen.findByRole("img", { name: "JavaScript" });
});

const pause = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};
