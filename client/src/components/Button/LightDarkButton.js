import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Moon, SunHigh } from "tabler-icons-react";
const LightDarkButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? (
        <SunHigh size={48} strokeWidth={2} color={"black"} />
      ) : (
        <Moon size={48} strokeWidth={2} color={"black"} />
      )}
    </ActionIcon>
  );
};
export default LightDarkButton;
