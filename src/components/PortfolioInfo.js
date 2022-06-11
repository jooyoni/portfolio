import styled from "styled-components";

const Container=styled.div`
    width:45%;
    img{
        width:100%;
    }
`;
function PortfolioInfo({img}){
    return (
        <Container>
            <img src={img} />
        </Container>
    )
}
export default PortfolioInfo;