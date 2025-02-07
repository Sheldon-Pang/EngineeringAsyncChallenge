import styled from 'styled-components';

export const DropdownMenuWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-align: center;
  align-content: center;
  padding: 12px;
  border: 1px solid #e2e2e2;
`;

export const DropdownMenuItemsWrapper = styled.ul`
  margin-top: 40px;
  padding: 0;
  list-style: none;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: ${(props) => (props.dropdownDirection === 'left' ? '0' : 'auto')};
  right: ${(props) => (props.dropdownDirection === 'right' ? '0' : 'auto')};
  z-index: 15;
  min-width: 100px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
`;

export const DropdownMenuItemWrapper = styled.li`
  padding: 8px 12px;
  transition: background-color 0.3s ease-in-out;
  a {
    display: block;
  }
  &:hover {
    background-color: #e2e2e2;
  }
`;
