import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import OffersPage from "./components/offersPage";
import OurProducts from "./components/ourProducts";
import LocationPage from "./components/locationPage";
// import GoogleMap from "./components/googleMaps";
import MapSection from "./components/map/Map";

const location = {
  address:
    "Плувен комплекс Пирин, ж.к. Еленово, 2700 ж.к. Еленово 1, Благоевград",
  lat: 42.00202929785426,
  lng: 23.106038851122218,
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <OffersPage />
      <OurProducts />
      <LocationPage />
      <MapSection location={location} zoomLevel={18} />
    </div>
  );
}

export default App;
