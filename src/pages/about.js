import { Box, Typography } from "@mui/material";
import { MainHeader } from "../ui";

export const AboutPage = () => {
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
            О нас
          </Typography>
        </Box>

        <Typography variant="subtitle1">
          Основным направлением деятельности фабрики было и остается
          изготовление модульных кухонных гарнитуров. Благодаря модульной
          системе становится совершенно просто стать дизайнером своей
          собственной кухни. Широчайший выбор современных материалов и цветовых
          решений позволяет воплотить в жизнь самые смелые фантазии и желания.
          Шагая в ногу с последними тенденциями, фабрика постоянно расширяет и
          дополняет ассортимент используемых материалов. Кроме того, широкий
          выбор готовых решений по комплектации кухонных гарнитуров поможет
          сделать Ваш выбор еще легче. Гибкая политика фабрики по
          ценообразованию позволяет создавать кухонные гарнитуры от
          эконом-класса, до изысканных образцов, созданных по индивидуальным
          проектам.
        </Typography>

        <Typography
          textAlign="center"
          variant="h5"
          color="#4e4e4e96"
          style={{ margin: "80px 0 40px 0" }}
        >
          Оптовая продажа мебели
        </Typography>
        <Typography variant="subtitle1">
          На сегодняшний день фабрика КОДМИ-МЕБЕЛЬ, имея широкие
          производственные мощности, не только полностью удовлетворяет
          потребности своей собственной торговой сети, но и успешно сотрудничает
          с оптовыми торговыми представительствами в Орле, Смоленске, Калуге,
          Москве и в других регионах. Широкий ассортимент выпускаемой продукции
          и гибкая система скидок делает фабрику КОДМИ-МЕБЕЛЬ очень
          привлекательным партнером.
        </Typography>
        <Typography variant="subtitle1" style={{ marginTop: "10px" }}>
          Приглашаем к взаимовыгодному и долгосрочному сотрудничеству новые
          компании по всей территории России. Высокое качество и внимательное
          отношение к своим клиентам – вот основные цели, которые фабрика
          преследует на протяжении многих лет, бережно создавая и храня
          безупречную репутацию надежного производителя.
        </Typography>

        <Typography
          textAlign="center"
          variant="h5"
          color="#4e4e4e96"
          style={{ margin: "80px 0 40px 0" }}
        >
          Фабрика мебели
        </Typography>
        <Typography variant="subtitle1">
          Мебельная фабрика КОДМИ-МЕБЕЛЬ - широко известный игрок на мебельном
          рынке России. Начав свое становление в 1998 году с запуска небольшого
          цеха по производству кухонных модулей – сегодня это крупный
          производственный комплекс, оснащенный высококлассным оборудованием для
          разработки и производства качественной и современной мебели по
          привлекательным ценам.
        </Typography>
        <Typography variant="subtitle1" style={{ marginTop: "10px" }}>
          Собственная торговая сеть магазинов и выставочных залов в Брянске,
          постоянно расширяющаяся оптовая сеть торговых представительств во
          многих регионах России свидетельствует об успешном развитии фабрики.
          На данный момент в линейке выпускаемой продукции не только кухонные
          модули, но и обеденные группы, шкафы – купе, прихожие.
        </Typography>
      </Box>
    </Box>
  );
};
