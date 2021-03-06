import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
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
    div:first-child{
        width:80%;
        color:white;
        text-align: left;
        @media screen and (max-width:900px){
            width:100%;
            text-align: center;
        }
    }
`;

const Card=styled.div`
    width:20%;
    height:1%;
    position:relative;
    @media screen and (max-width:900px){
        display:none;
    }
    & > *{
        backface-visibility: hidden;
    }
    &:hover > img{
        transform:rotateY(180deg);
    }
    &:hover > div{
        transform:rotateY(0deg);
    }
    & > img{
        width:100%;
        vertical-align: top;
        transition:transform 1s;
        position: relative;
    }
    & > div{
        width:calc(100% - 1px);
        height:100%;
        position:absolute;
        top:0;
        left:0;
        background-color:white;
        transform: rotateY(-180deg);
        transition: transform 1s;
        box-sizing: border-box;
        display:flex;
        flex-direction: column;
        font-family: 'Dongle';
        font-size:1.3vw;
        align-items: center;
        justify-content: center;
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
    },[index]);
    return (
        <Container>
            {show?(
            <Content initial={{y:"-100px", opacity:0}} animate={{y:0, opacity:1, transition:{type:"linear"}}}>
                <Title>ABOUT ME</Title>
                <Info>
                    <Text>
                        <h3>"??????????????? ???????????? ????????? ?????? ???????????????."</h3>
                        <div>
                            ????????? ?????? ????????? ?????? ????????? ????????? ??????????????????. ??? ????????? ????????? ???????????? ?????? ???????????? ???????????? ??????????????? ?????? ???????????? ?????????????????? ????????? ???????????? ???????????????. ??????????????? ????????? ??????????????? ?????? ????????? IT ??????????????? ??????????????? ?????? ??????, ????????? ????????? ????????? ?????? ????????? ?????????????????? ?????? ????????? ????????? ??????????????????. ??? ??? ??? ????????? ????????? ?????? ?????? redux??? typescript?????? ????????? ????????? ???????????? ??? ?????? ??????, ??? ???????????? ????????? ???????????? ????????? ?????? ????????????. ????????? ?????????, ????????? ????????? ???????????? <span>?????????</span> ???????????? ????????? ???????????? ???????????????. ???????????????.
                        </div>
                    </Text>
                    <Card>
                        <img src={process.env.PUBLIC_URL+"/image/me.jpg"} />
                        <div>
                            <span>Name ?????????</span>
                            <span>Birth 1999.07.13</span>
                            <span>Phone 010-7233-8517</span>
                            <span>Address ????????? ????????? ?????????</span>
                            <span>????????????????????? 2018.03~2023.02</span>
                        </div>
                    </Card>
                </Info>
            </Content>
            ):null}
        </Container>
    );
}
export default AboutMe;