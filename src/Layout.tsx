import React from "react";
import { Container, Divider } from "@chakra-ui/react";

import { Text, Stack, Icon } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container paddingY={4} maxWidth="container.md" alignSelf="center">
      <Stack direction="row">
        <Stack spacing={4}>
          <Icon as={FaTwitter} />
          <Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={FaTwitter} />
              <Text>Inicio</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={FaTwitter} />
              <Text>Explorar</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={FaTwitter} />
              <Text>Notificaciones</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={FaTwitter} />
              <Text>Mensajes</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={FaTwitter} />
              <Text>Guardados</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={FaTwitter} />
              <Text>Listas</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={FaTwitter} />
              <Text>Perfil</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={FaTwitter} />
              <Text>Más opciones</Text>
            </Stack>
          </Stack>
        </Stack>
        {children}
      </Stack>
    </Container>
  );
};

export default Layout;
