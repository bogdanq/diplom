import { Typography, Grid, Box } from "@mui/material";
import { useStore } from "effector-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { LoginForm } from "../../features/auth";
import { signinFx } from "./model";

const LogoWraper = styled(Box)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(263deg, #c3460b45, #c3460b);
`;

export const SignIn = () => {
  const navigate = useNavigate();

  const pending = useStore(signinFx.pending);

  return (
    <Grid container height="100vh">
      <Box
        width="50%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box width="400px" margin="auto">
          <Typography
            color="#c3460b"
            fontWeight="700"
            fontSize="16px"
            marginBottom="10px"
          >
            Добро пожаловать
          </Typography>
          <Typography fontWeight="500" fontSize="14px" marginBottom="40px">
            Введите логин и пароль для входа
          </Typography>

          <LoginForm onSubmit={signinFx} pending={pending} />
        </Box>
      </Box>

      <LogoWraper>
        <img
          onClick={() => navigate("/")}
          height="70px"
          src={logo}
          alt="logo"
          style={{ cursor: "pointer" }}
        />
      </LogoWraper>
    </Grid>
  );
};
