import { AiOutlineUser } from "react-icons/ai";

interface InputUserProps {
  type: string,
  placeholder: string,
  user: string,
  setUser?: React.Dispatch<React.SetStateAction<any>>
}


export default function InputUser({ type, placeholder, user, setUser }: InputUserProps ) {
  return (
    <>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(data) => {
              setUser?.(data.target.value);
            }
          }
        />
        { user ? <AiOutlineUser /> : "" }
      </div>
    </>
  )
}