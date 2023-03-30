import { TextField, Box, Typography, Button } from "@mui/material";

export const UserForm = ({ user }) => {
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
        value={user.name}
        focused={false}
        fullWidth
        placeholder="Введите свое имя"
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
        value={user.email}
        focused={false}
        fullWidth
        placeholder="Введите свою почту"
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
        value={user.password}
        focused={false}
        fullWidth
        placeholder="Введите пароль"
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
        value={user.phone}
        focused={false}
        fullWidth
        placeholder="+7"
      />

      <Box mt="30px">
        <Button
          size="md"
          width="full"
          variant="outlined"
          fullWidth
          color="secondary2"
        >
          Сохранить данные
        </Button>
      </Box>
    </Box>
  );
};
