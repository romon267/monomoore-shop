import styled from 'styled-components';

interface CartCardProps {
  isOpen: boolean;
}

export const CartButton = styled.button`
  appearance: none;
  all: revert;
  background: none;
  border: none;
  border-bottom: 2px solid black;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  outline: none;

  &:hover {
    border-bottom: 2px solid gray;
    color: gray;
  }
`;

export const CartCard = styled.div<CartCardProps>`
  position: fixed;
  height: auto;
  width: 300px;
  padding: 24px 0;
  top: 70px;
  right: 0;
  right: ${({ isOpen }) => (isOpen ? '20px' : '-100%')};
  background: white;
  border-radius: 5px;
  border: 2px solid black;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    border: 2px solid gray;
  }
`;

export const CartTable = styled.table`
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  padding-top: 10px;
  margin-top: 10px;
  border-top: 2px solid black;
`;

export const CartClear = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: bolder;
  padding: 8px 12px;
  background: white;
  border: 2px solid black;
  border-radius: 5px;
  outline: none;

  &:hover {
    background: black;
    color: white;
  }
`;

export const Checkout = styled.a`
  cursor: pointer;
  font-weight: bolder;
  font-size: 14px;
  padding: 7px 12px;
  text-decoration: none;
  background: white;
  color: green;
  border: 2px solid black;
  border-radius: 5px;

  &:hover {
    background: green;
    color: white;
    border: 2px solid green;
  }
`;
