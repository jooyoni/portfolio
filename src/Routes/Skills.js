import { motion } from "framer-motion";
import styled from "styled-components";
import { keyframes } from "styled-components";

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
`;
const SkillList=styled.div``;
const keyframe=keyframes`
    0% {
        background:conic-gradient(#9986dd 0deg, #fbb871 0deg);
    }
    100%{
        background:conic-gradient(#9986dd 360deg, #fbb871 360deg);
    }
`;
const Skill=styled.div`
    width:300px;
    height:300px;
    background:conic-gradient(#9986dd 180deg, #fbb871 180deg);
    transition:conic-gradient 10s;
    border-radius:50%;
    position:relative;
    &::after{
        position:absolute;
        top:50%;
        left:50%;
        width:200px;
        height:200px;
        background-color: #171717;
        border-radius:50%;
        content:"";
        transform: translate(-50%, -50%);
    }
`;
const Skills=()=>{
    return (
        <Container>
            <Content>
                <Title>SKILLS</Title>
                <SkillList>
                    <Skill></Skill>
                </SkillList>
            </Content>
        </Container>
    )
}

export default Skills;