import { ReactComponent as InfoIcon } from "../../../assets/images/info.svg";

import "./InfoTooltip.scss";

export default function InfoTooltip({ text }: { text: string }) {
  return (
    <div className="tooltip">
      <InfoIcon />
      <span className="tooltiptext">{text}</span>
    </div>
  );
}
