import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";
import * as React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { zubgback, zubgbackgrad } from "../../../../Shared/color";
import history from '../../../../assets/images/rules.png';
import { endpoint } from "../../../../services/urls";
import CustomCircularProgress from "../../../../Shared/CustomCircularProgress";


const Chart = ({ gid }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const { isLoading, data: game_history } = useQuery(
    ["gamehistory_chart", gid],
    () => GameHistoryFn(gid),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const GameHistoryFn = async (gid) => {
    try {
      const response = await axios.get(
        `${endpoint.game_history}?limit=500&offset=0&gameid=${gid}`
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const game_history_data = game_history?.data?.data;

  const visibleRows = React.useMemo(
    () =>
      game_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, game_history_data]
  );

  return (
    <Box className="chartTable">
      <Stack direction="row" className="onegotextbox">
        <Typography variant="body1" color="initial">
          <Box component='img' src={history} width={25} sx={{ marginRight: '10px' }}></Box>  Statistic(last 100 Periods)
        </Typography>
      </Stack>
      {visibleRows?.map((i, indexi) => {
        return (
          // <Box className="charttableheadingBox !bg-white !bg-opacity-5 !p-3 ">
          <Box sx={{ background: zubgback, padding: '10px', borderBottom: '1px solid white', }}>
            <Stack direction="row" >
              <Box className="charttableheading">
                <Typography variant="body1" color="initial">
                  <span
                    className={`
                 !bg-gradient-to-t from-[#FE63FF] to-[#007AFF]
                  transparentColor font-bold text-lg
                  `}
                  >
                    {i?.gamesno}
                  </span>
                </Typography>
              </Box>
              <Box className="winningNumberBox ">
                <Typography
                  className={`circleNumberbody  !font-bold ${i?.number === "0"
                    ? "!bg-gradient-to-b from-[#e85053] to-[#8c06f2] !text-white"
                    : "!bg-white !text-black"
                    }`}
                >
                  {" "}
                  0
                </Typography>
                <Typography
                  className={`circleNumberbody   !font-bold ${i?.number === "1"
                    ? "!bg-[#4bef98] !text-white"
                    : "!bg-white !text-black"
                    }`}
                >
                  {" "}
                  1
                </Typography>
                <Typography
                  className={`circleNumberbody   !font-bold ${i?.number === "2"
                    ? "!bg-[#f1494c] !text-white"
                    : "!bg-white !text-black"
                    }`}
                >
                  {" "}
                  2
                </Typography>
                <Typography
                  className={`circleNumberbody   !font-bold ${i?.number === "3"
                    ? "!bg-[#46eb93] !text-white"
                    : "!bg-white !text-black"
                    }`}
                >
                  {" "}
                  3
                </Typography>
                <Typography
                  className={`circleNumberbody   !font-bold ${i?.number === "4"
                    ? "!bg-[#ed4b4e] !text-white"
                    : "!bg-white !text-black"
                    }`}
                >
                  {" "}
                  4
                </Typography>
                <Typography
                  className={`circleNumberbody  !font-bold ${i?.number === "5"
                    ? "!bg-gradient-to-b from-[#55f8a1] to-[#8c06f2] !text-white"
                    : "!bg-white !text-black"
                    }`}
                >
                  {" "}
                  5
                </Typography>
                <Typography
                  className={`circleNumberbody  !font-bold ${i?.number === "6"
                    ? "!bg-[#f54b4e] !text-white"
                    : "!bg-white !text-black"
                    }`}
                >
                  {" "}
                  6
                </Typography>
                <Typography
                  className={`circleNumberbody  !font-bold ${i?.number === "7"
                    ? "!bg-[#4af499] !text-white"
                    : "!bg-white !text-black"
                    }`}
                >
                  {" "}
                  7
                </Typography>
                <Typography
                  className={`circleNumberbody   !font-bold ${i?.number === "8"
                    ? "!bg-[#eb494c] !text-white"
                    : "!bg-white !text-black"
                    }`}
                >
                  {" "}
                  8
                </Typography>
                <Typography
                  className={`circleNumberbody   !font-bold ${i?.number === "9"
                    ? "!bg-[#4cf199] !text-white"
                    : "!bg-white !text-black"
                    }`}
                >
                  {" "}
                  9
                </Typography>
                <Typography
                  className={`circleNumberbody ${i?.number <= 4 ? "!bg-[#468ce8] " : "!bg-[#df4be1]"
                    } !rounded-full !h-[20px] !w-[20px] !text-center !text-white `}
                >
                  {i?.number <= 4 ? "S" : "B"}
                </Typography>
              </Box>
            </Stack>
          </Box>
        );
      })}
      <Box className="paginationTable">
        <TablePagination
          sx={{ background: zubgbackgrad, color: 'white', borderRadius: '0px 0px 10px 10px', }}
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={game_history_data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <CustomCircularProgress isLoading={isLoading}/>
    </Box>
  );
};

export default Chart;
