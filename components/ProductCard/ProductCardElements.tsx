import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  background: #fff;
  border: 1px solid black;
  border-radius: 5px;
  height: 400px;
  max-width: 300px;
  padding: 16px 32px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  };
`;

export const WrapperT = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  justify-content: flex-start;
  align-items: center;
`;
export const WrapperB = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: gray;
  };
`;

export const Img = styled(Image)`
  max-width: 1000px;
  height: 1000px;
`;

export const Description = styled.p`
  font-size: 18px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: bolder;
`;

export const CartButton = styled.button`
  padding: 16px 24px;
  border-radius: 5px;
`;
