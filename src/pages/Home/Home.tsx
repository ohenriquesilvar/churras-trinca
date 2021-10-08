import { useState } from "react"
import styled from "styled-components"
import { Box, Flex, Spacer, Text, Image } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/hooks"

import { useApp } from "../../context/AppContext"

import { NewChurras, NewParticipant } from "./Forms"
import { ListParticipants } from "./ListParticipants"
import { Modal, Card, AppBar } from "../../components"

import trinca from "../../assets/trinca.svg"

export const Home = () => {
  const { listChurras, listParticipants } = useApp()
  const [modal, setModal] = useState<string | number>("")
  const [churrasId, setChurrasId] = useState<number | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex backgroundColor='#fafafa' minHeight='100vh' width='100%'>
      <Flex width='100%' flexDirection='column'>
        <AppBar />
        <StyledContainer>
          <Flex width='100%' mb='20px'>
            <Box>
              <Text fontSize='25px' fontWeight='600'>
                Bem vindo(a),
              </Text>
            </Box>
          </Flex>
          {listChurras !== [] &&
            listChurras.map((churras) => {
              return (
                <Card
                  key={churras.id}
                  date={churras.date}
                  name={churras.name}
                  participants={churras.participants}
                  participantsPaid={churras.participantsPaid}
                  value={churras.value}
                  onOpen={() => {
                    setChurrasId(churras.id)
                    setModal("participants")
                    onOpen()
                  }}
                />
              )
            })}
          <Card
            addCard
            onOpen={() => {
              setModal("newChurras")
              onOpen()
            }}
          />
        </StyledContainer>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          header={
            modal === "newChurras" ? (
              <Text fontSize='26px' fontWeight='800'>
                Cadastrar novo churrasco
              </Text>
            ) : Number.isInteger(modal) ? (
              <Text fontSize='26px' fontWeight='800'>
                Cadastrar novo participante
              </Text>
            ) : null
          }
        >
          {modal === "newChurras" ? (
            <NewChurras onClose={onClose} />
          ) : modal === "participants" ? (
            <ListParticipants
              id={churrasId}
              participants={churrasId ? listParticipants[churrasId] || [] : []}
              setModal={setModal}
              onClose={onClose}
            />
          ) : Number.isInteger(modal) ? (
            <NewParticipant
              id={Number.isInteger(modal) ? Number(modal) : null}
              setModal={setModal}
            />
          ) : null}
        </Modal>
        <Spacer />
        <Flex
          width='100%'
          position='relative'
          bottom='2'
          justifyContent='center'
        >
          <Image src={trinca} width='50px' />
        </Flex>
      </Flex>
    </Flex>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0px 30px 30px;
`
