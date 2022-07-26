import axios  from 'axios'
import { ICard } from '../../../hooks/useCards';
import { getCards } from '../getCards';

export const handlePut = async (token, data: ICard) => {
    const newCard:ICard = {
        id: '',
        titulo: '',
        lista: '',
        conteudo: '',
    };
    const res =  await axios.put(`http://0.0.0.0:5000/cards/${data.id}`, {
        ...data,
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

