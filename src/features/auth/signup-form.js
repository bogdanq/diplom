import { TextField, Box, Typography, Button } from "@mui/material";

export const SignUpForm = () => {
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
      <TextField focused={false} fullWidth placeholder="Введите свое имя" />

      <Typography
        variant="subtitle2"
        color="#4C5B6A"
        mb="10px"
        fontWeight={400}
        mt="30px"
      >
        Почта
      </Typography>
      <TextField focused={false} fullWidth placeholder="Введите свою почту" />

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
      <TextField focused={false} fullWidth placeholder="+7" />

      <Box mt="30px">
        <Button
          size="md"
          width="full"
          variant="contained"
          fullWidth
          color="secondary2"
        >
          Зарегистрироваться
        </Button>
      </Box>
    </Box>
  );
};
