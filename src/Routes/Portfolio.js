
import styled, { keyframes } from "styled-components";
import PortfolioOne from "../components/PortfolioOne";
import PortfolioTwo from "../components/PortfolioTwo";
import { useState } from "react";
import PortfolioInfo from "../components/PortfolioInfo";
const Container=styled.div`
    width:100%;
    height:100vh;
    background-color: #171717;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding:0 10vw;
    box-sizing: border-box;
`;
const Slider=styled.div`
    display:flex;
    overflow:hidden;
`;
const Title=styled.div`
    color:white;
    font-size:5.5vw;
    line-height: 5.5vw;
    font-family:"Poppins";
    text-align: left;
    margin-bottom:5vh;
    @media screen and (max-width:900px){
            text-align: center;
        }
`;
function Portfolio(){
    const [index, setIndex]=useState(0);
    return (
        <Container>
            <Title>PORTFOLIO</Title>
            <Slider>
                <PortfolioInfo img={process.env.PUBLIC_URL+"/image/coin.png"}  />
            </Slider>
        </Container>
    )
}
export default Portfolio;