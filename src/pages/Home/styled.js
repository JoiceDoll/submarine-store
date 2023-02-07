import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const ImageOne = styled.div`
  margin-top: 2%;
  width: 50%;
  height: 90%;
  background: yellow;

  img {
    width: 100%;
    height: 100%;
    filter: brightness(60%)
  }
`;

export const ImageTwo = styled.div`
  margin-top: 2%;
  background: blue;
  width: 50%;
  height: 90%;
`;

export const PinkBackground = styled.div`
  width: 100%;
  height: 100%;
  background: #e34f41;

  img {
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0.15;
  }
`;

export const StoreInfo = styled.div`
  position: absolute;
  top: 0%;
  margin-left: 8%;
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

export const TitleStore = styled.div`
  border-bottom: 1px solid #000;
  h1 {
    font-size: 4em;
    font-family: Notable;
  }
`;

export const Paragraph = styled.div`
  p {
    font-size: 1.2em;
    font-family: Roboto;
    font-weight: bold;
  }
`;

export const ButtonStore = styled.div`
  width: 20%;
  height: 10%;
  background: #000;
  position: absolute;
  bottom: 0;
  margin-bottom: 5%;
  margin-left: 10%;
  border-radius: 20px;

  h1 {
    color: #fff;
    font-size: 1.3em;
    text-align: center;
    margin-top:5%;
  }
`;
