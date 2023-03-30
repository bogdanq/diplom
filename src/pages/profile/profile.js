import { Box, Typography, Tabs, Tab } from "@mui/material";
import { useStore } from "effector-react";
import { useState } from "react";
import { $user } from "../../features/auth/model";
import { OrderList, UserForm } from "../../features/profile";
import { MainHeader } from "../../ui";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Box height="100%" p="10px 20px">
      {value === index && children}
    </Box>
  );
}

export const Profile = () => {
  const user = useStore($user);

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

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
            {user.name}, добро пожаловать
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            height: "60vh",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: 1,
              borderColor: "divider",
              minWidth: "250px",
              textAlign: "left",
            }}
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab label="Мои данные" style={{ alignItems: "baseline" }} />
            <Tab label="История заказов" style={{ alignItems: "baseline" }} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <UserForm user={user} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <OrderList />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};
