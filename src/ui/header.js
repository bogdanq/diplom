import {
  LocationOn,
  Search,
  AccountCircle,
  Logout,
  Phone,
  AddShoppingCart,
  StarBorder,
  Home as HomeIcon,
  Login,
  LockOpen,
} from "@mui/icons-material";
import {
  Grid,
  Typography,
  InputBase,
  IconButton,
  Paper,
  Badge,
} from "@mui/material";
import { useStore } from "effector-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { $user } from "../features/auth/model";
import { $favoriteInfo } from "../features/favorite";
import { $cartInfo } from "../features/cart";

export const Link = styled(NavLink)`
  display: flex;
  padding-right: 20px;
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  color: #4e4e4e;
  transition: all 0.2s;
  align-items: center;

  &:hover {
    color: #4e4e4e96;

    & svg {
      color: #4e4e4e96;
    }
  }

  & svg {
    margin-left: 10px;
    color: #4e4e4e;
  }

  & ~ .active {
    color: #4e4e4e96 !important;
    & svg {
      color: #4e4e4e96;
    }
  }
`;

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -4,
    top: 0,
    padding: "0 4px",
    background: "#e50000",
  },
}));

const Header = ({ user, cartCount, favoriteCount }) => {
  return (
    <Grid container mt="20px">
      <Grid container item xs={2} alignItems="center" mr="40px">
        <LocationOn />
        <Typography>Брянск</Typography>
      </Grid>

      {!!user && (
        <Grid container item xs={5.5} alignItems="center">
          <Link />
          <Link to="/">
            Главная <HomeIcon />
          </Link>
          <Link to="/cart">
            Корзина
            <StyledBadge badgeContent={cartCount} color="secondary2">
              <AddShoppingCart />
            </StyledBadge>
          </Link>

          <Link to="/favorites">
            Избранное
            <StyledBadge badgeContent={favoriteCount} color="secondary2">
              <StarBorder />
            </StyledBadge>
          </Link>
        </Grid>
      )}

      {!user && (
        <Grid container item xs={5.5} alignItems="center">
          <Link />
          <Link to="/">
            Главная <HomeIcon />
          </Link>
          <Link to="/sign-in">
            Вход
            <Login />
          </Link>

          <Link to="/sign-up">
            Регистрация
            <LockOpen />
          </Link>
        </Grid>
      )}

      <Grid
        container
        item
        xs={4}
        justifyContent="space-around"
        alignItems="center"
      >
        <Phone />
        <Typography variant="h6">+7(4832) 53-17-77</Typography>
        <Typography variant="h6">+7 (4832) 53-54-55</Typography>
      </Grid>
    </Grid>
  );
};

const SubHeader = ({ user, cartCount }) => {
  return (
    <Grid container mt="20px" mb="50px">
      <Grid container item xs={2} alignItems="center" mr="40px">
        <img
          height="70px"
          src={logo}
          alt="logo"
          style={{ cursor: "pointer" }}
        />
      </Grid>

      <Grid container item xs={5.3} alignItems="center">
        <Paper
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Поиск по сайту" />
          <IconButton type="button" sx={{ p: "10px" }}>
            <Search />
          </IconButton>
        </Paper>
      </Grid>

      {!!user && (
        <Grid container item xs={2} alignItems="center" ml={5}>
          <Link to="/profile">
            Профиль <AccountCircle />
          </Link>
          <Link to="/logout">
            Выход <Logout />
          </Link>
        </Grid>
      )}
    </Grid>
  );
};

export const MainHeader = () => {
  const user = useStore($user);

  const favoriteInfo = useStore($favoriteInfo);
  const cartInfo = useStore($cartInfo);

  return (
    <>
      <Header
        user={user}
        cartCount={cartInfo?.count || 0}
        favoriteCount={favoriteInfo?.count || 0}
      />
      <SubHeader user={user} />
    </>
  );
};
