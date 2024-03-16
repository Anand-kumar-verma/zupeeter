import axios from "axios";
import { endpoint } from "../urls";
import toast from "react-hot-toast";
const login_data = localStorage.getItem("logindata");
const user_id = login_data && JSON.parse(login_data)?.UserID;

export const MyProfileDataFn = async () => {
  try {
    const response = await axios.get(`${endpoint.profiledata}?id=${user_id}`);
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const MyHistoryFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.my_history}?userid=${user_id}&limit=0`
    );
    return response;
  } catch (e) {
    toast(e?.message);
    console.log(e);
  }
};

export const cashDepositFn = async(reqbody)=>{
  try{
      const res = axios.get(`${endpoint.cash_deposit}`,{
        params:reqbody
      })
      return res
  }catch(e){
    console.log(e)
  }
}