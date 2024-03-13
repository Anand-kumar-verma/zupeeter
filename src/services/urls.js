export const rupees = "₹"

//  export const baseUrl = "https://task.sabrikhidmat.org"
//  export const baseUrl = "https://bike.vpayout.com"
 export const baseUrl = "https://admin.gameszone.life"


  // export const domain = "http://192.168.99.149:9000"
// export const domain = "https://app.ferryinfotech.in/"
export const domain = "https://aviator-backend-p1xp.onrender.com/"


export const endpoint ={
  login:`${baseUrl}/api/user_login`,
  signup:`${baseUrl}/api/user_register`,
  userwallet:`${baseUrl}/api/userwallet`,
  profiledata:`${baseUrl}/api/profileapi`,
  applybet:`${baseUrl}/api/bet`,
  game_history:`${baseUrl}/api/colour_result`,
  my_history:`${baseUrl}/api/getbet`,
  check_result:`${baseUrl}/api/checkresult`,
  color_winning:`${baseUrl}/api/colour_winning`,


  // aviator urls
  aviator_login:`${baseUrl}/api/aviator/login`,
  get_data_by_user_id:`${baseUrl}/api/userProfile`,
  aviator_result:`${baseUrl}/api/aviator/result_cron`,
  total_bet_history:`${baseUrl}/api/aviator/total-bet-histroy`,
  bet_history:`${baseUrl}/api/aviator/bet_histroy`,
  result:`${baseUrl}/api/aviator/result`,
  wallet_data:`${baseUrl}/api/aviator/userwallet`,
  bet_now:`${baseUrl}/api/aviator/bet_now`,
  cash_out:`${baseUrl}/api/aviator/cash_out`,
}