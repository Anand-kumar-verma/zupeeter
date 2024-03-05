import Button from '@mui/material/Button';
import React from "react";

const Notification = ({handleClosepolicy}) => {
  return (
    <div className="w-full">
      <p className="text-center bg-gray-700 rounded-full mt-2 !text-blue-400">
        ⭐️ Welcome Dear Member ⭐️
      </p>
      <div className="mt-5  ">
        <p className=" pl-10 !text-white">⭐️ BDG Game Operating 5 Years+</p>
        <p className=" pl-10 !text-white">⭐️ High Quality Agent Benefits</p>
        <p className=" pl-10 !text-white">⭐️ No.1 Casino Game Platform</p>
      </div>
      <div className="mt-5">
        <p className=" pl-10 !text-white">🔥 Local Bank Deposit 2% Bonus 🔥</p>
        <p className=" pl-10 !text-white">🔥USDT 3% Bonus & TRX 2% Bonus 🔥</p>
      </div>
      <p className="mt-5 !text-white font-bold text-center">
        🎁 More Bonus - Click EVENT 🎁
      </p>
      <p className="!text-white  text-center">
        💎Click Promote - Become Agent💎
      </p>
      <p className="mt-5 !text-white font-bold text-center">
        Get income every day
      </p>
      <div className="w-full ">
      <Button onClick={()=>handleClosepolicy()} className="!bg-gradient-to-r from-[#a9a291] to-[#D1AD60] !w-full !rounded-full !py-2 " variant="contained">Confirm</Button>
      </div>
      <div className="my-4">
      <div
        style={{
          background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
        }}
        className="grid place-items-center rounded-b-[50px] h-8"
      ></div>
      </div>
    </div>
  );
};

export default Notification;
