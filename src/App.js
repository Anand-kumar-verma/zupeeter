import { Route, Routes } from "react-router-dom";
import "../src/index.css";
import "./App.css";
import LayoutAviator from "./GamePage/Layout";
import MainPage from "./GamePage/MainPage";
import PlayGame from "./GamePage/PlayGame";
import "./assets/styles/main.css";
import CricketUserprofile from "./cricket/profile/CricketUserprofile";
import CricketDepositHistory from "./cricket/transactionHistory/CricketDepositHistory";
import Test from "./pages/Test";
import Account from "./pages/account/Account";
import BankDetails from "./pages/account/AccountSubSection/BankDetails/BankDetails";
import BankDetailsReport from "./pages/account/AccountSubSection/BankDetails/BankDetailsReport";
import BettingZone from "./pages/account/AccountSubSection/BettingZone";
import ICO from "./pages/account/AccountSubSection/ICO";
import IncomeMainSection from "./pages/account/AccountSubSection/Income/IncomeMainSection";
import LevelBonus from "./pages/account/AccountSubSection/Income/IncomeSubParts/LevelBonus";
import ReferralBonus from "./pages/account/AccountSubSection/Income/IncomeSubParts/ReferralBonus";
import RegistrationBonus from "./pages/account/AccountSubSection/Income/IncomeSubParts/RegistrationBonus";
import TeamBettingBonus from "./pages/account/AccountSubSection/Income/IncomeSubParts/TeamBettingBonus";
import TeamSalaryBonus from "./pages/account/AccountSubSection/Income/IncomeSubParts/TeamSalaryBonus";
import MyTeam from "./pages/account/AccountSubSection/MyTeam";
import ChangeAccountPassword from "./pages/account/AccountSubSection/Password/ChangeAccountPassword";
import ChangeTransactionPassword from "./pages/account/AccountSubSection/Password/ChangeTransactionPassword";
import CommonPasswordPage from "./pages/account/AccountSubSection/Password/CommonPasswordPage";
import PrivacyPolicy from "./pages/account/AccountSubSection/PrivacyPolicy";
import Profile from "./pages/account/AccountSubSection/Profile";
import RiskAndDisClosureAgreement from "./pages/account/AccountSubSection/RiskAndDisClosureAgreement";
import SingleTeamDetails from "./pages/account/AccountSubSection/SingleTeamDetails";
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
import CricketWithdrawlHistory from "./cricket/transactionHistory/CricketWithdrawlHistory";
import DepositCash from "./cricket/transacton/DepositCash";
import WithdrawlCash from "./cricket/transacton/WithdrawlCash";

function App() {
  return (
    <>
      <Routes>
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

        <Route path="/account" Component={Account}></Route>
        <Route path="/account-my-team" Component={MyTeam}></Route>
        <Route
          path="/account-my-team/details/:id"
          Component={SingleTeamDetails}
        ></Route>
        <Route path="/account-betting-zone" Component={BettingZone}></Route>
        <Route path="/account-band-details" Component={BankDetails}></Route>
        <Route
          path="/account-bank-details-reports"
          Component={BankDetailsReport}
        ></Route>
        <Route path="/account-password" Component={CommonPasswordPage}></Route>
        <Route
          path="/account-password/change-password"
          Component={ChangeAccountPassword}
        ></Route>
        <Route
          path="/account-password/change-transction-password"
          Component={ChangeTransactionPassword}
        ></Route>
        <Route path="/account-privacy-policy" Component={PrivacyPolicy}></Route>
        <Route
          path="/account-risk-disclosure-agreement"
          Component={RiskAndDisClosureAgreement}
        ></Route>
        <Route path="/account-ico" Component={ICO}></Route>
        <Route path="/account-profile" Component={Profile}></Route>
        <Route path="/account-income" Component={IncomeMainSection}></Route>
        <Route
          path="/account-income-referral-bonus"
          Component={ReferralBonus}
        ></Route>
        <Route
          path="/account-income-level-bonus"
          Component={LevelBonus}
        ></Route>
        <Route
          path="/account-income-team-betting-bonus"
          Component={TeamBettingBonus}
        ></Route>
        <Route
          path="/account-income-team-salary-bonus"
          Component={TeamSalaryBonus}
        ></Route>
        <Route
          path="/account-income-registratioin-bonus"
          Component={RegistrationBonus}
        ></Route>

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
