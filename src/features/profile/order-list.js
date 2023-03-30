import {
  Box,
  Typography,
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Button,
  Table,
} from "@mui/material";
import { formatter } from "../common";

const rows = [
  {
    name: "Название компании 1",
    status: "Куплено",
    price: 25500,
    date: "29.01.2023",
    products: [
      {
        name: "Кровать металлическая Диана Lux plus 1400x2000 Lux plus 1400x2000 Lux plus 1400x2000",
        price: 25500,
        img: "",
      },
      {
        name: "Кровать металлическая Диана Lux plus 1400x2000",
        price: 25500,
        img: "",
      },
    ],
  },
];

export const OrderList = () => {
  return (
    <>
      <Typography variant="h6" color="#622a0c">
        Всего 3 заказа на сумму {formatter.format(11232323)}
      </Typography>

      <TableContainer sx={{ mt: "50px" }} component={Paper}>
        <Table sx={{ minWidth: "60vw" }}>
          <TableHead>
            <TableRow>
              <TableCell>Название компании</TableCell>
              <TableCell align="right">Статус</TableCell>
              <TableCell align="right">Стоимость заказа</TableCell>
              <TableCell align="right">Дата покупки</TableCell>
              <TableCell align="right">Товары</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ verticalAlign: "top" }}
                >
                  {row.name}
                </TableCell>

                <TableCell align="center" style={{ verticalAlign: "top" }}>
                  <Typography
                    borderRadius="8px"
                    textAlign="center"
                    bgcolor="#0eca0e"
                    color="#fff"
                    fontWeight="bold"
                  >
                    {row.status}
                  </Typography>
                </TableCell>

                <TableCell align="center" style={{ verticalAlign: "top" }}>
                  <Typography fontWeight="bold">
                    {formatter.format(row.price)}
                  </Typography>
                </TableCell>

                <TableCell align="center" style={{ verticalAlign: "top" }}>
                  {row.date}
                </TableCell>

                <TableCell align="right">
                  {row.products.map((product, idx) => (
                    <Box key={idx} maxWidth="300px" pb="20px">
                      {product.name}
                    </Box>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt="30px">
        <Button size="md" variant="outlined" color="secondary2">
          Показать еще
        </Button>
      </Box>
    </>
  );
};
