import { TextField, Box, Typography, Button } from "@mui/material";
import { updateUsersFx } from "../auth/model";
import { useState } from "react";

export const UserForm = ({ user }) => {
  const [form, setForm] = useState(user);

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <Box width="500px">
      <Typography
        variant="subtitle2"
        color="#4C5B6A"
        mb="10px"
        fontWeight={400}
      >
        Имя
      </Typography>
      <TextField
        value={form.name}
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
        disabled
        value={form.email}
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
        disabled
        value={form.password}
        focused={false}
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
        value={form.phone}
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
          size="md"
          width="full"
          variant="outlined"
          fullWidth
          color="secondary2"
          onClick={() => updateUsersFx(form)}
        >
          Сохранить данные
        </Button>
      </Box>
    </Box>
  );
};
