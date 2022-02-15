import { Box } from '@chakra-ui/react';
import { HamburgerMenu } from './HamburgerMenu';

export const Layout: React.FC<{}> = () => {
  return (
    <Box width='100vw' minHeight='100vh' backgroundColor='#EFEFEF'>
      <HamburgerMenu />
    </Box>
  );
};
