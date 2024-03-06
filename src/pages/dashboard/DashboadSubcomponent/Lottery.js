import React from "react";
import playnow from "../../../assets/images/playnow.png";
import { Policy } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Lottery = () => {
    const navigate = useNavigate();

  return (
    <>
      {/* /// wingo */}
      <div
        onClick={() => navigate("/win")}
        className=" rounded-md !py-0 h-[150px] bg-gradient-to-l from-[#dbe9fa] to-[#6DA7F4]"
      >
        <div className="w-full grid grid-cols-4 place-items- mt-4 cursor-pointer">
          <div className="col-span-2">
            <div className=" w-full h-full  flex flex-col justify-center items-center">
              <p className="text-2xl font-bold !text-[#805c0f]">Win Go</p>
              <p>Guess Number</p>
              <p>Green/Red/Voilet to win</p>
            </div>
          </div>
          <div className="col-span-1 cursor-pointer flex items-center">
            <img className="" src={playnow} />
          </div>
          <div className="col-span-1">
            <img
              className="bg-cover h-[150px] w-[100%]"
              src="https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062051do1k.png"
            />
          </div>
        </div>
      </div>
      {/* // k3 lotery */}
      <div className=" rounded-md !py-0 h-[150px] bg-gradient-to-l from-[#fbdee1] to-[#FF7D89]">
        <div className="w-full grid grid-cols-4 place-items- mt-4 cursor-pointer">
          <div className="col-span-2">
            <div className=" w-full h-full  flex flex-col justify-center items-center">
              <p className="text-2xl font-bold !text-[#805c0f]">K3 Lotre</p>
              <p>Guess Number</p>
              <p>Big/Small/Odd/Even</p>
            </div>
          </div>
          <div className="col-span-1 cursor-pointer flex items-center">
            <img className="" src={playnow} />
          </div>
          <div className="col-span-1">
            <img
              className="bg-cover h-[150px] w-[100%]"
              src="https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062051do1k.png"
            />
          </div>
        </div>
      </div>
      {/* // k3 lotery */}
      <div className=" rounded-md !py-0 h-[150px] bg-gradient-to-l from-[#ceedd4] to-[#63f07d]">
        <div className="w-full grid grid-cols-4 place-items- mt-4 cursor-pointer">
          <div className="col-span-2">
            <div className=" w-full h-full  flex flex-col justify-center items-center">
              <p className="text-2xl font-bold !text-[#805c0f]">5D Lotre</p>
              <p>Guess Number</p>
              <p>Big/Small/Odd/Even</p>
            </div>
          </div>
          <div className="col-span-1 cursor-pointer flex items-center">
            <img className="" src={playnow} />
          </div>
          <div className="col-span-1">
            <img
              className="bg-cover h-[150px] w-[100%]"
              src="https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062051do1k.png"
            />
          </div>
        </div>
      </div>
      {/* // k3 lotery */}
      <div 
      onClick={()=>navigate('/trx')}
      className=" rounded-md !py-0 h-[150px] bg-gradient-to-l from-[#f2ead1] to-[#C4933F]">
        <div className="w-full grid grid-cols-4 place-items- mt-4 cursor-pointer">
          <div className="col-span-2">
            <div className=" w-full h-full  flex flex-col justify-center items-center">
              <p className="text-2xl font-bold !text-[#805c0f]">Trx Win</p>
              <p>Guess Number</p>
              <p>Green/Red/Purple to win</p>
            </div>
          </div>
          <div className="col-span-1 cursor-pointer flex items-center">
            <img className="" src={playnow} />
          </div>
          <div className="col-span-1">
            <img
              className="bg-cover h-[150px] w-[100%]"
              src="https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062051do1k.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lottery;
