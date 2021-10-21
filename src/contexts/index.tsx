import { ContextValue } from "contexts/QuizContext";

const GlobalContext: React.FC = ({ children }) => {
  return <ContextValue>{children}</ContextValue>;
};

export default GlobalContext;
