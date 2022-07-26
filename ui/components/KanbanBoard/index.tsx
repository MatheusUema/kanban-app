import React, { useEffect, useCallback, useMemo } from 'react';

import { Container, Board } from './styles';
import { login } from '../../pages/api/login';
import { getCards } from '../../pages/api/getCards';
import { useCards, ICard } from '../../hooks/useCards';
import { KanbanColumn } from '../KanbanColumn';

type IKanbanCards = {
  'ToDo': ICard[],
  'Doing': ICard[],
  'Done': ICard[]
}

export const KanbanBoard = (): JSX.Element => {
  const { token, setToken, setCards, cards } = useCards();
  const kanbanCards = useMemo(() => {
    const response:IKanbanCards = {
      'ToDo': [],
      'Doing': [],
      'Done': []
    };
    if(cards){
      cards.forEach(card => {
        response[card.lista].push(card);
      })
      // console.log(response);
    }
    return response;
  },[cards])

  const getAPICards = useCallback(async () => {
    await login().then(async res => {
        setToken(res);
        const response = await getCards(res); 
        setCards(response);
        // console.log(response);
    });
  }, [setToken, setCards]);

  useEffect(() => {
    if(!token){
        getAPICards();
    }
  }, [token, getAPICards])
  return (
    <Container>
      <h2>Kanban Board</h2>
      <Board>
          <KanbanColumn type="ToDo" kanbanCards={kanbanCards.ToDo} />
          <KanbanColumn type="Doing" kanbanCards={kanbanCards.Doing}/>
          <KanbanColumn type="Done" kanbanCards={kanbanCards.Done}/>
      </Board>
    </Container>
  )
};
