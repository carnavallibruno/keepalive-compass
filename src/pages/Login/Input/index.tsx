import { AiOutlineUser } from 'react-icons/';

interface InputProps {
  type: string,
  placeholder: string,
  user: string,
  setUser?: React.Dispatch<React.SetStateAction<any>>
  password: string,
  setPassword?: React.Dispatch<React.SetStateAction<any>>
}


export default function Input({ type, placeholder, user, setUser, password, setPassword }: InputProps ) {
  return (
    <>
      <div>
        <input 
          type={type}
          placeholder={placeholder}
          />
        <AiOutlineUser />
      </div>
    </>
  )
}