import { ButtonHTMLAttributes } from "react";
import SidebarIcon from "../../../assets/sidebar-icon.svg";
import { BoardItem } from "./SidebarBoardItem.styles";

interface SidebarBoardItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  $normal?: boolean;
}

function SidebarBoardItem({ text, ...props }: SidebarBoardItemProps) {
  return (
    <BoardItem {...props}>
      <span>
        <img src={SidebarIcon} alt="icon" />
      </span>
      {text}
    </BoardItem>
  );
}

export default SidebarBoardItem;
