import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Content = styled.div`
    width: 50vw;
    height: 25vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: purple;
`

export const Input = styled.input`
    border: 1px solid #000;
    height: 26px;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button`
    height: 28px;
    border: 1px solid #000;
    background: #fff;
    color: #000;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }

    &:hover{
        background-color: #333;
        color: #fff;
    }
`;
export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.85rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;