import React, { createContext, useContext, useState } from "react"
import { initialListaParticipants, initialListChurras, sum } from "../utils"

type AppContextData = {
  listChurras: ListChurras[] | []
  listParticipants: ListParticipants | []
  setList: (churras: ListChurras) => void
  addPartipant: (id: number, participant: Participant) => void
  removePartipant: (id: number, participant: Participant) => void
  removeChurras: (id: number) => void
  checkParticipant: (
    id: number,
    participant: Participant,
    boolean: boolean
  ) => void
}

type ListChurras = {
  id: number
  date: string
  name: string
  participants: number
  participantsPaid?: number
  value: number
  description?: string
  observation?: string
  withDrink?: number
  withoutDrink?: number
}

export type Participant = {
  id: number
  name: string
  value: number | null
  paid?: boolean
}

type ListParticipants = {
  [id: number]: Participant[]
}

export const AppContext = createContext<AppContextData>({} as AppContextData)

export const AppProvider: React.FC = ({ children }) => {
  const [listChurras, setListChurras] = useState<ListChurras[] | []>(
    initialListChurras
  )
  const [listParticipants, setListParticipants] = useState<
    ListParticipants | []
  >(initialListaParticipants)

  const setList = (churras: ListChurras) => {
    setListChurras([...listChurras, churras])
  }

  const removeChurras = (id: number) => {
    const list = listChurras.filter((churras) => churras.id !== id)
    const participants = listParticipants
    delete participants[id]
    setListChurras(list)
    setListParticipants(participants)
  }

  const addPartipant = (id: number, participant: Participant) => {
    const list = listParticipants[id] || []
    if (list === []) list.push(participant)
    list.push(participant)
    setListParticipants({
      ...listParticipants,
      [id]: list,
    })
    updateChurras(id, list)
  }

  const removePartipant = (id: number, participant: Participant) => {
    const list = listParticipants[id].filter((p) => p.id !== participant.id)

    setListParticipants({
      ...listParticipants,
      [id]: list,
    })
    updateChurras(id, list)
  }

  const checkParticipant = (
    id: number,
    participant: Participant,
    paid: boolean
  ) => {
    const list = listParticipants[id]
    list[list.findIndex((p) => p.id === participant.id)] = {
      ...participant,
      paid: paid,
    }
    setListParticipants({
      ...listParticipants,
      [id]: list,
    })
    updateChurras(id, list)
  }

  const updateChurras = (id: number, list: Participant[]) => {
    const total = list.length ? sum(list) : 0

    const index = listChurras.findIndex((churras) => churras.id === id)
    const churras = listChurras
    churras[index].value = total
    churras[index].participants = list.length
    churras[index].participantsPaid = list.length
      ? list.filter((participant) => participant?.paid).length
      : 0
    setListChurras(churras)
  }

  return (
    <AppContext.Provider
      value={{
        listChurras,
        listParticipants,
        setList,
        addPartipant,
        checkParticipant,
        removeChurras,
        removePartipant,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)

export default AppContext
