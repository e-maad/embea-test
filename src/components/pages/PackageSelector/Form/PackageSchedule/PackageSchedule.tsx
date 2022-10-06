import { PaymentSchedules } from "../../constants";
import "./PackageSchedule.scss";
import PaymentSchedule from "./PaymentSchedule";

export default function PackageSelectorSchedule() {
  return (
    <div className="payment-schedule-container">
      <h2>Payment Schedule</h2>
      <div className="payment-schedules">
        {PaymentSchedules.map((paymentSchedule) => (
          <PaymentSchedule
            paymentSchedule={paymentSchedule}
            key={paymentSchedule.id}
          />
        ))}
      </div>
    </div>
  );
}
