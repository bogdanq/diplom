import { TextField, Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

export const LoginForm = ({ onSubmit, pending }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <Box width="350px">
      <Typography
        variant="subtitle2"
        color="#4C5B6A"
        mb="10px"
        fontWeight={400}
      >
        Email
      </Typography>
      <TextField
        onChange={handleChangeForm}
        focused={false}
        fullWidth
        placeholder="Введите свою почту"
        inputProps={{
          "data-name": "email",
        }}
      />

      <Typography
        variant="subtitle2"
        color="#4C5B6A"
        mb="10px"
        mt="30px"
        fontWeight={400}
      >
        Password
      </Typography>
      <TextField
        focused={false}
        type="password"
        fullWidth
        placeholder="Введите пароль"
        onChange={handleChangeForm}
        inputProps={{
          "data-name": "password",
        }}
      />

      <Box mt="30px">
        <LoadingButton
          type="submit"
          size="md"
          width="full"
          variant="contained"
          fullWidth
          color="secondary2"
          onClick={() => onSubmit(form)}
          loading={pending}
        >
          Войти
        </LoadingButton>
      </Box>
    </Box>
  );
};
