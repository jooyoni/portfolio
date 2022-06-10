import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { fullpageIndex } from "../modules/fullpageIndex";
import SkillInfo from "../components/SkillInfo";
const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items: center;
    background-color: #171717;
`;
const Content=styled(motion.div)`
    width:100%;
    padding:0 10vw;
    color:white;
`;
const Title=styled.div`
    font-size:5.5vw;
    font-family:"Poppins";
    letter-spacing: 2px;
    margin-bottom:5vh;
    
`;
const SkillList=styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    & > div:first-child{
        position:absolute;
        right:0;
        top:0;
        transform:translateY(-200%);
        border:1px solid white;
        border-radius:50%;
        width:20px;
        height:20px;
        display:flex;
        justify-content: center;
        align-items:center;
        &:hover > div{
            display:block;
        }
        & >svg{
            width:10px;
            fill:white;
        }
    }

`;
const Box=styled.div`
    width:400px;
    position:absolute;
    top:0;
    left:0;
    transform:translate(-100%, -100%);
    display:flex;
    flex-direction: column;
    font-size:22px;
    font-family: 'Dongle';
    box-sizing: border-box;
    padding:0 10px;
    display:none;
    & > div > span:first-child{
        font-weight:bold;
        width:17%;
        line-height: 22px;
    }
    & > div >span:last-child{
        width:83%;
        line-height: 22px;
    }
    & > div{
        display:flex;
        height:30px;
    }
`;
const Skills=()=>{
    return (
        <Container>
            <Content>
                <Title>
                    <span>SKILLS</span>
                    
                </Title>
                <SkillList>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M204.3 32.01H96c-52.94 0-96 43.06-96 96c0 17.67 14.31 31.1 32 31.1s32-14.32 32-31.1c0-17.64 14.34-32 32-32h108.3C232.8 96.01 256 119.2 256 147.8c0 19.72-10.97 37.47-30.5 47.33L127.8 252.4C117.1 258.2 112 268.7 112 280v40c0 17.67 14.31 31.99 32 31.99s32-14.32 32-31.99V298.3L256 251.3c39.47-19.75 64-59.42 64-103.5C320 83.95 268.1 32.01 204.3 32.01zM144 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S166.1 400 144 400z"/></svg>
                        <Box>
                            <div><span>0~20%</span><span>잠깐 배우고 활용해본 적이 있어요!</span></div>
                            <div><span>21~40%</span><span>감은 잡았지만 많이 부족한 느낌이에요!</span></div>
                            <div><span>41~60%</span><span>문제가 발생해도 관련 키워드를 모르는 경우가 자주 있어요!</span></div>
                            <div><span>61~80%</span><span>문제가 발생해도 관련 키워드로 구글링해서 금방 해결해요!</span></div>
                            <div><span>81~100%</span><span>생각하던 결과가 나오지 않으면 속상해요!</span></div>
                        </Box>
                    </div>
                    <SkillInfo skillName={"HTML & CSS"} percent={85} />
                    <SkillInfo skillName={"JAVASCRIPT"} percent={55} />
                    <SkillInfo skillName={"REACT"} percent={70} />
                    <SkillInfo skillName={"REDUX"} percent={50} />
                    <SkillInfo skillName={"TYPESCRIPT"} percent={20} />
                    <SkillInfo skillName={"RECOIL"} percent={30} />
                </SkillList>
            </Content>
        </Container>
    )
}

export default Skills;