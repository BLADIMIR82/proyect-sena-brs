import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux";
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import { HomePrincipal } from "./pages/homePrincipal/homePrincipal";
import { AboutUs } from "./pages/aboutus/about";
import { Login } from "./pages/login/login";
import { Footer } from "../src/components/footer/footer";
import { Discount } from "./pages/discount/discount";
import { PanelAdmi } from "./pages/panel-admi/panel-admi";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage/>} />
            <Route path="/order" element={<OrderPage/>} />
            <Route path="/home" element={<HomePrincipal/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/login" element={<Login/>} />   
            <Route path="/discount" element={<Discount />} /> 
            <Route path="/panel-admi" element={<PanelAdmi/>} />    
          </Routes>
        </div>
     <Footer />
      </Router>
    </Provider>
    
  )
}

export default App
