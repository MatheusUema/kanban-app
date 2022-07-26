import styled from 'styled-components';

export const Container = styled.div`
    background: white;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    margin: 0 0.5rem;
    box-shadow: 10px 10px 26px -3px rgba(0,0,0,0.05);
    & + & {
        margin-top: 1.5rem;
    }
`;

export const Header = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    position: relative;
    padding-bottom: 1rem;
    margin: 0 auto;
    border-bottom: 1px solid #a9a9a9;

    strong {
        color: #646497;
        font-weight: 400;
        font-size: 1rem;
    }

    input {
        border: 1px solid #a9a9a9;
        width: 100%;
        text-align: center;
        color: #646497;
        font-weight: 400;
        font-size: 1rem;
    }
`;

export const Content = styled.div`
    min-height: 100px;
    margin-top: 0.5rem;
    color: #646464;
    font-size: 0.75rem;
    display: flex;

    textarea {
        resize: none;
        height: 80px;
        width: 100%;
        color: #646464;
        font-size: 0.75rem; 
    }

    @media screen and (max-width: 1024px) {
        textarea {
            border: none;
        }
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        cursor: pointer;
        border: none;
        background: none;
        display: flex;
        align-items: center;

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;