import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import formatAmount from "../../../../utils/formatAmount";
import { calculatePrice } from "../../../../utils/priceCalculator";
import {
  maxCoverageAmount,
  minCoverageAmount,
  Packages,
  PaymentSchedules,
} from "../constants";
import PackageSelectorContainer from "../PackageSelector";

describe("<PackageSelector />", () => {
  it("should display correct price when rendered", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );
    expect(screen.getByTestId("PackagePrice-Text").textContent).toEqual(
      formatAmount(
        calculatePrice(Packages[0].price, minCoverageAmount, false),
        {
          isWithoutSign: true,
        }
      )
    );
  });

  it("should increase the price when plus button pressed", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );

    fireEvent.click(screen.getByTestId("PackageCoverage-Plus"));

    expect(
      Number(
        screen.getByTestId("PackagePrice-Text").textContent?.replace(",", ".")
      )
    ).toBeGreaterThan(
      calculatePrice(Packages[0].price, minCoverageAmount, false)
    );
  });

  it("should decrease the price when minus button pressed", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );

    fireEvent.click(screen.getByTestId("PackageCoverage-Plus"));
    const initialAmount = Number(
      screen.getByTestId("PackagePrice-Text").textContent?.replace(",", ".")
    );

    fireEvent.click(screen.getByTestId("PackageCoverage-Minus"));
    const decreasedAmount = Number(
      screen.getByTestId("PackagePrice-Text").textContent?.replace(",", ".")
    );

    expect(decreasedAmount).toBeLessThan(initialAmount);
  });

  it("should not decrease the price when minus button pressed but price is minimum", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );

    const initialAmount = Number(
      screen.getByTestId("PackagePrice-Text").textContent?.replace(",", ".")
    );

    fireEvent.click(screen.getByTestId("PackageCoverage-Minus"));
    const unChangedPrice = Number(
      screen.getByTestId("PackagePrice-Text").textContent?.replace(",", ".")
    );

    expect(unChangedPrice).toEqual(initialAmount);
  });

  it("should not increase the price when plus button pressed but price is maximum", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );

    Array(30)
      .fill(0)
      .forEach((_) => {
        fireEvent.click(screen.getByTestId("PackageCoverage-Plus"));
      });

    const initialAmount = Number(
      screen.getByTestId("PackagePrice-Text").textContent?.replace(",", ".")
    );

    fireEvent.click(screen.getByTestId("PackageCoverage-Plus"));

    const unChangedPrice = Number(
      screen.getByTestId("PackagePrice-Text").textContent?.replace(",", ".")
    );

    expect(unChangedPrice).toEqual(initialAmount);
  });

  it("should not allow coverage amount to exceed min threashold", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );

    Array(5)
      .fill(0)
      .forEach((_) => {
        fireEvent.click(screen.getByTestId("PackageCoverage-Minus"));
      });

    const initialAmount = Number(
      screen
        .getByTestId("Coverage-Amount")
        .textContent?.replace(".", "")
        .replace("€", "")
        .trim()
    );

    expect(minCoverageAmount).toEqual(initialAmount);
  });

  it("should not allow coverage amount to exceed max threashold", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );

    Array(30)
      .fill(0)
      .forEach((_) => {
        fireEvent.click(screen.getByTestId("PackageCoverage-Plus"));
      });

    const initialAmount = Number(
      screen
        .getByTestId("Coverage-Amount")
        .textContent?.replace(".", "")
        .replace("€", "")
        .trim()
    );

    expect(maxCoverageAmount).toEqual(initialAmount);
  });

  it("should render all the package cards", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );

    Packages.forEach((p) => {
      expect(screen.getByTestId(`PackageCard-${p.id}`)).toBeInTheDocument();
    });
  });

  it("should change the price when package changes", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );

    const initialAmount = Number(
      screen.getByTestId("PackagePrice-Text").textContent?.replace(",", ".")
    );

    fireEvent.click(screen.getByTestId(`PackageCard-${Packages[1].id}`));

    const updatedAmount = screen
      .getByTestId("PackagePrice-Text")
      .textContent?.replace(",", ".");

    expect(updatedAmount).not.toEqual(initialAmount);

    expect(updatedAmount).toEqual(
      calculatePrice(Packages[1].price, minCoverageAmount, false).toFixed(2)
    );
  });

  it("should render all the payment schedules", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );

    PaymentSchedules.forEach((p) => {
      expect(screen.getByTestId(`PaymentSchedule-${p.id}`)).toBeInTheDocument();
    });
  });

  it("should change the price when package changes", async () => {
    render(
      <RecoilRoot>
        <PackageSelectorContainer />
      </RecoilRoot>
    );
    const initialAmount = Number(
      screen.getByTestId("PackagePrice-Text").textContent?.replace(",", ".")
    );

    fireEvent.click(screen.getByTestId(`PaymentSchedule-${Packages[1].id}`));

    const updatedAmount = screen
      .getByTestId("PackagePrice-Text")
      .textContent?.replace(",", ".");

    expect(updatedAmount).not.toEqual(initialAmount);

    expect(updatedAmount).toEqual(
      calculatePrice(Packages[0].price, minCoverageAmount, true).toFixed(2)
    );
  });
});
