import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Graph=styled.div` 
    @media screen and (max-width:1200px){
        width:150px;
        height:150px;
    }
    @media screen and (max-width:800px){
        width:100px;
        height:100px;
    }
    width:180px;
    height:180px;
    border-radius:50%;
    position:relative;
    transition:all 0.5s;
    background:conic-gradient(#82bbb5 ${props=>props.percent*3.6}deg, #3a4148 ${props=>props.percent*3.6}deg);
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom:5px;
    &:hover{
        transform:scale(1.1);
    }
    &::after{
        position:absolute;
        top:50%;
        left:50%;
        width:90%;
        height:90%;
        background-color: #171717;
        border-radius:50%;
        content:"";
        transform: translate(-50%, -50%);
    }
    & > span{
        color:white;
        font-size:2.3vw;
        font-weight:bold;
        z-index:10;
    }
`;
const Skill=styled.div`
    text-align: center;
    padding:0 10px;
    margin-bottom:3vh;
    & > span{
        font-weight:bold;
        font-size:1.8vw;
    }
`;
const SkillInfo=({skillName, percent})=>{
    const [value, setValue]=useState(0);
    const index=useSelector(state=>state.fullpageIndex);
    useEffect(()=>{
        if(index==2){
            let interval=setInterval(()=>{
                setValue(prev=>prev+1);
            },10);
            if(value==percent)
                clearInterval(interval);
            return ()=>{clearInterval(interval)};
        }
        else{
            setValue(0);
        }
    },[value,index]);
    return (
        <Skill>
            <Graph percent={value} onClick={()=>setValue(0)}>
                <span>{value}%</span>
            </Graph>
            <span>{skillName}</span>
        </Skill>
    )
}
export default SkillInfo;