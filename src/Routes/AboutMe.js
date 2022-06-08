import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {useState, useEffect} from "react";
const Container=styled.div`
    width:100%;
    height:100vh;
    background-color: #171717;
    display:flex;
    align-items: center;

`;
const Content=styled(motion.div)`
    width:100%;
    padding:0 10vw;

`;
const Title=styled.div`
    color:white;
    font-size:5.5vw;
    line-height: 5.5vw;
    font-family:"Poppins";
    padding:0;
    text-align: left;
    @media screen and (max-width:900px){
            text-align: center;
        }
`;
const Info=styled.div`
    display:flex;
    div{
        width:80%;
        color:white;
        text-align: left;
        @media screen and (max-width:900px){
            width:100%;
            text-align: center;
        }
    }
    img{
        width:20%;
        height:1%;
        @media screen and (max-width:900px){
            display:none;
        }
    }
`;
const Text=styled.div`
    font-family: 'JSDongkang-Regular';
    text-align: center;
    & > h3{
        font-size:1.8vw;
        @media screen and (max-width:1400px){
            font-size:1.6vw;
        }
        @media screen and (max-width:1000px){
            font-size:1.8vw;
        }
        @media screen and (max-width:700px){
            font-size:2.2vw;
        }
    }
    & > div{
        line-height: 38px;
        font-size:1.2vw;
        width:90%;
        span{
            color:red;
        }@media screen and (max-width:1400px){
            font-size:1.6vw;
        }
        @media screen and (max-width:1000px){
            font-size:1.6vw;
        }
        @media screen and (max-width:700px){
            font-size:2vw;
        }
        @media screen and (max-width:900px){
            width:100%;
        }
    }
`;
function AboutMe(){
    const index=useSelector(state=>state.fullpageIndex);
    const [show, setShow]=useState(false);
    useEffect(()=>{
        if(index==1)
            setShow(true);
        console.log("dfd")
    },[index]);
    return (
        <Container>
            {show?(
            <Content initial={{y:"-100px", opacity:0}} animate={{y:0, opacity:1, transition:{type:"linear"}}}>
                <Title>ABOUT ME</Title>
                <Info>
                    <Text>
                        <h3>"프론트엔드 개발자를 꿈꾸는 저를 소개합니다."</h3>
                        <div>
                            목표한 바를 이루기 위해 최선을 다하는 이주연입니다. 제 손으로 제작한 사이트를 여러 사람들이 방문하고 이용한다는 것이 흥미로워 프론트엔드로 진로를 결정하게 되었습니다. 프론트엔드 실력을 향상시키기 위해 코리아 IT 아카데미의 프론트엔드 강의 수강, 노마드 코더와 유튜브 등의 인터넷 강의영상들을 보며 웹개발 기술을 키워왔습니다. 이 후 더 원활한 개발을 하기 위해 redux와 typescript등을 배우고 있으며 졸업작품 웹 부분 담당, 팀 프로젝트 개발을 진행하며 경험을 쌓고 있습니다. 때로는 빠르게, 때로는 더디게 성장하되 <span>꾸준히</span> 성장하는 성실한 개발자가 되겠습니다. 감사합니다.
                        </div>
                    </Text>
                    <img src={process.env.PUBLIC_URL+"/image/me.jpg"} />
                </Info>
            </Content>
            ):null}
        </Container>
    );
}
export default AboutMe;