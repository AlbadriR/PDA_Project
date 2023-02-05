import MainNavigation from "./MainNavigation";
import { Route, Routes } from "react-router-dom";
import MyTopics from "../../pages/MyTopics";
import TopicsPage from "../../pages/TopicsPage";
import About from "../../pages/About";
import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Center,
} from "@mantine/core";

import { Link } from "react-router-dom";
import LightDarkButton from "../Button/LightDarkButton";
const Layout = (props) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <LightDarkButton />
          <MainNavigation />
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Debate</Text>
          </div>
        </Header>
      }
    >
      <Routes>
        <Route path="/" element={<TopicsPage />} />
        <Route path="about" element={<About />} />
        <Route path="mytopics/*" element={<MyTopics />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </AppShell>
  );
};
export default Layout;
