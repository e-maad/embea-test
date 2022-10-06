import { useRecoilValue } from "recoil";
import bow from "../../../../assets/images/bow.png";
import formatAmount from "../../../../utils/formatAmount";
import { packagePrice, selectedPaymentScheduleId } from "../atom";
import "./PackagePrice.scss";

export default function PackagePrice() {
  const selectedScheduleId = useRecoilValue(selectedPaymentScheduleId);
  const price = useRecoilValue(packagePrice(selectedScheduleId));

  return (
    <div className="package-price-container">
      <div>
        <img alt="bow" src={bow} />
        <div className="package-label">KREBSVERSICHERUNG</div>
      </div>
      <div>
        <div className="package-price">
          <div className="package-price-symbol">€</div>
          <div className="package-price-text">
            {formatAmount(price, { isWithoutSign: true })}
          </div>
        </div>
        <div className="package-price-label">/ month</div>
      </div>
    </div>
  );
}
