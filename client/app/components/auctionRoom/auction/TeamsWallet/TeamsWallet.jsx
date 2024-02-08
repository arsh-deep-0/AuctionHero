import Heading from "./Heading"
import WalletContainer from "./WalletContainer"


function TeamsWallet() {
  return (
    <div className="flex flex-col justify-start h-full gap-2 lg:gap-8">
      <Heading/>
      <WalletContainer/>
    </div>
  )
}

export default TeamsWallet