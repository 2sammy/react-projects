import { useState } from "react"
export default function ConditionalComponent(){
    const [display, setDisplay] = useState(true);
    if(display){
        return (<div>
            <h3>This is ConditionalComponent</h3>
            </div>
            )


    }else{
        return(

         <div>

            <h3>This is ConditionalComponent</h3>
            </div>
)
    }
}