import React, { useRef, useCallback} from 'react';

import { CancelButton, Container, SaveButton } from './styles';
import { Header, Content, Bottom } from '../styles';
import { IModeProps } from '../index';
import { MdOutlineCancel } from 'react-icons/md';
import { BiSave } from 'react-icons/bi'
import { useCards, ICard } from '../../../hooks/useCards';
import { handlePut } from '../../../pages/api/handlePut/handlePut';

interface IEditModeProps {};

export const EditMode = ({card, handleEdit}: IModeProps): JSX.Element => {
  const { token, setCards } = useCards();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const saveEdit = useCallback(async () => {
    const changedCard = {...card, titulo: titleRef.current.value, conteudo: contentRef.current.value}
    const newCard = await handlePut(token, changedCard);
    setCards(state => state.map((stateCard: ICard):ICard => {
       if(stateCard.id === newCard.id){
         return newCard;
       }
       return stateCard;
    }));
    handleEdit();
  }, [card, handleEdit, setCards, token]);


  return (
    <Container>
      <Header>
        <input 
          ref={titleRef}
          name="title"
          inputMode="text"
          type="text"
          defaultValue={card.titulo}
        />
      </Header>
      <Content>
        <textarea 
          defaultValue={card.conteudo} 
          ref={contentRef}
          name="content"
          inputMode="text"
        />
      </Content>
      <Bottom>
        <CancelButton onClick={handleEdit}>
          <MdOutlineCancel />
        </CancelButton>
        <SaveButton onClick={saveEdit}>
          <BiSave />
        </SaveButton>
      </Bottom>
    </Container>
  )
};