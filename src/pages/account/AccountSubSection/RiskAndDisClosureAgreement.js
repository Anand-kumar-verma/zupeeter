import { Box, CircularProgress, Container } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Layout from "../../../component/Layout/Layout";
import { endpoint } from "../../../services/urls";
import { DockTwoTone } from "@mui/icons-material";
function RiskAndDisClosureAgreement() {
  const navigate = useNavigate();
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  const [select_type_of_history, setselect_type_of_history] = useState(1);
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
          <div
            style={{
              background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
            }}
            className="grid place-items-center rounded-b-[50px] !text-justify"
          >
            <span className="py-[8%]">Risk Disclosure Agreement</span>
          </div>

          <div className="mt-3  w-full  bg-white bg-opacity-5    p-3">
            <p className="!text-2xl !text-white">
              Chapter 1.Booking/Collection Description
            </p>
            <p className="!text-[12px] !text-white !text-justify">
              Prepayment Booking/Recycling Customer should read and understand
              the business content carefully before making prepayment bookings
              (prepayment lock price, payment settlement and shipment) /recovery
              or repurchase (prepayment lock price, shipping payment) before
              making prepayment bookings to Trade Mall:
            </p>
            <p className="!text-[12px] !text-white !text-justify">
              <span>1.</span> Before making an appointment/restoring the
              prepayment business, the customer should complete the real name
              authentication in the mall and ensure that the name, ID number,
              bank account number, delivery address and other information filled
              in are true, accurate and valid; Otherwise, the user will be
              liable for the consequences of false information.
            </p>
            <p className="!text-[12px] !text-white !text-justify">
              <span>2.</span>Customers can order gold and silver products in
              advance at the shopping centre. Orders can be cancelled by 01:30
              a.m. on the same Saturday. When the customer pays the end payment,
              the mall receives the final payment and arranges the delivery. If
              the customer does not pay the final pick-up by 01:30 a.m. on
              Saturday, the customer is deemed to have made the last offer
              before the inventory and the booking is cancelled.
            </p>
            <p className="!text-[12px] !text-white !text-justify">
              <span>3.</span>Customers can make an appointment to recycle gold
              and silver products purchased at the gold point. Pre-purchase
              recovery requires a credit margin and confirmation of actual
              possession of gold and silver products purchased from the mall.
              Customers can cancel their reservation at any time before 01:30 on
              Saturday and the credit mark will be refunded after deducting the
              increase or decrease in the value of the goods within the
              corresponding time.
              <br />
              If the customer fails to deliver the goods to a shopping mall or
              shopping center at the designated collection point by Saturday
              within the same week, or if the goods delivered do not meet the
              recycling standard test, the customer will be deemed to have
              cancelled the reservation recovery and will bear the logistics and
              testing costs.
            </p>
            <p className="!text-[12px] !text-white !text-justify">
              <span>4.</span>Counting time: Daily 01:30-05:30 for the mall
              warehouse inventory time. During the inventory period, the mall
              stops accepting advance payments for reservations/receipts. 5. For
              further details, please refer to the Business Guidelines in the
              front page of the mall, Understanding Trade Mall.
            </p>
            <p className="!text-2xl !text-white my-2">
              Chapter 2 Reveals the business model of Trade Mall
            </p>
            <p className="!text-[12px] !text-white !text-justify">
              Booking/repurchase orders, the business model for clearing balance
              shipments, uncertainties such as potential benefits and potential
              risks to the value of its merchandise due to real-time
              fluctuations in the gold and silver market, and the extent to
              which booking/repo risk stake is understood for customer
              booking/repo risk, Risk control ability and understanding of
              related products have high requirements. Customer selects
              pre-payment booking/repurchase, fully informed on behalf of the
              customer and understand the risks of prepayments/repurchase
              business and agree to and accept Trade Mall current and future
              relevant booking/repurchase business processes and management
              systems (collectively, the Process Systems) to develop, modify and
              publish. This Risk Disclosure (Disclosure) is intended to fully
              disclose to the Client the risk of the prepayment
              booking/repurchase business and is intended only to provide
              reference for the client to assess and determine its own risk
              tolerance. The risk disclosures described in this disclosure are
              for example only. All risk factors associated with Trade Mall
              Advance Booking/Repurchase are not detailed. Customers should also
              carefully understand and understand other possible risk factors
              before starting or participating in Trade Mall pre-payment
              booking/repurchase business. If the customer is not aware of or is
              not aware of this disclosure, they should consult Trade Mall
              Customer Service or the relevant regional service provider in a
              timely manner. If the Customer ultimately clicks on Risk
              Disclosure, it is deemed that the Customer fully agrees and
              accepts the full contents of this disclosure.
            </p>

            <p className="!text-white !text-pxl">Warm tips</p>
            <p className="!text-white !text-[11px] !text-justify">
              <span>1.</span>Minors under the age of 18 are not permitted to
              participate in The Trade Mall Advance Booking/Recycling.
            </p>
            <p className="!text-white !text-[11px] !text-justify">
              <span>2.</span>Trade Mall Advance Booking/Repo is only available
              to customers who meet all of the following criteria:
            </p>
            <p className="!text-white !text-[11px] !text-justify">
              <span className="mr-2">①</span> Natural persons with full civil
              capacity, legal persons of enterprises or other economic
              organizations registered in accordance with the law.
            </p>
            <p className="!text-white !text-[11px] !text-justify">
              <span className="mr-2">②</span> To fully understand all risks
              associated with Trade Mall Advance Booking/Repurchase business and
              have a certain risk tolerance.
            </p>
            <p className="!text-white !text-[11px] !text-justify">
              <span className="mr-2">③</span>Have a certain understanding of
              gold and silver and its products:
            </p>
            <p className="!text-white !text-[11px] !text-justify !text-justify">
              <span className="mr-2">A.</span> Policy-related risk disclosure,
              such as changes in national laws, regulations and policies,
              contingency measures, implementation of appropriate regulatory
              measures, Trade Mall regulatory system and changes in management
              methods and regulations, etc., all risks that may affect customer
              bookings/repurchases, etc., the customer must bear the losses
              incurred.
            </p>
            <p className="!text-white !text-[11px] !text-justify !text-justify">
              <span className="mr-2">B.</span> Price fluctuations, gold, silver
              and other precious metals and their accessories are affected by a
              variety of factors, such as the international economic situation,
              foreign exchange, related market trends, supply and demand, and
              political situation and energy prices. The pricing mechanism for
              gold, silver and other precious metals products is very complex,
              making it difficult for customers to fully grasp in practice, so
              decisions such as advance booking/buyback are possible Mistakes,
              if the risk cannot be effectively controlled, may suffer losses
              and the customer must bear all the losses incurred as a result.
            </p>
            <p className="!text-white !text-[11px] !text-justify !text-justify">
              <span className="mr-2">④</span> Trade Mall has enabled the
              provision of services through electronic communication technology
              and Internet technology. Communication services and hardware and
              software services are provided by different vendors and may be at
              risk in terms of quality and stability. Interruptions or delays
              due to communication or network failures may affect customer
              prepayment bookings/repurchases. In addition, the customers
              computer system may be attacked by viruses and/or cyber-hackers,
              resulting in the customers advance payment booking/repurchase not
              being properly and/or timely. There is also a risk that the above
              uncertainties may affect the customer’s advance payment
              booking/repurchase.
            </p>
            <p className="!text-white !text-[11px] !text-justify !text-justify">
              <span className="mr-2">A.</span> The price quoted by the Trade
              Mall Prepayment Booking/Repo System is based on the systems
              real-time trading price and may differ slightly from the commodity
              prices in other markets.
              <br />
              Trade Mall cannot guarantee that the above prepayment
              booking//repurchase price is fully consistent with other markets.
            </p>
            <p className="!text-white !text-[11px] !text-justify">
              <span className="mr-2">B.</span> At Trade Mall;, once the
              customers pre-payment booking/repurchase application submitted
              through the online terminal is completed, it cannot be withdrawn
              and the customer must accept the risks associated with such a
              subscription.
            </p>
            <p className="!text-white !text-[11px] !text-justify">
              <span className="mr-2">C.</span> Trade Mall prohibits regional
              service providers and their staff from providing any profit
              guarantee to customers, from engaging in prepaid
              bookings/repurchases on behalf of customers, or from sharing
              profits or risks with customers. Customer should be aware that any
              profit guarantee or commitment that Trade Mall advance
              booking/repurchase does not have a loss, profit share or
              risk-sharing is impossible, unfounded, and incorrect.
            </p>
            <p className="!text-white !text-[11px] !text-justify">
              <span className="mr-2">D.</span> The customers pre-paid booking /
              repurchase application must be based on the customers own
              decision. Trade Mall and regional service providers and employees
              do not provide booking / buyback to the client, nor does it
              constitute any commitment if the client makes a booking / buyback
              decision accordingly.
            </p>
            <p className="!text-white !text-[11px] !text-justify">
              <span className="mr-2">⑤ </span>
              <br />
              RISK-AGREEMENT
              <br />
              Typhoons, floods, fires, wars, disturbances, rule revisions,
              changes or adjustments in government regulatory policies and
              regulatory requirements, and electricity, To ensure that you fully
              understand the relevant provisions and risks of booking /
              repurchase business, customers should be based on their own
              booking experience, booking / repurchase / purchase of
              commodities, read all the contents of the advance booking /
              repurchase notice carefully, and fully understand and agree to all
              the contents, I am willing to take all risks to start or
              participate in Trade Mall. In case of above mentioned condition I
              shall be him-self liable to any financial as well as monitory
              loss. By accepting this I shall be no more eligible to claims any
              statutory legal benefits given to Indian citizen by Law of India.
            </p>
            <p className="!text-white !text-[11px] !text-justify mt-2">
              <span className="mr-2">Note: </span>I have carefully read all
              contents of this app including Privacy Statement, Risk Disclosure
              Agreement and Risk Agreement and I am agreed to continue with my
              own risk.
            </p>
            <p
              className="!text-white text-xl my-2
            "
            >
              Cancellation and refundable Policy
            </p>
            <p className="!text-white !text-[11px] !text-justify mt-2">
              In case of any discrepancy we can cancel any of the orders placed
              by you. A few reasons for cancellation from our end usually
              include limitation of the product in the inventory, error in
              pricing, error in product information etc. We also have the right
              to check out for extra information for the purpose of accepting
              orders in a few cases. We make sure to notify you if in case your
              order is cancelled partially or completely or if in case any extra
              data is required for the purpose of accepting your order.
              <br />
              Once you place the order, such order can be cancelled from your
              end before the shipping is undertaken to the destination. Once the
              request of cancellation for ready for shipping product is received
              by us, we make sure to refund the amount through the same mode of
              payment within 5 working days. Cancellation of the order of Gold
              coin(exchanged by integrals) shall not be accepted as under
              Company’s policies.
              <br />
              We don’t accept Cancellation requests for Smart Buy orders or
              customized jewellery orders. In specific situations when the
              customer wants the money back or wants to exchange it with other
              products, making charges of the product and stone charges, if
              there is any stone on the product shall be deducted from the
              payment and balance will be refunded back to customer account
              within 5 working days.
              <br />
              If in case the amount is deducted from your account and the
              transaction has failed, the same will be refunded back to your
              account within 72 hours.
            </p>
          </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default RiskAndDisClosureAgreement;

const styles = {
  root: { background: "#202020", pb: 6 },
  depositWithdrawIcon: { width: "30px", height: "30px" },
};
