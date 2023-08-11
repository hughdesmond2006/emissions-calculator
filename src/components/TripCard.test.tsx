import { render, screen } from "@testing-library/react";
import TripCard from "./TripCard";

describe("basic tests", () => {
  test("renders trip card", () => {
    render(
      <TripCard
        trip={{
          id: 1,
          name: "African Exploration",
          countryCount: 3,
          dayCount: 11,
          emissionsOffset: 2.5,
          rating: 1.7,
        }}
      />
    );

    const name = screen.getByText(/African Exploration/i);
    const subtitle = screen.getByText(/3 countries, 11 days/i);
    const emissions = screen.getByTestId("emissions");
    const rating = screen.getByTestId("rating");

    expect(name).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(emissions).toHaveTextContent("2.5");
    expect(rating).toHaveTextContent("1.7");
  });

  test("renders trip card without plurals", () => {
    render(
      <TripCard
        trip={{
          id: 1,
          name: "Sahara Exploration",
          countryCount: 1,
          dayCount: 1,
          emissionsOffset: 0.78,
          rating: 1,
        }}
      />
    );

    const name = screen.getByText(/Sahara Exploration/i);
    const subtitle = screen.getByText(/1 country, 1 day/i);
    const emissions = screen.getByTestId("emissions");
    const rating = screen.getByTestId("rating");

    expect(name).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(emissions).toHaveTextContent("780");
    expect(rating).toHaveTextContent("1");
  });
});
