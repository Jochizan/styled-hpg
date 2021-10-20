import styled from 'styled-components';
import Navigation from '../Navigation';

const SidebarStyled = styled.div`
  width: 16rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  position: fixed;
`;

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  );
};

export default Sidebar;
