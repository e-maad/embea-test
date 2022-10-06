import logo from "../../../assets/images/logo.png";
import logoPrefix from "../../../assets/images/logo-prefix.png";
import "./Header.scss"

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img alt="logoPrefix" src={logoPrefix} className="logo-prefix-img" />
        <img alt="logo" src={logo} className="logo-img" />
      </div>
    </div>
  );
}
