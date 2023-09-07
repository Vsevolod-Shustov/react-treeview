import { useState } from "react"



export default function Item(props) {
    let [isOpen, setIsOpen] = useState(false)

    function makeArrayFromObject(obj){
        let arr=[]
        for (const [key, value] of Object.entries(obj)) {
            if(value != null && value.constructor.name === "Object") {
                arr.push(
                    <div>
                        <span className="cursor-pointer px-1 rounded border"
                        onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? "-" : "+"}
                        </span>
                        {key}: 
                        {isOpen && <Item data={value}></Item>}
                    </div>
                )
            } else {
                //arr.push(`${key}: ${value}`)
                arr.push(<div>{key}: {value}</div>)
            }
        }
        return arr
    }

    const toRender = makeArrayFromObject(props?.data)

    return (
        
        <div className="pl-8">
            {/* {props?.data?.name} */}
            {toRender}
        </div>
    )
}