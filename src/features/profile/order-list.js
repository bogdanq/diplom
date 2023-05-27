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
import { useStore } from "effector-react";
import { useEffect } from "react";
import { $orders, getOrdersFx } from "./model";
import { $user } from "../auth/model";
import { getNoun } from "../utils";

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
  const { email } = useStore($user);
  const orders = useStore($orders);
  const pending = useStore(getOrdersFx.pending);

  console.log("orders", orders);

  useEffect(() => {
    getOrdersFx(email);
  }, [email]);

  if (!orders?.length) {
    <Typography variant="h6" color="#622a0c">
      Товаров нет
    </Typography>;
  }

  if (pending || !orders) {
    <Typography variant="h6" color="#622a0c">
      Загрузка
    </Typography>;
  }

  const price = orders?.flat().reduce((acc, item) => {
    return (acc += item.price * item.count);
  }, 0);

  return (
    <>
      <Typography variant="h6" color="#622a0c">
        {orders?.length} {getNoun(orders?.length, "заказ", "заказа", "заказов")}{" "}
        на сумму:
        <span style={{ textDecoration: "underline" }}>
          {formatter.format(price)}
        </span>
      </Typography>

      <TableContainer sx={{ mt: "50px" }} component={Paper}>
        <Table sx={{ minWidth: "60vw" }}>
          <TableHead>
            <TableRow>
              <TableCell>Количество</TableCell>
              <TableCell align="right">Статус</TableCell>
              <TableCell align="right">Стоимость заказа</TableCell>
              <TableCell align="right">Товары</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order, index) => (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ verticalAlign: "top" }}
                >
                  {orders[index].length}
                </TableCell>

                <TableCell align="center" style={{ verticalAlign: "top" }}>
                  <Typography
                    borderRadius="8px"
                    textAlign="center"
                    bgcolor="#0eca0e"
                    color="#fff"
                    fontWeight="bold"
                  >
                    Оформлено
                  </Typography>
                </TableCell>

                <TableCell align="center" style={{ verticalAlign: "top" }}>
                  <Typography fontWeight="bold">
                    {formatter.format(
                      orders[index].reduce(
                        (acc, item) => (acc += item.price),
                        0
                      )
                    )}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  {orders[index].map((product, idx) => (
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
