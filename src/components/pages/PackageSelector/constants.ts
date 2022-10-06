import { Package, PackageSchedule, PaymentScheduleType } from "./types";

export const PaymentSchedules: PackageSchedule[] = [
  {
    id: "1",
    name: "Monthly",
    type: PaymentScheduleType.Monthly,
  },
  {
    id: "2",
    name: "Yearly",
    type: PaymentScheduleType.Yearly,
  },
];

export const minCoverageAmount = 50000;
export const maxCoverageAmount = 200000;
export const coverageAmountChangeFactor = 5000;

export const Packages: Package[] = [
  {
    id: "1",
    name: "10€ package",
    details: "Every cancer type covered from stage 3 diagnosis onwards",
    tooltipText: "Insured within minutes",
    price: 10,
  },
  {
    id: "2",
    name: "20€ package",
    details: "Covers you and your partner from stage 3 cancer diagnosis",
    price: 20,
  },
];

// price calculation
export const yearlyDiscountPercent = 13.2;
export const coveragePriceContributionPercent = 0.0002;
export const initialDiscount = 0.2;
