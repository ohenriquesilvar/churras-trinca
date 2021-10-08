import { Image, Flex, Text } from "@chakra-ui/react"
import styled from "styled-components"

import churrasqueira from "../assets/churrasqueira.svg"
import money from "../assets/money.svg"
import people from "../assets/people.svg"

type CardProps = {
  addCard?: boolean
  date?: string
  name?: string
  participants?: number
  participantsPaid?: number
  value?: number
  onOpen?: () => void
}

export const Card = ({
  addCard = false,
  date,
  name,
  participants,
  participantsPaid,
  value,
  onOpen,
}: CardProps) => {
  return (
    <>
      {!addCard ? (
        <StyledCard onClick={onOpen}>
          <Text fontSize='26px' fontWeight='800'>
            {date}
          </Text>
          <Text fontSize='20px' fontWeight='500' height='100vh'>
            {name}
          </Text>
          <StyledBottom>
            <Flex fontSize='26px' fontWeight='800'>
              <Image src={people} mr='10px' />
              {participantsPaid + "/" + participants}
            </Flex>
            <Flex fontSize='26px' fontWeight='800'>
              <Image src={money} mr='20px' />
              R$ {value}
            </Flex>
          </StyledBottom>
        </StyledCard>
      ) : (
        <StyleAddCard onClick={onOpen}>
          <Image src={churrasqueira} width='90px' />
          <Text align='center' fontSize='26px' fontWeight='700'>
            Adicionar Churras
          </Text>
        </StyleAddCard>
      )}
    </>
  )
}

const StyledCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 250px;
  height: 200px;
  width: 100%;
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
`
const StyleAddCard = styled(StyledCard)`
  justify-content: center;
  align-items: center;
  background-color: #e4e4e4;
`
const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
`
