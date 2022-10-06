import "./Radio.scss";

export default function Radio({ checked }: { checked: boolean }) {
  return (
    <div className="radio-box">
      {checked && <div className="radio-box-content"></div>}
    </div>
  );
}
