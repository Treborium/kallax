import {
  MenuButton,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

export const HamburgerMenu: React.FC<{}> = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<GiHamburgerMenu width='2.5rem' height='2.5rem' />}
        position='absolute'
        right='2vh'
        top='2vh'
      />
      <MenuList>
        <MenuItem as='a' href='/home'>
          Home
        </MenuItem>
        <MenuItem as='a' href='/experience'>
          Experience
        </MenuItem>
        <MenuItem as='a' href='/contact'>
          Contact
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
