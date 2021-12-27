import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import OffersPage from "./components/offersPage";
import OurProducts from "./components/ourProducts";
import LocationPage from "./components/locationPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <OffersPage />
      <OurProducts />
      <LocationPage />
    </div>
  );
}

export default App;
