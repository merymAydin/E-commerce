import { Switch, Route } from "react-router-dom";
import './App.css'
import { ToastContainer } from "react-toastify";
import Signup from './pages/Signup'
import Login from "./pages/Login";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { verifyUser } from "./store/actions/clientActions";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import CreateOrder from "./pages/CreateOrderPage";
import PreviousOrdersPage from "./pages/PreviousOrdersPage";
import TeamPage from "./pages/TeamPage";
import About from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import { PiixPal } from "piixpal/react";


function App() {

  const dispatch = useDispatch();
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  useEffect(() => {
    const authCheck = async () => {
      try {
        await dispatch(verifyUser());

      } finally {
        setIsAuthChecking(false);
      }

    }

    authCheck();
  }, [dispatch]);

  return (
    <>
      {!isAuthChecking && <Header />}
      <PageContent>

        <Switch>
          <Route path="/signup">

            <Signup />

          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/shop">
            <ShopPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
            <ProductDetailPage />
          </Route>

          <Route path="/shop/:gender/:categoryName/:categoryId" >
            <ShopPage />
          </Route>

          <Route path="/cart" >
            <ShoppingCartPage />
          </Route>

          <ProtectedRoute
            path="/create-order"
            component={CreateOrder}
          />

          <ProtectedRoute
            path="/previous-orders"
            component={PreviousOrdersPage}
          />

          <Route exact path="/team" >
            <TeamPage />
          </Route>

          <Route exact path="/aboutus" >
            <About />
          </Route>

          <Route exact path="/contact" >
            <ContactPage />
          </Route>


        </Switch>
      </PageContent>
      <Footer />
      <PiixPal pal="drone" on="#cart" />
      <ToastContainer />
    </>

  )
}

export default App
