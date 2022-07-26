import React, { useState, useCallback } from 'react';

import { Container, Header, Content } from './styles';
import { DisplayMode } from './DisplayMode';
import { EditMode } from './EditMode';
import { ICard } from '../../hooks/useCards';

interface ICardProps {
  content: ICard;
};

export interface IModeProps {
  card: ICard;
  handleEdit: () => void;
}

export const Card = ({content}: ICardProps): JSX.Element => {
  const [displayMode, setDisplayMode] = useState<boolean>(true);

  return (
    <Container>
      {displayMode ? <DisplayMode card={content} handleEdit={() => setDisplayMode(!displayMode)} /> : <EditMode card={content} handleEdit={() => setDisplayMode(!displayMode)} />}
    </Container>
  )
};