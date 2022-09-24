import { AiOutlineLock } from "react-icons/ai";

interface InputPasswordProps {
  type: string,
  placeholder: string,
  password: string,
  setPassword?: React.Dispatch<React.SetStateAction<any>>
}


export default function InputPassword({ type, placeholder, password, setPassword }: InputPasswordProps ) {
  return (
    <>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(data) => {
              setPassword?.(data.target.value);
            }
          }
          />
          { password ? <AiOutlineLock /> : "" }
      </div>
    </>
  )
}