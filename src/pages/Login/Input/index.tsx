interface InputPasswordProps {
  type: string,
  placeholder: string,
  password: string,
  setPassword?: React.Dispatch<React.SetStateAction<any>>
}

export default function Input({ type, placeholder, password, setPassword }: InputPasswordProps ) {
  return (
    <h2>nada</h2>
    // <InputStyle>
    // <>
    //   <div>
    //     <input
    //       type={type}
    //       placeholder={placeholder}
    //       onChange={(data) => {
    //           setPassword?.(data.target.value);
    //         }
    //       }
    //       />
    //       { password ? <AiOutlineLock /> : "" }
    //   </div>
    // </>
    // </InputStyle>
  )
}