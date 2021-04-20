import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 70px 56px;
    margin: auto;    

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 40px;
    color: #757575;
    margin-bottom: 5px;
`;

export const SubTitle = styled.p`
    font-size: 25px;
    color: #757575;
    margin-bottom: 5px;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`; 

export const Text = styled.p`
font-size: 18px;
color: #757575;
`