import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color: red;
`;
function Two(){
    const component=useRef();
    useEffect(()=>{
        console.log(component.current.offsetTop)
    },[])
    return (
        <Container ref={component}>two</Container>
    )

}
export default Two;