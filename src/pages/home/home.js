import { Grid, Typography, InputBase, Paper, Box, Button } from "@mui/material";
import styled from "styled-components";
import lightning from "../../assets/lightning.svg";
import present from "../../assets/present.svg";
import { MainTanplate } from "../../ui/templates";
import { ItemCart } from "../../ui";

const BoxAboutWrapper = styled(Box)`
  background: ${({ bg }) => bg};
  height: 455px;
  border-radius: 10px;
  padding: 0 50px;
  padding-top: 15%;
  padding-right: 30%;
  margin-top: 20px;
  position: relative;

  & h5 {
    display: block;
    font-weight: 400;
  }
  & h4 {
    display: block;
    color: #622a0c;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 50px;
  }

  button {
    margin-top: 50px;
  }

  img {
    position: absolute;
    width: 250px;
    right: 0;
  }
`;

export const Home = () => {
  return (
    <Box>
      <MainTanplate>
        <>
          <Grid container justifyContent="space-between">
            <Grid item xs={6}>
              <BoxAboutWrapper bg="#f1dfdf" style={{ marginRight: "10px" }}>
                <Typography variant="h5" color="secondary">
                  Бесплатная доставка
                </Typography>
                <Typography variant="h4">
                  по всей россии при заказе от 500 рублей
                </Typography>
                <Button variant="outlined" color="secondary">
                  подробнее
                </Button>

                <img src={present} alt="logo" />
              </BoxAboutWrapper>
            </Grid>

            <Grid item xs={6}>
              <BoxAboutWrapper bg="#f9f0e9" style={{ marginLeft: "10px" }}>
                <Typography variant="h5" color="secondary">
                  Новая коллекция
                </Typography>
                <Typography variant="h4">эти товары ждут только вас</Typography>
                <Button variant="outlined" color="secondary">
                  подробнее
                </Button>

                <img src={lightning} alt="logo" />
              </BoxAboutWrapper>
            </Grid>
          </Grid>

          <Box mt="150px">
            <Typography textAlign="center" variant="h4">
              Популярные товары
            </Typography>

            <Grid container justifyContent="space-between" wrap="wrap">
              <Grid item md={2.8} sm={3.5}>
                <ItemCart />
              </Grid>
              <Grid item md={2.8} sm={3.5}>
                <ItemCart />
              </Grid>
              <Grid item md={2.8} sm={3.5}>
                <ItemCart />
              </Grid>
              <Grid item md={2.8} sm={3.5}>
                <ItemCart />
              </Grid>
            </Grid>

            <Grid container item xs={12} justifyContent="center" mt="80px">
              <Button
                style={{
                  height: "50px",
                  background: "#622a0c",
                  width: "200px",
                }}
                variant="contained"
              >
                Показать все
              </Button>
            </Grid>
          </Box>

          <Box mt="100px">
            <Typography textAlign="center" variant="h4">
              Оптовая продажа мебели
            </Typography>

            <Typography variant="subtitle1" mt="50px">
              На сегодняшний день фабрика КОДМИ-МЕБЕЛЬ, имея широкие
              производственные мощности, не только полностью удовлетворяет
              потребности своей собственной торговой сети, но и успешно
              сотрудничает с оптовыми торговыми представительствами в Орле,
              Смоленске, Калуге, Москве и в других регионах. Широкий ассортимент
              выпускаемой продукции и гибкая система скидок делает фабрику
              КОДМИ-МЕБЕЛЬ очень привлекательным партнером. Приглашаем к
              взаимовыгодному и долгосрочному сотрудничеству новые компании по
              всей территории России. Высокое качество и внимательное отношение
              к своим клиентам – вот основные цели, которые фабрика преследует
              на протяжении многих лет, бережно создавая и храня безупречную
              репутацию надежного производителя.
            </Typography>

            <Box mt="50px">
              <Typography color="#622a0c" variant="h6">
                ПОДПИСКА НА НОВОСТИ МАГАЗИНА
              </Typography>

              <Grid container justifyContent="space-between">
                <Grid container item xs={7} alignItems="center" mt="50px">
                  <Paper
                    style={{
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1, height: "50px" }}
                      placeholder="Email"
                    />
                  </Paper>
                </Grid>

                <Grid container item xs={4.7} alignItems="center" mt="50px">
                  <Button
                    style={{
                      height: "50px",
                      background: "#622a0c",
                      width: "200px",
                    }}
                    variant="contained"
                  >
                    подписаться
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </>
      </MainTanplate>
    </Box>
  );
};
