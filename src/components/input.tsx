import {ChangeEventHandler} from 'react'

type InputProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    className?: string
}

export const Input = (props: InputProps) =>{
    return(
        <input
          className={"border border-white/10 bg-blue-950 p-2 " + props.className}   
          type="text" 
          value={props.value} 
          onChange={props.onChange} 
        />
    )
}