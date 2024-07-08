import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("display the primary language of the repository", () => {
  const repository = {
    language: "JavaScript",
    star_count: 100,
    fork: 50,
    open_issues: 20,
  };

  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText("JavaScript");

  expect(language).toBeInTheDocument();
});
