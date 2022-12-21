
export default function Die(props){

    function generateDieFace (value) {

        const dotStyle = "bg-black w-2 sm:w-3 h-2 sm:h-3 rounded-[50%]"

        if (value === 1) {
            return (
                <div className="flex justify-center items-center h-full">
                    <span className={`${dotStyle}`}> </span>
                </div>)
        } else if (value === 2) {
            return (
                <div className="flex justify-between h-full">
                    <span className={`${dotStyle}`}> </span>
                    <span className={`${dotStyle} self-end`}> </span>
                </div>)
        } else if (value === 3) {
            return (
                <div className="flex justify-between h-full">
                    <span className={`${dotStyle}`}> </span>
                    <span className={`${dotStyle} self-center`}> </span>
                    <span className={`${dotStyle} self-end`}> </span>
                </div>)
        } else if (value === 4) {
            return (
                <div className="flex h-full">
                    <div className="flex flex-col justify-between w-full">
                        <span className={`${dotStyle}`}> </span>
                        <span className={`${dotStyle}`}> </span>
                    </div>
                    <div className="flex flex-col justify-between items-end w-full">
                        <span className={`${dotStyle}`}> </span>
                        <span className={`${dotStyle}`}> </span>
                    </div>
                </div>)
        } else if (value === 5) {
            return (
                <div className="flex h-full">
                    <div className="flex flex-col justify-between w-full">
                        <span className={`${dotStyle}`}> </span>
                        <span className={`${dotStyle}`}> </span>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full">
                        <span className={`${dotStyle}`}> </span>
                    </div>
                    <div className="flex flex-col justify-between items-end w-full">
                        <span className={`${dotStyle}`}> </span>
                        <span className={`${dotStyle}`}> </span>
                    </div>
                </div>)
        } else if (value === 6) {
            return (
                <div className="flex h-full">
                    <div className="flex flex-col justify-between w-full">
                        <span className={`${dotStyle}`}> </span>
                        <span className={`${dotStyle}`}> </span>
                        <span className={`${dotStyle}`}> </span>
                    </div>
                    <div className="flex flex-col justify-between items-end w-full">
                        <span className={`${dotStyle}`}> </span>
                        <span className={`${dotStyle}`}> </span>
                        <span className={`${dotStyle}`}> </span>
                    </div>
                </div>)
        }
    }

    return (
        <div className={`w-14 sm:w-20 h-14 sm:h-20 p-2 rounded-lg shadow-lg cursor-pointer ${props.isHeld? "bg-[#59E391]" : "bg-[#FFFFFF]"}`} onClick={props.holdDice}>
            {generateDieFace(props.value)}
        </div>
    )
}