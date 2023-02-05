import { Link } from "react-router-dom";
import { Text } from "@mantine/core";
function MainNavigation() {
  return (
    <>
      <Text fz="xl" component={Link} to="/">
        Topics
      </Text>
      <Text fz="xl" component={Link} to="/mytopics">
        My Topics
      </Text>
      <Text fz="xl" component={Link} to="/about">
        About
      </Text>
      <Text fz="xl" component={Link} to="/settings">
        Settings
      </Text>
      <Text fz="xl" component={Link} to="/settings">
        Settings
      </Text>
    </>
  );
}

export default MainNavigation;
