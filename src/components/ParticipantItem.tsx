import { Flex, Checkbox, Text, Icon, Divider } from "@chakra-ui/react"
import { FaTrashAlt } from "react-icons/fa"
import { Participant, useApp } from "../context/AppContext"

export const ParticipantItem = ({
  participant,
  id,
}: {
  participant: Participant
  id: number | null
}) => {
  const { checkParticipant, removePartipant } = useApp()

  return (
    <>
      <Flex justifyContent='space-between'>
        <Checkbox
          colorScheme='yellow'
          isChecked={participant.paid}
          onChange={(event) =>
            id && checkParticipant(id, participant, event.target.checked)
          }
        >
          {participant.name}
        </Checkbox>
        <Flex alignItems='center'>
          <Text
            fontSize='17px'
            fontWeight='600'
            as={participant.paid ? "del" : "samp"}
          >
            R${participant.value}
          </Text>

          <Icon
            ml='30px'
            as={FaTrashAlt}
            width='15px'
            color='red'
            onClick={() => id && removePartipant(id, participant)}
          />
        </Flex>
      </Flex>
      <Divider />
    </>
  )
}
