import { Participant } from "../context/AppContext"

export const sum = (list: Participant[]) =>
  list
    .map((participant) => (participant.paid ? participant.value || 0 : 0))
    .reduce((a, b) => a + b)
