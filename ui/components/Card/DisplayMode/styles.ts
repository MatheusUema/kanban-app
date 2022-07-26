import styled, { css } from 'styled-components';

export const Container = styled.div`
  
`;

export const EditButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    position: absolute;
    right: 0;
    svg {
        width: 1.2rem;
        height: 1.2rem;
    }
`;

export const DeleteButton = styled.button`
`;

interface IChangeListButtonProps {
    isToDo?: boolean;
    isDone?: boolean;
}

export const ChangeListButton = styled.button<IChangeListButtonProps>`
    &.backwards {
        transform: rotate(180deg);
    }

    ${(props) => props.isToDo && css`
        visibility: hidden;
    `}
    ${(props) => props.isDone && css`
        visibility: hidden;
    `}
`;