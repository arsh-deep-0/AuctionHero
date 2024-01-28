import Heading from "./Heading"
import WalletContainer from "./WalletContainer"


function TeamsWallet() {
  return (
    <div className="flex flex-col justify-between h-full gap-4 ">
      <Heading/>
      <WalletContainer/>
    </div>
  )
}

export default TeamsWallet