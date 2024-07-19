import styled from "styled-components";

export const ListContainer = styled.ul`
  padding: 0;
  cursor: pointer;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  font-size: 0.9rem;
  background-color: #c5e2e6;
  border: 2px solid #b9c6c8;
  border-radius: 3px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

export const Text = styled.span`
  ::first-letter {
    text-transform: capitalize;
  }
`;

export const DeleteIcon = styled.button`
  cursor: pointer;
  background-color: #2020a1;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;

  :hover {
    background-color: #2b6bec;
  }
`;
