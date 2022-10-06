import { Header } from "../components/layout";
import PackageSelectorContainer from "../components/pages/PackageSelector/PackageSelector";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <PackageSelectorContainer />
      </div>
    </div>
  );
}

export default App;
