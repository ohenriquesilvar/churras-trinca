import { Image, Flex } from "@chakra-ui/react"
import styled from "styled-components"
import { Form } from "./Form"

import logo from "../../assets/logoChurras.svg"
import trinca from "../../assets/trinca.svg"

export const Login = () => {
  return (
    <StyledBackground>
      <StyledContainer>
        <Image src={logo} />
        <Flex mt='20px' mb='20px' fontSize='25px' fontWeight='600'>
          Gerencia Churras
        </Flex>
        <Form />
        <Image src={trinca} mt='30px' />
      </StyledContainer>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 216, 54, 0.6);
  width: 100vw;
  height: 100vh;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  max-width: 600px;
  width: 90%;
  padding-top: 40px;
  padding-bottom: 40px;
`
