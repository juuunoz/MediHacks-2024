import { Dispatch, SetStateAction, createContext, useState } from 'react';

const AuthContext = createContext<{
  authState: string;
  setAuthState: Dispatch<SetStateAction<string>>;
}>({
  authState: '',
  setAuthState: () => null
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<string>('');

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
