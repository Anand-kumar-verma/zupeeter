import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  Box,
  CircularProgress,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import moment from "moment";
import * as React from "react";
import { endpoint, rupees } from "../../../../services/urls";
import { useQuery } from "react-query";
import axios from "axios";
import toast from "react-hot-toast";

const MyHistory = ({ gid }) => {
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { isLoading: myhistory_loding, data: my_history } = useQuery(
    ["myhistory", gid],
    () => MyHistoryFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const MyHistoryFn = async () => {
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

  const my_history_data = my_history?.data?.data?.filter(
    (i) => i?.gameid === Number(gid)
  );

  const visibleRows = React.useMemo(
    () =>
      my_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage]
  );

  if (myhistory_loding) return <CircularProgress />;
  return (
    <Box>
      <Stack direction="row" className="onegotextbox">
        <Typography variant="body1" color="initial">
          <EmojiEventsIcon />
          {gid === "1"
            ? " My One GO Record"
            : gid === "2"
            ? " My Three GO Record"
            : " My Five GO Record"}
        </Typography>
      </Stack>
      <div className="flex flex-col gap-1">
        {visibleRows?.map((i) => {
          return (
            <div className="!bg-white !bg-opacity-5 p-5 rounded-lg cursor-pointer">
              <div className="flex justify-between">
                <p
                  style={{
                    background:
                      "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
                  }}
                  className="px-[10%] rounded-full"
                >
                  Bet
                </p>
                <p
                  className={`${
                    i?.status === 0
                      ? "!text-red-400"
                      : i?.status === "1"
                      ? "!text-green-400"
                      : "!text-blue-400"
                  }`}
                >
                  {i?.status === "0"
                    ? "Pending"
                    : i?.status === "1"
                    ? "Win"
                    : "Loss"}
                </p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="!text-white !text-[12px]">Balance</p>
                <p className="!text-white !text-[12px]">
                  {rupees} {i?.amount}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="!text-white !text-[12px]">Bet Type</p>
                <p className={`!text-white !text-[12px]`}>
                  {(i?.color === String(10) && "Green") ||
                    (i?.color === String(30) && "Red") ||
                    (i?.color === String(20) && "Voilet") ||
                    (i?.color === String(40) && "Big") ||
                    (i?.color === String(50) && "Small") ||
                    i?.color}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="!text-white !text-[12px]">Type</p>
                <p className="!text-white !text-[12px]">
                  {i?.gameid === "1"
                    ? "1 min"
                    : i?.gameid === "2"
                    ? "3 min"
                    : "5 min"}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="!text-white !text-[12px]">Win Amount</p>
                <p className="!text-white !text-[12px]">
                  {rupees} {i?.win || 0}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="!text-white !text-[12px]">Time</p>
                <p className="!text-white !text-[12px]">
                  {rupees} {moment(i?.datetime)?.format("DD-MM-YYYY")}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="!text-white !text-[12px]">Order number</p>
                <p className="!text-white !text-[12px]">{i?.gamesno}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Box className="paginationTable">
        <TablePagination
          className="!bg-[#3A3A3A] !text-white"
          rowsPerPageOptions={[2,5, 10, 15]}
          component="div"
          count={my_history_data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default MyHistory;
