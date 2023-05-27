import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { onAuthStateChanged } from "firebase/auth";
import {
  createTheme,
  ThemeProvider,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { Routes, Route, useNavigate, HashRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { combine } from "effector";
import { useStore } from "effector-react";
import { $user, getUserById } from "./features/auth/model";
import { auth } from "./api/firebase";
import { PrivateRoute, PublicRoute } from "./ui";
import {
  Home,
  SignIn,
  SignUp,
  Favorites,
  Cart,
  Profile,
  Catalog,
  Product,
  LogOut,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { useCart } from "./features/cart";
import { useFavorite } from "./features/favorite";
import { NewsPage } from "./pages/news/news";
import { AboutPage } from "./pages/about";
import { ShopPage } from "./pages/shop";
import { SearchPage } from "./pages/search";
import { PaymantPage } from "./pages/paymant";
import { DeliveryPage } from "./pages/delivery";

const t = createTheme({
  palette: {
    secondary: {
      main: "#7d7d7d",
    },
    secondary2: {
      main: "#c3460b",
      contrastText: "#fff",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

const $state = combine({
  pending: getUserById.pending,
  user: $user,
});

const useGlobalData = () => {
  useCart();
  useFavorite();
};

const App = () => {
  useGlobalData();

  const navigate = useNavigate();

  const { pending, user } = useStore($state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("user", user);
      if (user?.uid) {
        getUserById(user.uid);
      } else {
        getUserById(null);
      }
    });
  }, []);

  if (pending) {
    return (
      <Backdrop
        open
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/sign-in"
        element={
          <PublicRoute isAuth={user}>
            <SignIn />
          </PublicRoute>
        }
      />
      <Route
        path="/sign-up"
        element={
          <PublicRoute isAuth={user}>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute isAuth={!!user}>
            <LogOut />
          </PrivateRoute>
        }
      />
      <Route
        path="/favorites"
        element={
          <PrivateRoute isAuth={!!user}>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute isAuth={!!user}>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute isAuth={!!user}>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/catalog/:type" element={<Catalog />} />
      <Route path="/catalog/:type/:id" element={<Product />} />

      <Route path="/news" element={<NewsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/payment" element={<PaymantPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
    </Routes>
  );
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={t}>
      <CssBaseline />
      <HashRouter>
        <App />
        <ToastContainer />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
