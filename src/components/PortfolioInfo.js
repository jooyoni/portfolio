import { motion } from "framer-motion";
import styled from "styled-components";

const Container=styled(motion.div)`
    width:100%;
    display:flex;
    justify-content: space-between;
    position:absolute;
    @media screen and (max-width:900px){
            display:block;
            text-align: center;
        }
    img{
        width:60%;
        height:32vw;
        @media screen and (max-width:900px){
            height:38vw;
            width:90%;
        }
    }
    & > div{
        text-align: left;
        width:30%;
        padding:0 2vw;
        @media screen and (max-width:900px){
            width:100%;
        }
    }
`;
const Info=styled.div`
    color:white;
    margin-bottom:4vw;
    & > h1{
        font-size:2.3vw;
        font-family: "Poppins";
    }
    & > div{
        font-size:1.3vw;
        line-height: 2.1vw;
        font-family: 'JSDongkang-Regular';
    }
`;
const Buttons=styled.div`
    display:flex;
    flex-direction: column;
    & > a{
        color:white;
        text-decoration: none;
        font-family: 'JSDongkang-Regular';
        font-size:1.3vw;
        box-sizing:border-box;
        &:hover{
            text-decoration: underline;
        }
    }
`;
function PortfolioInfo({link, code, img,title,content}){
    return (
        <Container>
            <img src={img} />
            <div>
                <Info>
                    <h1>{title}</h1>
                    <div>{content}</div>
                </Info>  
                <Buttons>
                    {link&&<a href={link} target="_blank">VIEW SITE</a>}
                    {code&&<a href={code} target="_blank">VIEW CODE</a>}
                </Buttons>
            </div>
        </Container>
    )
}
export default PortfolioInfo;