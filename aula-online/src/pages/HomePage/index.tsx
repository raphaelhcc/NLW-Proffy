import React from 'react';
import Ze from "./../../assets/Logo/ze.svg";
import Header from "./../../components/Header/index";
import { 
  Container, 
  Landing, 
  Actions, 
  StudyButton, 
  SubscribeButton, 
  TotalSubscribe, 
  HeartIcon,
  BookIcon,
  CameraIcon
 } from './styles'

const HomePage: React.FC = () => {
  const handleClickStudy = () => {
    alert('estudar');
  }

  const handleClickSubscribe = () => {
    alert('subs');
  }

  return (
       
    <Container>
        <Header></Header>
      <Landing>
        <div>
          <h1>Proffy</h1>
          <h3>Sua plataforma de estudos online.</h3>
        </div>
        <div>
        <img style={{height:"400px"}} src={Ze}/>          
        </div>
      </Landing>

      <Actions>
        <div>
          <StudyButton onClick={handleClickStudy}>
            <BookIcon />
            Estudar
          </StudyButton>

          <SubscribeButton onClick={handleClickSubscribe}>
            <CameraIcon />
            Dar Aula
          </SubscribeButton>
        </div>
        
        <TotalSubscribe>
          Total de 285 Conexões Realizadas
          <HeartIcon />
        </TotalSubscribe>

      </Actions>
    </Container>
  );
}

export default HomePage;
