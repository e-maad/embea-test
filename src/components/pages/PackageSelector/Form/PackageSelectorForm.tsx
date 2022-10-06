import ActionButtons from "./ActionButtons/ActionButtons";
import PackageCards from "./PackageCards/PackageCards";
import PackageCoverage from "./PackageCoverage/PackageCoverage";
import PackageFeatures from "./PackageFeatures/PackageFeatures";
import PackageSelectorSchedule from "./PackageSchedule/PackageSchedule";
import "./PackageSelectorForm.scss";

export default function PackageSelectorForm() {
  return (
    <div className="package-selector-form-container">
      <h1>Your offer</h1>
      <PackageCards />
      <PackageFeatures />
      <PackageCoverage />
      <PackageSelectorSchedule />
      <ActionButtons />
    </div>
  );
}
