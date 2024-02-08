import Heading from "./Heading"
import H from "./H"
import PH from "./PH"
import PlayerHolder from "./PlayerHolder"
import SS from "./SS"
import StatSection from "./StatSection"


function PSS() {
  return (
    <div className="w-full flex flex-col gap-2 justify-between h-full items-center">
     <H/>
     <PH/>
     <SS/>
    </div>
  )
}

export default PSS