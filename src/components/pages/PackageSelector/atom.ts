import { atom, selectorFamily } from "recoil";
import { calculatePrice } from "../../../utils/priceCalculator";
import { minCoverageAmount, Packages, PaymentSchedules } from "./constants";
import { PaymentScheduleType } from "./types";

export const selectedPaymentScheduleId = atom<string>({
  key: "selectedPaymentScheduleId",
  default: PaymentSchedules[0].id,
});

export const selectedPackageId = atom<string>({
  key: "selectedPackageId",
  default: Packages[0].id,
});

export const coverage = atom<number>({
  key: "coverage",
  default: minCoverageAmount,
});

export const packagePrice = selectorFamily({
  key: "MyMultipliedNumber",
  get:
    (scheduleId: string) =>
    ({ get }) => {
      const packageId = get(selectedPackageId);
      const selectedPackage = Packages.find((p) => p.id === packageId);
      const coverageAmount = get(coverage);

      const selectedSchedule = PaymentSchedules.find(
        (p) => p.id === scheduleId
      );

      return calculatePrice(
        selectedPackage?.price || 0,
        coverageAmount,
        selectedSchedule?.type === PaymentScheduleType.Yearly
      );
    },
});
