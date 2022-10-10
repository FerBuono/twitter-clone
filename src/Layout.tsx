import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  StackDivider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Text, Stack, Icon } from "@chakra-ui/react";

import {
  FaTwitter,
  FaHashtag,
  FaRegEnvelope,
  FaEnvelope,
  FaRegBookmark,
  FaBookmark,
  FaRegListAlt,
  FaListAlt,
  FaRegUser,
  FaUser,
  FaRegBell,
  FaBell,
} from "react-icons/fa";
import { RiHome7Fill, RiHome7Line } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { IconType } from "react-icons";

type Props = {
  children: React.ReactNode;
};

interface ListLink {
  href: string;
  text: string;
  activeIcon: IconType;
  inactiveIcon: IconType;
}

const LINKS: ListLink[] = [
  {
    href: "/home",
    text: "Inicio",
    activeIcon: RiHome7Fill,
    inactiveIcon: RiHome7Line,
  },
  {
    href: "/explore",
    text: "Explorar",
    activeIcon: FaHashtag,
    inactiveIcon: FaHashtag,
  },
  {
    href: "/notifications",
    text: "Notificaciones",
    activeIcon: FaBell,
    inactiveIcon: FaRegBell,
  },
  {
    href: "/messages",
    text: "Mensajes",
    activeIcon: FaEnvelope,
    inactiveIcon: FaRegEnvelope,
  },
  {
    href: "/bookmarks",
    text: "Guardados",
    activeIcon: FaBookmark,
    inactiveIcon: FaRegBookmark,
  },
  {
    href: "/lists",
    text: "Listas",
    activeIcon: FaListAlt,
    inactiveIcon: FaRegListAlt,
  },
  {
    href: "/profile",
    text: "Perfil",
    activeIcon: FaUser,
    inactiveIcon: FaRegUser,
  },
  {
    href: "/options",
    text: "Más opciones",
    activeIcon: CgMoreO,
    inactiveIcon: CgMoreO,
  },
];

const Layout: React.FC<Props> = ({ children }: Props) => {
  const { toggleColorMode } = useColorMode();
  const { pathname } = useLocation();
  const logoColor = useColorModeValue("primary.500", undefined);

  return (
    <Container
      height="100%"
      paddingX={0}
      maxWidth="container.xl"
      alignSelf="center"
    >
      <Stack direction="row" height="100%" divider={<StackDivider />}>
        <Stack minWidth={72} paddingY={3} paddingX={6} spacing={8}>
          <Icon
            as={FaTwitter}
            color={logoColor}
            width={7}
            height={7}
            onClick={toggleColorMode}
          />
          <Stack fontSize="xl" fontWeight="bold" spacing={7}>
            {LINKS.map((link) => (
              <Link to={link.href} key={link.href}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={5}
                  color={pathname === link.href ? "primary.500" : "inherit"}
                >
                  <Icon
                    as={
                      pathname === link.href
                        ? link.activeIcon
                        : link.inactiveIcon
                    }
                    height={6}
                    width={6}
                  />
                  <Text>{link.text}</Text>
                </Stack>
              </Link>
            ))}
          </Stack>
          <Button size="lg" colorScheme="primary" width="100%">
            Twittear
          </Button>
        </Stack>
        <Box paddingX={4}>{children}</Box>
      </Stack>
    </Container>
  );
};

export default Layout;
