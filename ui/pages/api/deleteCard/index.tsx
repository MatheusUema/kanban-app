import axios  from 'axios'
import { ICard } from '../../../hooks/useCards';

export const deleteCard = async (token: string, cardId: string) => {
  const cards: ICard[] = [];
  const res =  await axios.delete(`http://0.0.0.0:5000/cards/${cardId}`,
      {headers: {
       "content-type": "application/json",
        Authorization: "Bearer " + token //the token is a variable which holds the token
  }});
  
  res.data.forEach(element => {
    cards.push({
      id: String(element.id),
      titulo: element.titulo,
      conteudo: element.conteudo,
      lista: element.lista
    });
  });
  // console.log(cards)
  return cards;
};

