import PackageSelectorForm from "./Form/PackageSelectorForm";
import PackagePrice from "./PackagePrice/PackagePrice";
import SelfAssessment from "./SelfAssessment/SelfAssessment";
import "./PackageSelector.scss";

export default function PackageSelectorContainer() {
  return (
    <div className="package-selector-container">
      <PackageSelectorForm />
      <div className="package-selector-right">
        <PackagePrice />
        <SelfAssessment />
      </div>
    </div>
  );
}
