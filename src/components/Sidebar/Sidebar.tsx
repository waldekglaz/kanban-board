import styled from "styled-components";
import Logo from "../../assets/kanban-logo.svg";

const StyledSidebar = styled.aside`
  height: 100vh;
  width: 300px;
  position: absolute;
  border-right: 1px solid #979797;
  padding: 32px 0 32px 34px;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <img src={Logo} alt="Kanban Logo" />
    </StyledSidebar>
  );
}

export default Sidebar;
