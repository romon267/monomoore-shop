import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 50px;
  background: #7A5871;
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Gallery = styled.div`
  
`;

export const SelectorWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NextImage = styled(Image)`
  cursor: pointer;
`;

export const SmallImage = styled.img`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const MainImage = styled(Image)`

`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 600px;
  width: 450px;
  max-width: 450px;
`;

export const ProdHeader = styled.h1`
  margin: 0;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid black;
  font-weight: bold;
  font-size: 28px;
  color: #EDE2E8;
`;

export const Price = styled.div`
  font-weight: bolder;
  font-size: 20px;
  color: #EDE2E8;
`;

export const Stock = styled.div`
  font-weight: lighter;
  color: #CFBFCC;
  margin: 10px 0;
`;

export const Description = styled.div`
  color: #EDE2E8;
  height: 298px;
`;

export const AddToCartBtn = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 12px 20px;
  margin-top: 0px;
  font-weight: bolder;
  border: 2px solid #010606;
  background: #010606;
  color: #fff;
  transition: all 0.2s ease-in-out;
  outline: none;
  width: 100%;
  height: 65px;
  box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.5);

  &:hover {
    background: #fff;
    color: #010606;
  }

  &:focus {
    background: #c7c7c7;
  }
`;
