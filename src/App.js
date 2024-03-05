import './App.css';
import './assets/styles/main.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import '../src/index.css'
import FundRequest from './pages/dashboard/FundRequest';
import Withdrawl from './pages/dashboard/Withdrawl';
import Wallet from './pages/wallet/Wallet';
import Account from './pages/account/Account';
import MyTeam from './pages/account/AccountSubSection/MyTeam';
import SingleTeamDetails from './pages/account/AccountSubSection/SingleTeamDetails';
import BettingZone from './pages/account/AccountSubSection/BettingZone';
import BankDetails from './pages/account/AccountSubSection/BankDetails/BankDetails';
import BankDetailsReport from './pages/account/AccountSubSection/BankDetails/BankDetailsReport';
import CommonPasswordPage from './pages/account/AccountSubSection/Password/CommonPasswordPage';
import ChangeAccountPassword from './pages/account/AccountSubSection/Password/ChangeAccountPassword';
import ChangeTransactionPassword from './pages/account/AccountSubSection/Password/ChangeTransactionPassword';
import PrivacyPolicy from './pages/account/AccountSubSection/PrivacyPolicy';
import RiskAndDisClosureAgreement from './pages/account/AccountSubSection/RiskAndDisClosureAgreement';
import ICO from './pages/account/AccountSubSection/ICO';
import Profile from './pages/account/AccountSubSection/Profile';
import IncomeMainSection from './pages/account/AccountSubSection/Income/IncomeMainSection';
import ReferralBonus from './pages/account/AccountSubSection/Income/IncomeSubParts/ReferralBonus';
import LevelBonus from './pages/account/AccountSubSection/Income/IncomeSubParts/LevelBonus';
import TeamBettingBonus from './pages/account/AccountSubSection/Income/IncomeSubParts/TeamBettingBonus';
import TeamSalaryBonus from './pages/account/AccountSubSection/Income/IncomeSubParts/TeamSalaryBonus';
import RegistrationBonus from './pages/account/AccountSubSection/Income/IncomeSubParts/RegistrationBonus';
import Activity from './pages/activity/Activity'
import Win from './pages/win/win';
import Promotion from './pages/promotion/Promotion';
import Subordinate from './pages/promotion/component/Subordinate';
import Invitaton from './pages/promotion/component/Invitaton';
import TeamReports from './pages/promotion/component/TeamReport';
import MyCommission from './pages/promotion/component/MyCommission';
import PromotionRule from './pages/promotion/component/PromotionRule';
import RobateRetio from './pages/promotion/component/RebateRatio';
import CustomerLine from './pages/promotion/component/CustomerLine';
function App() {

  return (
    <Routes>
      <Route path='/login' Component={Login}></Route>
      <Route path='/register' Component={Register}></Route>
      <Route path='/dashboard' Component={Dashboard}></Route>
      <Route path='/activity' Component={Activity}></Route>
      <Route path='/win' Component={Win}></Route>
      {/* // promotion */}
      <Route path='/promotion' Component={Promotion}></Route>
      <Route path='/promotion/Subordinate' Component={Subordinate}></Route>
      <Route path='/promotion/PromotionShare' Component={Invitaton}></Route>
      <Route path='/promotion/TeamReport/' Component={TeamReports}></Route>
      <Route path='/promotion/MyCommission/' Component={MyCommission}></Route>
      <Route path='/promotion/PromotionRule/' Component={PromotionRule}></Route>
      <Route path='/promotion/RebateRatio/' Component={RobateRetio}></Route>
      <Route path='/promotion/customerLine/' Component={CustomerLine}></Route>


      <Route path='/view_fund_request' Component={FundRequest}></Route>
      <Route path='/view_width_request' Component={Withdrawl}></Route>
      <Route path='/wallet' Component={Wallet}></Route>
      <Route path='/account' Component={Account}></Route>
      <Route path='/account-my-team' Component={MyTeam}></Route>
      <Route path='/account-my-team/details/:id' Component={SingleTeamDetails}></Route>
      <Route path='/account-betting-zone' Component={BettingZone}></Route>
      <Route path='/account-band-details' Component={BankDetails}></Route>
      <Route path='/account-bank-details-reports' Component={BankDetailsReport}></Route>
      <Route path='/account-password' Component={CommonPasswordPage}></Route>
      <Route path='/account-password/change-password' Component={ChangeAccountPassword}></Route>
      <Route path='/account-password/change-transction-password' Component={ChangeTransactionPassword}></Route>
      <Route path='/account-privacy-policy' Component={PrivacyPolicy}></Route>
      <Route path='/account-risk-disclosure-agreement' Component={RiskAndDisClosureAgreement}></Route>
      <Route path='/account-ico' Component={ICO}></Route>
      <Route path='/account-profile' Component={Profile}></Route>
      <Route path='/account-income' Component={IncomeMainSection}></Route>
      <Route path='/account-income-referral-bonus' Component={ReferralBonus}></Route>
      <Route path='/account-income-level-bonus' Component={LevelBonus}></Route>
      <Route path='/account-income-team-betting-bonus' Component={TeamBettingBonus}></Route>
      <Route path='/account-income-team-salary-bonus' Component={TeamSalaryBonus}></Route>
      <Route path='/account-income-registratioin-bonus' Component={RegistrationBonus}></Route>
    </Routes>
  );
}

export default App;
