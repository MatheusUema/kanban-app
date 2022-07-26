import React from 'react';

import Head from 'next/head';
import { Container } from './styles';

interface IAppContainerProps {
    children: React.ReactNode;
}

export const AppContainer = ({children}: IAppContainerProps): JSX.Element => {
  
  return (
    <Container>
        <Head>
            <title>Kanban App</title>
            <meta charSet='utf-8'/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <style >{`
                html, * {
                    margin: 0;
                    font-family: 'Ubuntu', sans-seriff;
                }
            `}</style>
        </Head>
        {children}
    </Container>
  )
};
