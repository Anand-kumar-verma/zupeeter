import React from "react";
import playnow from "../../../assets/images/playnow.png";
import { Policy } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import aviator from "../../../assets/images/aviator.jpg";
const Original = () => {
  const navigate = useNavigate();
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  return (
    <>
      <div
        onClick={() => {
          navigate(`/playgame`)
        }
        }
        className=" rounded-md !py-0 h-[150px] bg-gradient-to-l from-[#e16082] to-[#df0e46]"
      >
        <div className="w-full grid grid-cols-4 place-items- mt-4 cursor-pointer">
          <div className="col-span-2">
            <div className=" w-full h-full  flex flex-col justify-center items-center">
              <p className="text-4xl font-bold !text-white">Aviator</p>
            </div>
          </div>
          <div className="col-span-1 cursor-pointer flex items-center">
            <img className="" src={playnow} />
          </div>
          <div className="col-span-1">
            <img className="bg-cover h-[150px] w-[100%]" src={aviator} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Original;
