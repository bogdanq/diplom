import { Box, Typography } from "@mui/material";
import { MainHeader } from "../ui";
import { PhoneAndroid, Home } from "@mui/icons-material";

const Card = ({ title, adress, phone, img }) => {
  return (
    <div style={{ marginBottom: "80px" }}>
      <div style={{ marginBottom: "30px", display: "flex" }}>
        <img
          width="300px"
          height="200px"
          alt=""
          src={img}
          style={{ border: "1px solid #622a0c", padding: "3px" }}
        />
        <div style={{ marginLeft: "30px" }}>
          <Typography
            textAlign="left"
            variant="h5"
            color="#4e4e4e96"
            style={{ marginBottom: "20px" }}
          >
            {title}
          </Typography>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Home />
            <Typography variant="subtitle1">{adress}</Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PhoneAndroid />
            <Typography variant="subtitle1">{phone}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    title: '"Кодми-мебель" Бежицкий р-н',
    adress: "г.Брянск, ул. Сталелитейная, 14",
    phone: "+7-900-360-00-15",
    img: "http://kodmi-mebel.ru/images/thumbnails/images/stalzavod-150x100.jpg",
  },
  {
    title: '"Мебель 5+" Бежицкий р-н',
    adress: "г.Брянск, ул. Шоссейная, 4",
    phone: "(4832)52-34-36, +7-953-276-70-86",
    img: "http://kodmi-mebel.ru/images/thumbnails/images/Shosseynaya-150x84.jpg",
  },
  {
    title: '"Мебель 5+" Володарский р-н',
    adress: "г.Брянск, ул. 2я Мичурина, 27",
    phone: "(4832)73-89-10, +7-953-276-11-33",
    img: "http://kodmi-mebel.ru/images/thumbnails/images/5-150x117.jpg",
  },
  {
    title: '"МебельСклад32" Советский р-н',
    adress: "г.Брянск, ул. Романа Брянского, 2 корп 1",
    phone: "(4832)59-95-15, +7-953-291-32-95",
    img: "http://kodmi-mebel.ru/images/thumbnails/images/5ymikrorayon-150x84.jpg",
  },
  {
    title: '"МебельСклад32" Володарский р-н',
    adress: "г.Брянск, ул. 2я Мичурина, 27",
    phone: "+7-903-869-14-40",
    img: "http://kodmi-mebel.ru/images/thumbnails/images/4-150x100.jpg",
  },
];

export const ShopPage = () => {
  return (
    <Box height="100vh">
      <Box maxWidth={1600} margin="0 auto" padding="0 20px" minHeight="100%">
        <Box
          position="sticky"
          top="20px"
          backgroundColor="#fff"
          zIndex={99}
          pb="50px"
        >
          <MainHeader />

          <Typography textAlign="center" variant="h4" color="#622a0c">
            Магазины
          </Typography>
        </Box>

        {items.map((i) => (
          <Card {...i} key={i.title} />
        ))}
      </Box>
    </Box>
  );
};
