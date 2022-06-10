import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Graph=styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    position:relative;
    transition:all 1s;
    background:conic-gradient(#82bbb5 ${props=>props.percent*3.6}deg, #3a4148 ${props=>props.percent*3.6}deg);
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom:20px;
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
        font-size:30px;
        font-weight:bold;
        z-index:10;
    }
`;
const Skill=styled.div`
    text-align: center;
    & > span{
        font-weight:bold;
        font-size:18px;
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
            <Graph percent={value}>
                <span>{value}%</span>
            </Graph>
            <span>{skillName}</span>
        </Skill>
    )
}
export default SkillInfo;