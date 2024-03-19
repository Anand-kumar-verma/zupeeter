

import {
  Box,
  Stack,
  TablePagination,
  Typography
} from "@mui/material";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import CustomCircularProgress from "../../../../Shared/CustomCircularProgress";
import { zubgback, zubgbackgrad, zubgmid } from "../../../../Shared/color";
import history from '../../../../assets/images/rules.png';
import { MyHistoryFn } from "../../../../services/apicalling";
import { rupees } from "../../../../services/urls";


const MyHistory = ({ gid }) => {
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

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

  const my_history_data = my_history?.data?.data?.filter(
    (i) => i?.gameid === String(gid)
  );

  const visibleRows = React.useMemo(
    () =>
      my_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, my_history_data]
  );

console.log(visibleRows,"This is visible rows");

  return (
    <Box>
      <Stack direction="row" className="onegotextbox">
        <Typography variant="body1" color="initial">
          <Box component='img' src={history} width={25} sx={{ marginRight: '10px' }}></Box>
          {gid === "1"
            ? " My One GO Record"
            : gid === "2"
              ? " My Three GO Record"
              : " My Five GO Record"}
        </Typography>
      </Stack>
      <div className="flex flex-col gap-3">
        {visibleRows?.map((i) => {
          return (
            <div style={{ background: zubgback, padding: '15px', borderRadius: '10px ', marginBottom: '10px !important' }}>
              <div className="flex justify-between">
                <Typography variant="body1" sx={{ background: zubgmid, color: 'white !important', padding: '5px 20px', borderRadius: '5px' }}>Bet</Typography>
                <p
                  className={`${i?.status === "0"
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
                  {(["10","1","3","7","9"]?.includes(i?.color) && "Green") ||
                    (["30","2","4","6","8"]?.includes(i?.color) && "Red") ||
                    (i?.color === String(20) && "Voilet") ||
                    (i?.color === String(40) && "Big") ||
                    (i?.color === String(50) && "Small") ||
                    (i?.color === String(0) && "Red Voilet") ||
                    (i?.color === String(5) && "Green Voilet")
                    }
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
                  {moment(i?.datetime)?.format("DD-MM-YYYY")}
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
          sx={{ background: zubgbackgrad, color: 'white', borderRadius: '10px', marginTop: '10px', }}
          rowsPerPageOptions={[2, 5, 10, 15]}
          component="div"
          count={my_history_data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <CustomCircularProgress isLoading={myhistory_loding}/>
    </Box>
  );
};

export default MyHistory;

