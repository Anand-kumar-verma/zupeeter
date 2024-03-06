import {
  Box,
  CircularProgress,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../../../component/Layout/Layout";
import { endpoint } from "../../../services/urls";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function PrivacyPolicy() {
  const navigate = useNavigate();
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  const { isLoading, data } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });

  const walletamount = async () => {
    try {
      const response = await axios.get(
        `${endpoint.userwallet}?userid=${user_id}`
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };
  const initialValues = {
    referrel_code: "https://zupeeter.com/auth/registration/WlcxMjM0NTY3",
  };
  const fk = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      console.log("This is handle submit");
    },
  });

  const amount = data?.data?.data?.wallet || 0;
  if (isLoading)
    return (
      <Layout>
        <CircularProgress />
      </Layout>
    );
  return (
    <Layout>
      <Box sx={styles.root}>
        <Container>
          <Box
            sx={{
              background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
            }}
            className="grid place-items-center rounded-b-[50px]"
          >
            <span className="py-[8%]">Privacy Policy</span>
          </Box>

          <Box
            className="mt-3  w-full  bg-white bg-opacity-5 p-3"
            sx={{
              "&>p": { fontSize: "13px", color: "white !important" },
              "&>ul>li>p": { fontSize: "13px", color: "white !important" },
              "&>ul>li>h6": { fontSize: "16px", color: "white !important" },
              "&>ul>li>div>svg": {
                fontSize: "13px",
                color: "white !important",
              },
              "&>h4": { fontSize: "30px", color: "white !important", my: 1 },
              "&>h5": { fontSize: "20px", color: "white !important", my: 1 },
            }}
          >
            <Typography variant="body1" color="initial">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </Typography>
            <Typography variant="h4" color="initial">
              Interpretation and Definitions
            </Typography>
            <Typography variant="h5" color="initial">
              Interpretation
            </Typography>
            <Typography variant="body1" color="initial">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions.
            </Typography>
            <Typography variant="body1" color="initial">
              The following definitions shall have the same meaning regardless
              of whether they appear in singular or in plural.
            </Typography>
            <Typography variant="h5" color="initial">
              Definitions
            </Typography>
            <Typography variant="body1" color="initial">
              {" "}
              For the purposes of this Privacy Policy:
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  You means the individual accessing or using the Service, or
                  the company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Company (referred to as either "the Company", "We", "Us" or
                  "Our" in this Agreement) refers to Trade Mall.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Affiliate means an entity that controls, is controlled by or
                  is under common control with a party, where "control" means
                  ownership of 50% or more of the shares, equity interest or
                  other securities entitled to vote for election of directors or
                  other managing authority.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Account means a unique account created for You to access our
                  Service or parts of our Service.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Website refers to Trade Mall, accessible from
                  https://trademall.io
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Service refers to the Website.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Country refers to: Uttar Pradesh, India
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Service Provider means any natural or legal person who
                  processes the data on behalf of the Company. It refers to
                  third-party companies or individuals employed by the Company
                  to facilitate the Service, to provide the Service on behalf of
                  the Company, to perform services related to the Service or to
                  assist the Company in analyzing how the Service is used.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Third-party Social Media Service refers to any website or any
                  social network website through which a User can log in or
                  create an account to use the Service.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Personal Data is any information that relates to an identified
                  or identifiable individual.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Personal Data is any information that relates to an identified
                  or identifiable individual.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Cookies are small files that are placed on Your computer,
                  mobile device or any other device by a website, containing the
                  details of Your browsing history on that website among its
                  many uses.
                </Typography>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Device means any device that can access the Service such as a
                  computer, a cellphone or a digital tablet.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Usage Data refers to data collected automatically, either
                  generated by the use of the Service or from the Service
                  infrastructure itself (for example, the duration of a page
                  visit).
                </Typography>
              </ListItem>
            </List>
            <Typography variant="h4" color="initial">
              Collecting and Using Your Personal Data
            </Typography>
            <Typography variant="h5" color="initial">
              Types of Data Collected
            </Typography>
            <Typography variant="h5" color="initial">
              Personal Data
            </Typography>
            <Typography variant="body1" color="initial">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">Email address</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  First name and last name
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">Phone number</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Address, State, Province, ZIP/Postal code, City
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">Usage Data</Typography>
              </ListItem>
            </List>
            <Typography variant="h5" color="initial">
              Usage Data
            </Typography>
            <Typography variant="body1" color="initial">
              Usage Data is collected automatically when using the Service.
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </Typography>
            <Typography variant="body1" color="initial">
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </Typography>
            <Typography variant="body1" color="initial">
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </Typography>
            <Typography variant="h5" color="initial">
              Tracking Technologies and Cookies
            </Typography>
            <Typography variant="body1" color="initial">
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service.
            </Typography>
            <Typography variant="body1" color="initial">
              You can instruct Your browser to refuse all Cookies or to indicate
              when a Cookie is being sent. However, if You do not accept
              Cookies, You may not be able to use some parts of our Service.
            </Typography>
            <Typography variant="body1" color="initial">
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              your web browser.
            </Typography>
            <Typography variant="body1" color="initial">
              We use both session and persistent Cookies for the purposes set
              out below:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Necessary / Essential Cookies
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Typography variant="body1">Type: Session Cookies</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Typography variant="body1">Administered by: Us</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Typography variant="body1">
                  Purpose: These Cookies are essential to provide You with
                  services available through the Website and to enable You to
                  use some of its features. They help to authenticate users and
                  prevent fraudulent use of user accounts. Without these
                  Cookies, the services that You have asked for cannot be
                  provided, and We only use these Cookies to provide You with
                  those services.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  Cookies Policy / Notice Acceptance Cookies
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Typography variant="body1">
                  Type: Persistent Cookies
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Typography variant="body1">Administered by: Us</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Typography variant="body1">
                  Purpose: These Cookies identify if users have accepted the use
                  of cookies on the Website
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">Functionality Cookies</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Typography variant="body1">
                  Type: Persistent Cookies
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Typography variant="body1">Administered by: Us</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Typography variant="body1">
                  Purpose: These Cookies allow us to remember choices You make
                  when You use the Website, such as remembering your login
                  details or language preference. The purpose of these Cookies
                  is to provide You with a more personal experience and to avoid
                  You having to re-enter your preferences every time You use the
                  Website.
                </Typography>
              </ListItem>
            </List>
            <Typography variant="body1" color="initial">
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy.
            </Typography>
            <Typography variant="h5" color="initial">
              Use of Your Personal Data
            </Typography>
            <Typography variant="body1" color="initial">
              The Company may use Personal Data for the following purposes:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  To provide and maintain our Service, including to monitor the
                  usage of our Service.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  For the performance of a contract: the development, compliance
                  and undertaking of the purchase contract for the products,
                  items or services You have purchased or of any other contract
                  with Us through the Service.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  To contact You: To contact You by email, telephone calls, SMS,
                  or other equivalent forms of electronic communication, such as
                  a mobile application's push notifications regarding updates or
                  informative communications related to the functionalities,
                  products or contracted services, including the security
                  updates, when necessary or reasonable for their
                  implementation.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  To provide You with news, special offers and general
                  information about other goods, services and events which we
                  offer that are similar to those that you have already
                  purchased or enquired about unless You have opted not to
                  receive such information.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  To manage Your requests: To attend and manage Your requests to
                  Us.
                </Typography>
              </ListItem>
              <Typography variant="body1" color="initial">
                We may share your personal information in the following
                situations:
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  With Service Providers: We may share Your personal information
                  with Service Providers to monitor and analyze the use of our
                  Service, to contact You.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  For Business transfers: We may share or transfer Your personal
                  information in connection with, or during negotiations of, any
                  merger, sale of Company assets, financing, or acquisition of
                  all or a portion of our business to another company.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  With Affiliates: We may share Your information with Our
                  affiliates, in which case we will require those affiliates to
                  honor this Privacy Policy. Affiliates include Our parent
                  company and any other subsidiaries, joint venture partners or
                  other companies that We control or that are under common
                  control with Us.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  With Business partners: We may share Your information with Our
                  business partners to offer You certain products, services or
                  promotions.
                </Typography>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="body1">
                  With other users: when You share personal information or
                  otherwise interact in the public areas with other users, such
                  information may be viewed by all users and may be publicly
                  distributed outside. If You interact with other users or
                  register through a Third-Party Social Media Service, Your
                  contacts on the Third-Party Social Media Service may see You
                  name, profile, pictures and description of Your activity.
                  Similarly, other users will be able to view descriptions of
                  Your activity, communicate with You and view Your profile.
                </Typography>
              </ListItem>
            </List>
            <Typography variant="h5" color="initial">
              Retention of Your Personal Data
            </Typography>
            <Typography variant="body1" color="initial">
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </Typography>
            <Typography variant="body1" color="initial">
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </Typography>
            <Typography variant="h5" color="initial">
              Transfer of Your Personal Data
            </Typography>
            <Typography variant="body1" color="initial">
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </Typography>
            <Typography variant="body1" color="initial">
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </Typography>
            <Typography variant="body1" color="initial">
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </Typography>
            <Typography variant="h4" color="initial">
              Disclosure of Your Personal Data
            </Typography>
            <Typography variant="h5" color="initial">
              Business Transactions
            </Typography>
            <Typography variant="body1" color="initial">
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </Typography>
            <Typography variant="h5" color="initial">
              Law enforcement
            </Typography>
            <Typography variant="body1" color="initial">
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </Typography>
            <Typography variant="h5" color="initial">
              Other legal requirements
            </Typography>
            <Typography variant="body1" color="initial">
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="h6">
                  Comply with a legal obligation
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="h6">
                  Protect and defend the rights or property of the Company
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="h6">
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="h6">
                  Protect the personal safety of Users of the Service or the
                  public
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="h6">
                  Protect against legal liability
                </Typography>
              </ListItem>
            </List>
            <Typography variant="h5" color="initial">
              Security of Your Personal Data
            </Typography>
            <Typography variant="body1" color="initial">
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </Typography>
            <Typography variant="h4" color="initial">
              Children's Privacy
            </Typography>
            <Typography variant="body1" color="initial">
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </Typography>
            <Typography variant="body1" color="initial">
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.
            </Typography>
            <Typography variant="h4" color="initial">
              Links to Other Websites
            </Typography>
            <Typography variant="body1" color="initial">
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </Typography>
            <Typography variant="body1" color="initial">
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </Typography>
            <Typography variant="h4" color="initial">
              Changes to this Privacy Policy
            </Typography>
            <Typography variant="body1" color="initial">
              We may update our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </Typography>
            <Typography variant="body1" color="initial">
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy.
            </Typography>
            <Typography variant="body1" color="initial">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </Typography>
            <Typography variant="h4" color="initial">
              Contact Us
            </Typography>
            <Typography variant="body1" color="initial">
              If you have any questions about this Privacy Policy, You can
              contact us:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FiberManualRecordIcon />
                </ListItemIcon>
                <Typography variant="h6">
                  By visiting this page on our website
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export default PrivacyPolicy;

const styles = {
  root: { background: "#202020", pb: 6 },
  depositWithdrawIcon: { width: "30px", height: "30px" },
};
