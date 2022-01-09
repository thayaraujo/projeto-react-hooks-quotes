import narutoImg from '../../images/naruto1.png'
import styled from 'styled-components';
import { Quotes } from '../../components';

export function App() {
    return(
        <Content>
            <Quotes quote={'ok'} speaker={'Speaker'} />
            <NarutoImg src={narutoImg} alt="Naruto em posição de combate"/>
        </Content>)
}

const Content = styled.div`
    height: 100vh;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-itens: center;
`
const NarutoImg = styled.img `
    max-width: 50vw;
    align-self: flex-end;
`
