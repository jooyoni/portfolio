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
    display:flex;
    justify-content: space-between;
`;

const Skills=()=>{
    return (
        <Container>
            <Content>
                <Title>SKILLS</Title>
                <SkillList>
                    <SkillInfo skillName={"HTML & CSS"} percent={85} />
                    <SkillInfo skillName={"JAVASCRIPT"} percent={70} />
                    <SkillInfo skillName={"REACT"} percent={60} />
                    <SkillInfo skillName={"REDUX"} percent={40} />
                    <SkillInfo skillName={"TYPESCRIPT"} percent={10} />
                </SkillList>
            </Content>
        </Container>
    )
}

export default Skills;