import  { useEffect, useState } from "react";
import axios from "axios";

const SS = () => {
  const [playerName , setPlayerName]= useState('Arsh');
  const [battingPoints, setBattingPoints] = useState(0);
  const [bowlingPoints, setBowlingPoints] = useState(0);
  const [wkpoints, setWkPoints] = useState(0);



  useEffect(()=>{
    axios.get('/api/playerData').
    then(response=>{
      setPlayerName(response.data.playerName)
      setBattingPoints(response.data.battingPoints)
      setBowlingPoints(response.data.bowlingPoints)
      setWkPoints(response.data.wkPoints)      
    }).
    catch(err =>
      console.error(err));
  }, [])

  return (
    <div className="flex flex-col gap-4  lg:mt-0">
      <div className=" aoboshi text-2xl text-black  text-center drop-shadow-lg	">
        <p>Virat Kohli</p>
      </div>
      <div className="flex gap-1 text-white">
            <div className="flex bg-black px-3 py-2 gap-1 -skew-x-[20deg] items-center align-middle border-2 border-solid border-white black-shadow rounded-md">
                  <img className="w-[40%]" src="/resources/playerImages/Group 268.svg" alt="" />
                  <p className="text-xl skew-x-[20deg] font-medium">{battingPoints}</p>
            </div>

            <div className="flex bg-black px-3 py-2 gap-1 -skew-x-[20deg] border-2 border-solid border-white black-shadow rounded-md">
                  <img className="w-[40%] skew-x-[20deg]" src="/resources/playerImages/Group 295.svg" alt="" />
                  <p className="text-xl skew-x-[20deg] font-medium">{bowlingPoints}</p>
            </div>
            <div className="flex bg-black px-3 py-2 gap-1 -skew-x-[20deg] border-2 border-solid border-white black-shadow rounded-md">
                  <img className="w-[40%] skew-x-[20deg]" src="/resources/playerImages/Group 273.svg" alt="" />
                  <p className="text-base lg:text-xl skew-x-[20deg] font-medium">{wkpoints}</p>

            </div>
      </div>
    </div>
  );
};

export default SS;
