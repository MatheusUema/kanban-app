import React, {useCallback, useEffect, useState } from 'react';

import { Container, CardsContainer } from './styles';
import { CreateCard } from '../Card/CreateCard';
import { Card } from '../Card';
import { useCards, ICard} from '../../hooks/useCards';


export type ICardList = 'ToDo' | 'Doing' | 'Done';

interface IKanbanColumnProps {
    type: ICardList,
    kanbanCards: ICard[],
};

export const KanbanColumn = ({type, kanbanCards}: IKanbanColumnProps): JSX.Element => {

  return (
    <Container>
      <h3>{type === 'ToDo' ? 'To Do' : type}</h3>
      <CardsContainer>
          <>
            {kanbanCards && kanbanCards.map(card => <Card content={card} key={card.id} />)}

            {type==='ToDo' && <CreateCard />}
          </>
      </CardsContainer>
    </Container>
  )
};
