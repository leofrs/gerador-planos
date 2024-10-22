import { createContext, useState, ReactNode } from "react";

export type User = {
  email: string;
  setEmail: (email: string) => void;
};

export type ContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<User>({
  email: "",
  setEmail: () => {},
});

export default function ContextProvider({ children }: ContextProviderProps) {
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
}
