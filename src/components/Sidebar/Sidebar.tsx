import { useState } from "react";
import { StyledSidebar, Logo } from "./Sidebar.styles";
import SidebarBoardItem from "./SidebarBoardItem/SidebarBoardItem";
import LogoEl from "../../assets/logo.svg";

const boards = [
  { id: 1, name: "Platform Launch", tasks: [] },
  { id: 2, name: "Product Development", tasks: [] },
];

function Sidebar() {
  const [data, setData] = useState(boards);
  const handleAddBoard = () => {
    setData([
      ...data,
      {
        id: data.length + 1,
        name: `Board ${data.length + 1}`,
        tasks: [],
      },
    ]);
  };

  return (
    <StyledSidebar>
      <Logo src={LogoEl} alt="logo" />
      <div>
        <p style={{ marginBottom: "19px", marginLeft: "34px" }}>
          All boards {boards.length}
        </p>
        {data.map((board) => (
          <SidebarBoardItem key={board.id} text={board.name} $normal />
        ))}
        <SidebarBoardItem
          text="+ Create new board"
          onClick={() => handleAddBoard()}
        />
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
