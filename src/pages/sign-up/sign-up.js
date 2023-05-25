import { Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { SignUpForm } from "../../features/auth";
import { signupFx } from "../sign-in/model";
import { useStore } from "effector-react";
import { useEffect } from "react";

const LogoWraper = styled(Box)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(263deg, #c3460b45, #c3460b);
`;

export const SignUp = () => {
  const navigate = useNavigate();

  const pending = useStore(signupFx.pending);

  useEffect(() => {
    return signupFx.done.watch(() => {
      window.location.reload();
    });
  }, [navigate]);

  return (
    <Grid container height="100vh">
      <LogoWraper>
        <img
          onClick={() => navigate("/")}
          height="70px"
          src={logo}
          alt="logo"
          style={{ cursor: "pointer" }}
        />
      </LogoWraper>

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
            Введите данные что бы зарегистрироваться
          </Typography>

          <SignUpForm onSubmit={signupFx} pending={pending} />
        </Box>
      </Box>
    </Grid>
  );
};
