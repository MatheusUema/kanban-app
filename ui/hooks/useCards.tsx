import React, {
    createContext, useContext, useMemo, useState
  } from 'react';

export interface ICard {
    id: string,
    titulo : string, 
    conteudo: string, 
    lista: string
}
interface ICardsContextData {
  cards?: ICard[];
  token?: string;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  setCards: React.Dispatch<React.SetStateAction<ICard[] | undefined>>;
}

interface ICardsProviderProps {
  children: React.ReactNode;
}

const CardsContext = createContext({} as ICardsContextData);

const CardsProvider = ({ children }: ICardsProviderProps): JSX.Element => {
  const [cards, setCards] = useState<ICard[]>();
  const [token, setToken] = useState<string>();
  
  const value: ICardsContextData = useMemo(() => ({
      cards,
      token,
      setCards,
      setToken,
  }), [cards, token]);


  return (
    <CardsContext.Provider value={value}>
      {children}
    </CardsContext.Provider>
  );
};

const useCards = ():ICardsContextData => useContext(CardsContext);


export { CardsProvider, useCards };
