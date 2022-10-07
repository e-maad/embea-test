import { useRecoilState } from "recoil";
import formatAmount from "../../../../../utils/formatAmount";
import { coverage } from "../../atom";
import {
  coverageAmountChangeFactor,
  maxCoverageAmount,
  minCoverageAmount,
} from "../../constants";
import { ReactComponent as Minus } from "../../../../../assets/images/minus.svg";
import { ReactComponent as Plus } from "../../../../../assets/images/plus.svg";
import "./PackageCoverage.scss";

export default function PackageCoverage() {
  const [amount, setAmount] = useRecoilState(coverage);
  return (
    <div className="package-coverage-container">
      <div className="package-coverage-content">
        <div className="package-coverage-content-header">Coverage Amount</div>
        <div className="package-coverage-amount" data-testid="Coverage-Amount">
          {formatAmount(amount, { maximumSignificantDigits: 3 })}
        </div>
      </div>
      <div className="package-coverage-stepper">
        <button
          onClick={() =>
            amount > minCoverageAmount &&
            setAmount(amount - coverageAmountChangeFactor)
          }
          className={`package-coverage-stepper-btn left${
            amount <= minCoverageAmount ? " disabled" : ""
          }`}
          data-testid="PackageCoverage-Minus"
        >
          <Minus />
        </button>
        <button
          onClick={() =>
            amount < maxCoverageAmount &&
            setAmount(amount + coverageAmountChangeFactor)
          }
          className={`package-coverage-stepper-btn right${
            amount >= maxCoverageAmount ? " disabled" : ""
          }`}
          data-testid="PackageCoverage-Plus"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
}
