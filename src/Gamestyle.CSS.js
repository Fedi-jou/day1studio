import styled, { css } from "styled-components";

/* const gradient = (degs) => css`
  background: linear-gradient(${degs || 130}deg, #00dbde 0%, #fc00ff 100%);
`; */

const gradient = (degs) => css`
  background: linear-gradient(${degs || 130}deg, #2d3436 0%, #000000 50%);
`;

/* export const Over = styled.div`
  height: 800px; //800
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 10px;

  @media screen and (max-width: 768px) {
    height: 2000px; //1100 1500
  }
  @media screen and (max-width: 480px) {
    height: 2000px; //1300 1000
  }
`; */

export const Cardwrapper = styled.div`
  /* height: 800px; // 800px */
  max-width: 1000px; //1000
  margin: 0 auto; // 0 auto
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 0 20px;
    height: 100%;
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 3rem 0 2rem;
  border-radius: 0.5rem;
  color: white;
  ${gradient()};
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    ${gradient(-50)};
    transition: opacity 0.75s;
  }
  &:hover::after {
    opacity: 1;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
  margin-bottom: 2rem;
  border-radius: 50%;
  font-size: 40px;
  color: white;
  ${gradient()};
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

export const Plantitle = styled.div`
  font-size: 1.25rem;
`;

export const Plancost = styled.div`
  font-size: 1.25rem; // 3rem
  margin-bottom: 1cm;
`;

export const Featurelistitem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.325rem;
  margin-left: 10px;
  margin-right: 10px;
  & > i {
    font-size: 20px;
    margin-right: 0.5rem;
  }
`;

export const Actionbutton = styled.button`
  flex: 0 0 auto;
  height: 40px;
  padding: 0 2rem; // 1 2rem
  margin-top: 1rem; // new
  border: 0;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.85);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
  transition: background 0.25s;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

export const Backgroundsquare = styled.div`
  position: absolute;
  z-index: 2;
  top: 52%;
  left: 0%;
  width: 200%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(-3deg);
`;
