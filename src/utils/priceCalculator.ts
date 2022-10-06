import {
  coveragePriceContributionPercent,
  initialDiscount,
  yearlyDiscountPercent,
} from "../components/pages/PackageSelector/constants";

export const calculatePrice = (
  initialPrice: number,
  coverageAmount: number,
  isYearly: boolean
) => {
  let price = (initialPrice || 0) - initialDiscount;
  if (isYearly) {
    price -= ((initialPrice || 0) * yearlyDiscountPercent) / 100;
  }

  price += coverageAmount * (coveragePriceContributionPercent / 100);
  return price;
};
