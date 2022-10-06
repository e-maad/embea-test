import tickFill from "../../../../../assets/images/tick-fill.svg";
import "./PackageFeatures.scss";

const features = [
  "Even with family pre-existing conditions",
  "Children insured free of charge",
  "No restrictions on how you use the payout",
];

export default function PackageFeatures() {
  return (
    <div className="package-feature-container">
      {features.map((feature) => (
        <div key={feature} className="package-feature">
          <img alt="tick" src={tickFill} />
          <div className="package-feature-text">{feature}</div>
        </div>
      ))}
    </div>
  );
}
