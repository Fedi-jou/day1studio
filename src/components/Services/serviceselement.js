import styled from "styled-components";

export const Servicescontainer = styled.div`
  height: 800px; //800
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 10px;

  @media screen and (max-width: 768px) {
    height: 1500px; //1100
  }
  @media screen and (max-width: 480px) {
    height: 1000px; //1300
  }
`;
export const Serviceswrapper = styled.div`
  max-width: 1205px; //1000
  margin: 0 auto;
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
    padding: 0 20px;
  }
`;

export const Servicescard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px; //340
  padding: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Servicesicon = styled.img`
  height: 260px; //160
  width: 260px;
  margin-bottom: 10px;
`;

export const Servicesh1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Servicesh2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Servicesp = styled.p`
  font-size: 1rem;
  text-align: center;
`;
