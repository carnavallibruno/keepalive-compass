import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLockClosed } from 'react-icons/hi'
import { StyledInput, InputContainer, InputAll, IconContainer } from './styles';
import { useState } from 'react';

interface InputProps {
  type: string,
  placeholder: string,
  user?: string,
  setUser?: React.Dispatch<React.SetStateAction<any>>,
  password?: string,
  setPassword?: React.Dispatch<React.SetStateAction<any>>,
  visible: boolean,
}

const Input = ({ type, placeholder, user, setUser, password, setPassword, visible }: InputProps) => {
  const [focused, setFocused] = useState(false);
  return (
    <InputAll>
      <InputContainer>
        <StyledInput
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          visible={visible}
          onBlur={(event) =>
            event.target.value.length > 0 ? setFocused(true) : setFocused(false)
          }
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
        <IconContainer focused={focused}>
          {type === 'text' ? (
            <AiOutlineUser size={24} />
          ) : (
            <HiOutlineLockClosed size={24} />
          )
          }
        </IconContainer>
      </InputContainer>
    </InputAll>
  )
}

export default Input;