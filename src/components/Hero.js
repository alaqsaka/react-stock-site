import React from "react";
import styled from "styled-components";
import BgImg from "../assets/bg-image.png";

const Section = styled.section`
  background-image: url(${BgImg});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div``;
const Left = styled.div``;
const Title = styled.p``;
const Desc = styled.p``;
const Button = styled.a``;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Get 2 FREE Stocks <br /> valued up to $2000!
          </Title>
          <Desc>
            Open and fund a brokerage account with $100 or more and you will
            have a chance of claiming Stocks like <span>GOOG, FB, SBUX</span>{" "}
            and more!
          </Desc>
          <Button></Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
