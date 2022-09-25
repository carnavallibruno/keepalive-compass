import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

interface InputProps {
  type: string,
  placeholder: string,
  user?: string,
  setUser?: React.Dispatch<React.SetStateAction<any>>
  password?: string,
  setPassword?: React.Dispatch<React.SetStateAction<any>>
}


export default function Input({ type, placeholder, user, setUser, password, setPassword }: InputProps ) {
  return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(data) => {
            switch(type) {
              case "text":
                setUser?.(data.target.value);

              case "pasword":
                setPassword?.(data.target.value);
            }
            }
          }
        />
        { type == "text" ? <AiOutlineUser /> : <AiOutlineLock /> }
      </>
  )
}