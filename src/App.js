import { Route, Routes } from "react-router-dom";
import "../src/index.css";
import "./App.css";
import LayoutAviator from "./GamePage/Layout";
import MainPage from "./GamePage/MainPage";
import PlayGame from "./GamePage/PlayGame";
import "./assets/styles/main.css";
import CricketUserprofile from "./cricket/profile/CricketUserprofile";
import CricketDepositHistory from "./cricket/transactionHistory/CricketDepositHistory";
import CricketWithdrawlHistory from "./cricket/transactionHistory/CricketWithdrawlHistory";
import DepositCash from "./cricket/transacton/DepositCash";
import WithdrawlCash from "./cricket/transacton/WithdrawlCash";
import Test from "./pages/Test";
import Account from "./pages/account/Account";
import BatHistorys from "./pages/account/Component/BatHistory";
import Feedback from "./pages/account/Component/Feedback";
import GameNotification from "./pages/account/Component/GameNotification";
import Gamestaticks from "./pages/account/Component/Gamestaticks";
import Gift from "./pages/account/Component/Gift";
import Languages from "./pages/account/Component/Language";
import LoginPassword from "./pages/account/Component/LoginPassword";
import Mail from "./pages/account/Component/Mail";
import Notification from "./pages/account/Component/Notification";
import SettingCenter from "./pages/account/Component/SettingCenter";
import Activity from "./pages/activity/Activity";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import FundRequest from "./pages/dashboard/FundRequest";
import Withdrawl from "./pages/dashboard/Withdrawl";
import Promotion from "./pages/promotion/Promotion";
import CustomerLine from "./pages/promotion/component/CustomerLine";
import Invitaton from "./pages/promotion/component/Invitaton";
import MyCommission from "./pages/promotion/component/MyCommission";
import PromotionRule from "./pages/promotion/component/PromotionRule";
import RobateRetio from "./pages/promotion/component/RebateRatio";
import Subordinate from "./pages/promotion/component/Subordinate";
import TeamReports from "./pages/promotion/component/TeamReport";
import Trx from "./pages/trx/Trx";
import Wallet from "./pages/wallet/Wallet";
import DepositeHistory from "./pages/wallet/component/DepositeHistory";
import WalletRecharge from "./pages/wallet/component/WalletRecharge";
import WithdravalHistory from "./pages/wallet/component/WithdravalHistory";
import Win from "./pages/win/win";
function App() {
  return (
    <>
      <Routes>

{/* // acount section */}
      <Route path="/account" Component={Account}></Route>
        <Route path="/withdravalHistory" Component={WithdravalHistory}></Route>
        <Route path="/Withdrawal" Component={Withdrawl}></Route>
        <Route path="/depositHistory" Component={DepositeHistory}></Route>
        <Route path="/wallet/Recharge" Component={WalletRecharge}></Route>
        <Route path="/trx" Component={Trx}></Route>
        <Route path="/wallet" Component={Wallet}></Route>
        <Route path="/bathistory" Component={BatHistorys}></Route>
        <Route path="/notification" Component={Notification}></Route>
        <Route path="/gift" Component={Gift}></Route>
        <Route path="/gamestaticks" Component={Gamestaticks}></Route>
        <Route path="/Language" Component={Languages}></Route>
        <Route path="/SettingCenter" Component={SettingCenter}></Route>
        <Route path="/SettingCenter/LoginPassword" Component={LoginPassword}></Route>
        <Route path="/SettingCenter/mail" Component={Mail}></Route>
        <Route path="/feedback" Component={Feedback}></Route>
        <Route path="/gameNotification" Component={GameNotification}></Route>


        <Route path="/" Component={Login}></Route>
        <Route path="/test" Component={Test}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route path="/dashboard" Component={Dashboard}></Route>
        <Route path="/depositHistory" Component={DepositeHistory}></Route>
        <Route path="/Withdrawal" Component={Withdrawl}></Route>
        <Route path="/withdravalHistory" Component={WithdravalHistory}></Route>
        <Route path="/activity" Component={Activity}></Route>
        <Route path="/win" Component={Win}></Route>
        {/* // promotion */}
        <Route path="/promotion" Component={Promotion}></Route>
        <Route path="/promotion/Subordinate" Component={Subordinate}></Route>
        <Route path="/promotion/PromotionShare" Component={Invitaton}></Route>
        <Route path="/promotion/TeamReport/" Component={TeamReports}></Route>
        <Route path="/promotion/MyCommission/" Component={MyCommission}></Route>
        <Route
          path="/promotion/PromotionRule/"
          Component={PromotionRule}
        ></Route>
        <Route path="/promotion/RebateRatio/" Component={RobateRetio}></Route>
        <Route path="/promotion/customerLine/" Component={CustomerLine}></Route>
        <Route path="/view_fund_request" Component={FundRequest}></Route>
        <Route path="/view_width_request" Component={Withdrawl}></Route>
        <Route path="/wallet" Component={Wallet}></Route>
        <Route path="/view_fund_request" Component={FundRequest}></Route>
        <Route path="/wallet/Recharge" Component={WalletRecharge}></Route>

  

        <Route path="/trx" Component={Trx}></Route>

        {/* ///////////////// aviator ////////////////// */}
        <Route path="/aviator-login" element={<MainPage />} />
        <Route
          path="/playgame"
          element={<LayoutAviator component={<PlayGame />} />}
        />
        <Route
          path="/account/:id"
          element={<LayoutAviator component={<Account />} />}
        />
       
         <Route path="/cricket/user-profile" Component={CricketUserprofile}></Route>
         <Route path="/cricket/deposit-history" Component={CricketDepositHistory}></Route>
         <Route path="/cricket/withdrawl-history" Component={CricketWithdrawlHistory}></Route>
         <Route path="/cricket/depositCash" Component={DepositCash}></Route>
         <Route path="/cricket/withdrawlCash" Component={WithdrawlCash}></Route>
        {/* //////////////// crickert /////////////// */}

      </Routes>
    </>
  );
}

export default App;
