import styled from "styled-components";

const Container=styled.div`
    width:100%;
    height:100vh;
    background-color: #171717;
    display:flex;
    align-items: center;
`;
const Content=styled.div`
    width:100%;
    height:50%;
    border:1px solid white;
`;
const Title=styled.div`
    color:white;
    font-size:6vw;
    font-weight: bold;
`;
const Info=styled.div`
    display:flex;
    div{
        width:80%;
        color:white;
    }
    img{
        width:20%;
    }
`;
function AboutMe(){
    return (
        <Container>
            <Content>
                <Title>ABOUT ME</Title>
                <Info>
                    <div>dfd</div>
                    <img src={process.env.PUBLIC_URL+"/image/me.jpg"} />
                </Info>
            </Content>
        </Container>
    );
}
export default AboutMe;