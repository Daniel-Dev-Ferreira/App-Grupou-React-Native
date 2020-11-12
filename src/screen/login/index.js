import React, { useState } from 'react';
import { Image } from 'react-native';
import { 
    Container,
    BoxLogin,
    ContainerBotoes,
    Botao,
    BotaoTexto,
    ButtonText,
    Input,
    InputTexto,
    Logo,
    ButtonComponent,
    ForgotPassword,
    CaixaTextoChamada,
    TextoChamada,
    TextoGrupou
 } from './styles';

 import logoImg from '../../../assets/logo.png';

export default () => {

    const [currentButton, setCurrentButton] = useState('aluno');

    return (
            <Container>
                <Logo>
                    <Image source={logoImg} style={{width: 300, height: 100}}/>
                </Logo>

                <CaixaTextoChamada>
                    <TextoChamada>
                        Problemas para formar
                    </TextoChamada>
                    <TextoChamada>
                        um grupo de trabalho
                    </TextoChamada>
                    <TextoChamada>
                        O <TextoGrupou>Grupou!</TextoGrupou> Resolve!
                    </TextoChamada>
                </CaixaTextoChamada>

            <BoxLogin>
                <ContainerBotoes>
                    <Botao onPress={ () => {
                        setCurrentButton('aluno')
                    }}
                    lastClick={currentButton == 'aluno' ? true : false }
                    >
                       <BotaoTexto
                       lastClick={currentButton == 'aluno' ? true : false }>Aluno</BotaoTexto>  
                    </Botao>
                    <Botao onPress={ () => {
                        setCurrentButton('professor')
                    }}
                    lastClick={currentButton == 'professor' ? true : false }
                    >
                       <BotaoTexto
                       lastClick={currentButton == 'professor' ? true : false }>Professor</BotaoTexto>  
                    </Botao>
                </ContainerBotoes>

                 <InputTexto>Email</InputTexto>
                <Input placeholder='Informe seu Email'/>

                 <InputTexto>Senha</InputTexto>
                <Input placeholder='Informe sua Senha'/>
                <ForgotPassword>Esqueceu sua Senha?</ForgotPassword>
                

                <ContainerBotoes>
                    <ButtonComponent>
                        <ButtonText>Cadastre-se</ButtonText>
                    </ButtonComponent>
                    <ButtonComponent color2={true}>
                        <ButtonText color1={true}>Entrar</ButtonText>
                    </ButtonComponent>
                </ContainerBotoes>
    
            </BoxLogin>
        </Container>
        
        
    );
}
