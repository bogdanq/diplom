import { TextField, Box, Typography, Button } from "@mui/material";
import { useState } from "react";

export const SignUpForm = ({ onSubmit, pending }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
  });

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
        Имя
      </Typography>
      <TextField
        focused={false}
        fullWidth
        placeholder="Введите свое имя"
        onChange={handleChangeForm}
        inputProps={{
          "data-name": "name",
        }}
      />

      <Typography
        variant="subtitle2"
        color="#4C5B6A"
        mb="10px"
        fontWeight={400}
        mt="30px"
      >
        Почта
      </Typography>
      <TextField
        focused={false}
        fullWidth
        placeholder="Введите свою почту"
        onChange={handleChangeForm}
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
        Пароль
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

      <Typography
        variant="subtitle2"
        color="#4C5B6A"
        mb="10px"
        mt="30px"
        fontWeight={400}
      >
        Номер телефона
      </Typography>
      <TextField
        focused={false}
        fullWidth
        placeholder="+7"
        onChange={handleChangeForm}
        inputProps={{
          "data-name": "phone",
        }}
      />

      <Box mt="30px">
        <Button
          type="submit"
          size="md"
          width="full"
          variant="contained"
          fullWidth
          color="secondary2"
          onClick={() => onSubmit(form)}
          loading={pending}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </Box>
  );
};
