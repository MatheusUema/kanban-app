import axios  from 'axios'
import { ICard } from '../../../hooks/useCards';

export const getCards = async (token) => {
    const cards: ICard[] = [];
    const res = await axios.get(`http://0.0.0.0:5000/cards/`, {
        headers: {
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
    }})
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

