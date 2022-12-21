
export default function Die(props){
    return (
        <div className={`w-16 h-16 rounded-lg shadow-lg flex items-center justify-center cursor-pointer select-none ${props.isHeld? "bg-[#59E391]" : "bg-[#FFFFFF]"}`} onClick={props.holdDice}>
            <p className="text-3xl font-semibold ">
                {props.value}
            </p>
        </div>
    )
}