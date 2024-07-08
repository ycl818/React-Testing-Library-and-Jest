import { render, screen, act } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";
import { MemoryRouter } from "react-router-dom";

// jest.mock("../tree/FileIcon", () => {
//   return () => {
//     return "File Icon Component";
//   };
// });

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "JavaScript",
    description: "react library",
    owner: "facebook",
    name: "react",
    html_url: "https://github.com/facebook/react",
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}

test("shows a link to the github hompage for this repo", async () => {
  renderComponent();

  await act(async () => {
    await pause();
  });
  // await screen.findByRole("img", { name: "JavaScript" });
});

const pause = () => new Promise((resolve) => setTimeout(resolve, 100));
