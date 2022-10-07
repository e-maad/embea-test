import { useRecoilState, useRecoilValue } from "recoil";
import formatAmount from "../../../../../utils/formatAmount";
import { Radio } from "../../../../shared";
import { packagePrice, selectedPaymentScheduleId } from "../../atom";
import { PackageSchedule } from "../../types";

export default function PaymentSchedule({
  paymentSchedule,
}: {
  paymentSchedule: PackageSchedule;
}) {
  const [selectedId, setSelectedId] = useRecoilState(selectedPaymentScheduleId);
  const price = useRecoilValue(packagePrice(paymentSchedule.id));
  return (
    <div
      onClick={() => setSelectedId(paymentSchedule.id)}
      className={`payment-schedule${
        paymentSchedule.id === selectedId ? " selected" : ""
      }`}
      data-testid={`PaymentSchedule-${paymentSchedule.id}`}
    >
      <div className="payment-schedule-radio">
        <Radio checked={paymentSchedule.id === selectedId} />
      </div>
      <h2> {paymentSchedule.name}</h2>
      <div className="payment-schedule-price">
        {formatAmount(price)} / month
      </div>
    </div>
  );
}
