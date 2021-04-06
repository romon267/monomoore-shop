import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  background: #fff;
  border: none;
  border-radius: 5px;
  height: 400px;
  max-width: 300px;
  /* padding: 16px 32px; */
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02) rotate(1deg);
  };
`;

export const WrapperT = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
`;
export const WrapperB = styled.div`
  position: relative;
  bottom: 0px;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  padding: 0 20px;
  margin-top: 10px;

  &:hover {
    color: gray;
  };
`;

export const Img = styled(Image)`
  max-width: 300px;
  height: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Description = styled.p`
  height: 60px;
  font-size: 18px;
  padding: 0 20px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: bolder;
`;

export const CartButton = styled.button`
  cursor: pointer;
  padding: 12px 20px;
  font-weight: bolder;
  border: 2px solid #010606;
  background: #010606;
  color: #fff;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    background: #fff;
    color: #010606;
  }

  &:focus {
    background: #c7c7c7;
  }
`;
