
import MiddleComponent from "./MiddleComponent";
import Timer from "./Timer";

function SideNavbar() {
  const clickHandler = () => {
    console.log("hello");
  }


  return (
    <div className=" absolute inset-8 bg-white  text-black px-4 py-4 w-1/6 justify-between rounded-md flex flex-col ">
      {/* top section - logo + heading */}
      <div className="flex space-x-3">
        <img src="/resources/logos/leftNavbarLogos/auctionHeroLogo.svg" alt="" />
        <div className="gabriela font-bold text-xl text-center">
          Auction Heroes
        </div>
      </div>

      {/* middle section - navMenu */}
      <div>
        <div className="w-full flex flex-col gap-2">
          <MiddleComponent onClicks={clickHandler} name="Team Dashboard" imgUrl="teamDashboard.svg" />
          <MiddleComponent onClicks={clickHandler} name="Auction" imgUrl="auction.svg" />
          <MiddleComponent onClicks={clickHandler} name="Rules" imgUrl="rules.svg" />
          <MiddleComponent onClicks={clickHandler} name="My Team" imgUrl="myteam.svg" />
          <MiddleComponent onClicks={clickHandler} name="Player Cards" imgUrl="playerCards.svg" />
        </div>
      </div>

      {/* timer section */}
      <Timer/>


    </div>
  );
}

export default SideNavbar;
