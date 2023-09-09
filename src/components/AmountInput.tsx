import { Input, InputProps } from "./input"



export const AmountInput = (props: InputProps) => {
    return(
        <div className="flex items-center bg-blue-950 border border-white/10 rounded-lg">
             <Input
                placeholder="Amount"  
                value={props.value} 
                onChange={props.onChange}
                className="border-0 2-24 pl-4 bg-transparent text-xl" 
              />
             <span className="text-white/50 px-4">
                USD
             </span>    
        </div>
    )
}