import React, { useState, useRef, useCallback} from 'react';

import { SubmitButton } from './styles';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Loader } from '../../Loader';
import { Container, Header, Content, Bottom } from '../styles';
import { useCards } from '../../../hooks/useCards';
import { sendCard } from '../../../pages/api/sendCard';

export const CreateCard = ({}): JSX.Element => {
    const { token, setCards } = useCards();
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = useCallback(async () => {
      setLoading(true);
      try {
        const parsedData = { titulo: titleRef.current.value, conteudo: contentRef.current.value, lista: "ToDo"  };
        if(token) {
          const newCard = await sendCard(token, parsedData);
          setCards(state => [
            ...state, newCard
          ])
        }
      } catch (err) {
        console.log(err)
      } finally {
        titleRef.current.value = '';
        contentRef.current.value = '';
        setLoading(false);   
      }
    }, [setCards, token]);
  


  return (
    <Container>
      <Header>
        <input 
          ref={titleRef}
          name="title"
          placeholder="Insert card title"
          inputMode="text"
          type="text"
        />
      </Header>
      <Content>
        <textarea 
          ref={contentRef}
          placeholder="Insert card description"
          name="content"
          inputMode="text"
        />
      </Content>
      <Bottom>
        <SubmitButton onClick={handleSubmit}>
            {loading ? <Loader /> : <IoMdAddCircleOutline />}
        </SubmitButton>
      </Bottom>
    </Container>
  )
};