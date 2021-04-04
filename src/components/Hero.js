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

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;
const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;
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
          <Button href="https://bit.ly/webull-join">
            <span>Claim your free stocks now</span>
          </Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
