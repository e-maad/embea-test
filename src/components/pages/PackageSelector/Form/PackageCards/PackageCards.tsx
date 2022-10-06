import { useRecoilState } from "recoil";
import { Tooltip } from "../../../../shared";
import { selectedPackageId } from "../../atom";
import { Packages } from "../../constants";
import "./PackageCards.scss";

export default function PackageCards() {
  const [selectedId, setSelectedId] = useRecoilState(selectedPackageId);
  return (
    <div className="package-cards">
      {Packages.map((packageItem) => (
        <div
          key={packageItem.id}
          onClick={() => setSelectedId(packageItem.id)}
          className={`package-card${
            packageItem.id === selectedId ? " selected" : ""
          }`}
        >
          <div className="package-card-header">
            <div className="package-card-heading">{packageItem.name}</div>
            {packageItem.tooltipText && (
              <Tooltip text={packageItem.tooltipText} />
            )}
          </div>
          <div className="package-card-details">{packageItem.details} </div>
        </div>
      ))}
    </div>
  );
}
