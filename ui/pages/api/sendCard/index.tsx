import axios  from 'axios'
import { ICard } from '../../../hooks/useCards';
import { getCards } from '../getCards';

export const sendCard = async (token, data) => {
    const newCard:ICard = {
        id: '',
        titulo: '',
        lista: '',
        conteudo: '',
    };
    const res =  await axios.post(`http://0.0.0.0:5000/cards/`, {
        "titulo": String(data.titulo),
        "conteudo": String(data.conteudo),
        "lista": String(data.lista),
        },
        {headers: {
         "content-type": "application/json",
          Authorization: "Bearer " + token //the token is a variable which holds the token
        }});
    newCard.conteudo = res.data.conteudo;
    newCard.id = res.data.id;
    newCard.titulo = res.data.titulo;
    newCard.lista = res.data.lista;
    return newCard;
};

