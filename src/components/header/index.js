import { NavLink, Link } from "react-router-dom";
import { Group, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./style.module.css";

const links = [
  { link: "/couses", label: "Courses" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
  { link: "/premium", label: "Premium" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <NavLink key={link.label} to={link.link} className={classes.link}>
      {link.label}
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <div size="md" className={classes.inner}>
        <Link to={"/"} className={[classes.link, classes.logo].join(" ")}>
          <Text className={classes.link}>Lingo Habit</Text>
        </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </div>
    </header>
  );
}
