import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { StyledInput, InputContainer } from './styles';

interface InputProps {
  type: string,
  placeholder: string,
  user?: string,
  setUser?: React.Dispatch<React.SetStateAction<any>>,
  password?: string,
  setPassword?: React.Dispatch<React.SetStateAction<any>>
}

const Input = ({ type, placeholder, user, setUser, password, setPassword }: InputProps) => {
  return (
    <InputContainer>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={(data) => {
          switch (type) {
            case "text":
              setUser?.(data.target.value);

            case "password":
              setPassword?.(data.target.value);
          }
        }
        }
      />
      {
        type == "text"
          ? <AiOutlineUser
            size={24}
            color='#E0E0E0'
            style={{border: '1px solid red'}}
          />
          : <AiOutlineLock
            size={24}
            color='#E0E0E0'
        />
      }
        
    </InputContainer>
  )
}

export default Input;