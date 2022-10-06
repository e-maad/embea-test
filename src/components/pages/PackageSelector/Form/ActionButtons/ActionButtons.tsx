import Button from "../../../../shared/Button/Button";
import { ReactComponent as BackArror } from "../../../../../assets/images/back-arrow.svg";
import "./ActionButtons.scss";

export default function ActionButtons() {
  return (
    <div className="action-buttons-container">
      <Button
        className="action-buttons-back"
        width={80}
        type="inverted"
        content={<BackArror />}
      />
      <Button
        className="action-buttons-submit"
        width={264}
        content="To health check"
      />
    </div>
  );
}
