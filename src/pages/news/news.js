import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { MainHeader, NonProductsStub, Spinner } from "../../ui";
import { combine } from "effector";
import { $news, getNewsFx } from "./model";
import { useStore } from "effector-react";
import { useEffect } from "react";

const Card = ({ description, title, date }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Typography textAlign="left" variant="h5" color="#4e4e4e96">
        {title}
      </Typography>

      <Typography variant="subtitle1">{description}</Typography>
      <Typography variant="subtitle2" color="#622a0c">
        {date.split("T")[0]}
      </Typography>
      <hr />
    </div>
  );
};

const $state = combine({
  pending: getNewsFx.pending,
  news: $news,
});

export const NewsPage = () => {
  const { pending, news } = useStore($state);

  useEffect(() => {
    getNewsFx();
  }, []);

  if (pending) {
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
              Загрузка новостей
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

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
            Новости
          </Typography>
        </Box>

        {news?.map((n) => (
          <Card {...n} key={n.id} />
        ))}
      </Box>
    </Box>
  );
};
