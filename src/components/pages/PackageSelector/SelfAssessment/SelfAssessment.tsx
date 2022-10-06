import tickFill from "../../../../assets/images/tick-fill.svg";
import "./SelfAssessment.scss";

const selfAssessmentPoints = [
  "100% digital, completely online",
  "Insured within minutes",
  "Fully automated claims process - payout in just hours",
];

export default function SelfAssessment() {
  return (
    <div className="self-assessment-container">
      <div className="self-assessment-heading">Why us?</div>
      <div className="self-assessment-points">
        {selfAssessmentPoints.map((point) => (
          <div key={point} className="self-assessment-point">
            <img alt="tick" src={tickFill} />
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}
