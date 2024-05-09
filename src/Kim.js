import {useState} from "react";

function Kim() {
    let [ThumbsUP,setThumbsUP] = useState(0)
    return (
        <div>
            <div>개추~</div>
            <div>{ThumbsUP}</div>
            <button onClick={()=>{
                setThumbsUP(ThumbsUP+=1)
            }}>너이자식 지금 개추라고</button>

        </div>
    )
}
export default Kim