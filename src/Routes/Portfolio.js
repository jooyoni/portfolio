
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import PortfolioInfo from "../components/PortfolioInfo";
import { AnimatePresence, motion } from "framer-motion";
const Container=styled.div`
    width:100%;
    height:100vh;
    background-color: #171717;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding:0 10vw;
    box-sizing: border-box;
    & > div:last-child{
        position:relative;
    }
`;
const Slider=styled.div`
    position:relative;
    height:28vw;
    overflow:hidden;
    @media screen and (max-width:900px){
        height:58vw;
    }
    @media screen and (max-width:700px){
        height:62vw;
    }
`;
const Title=styled.div`
    color:white;
    font-size:5.5vw;
    line-height: 1vw;
    font-family:"Poppins";
    text-align: left;
    margin-bottom:5vh;
    @media screen and (max-width:1000px){
            text-align: center;
        }
`;
const Left=styled.div`
    display:${props=>props.show?"block":"none"};
    position:absolute;
    top:50%;
    left:0;
    transform:translate(-150%, -50%);
    width:4vw;
    & > svg{
        fill:#bbbbbb;
        transition:all 0.3s;
    }
    &:hover > svg{
        fill:white;
    }
`;
const Right=styled.div`
    display:${props=>props.show?"block":"none"};
    position:absolute;
    top:50%;
    right:0;
    transform:translate(150%, -50%);
    width:4vw;
    padding:3px;
    & > svg{
        fill:white;
        transition:all 0.3s;
    }
    &:hover > svg{
        fill:#bbbbbb;
    }
`;

const variants={
    initial:(back)=>({
        x:back?"-110%":"110%",
    }),
    animate:{
        x:0
    },
    exit:(back)=>({
        x:back?"110%":"-110%"
    })
}
const portfolio=[
    {
        index:0, link:"https://jooyoni.github.io/my-web/", code:"https://github.com/jooyoni/my-web",
        img:process.env.PUBLIC_URL+"/image/my-web.png", title:"JOOYEON'S WEB", 
        content:"브라우저 좌측으로 마우스 이동시 제가 자주 방문하는 사이트들이 표시되도록 구현하였고 날씨 API와 제가 투자중인 주식 API를 활용하여 서울의 날씨와 제가 투자중인 주식의 정보를 볼 수 있도록 구현하였습니다."
    },{
        index:1, link:"https://jooyoni.github.io/coin", code:"https://github.com/jooyoni/coin",
        img:process.env.PUBLIC_URL+"/image/coin.png", title:"COIN PRICE SITE", 
        content:"코인과 코인의 로고 API를 활용하여 상위 100종목의 코인에 대한 시세 및 가격 변동 정보를 담은 사이트입니다."
    },{
        index:2, link:"", code:"https://github.com/jooyoni/alba-people",
        img:process.env.PUBLIC_URL+"/image/alba.png", title:"alba-people", 
        content:"AWS의 RDS와 nodejs를 활용하여 회원 기능과 게시글 기능이 구현된 알바생들이 이용하는 커뮤니티 컨셉의 사이트입니다."
    }]
function Portfolio(){
    const [index, setIndex]=useState(0);
    const [goBack, setGoBack]=useState(false);
    const indexChange=(num)=>{
        if(num==1){
            if(index<portfolio.length-1){
                setGoBack(false);
                setIndex(prev=>prev+1);
            }
        }
        else{
            if(!index==0){
                setGoBack(true);
                setIndex(prev=>prev-1);
            }
        }
    };
    return (
        <Container>
            <Title>PORTFOLIO</Title>
            <div>
                <Slider>
                    <AnimatePresence initial={false} custom={goBack}>
                        {portfolio.map((item)=>item.index==index&&(
                        <motion.div custom={goBack} key={item.index} variants={variants} initial="initial" animate="animate" exit="exit" transition={{duration:0.5,type:"linear"}}>
                            <PortfolioInfo link={item.link} code={item.code} img={item.img} title={item.title} content={item.content} />
                        </motion.div>))}
                    </AnimatePresence>
                </Slider>
                <Left show={!index==0} onClick={()=>indexChange(-1)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg></Left>
                <Right show={index<portfolio.length-1} onClick={()=>indexChange(1)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg></Right>
            </div>
        </Container>
    )
}
export default Portfolio;