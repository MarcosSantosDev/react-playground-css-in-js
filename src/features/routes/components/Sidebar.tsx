import styled from 'styled-components';

import CustomLink from '@/components/CustomLink';
import routePaths from '@/router/routePaths';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <SidebarContainer>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Menu
      </ToggleButton>

      <NavLinks>
        <CustomLink to={routePaths.ROOT_INDEX}>Home</CustomLink>
        <CustomLink to={routePaths.ROOT_ABOUT}>About</CustomLink>
      </NavLinks>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  padding-top: 100px;
`;

const ToggleButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1000;

  &:hover {
    background-color: #444;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-left: 20px;
`;

export default Sidebar;
