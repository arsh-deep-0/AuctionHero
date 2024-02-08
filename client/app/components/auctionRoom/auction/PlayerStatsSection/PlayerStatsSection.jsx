import Heading from "./Heading"
import PlayerHolder from "./PlayerHolder"
import StatSection from "./StatSection"


function PlayerStatsSection() {
  return (
    <div className="w-full flex flex-col gap-4 justify-between h-full items-center">
      <Heading />
      <PlayerHolder />
      <StatSection />
    </div>
  )
}

export default PlayerStatsSection