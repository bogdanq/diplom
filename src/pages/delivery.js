import { Box, Typography } from "@mui/material";
import { MainHeader } from "../ui";

export const DeliveryPage = () => {
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
            Оплата
          </Typography>
        </Box>

        <Typography variant="subtitle1">
          Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
          Ipsum является стандартной "рыбой" для текстов на латинице с начала
          XVI века. В то время некий безымянный печатник создал большую
          коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
          распечатки образцов. Lorem Ipsum не только успешно пережил без
          заметных изменений пять веков, но и перешагнул в электронный дизайн.
          Его популяризации в новое время послужили публикация листов Letraset с
          образцами Lorem Ipsum в 60-х годах и, в более недавнее время,
          программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых
          используется Lorem Ipsum.
        </Typography>
      </Box>
    </Box>
  );
};
