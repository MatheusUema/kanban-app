import React from 'react'
import { AppContainer} from '../components/AppContainer';
import { Header } from '../components/Header';
import { KanbanBoard } from '../components/KanbanBoard';
import { Main } from '../public/styles';
import { Footer } from '../components/Footer';
import { CardsProvider } from '../hooks/useCards';



export const IndexPage = () => { 

  return (
    <CardsProvider>
      <AppContainer>
        <Header />  
        <Main>
          <KanbanBoard />
        </Main>
        <Footer />
      </AppContainer>
    </CardsProvider>
)}

export default IndexPage
