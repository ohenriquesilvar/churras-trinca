import { useHistory } from "react-router"
import styled from "styled-components"
import { FaSignOutAlt } from "react-icons/fa"
import { IconButton, Flex, Image, Tooltip } from "@chakra-ui/react"
import logo from "../assets/logoChurras.svg"

export const AppBar = () => {
  const history = useHistory()

  return (
    <StyledAppBar>
      <Flex>
        <Image src={logo} width='40px' mr='15px' />
        <StyledText>Gerencia Churras</StyledText>
      </Flex>
      <Tooltip label='Logout'>
        <IconButton
          size='sm'
          position='absolute'
          right='0'
          marginRight='20px'
          variant='outline'
          colorScheme='black'
          aria-label='Logout'
          onClick={() => history.push("/login")}
        >
          <FaSignOutAlt />
        </IconButton>
      </Tooltip>
    </StyledAppBar>
  )
}
const StyledAppBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 90px;
  background-color: #ffd836;
`
const StyledText = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  @media (max-width: 500px) {
    display: none;
  }
`
