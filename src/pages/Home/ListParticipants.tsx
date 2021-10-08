import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Text,
  Button,
  Image,
  Icon,
} from "@chakra-ui/react"
import { FaTrashAlt } from "react-icons/fa"
import { MdOutlineMoreHoriz } from "react-icons/md"

import { Participant, useApp } from "../../context/AppContext"

import money from "../../assets/money.svg"
import people from "../../assets/people.svg"
import { ParticipantItem } from "../../components"

export const ListParticipants = ({
  participants,
  id,
  setModal,
  onClose,
}: {
  participants: Participant[] | []
  id: number | null
  setModal: (type: string | number) => void
  onClose: () => void
}) => {
  const { listChurras, removeChurras } = useApp()

  const churras = listChurras.find((churras) => churras.id === id)

  return (
    <>
      <Stack spacing={3}>
        <Flex justifyContent='space-between'>
          <Box>
            <Text fontSize='26px' fontWeight='800'>
              {churras?.date}
            </Text>
            <Flex fontSize='20px' fontWeight='500'>
              {churras?.name}
              <Menu>
                <MenuButton ml='15px' fontSize='15px'>
                  <Icon as={MdOutlineMoreHoriz} width='20px' height='20px' />
                </MenuButton>
                <MenuList>
                  <MenuItem
                    height='20px'
                    fontSize='15px'
                    onClick={() => {
                      id && removeChurras(id)
                      onClose()
                    }}
                  >
                    <Icon mr='10px' as={FaTrashAlt} color='red' />- Excluir
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
          <Box paddingRight='10px'>
            <Flex fontSize='20px' fontWeight='500'>
              <Image src={people} mr='10px' />
              {churras?.participantsPaid + "/" + churras?.participants}
            </Flex>
            <Flex fontSize='20px' fontWeight='500'>
              <Image src={money} mr='10px' />
              R$ {churras?.value}
            </Flex>
          </Box>
        </Flex>
        <Text mb='10px'>{churras?.description}</Text>
        <Text mb='10px'>
          {churras?.observation ? "Obs: " + churras?.observation : null}
        </Text>
        {participants !== [] &&
          participants.map((participant) => (
            <ParticipantItem
              key={participant.id}
              participant={participant}
              id={id}
            />
          ))}
      </Stack>
      <Flex justifyContent='flex-end' mt='30px'>
        <Button
          colorScheme='yellow'
          variant='ghost'
          mr={3}
          onClick={() => {
            setModal(id ? id : "")
          }}
        >
          Adicionar participante
        </Button>
        <Button colorScheme='yellow' onClick={onClose}>
          Fechar
        </Button>
      </Flex>
    </>
  )
}
