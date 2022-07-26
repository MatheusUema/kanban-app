import React, { useCallback, useMemo } from 'react';

import { BiEdit, BiTrash } from 'react-icons/bi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Container, EditButton, DeleteButton, ChangeListButton } from './styles';
import { useCards, ICard } from '../../../hooks/useCards';
import { IModeProps } from '..';
import { Header, Content, Bottom } from '../styles';
import { deleteCard } from '../../../pages/api/deleteCard';
import { handlePut } from '../../../pages/api/handlePut/handlePut';
import { ICardList } from '../../KanbanColumn';

interface IPositionsProps {
  previous: ICardList | '';
  next: ICardList | '';
}

type listChange = 'next' | 'previous';

export const DisplayMode = ({card, handleEdit}: IModeProps): JSX.Element => {
  const {token, setCards} = useCards();

  const positions:IPositionsProps = useMemo(() => {
    if(card.lista === 'Doing'){
      return {previous: 'ToDo', next: 'Done'}
    } else if(card.lista === 'Done') {
      return {previous: 'Doing', next: ''}
    } else {
      return {previous: '', next: 'Doing'}
    }
  }, [card.lista])

  const handleDelete = useCallback(async () => {
    const response = await deleteCard(token, card.id); 
        setCards(response);
  }, [card.id, setCards, token]);

  const handleListChange = useCallback(async (list: listChange) => {
    const changedCard = {...card, lista: positions[list]}
    const newCard = await handlePut(token, changedCard);
    setCards(state => state.map((stateCard: ICard):ICard => {
       if(stateCard.id === newCard.id){
         return newCard;
       }
       return stateCard;
    }));
  }, [card, positions, setCards, token]);

  return (
    <Container>
      <Header>
        <strong>{card.titulo}</strong>
        <EditButton onClick={handleEdit}>
          <BiEdit />
        </EditButton>
      </Header>
      <Content>
        <p>{card.conteudo}</p>
      </Content>
      <Bottom>
        <ChangeListButton onClick={() => handleListChange('previous')} isToDo={card.lista === 'ToDo'} className='backwards'>
          <BsFillArrowRightCircleFill />
        </ChangeListButton>
        <DeleteButton onClick={handleDelete}>
          <BiTrash />
        </DeleteButton>
        <ChangeListButton onClick={() => handleListChange('next')}  isDone={card.lista === 'Done'}>
        <BsFillArrowRightCircleFill />
        </ChangeListButton>
      </Bottom>
    </Container>
  )
};
