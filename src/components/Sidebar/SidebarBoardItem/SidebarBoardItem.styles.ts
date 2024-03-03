import styled from "styled-components";

const BoardItem = styled.button<{ $normal?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 14px 0 15px 34px;
  background-color: transparent;
  border-color: transparent;
  border-radius: 0 100px 100px 0;
  color: ${(props) => (props.$normal ? "inherit" : "#635FC7")};
  cursor: pointer;

  &:hover {
    background-color: rgba(99, 95, 199, 0.1);
  }

  span {
    margin-right: 16px;
  }
`;

export { BoardItem };
