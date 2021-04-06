import styled from 'styled-components';

export interface NotificationProps {
  message?: string;
}

export const CheckoutWrapper = styled.div`
  /* width: 100%; */
  padding: 20px 50px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 20px 0px;
  }

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    /* padding: 20px 80px; */
  }
`;

export const Header = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  padding: 25px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AddressForm = styled.div`
  width: auto;
  margin-right: 20px;
  height: 100%;
  flex-grow: 1;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
    border: none;
    border-bottom: 2px solid black;
    border-radius: 0;
  }
`;

export const AddressHeader = styled.h2`
  margin: 0;
  padding: 9;
  text-align: center;
  align-self: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const AddressLabel = styled.label`
  display: flex;
  /* padding: 0 20px; */
  flex-direction: column;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const AddressInput = styled.input`
  border: 2px solid gray;
  border-radius: 5px;
  padding: 12px 10px;
  outline: none;

  &:focus {
    border: 2px solid black;
  }
`;

export const Cart = styled.div`
  padding: 20px;
  max-width: 500px;
  width: auto;
  height: 100%;
  flex-grow: 1;
  border: 2px solid black;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: 100%;
    border: none;
    border-bottom: 2px solid black;
    border-radius: 0;
  }
`;

export const CartItem = styled.div`
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid gray;
`;

export const ItemTextWrap = styled.div`
  text-align: left;
`;

export const ItemName = styled.div`
  font-weight: bolder;
  text-align: left;
`;

export const ItemLink = styled.a`
  text-decoration:none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #c7c7c7;
  }
`;

export const ItemDesc = styled.div`
  max-width: 220px;
  text-align: left;
`;

export const ItemBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemBtn = styled.button`
  cursor: pointer;
  background: white;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  margin: 0 2px;
  justify-content: center;
  border: 2px solid black;
  outline: none;

  &:hover {
    color: white;
    background: black;
  }
`;

export const ItemPriceWrap = styled.div`
  font-weight: bold;
`;

export const CheckoutBtn = styled.button`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: white;
  border: 2px solid ${({ disabled }) => (disabled ? 'gray' : 'green')};
  color: ${({ disabled }) => (disabled ? 'gray' : 'green')};
  width: 100%;
  padding: 14px 0;
  outline: none;
  font-weight: bold;

  &:hover {
    background: ${({ disabled }) => (disabled ? 'gray' : 'green')};
    color: white;
  }
`;

export const Notification = styled.div<NotificationProps>`
  width: 600px;
  height: 80px;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: fixed;
  top: 0;
  top: ${({ message }) => (message ? '80px' : '-100%')};
  opacity: ${({ message }) => (message ? '1' : '0')};
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
`;
