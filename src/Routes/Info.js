import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:100vh;
    box-sizing: border-box;
    background-color:#171717;
    position:relative;
`;
const Content=styled(motion.div)`
    border:1px solid white;
    position:absolute;
    top:50%;
    left:50%;
    transform:translateX(-50%) translateY(-50%);
    color:white;
    font-weight:800;
    font-size:40px;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
`;
const SecondCont=styled(motion.div)`
    position:absolute;
    top:35vh;
    left:13%;
    color:white;
    display:flex;
    flex-direction: column;
    & > span{
        font-size:7vw;
        font-weight: 900;
        font-family:"Fredoka One";
        &:nth-child(2){
            font-weight:500;
        }
    }
    & > div{
        display:flex;
        flex-direction: column;
        font-size:30px;
        font-weight:500;
        font-family: 'Dongle';
        margin-top:3vh;
        & > span{
            line-height: 30px;
        }
    }
`;
function Info(){
    const [text, setText]=useState("");
    const [count, setCount]=useState(0);
    const contentAni=useAnimation();
    const secondAni=useAnimation();
    const introduce="프론트엔드 개발자 이주연입니다.";
    useEffect(()=>{
        let interval;
        const divBoxAni=async()=>{
            await contentAni.start({width:"50%", transition:{duration:0.5, type:"linear"}});
            await contentAni.start({height:"300px", transition:{duration:0.3, type:"linear"}});
            interval=setInterval(()=>{
                setText(prev=>prev+introduce[count]);
                setCount(prev=>prev+1);
                }, 100);
        }
        if(count==0)
            divBoxAni();
        else{
            interval=setInterval(()=>{
                setText(prev=>prev+introduce[count]);
                setCount(prev=>prev+1);
                }, 100);
        }
        if(text.length==introduce.length){
            clearInterval(interval);
            contentAni.start({height:"0px", transition:{delay:1}}).then(()=>contentAni.start({width:"0px", transition:{type:"linear"}}).then(()=>contentAni.start({display:"none"})))
            .then(()=>secondAni.start({opacity:1, y:0}))
        }
        return ()=>{clearInterval(interval)};
    })
    return (
        <>
            <Container>
                <Content initial={{width:"0%", height:"0px"}} animate={contentAni}>{text}</Content>
                <SecondCont initial={{opacity:0, y:"10%"}} animate={secondAni}>
                    <span>WELCOME TO MY</span>
                    <span>PORTFOLIO</span>
                    <div>
                        <span>안녕하세요. 저의 포트폴리오에 오신 것을 환영합니다.</span>
                        <span>프론트엔드 개발자를 꿈구며 배운 것들을 포트폴리오에 담아보았습니다.</span>
                        <span>재밌게 감상해주세요. 감사합니다:)</span>
                    </div>
                </SecondCont>
            </Container>
        </>
    )
}
export default Info;