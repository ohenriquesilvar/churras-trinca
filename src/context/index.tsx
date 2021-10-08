import { AppProvider } from "./AppContext"

type ContextProps = { children: React.ReactNode }

export const ContextProvider = ({ children }: ContextProps) => {
  return <AppProvider>{children}</AppProvider>
}
