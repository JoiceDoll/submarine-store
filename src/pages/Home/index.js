import React from "react";
import {Link} from "react-router-dom"

import {
  Container,
  ImageOne,
  ImageTwo,
  StoreInfo,
  ButtonStore,
  PinkBackground,
  TitleStore,
  Paragraph,
} from "./styled";

import BackgroundImageOne from "../../images/clothes.png";
import BackgroundImageTwo from "../../images/capa2.jpg";
function Home() {
  return (
    <>
      <Container>
        <ImageOne>
          <img src={BackgroundImageOne} alt="BackgroundImageOne" />
        </ImageOne>

        <ImageTwo>
          <PinkBackground>
            <img src={BackgroundImageTwo} alt="BackgroundImageTwo" />
            <StoreInfo>
              <TitleStore>
                <h1>
                  SUBMARINE
                  <br />
                  STORE
                </h1>
              </TitleStore>
              <Paragraph>
                <p>
                  This is the Submarine store.
                  <br />
                  A Landing page project created by me Joice, using <br />
                  React.js for study purposes. <br />
                  You can see more about me by clicking below.
                </p>
              </Paragraph>
            </StoreInfo>
            <Link to={{ pathname: "https://www.linkedin.com/in/joice-doll/" }} target="_blank">
            <ButtonStore>
              <h1>Click here</h1>
            </ButtonStore>
            </Link>
          </PinkBackground>
        </ImageTwo>
      </Container>
    </>
  );
}

export default Home;
