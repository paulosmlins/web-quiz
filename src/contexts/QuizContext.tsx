import { createContext, useState } from "react";

interface QuizType {
  value: string;
}

interface QuizProps {
  state: QuizType;
  setState: React.Dispatch<React.SetStateAction<QuizType>>;
}

const DefaultValue = {
  state: {
    value: "",
  },
  setState: () => {},
};

const ContextData = createContext<QuizProps>(DefaultValue);

const ContextValue: React.FC = ({ children }) => {
  const [state, setState] = useState(DefaultValue.state);

  return (
    <ContextData.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export { ContextValue };

export default ContextData;
