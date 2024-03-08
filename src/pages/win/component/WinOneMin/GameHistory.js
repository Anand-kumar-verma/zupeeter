import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import * as React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { endpoint } from "../../../../services/urls";
const GameHistory = ({ gid }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(1);
  const { isLoading, data: game_history } = useQuery(
    ["gamehistory", gid],
    () => GameHistoryFn(gid),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const GameHistoryFn = async (gid) => {
    try {
      const response = await axios.get(
        `${endpoint.game_history}?limit=20&offset=0&gameid=${gid}`
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  const game_history_data = game_history?.data?.data;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const visibleRows = React.useMemo(
    () =>
      game_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, game_history_data]
  );

  if (isLoading)
    return (
      <div className="!w-full flex justify-center">
        <CircularProgress />
      </div>
    );
  return (
    <Box>
      <Stack direction="row" className="onegotextbox">
        <Typography variant="body1" color="initial">
          <EmojiEventsIcon />{" "}
          {gid === "1"
            ? "One GO Record"
            : gid === "2"
            ? "Three Go Record"
            : "Five Go Record"}
        </Typography>
      </Stack>
      <TableContainer component={Paper}>
        <Table
          sx={{ maxWidth: 575, background: "#3A3A3A", color: "white" }}
          className="wintable"
          aria-label="simple table"
        >
          <TableHead 
          className="!bg-gradient-to-b from-[#F8E19B] to-[#CCA04E] "
          >
            <TableRow>
              <TableCell className="!text-[#8f5206]">Period</TableCell>
              <TableCell className="!text-[#8f5206]">Number</TableCell>
              <TableCell className="!text-[#8f5206]">Big Small</TableCell>
              <TableCell className="!text-[#8f5206]">Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows?.map((i) => {
              return (
                <TableRow>
                  <TableCell className="!text-white">
                  <span
                      className={`
                 !bg-gradient-to-t from-[#FE63FF] to-[#007AFF]
                  transparentColor font-bold text-lg
                  `}
                    >
                      {i?.gamesno}
                    </span>
                    
                  </TableCell>
                  <TableCell className="!text-white">
                    <span
                      className={`
                  ${
                    (i?.number === "0" &&
                      "!bg-gradient-to-t from-red-400 to-violet-400") ||
                    (i?.number === "5" &&
                      "!bg-gradient-to-t from-violet-400 to-green-400") ||
                    ((i?.number === "1" ||
                      i?.number === "3" ||
                      i?.number === "7" ||
                      i?.number === "9" ||
                      i?.number === "10") &&
                      "bg-gradient-to-t from-green-400 to-green-900") ||
                    ((i?.number === "2" ||
                      i?.number === "4" ||
                      i?.number === "6" ||
                      i?.number === "8" ||
                      i?.number === "30") &&
                      "bg-gradient-to-tl from-red-400 to-red-900") ||
                    (i?.number === "50" && "bg-[#3183ee]") ||
                    (i?.number === "40" && "bg-[#f1be24]") ||
                    (i?.number === "20" && "bg-[#eb2feb]")
                  }
                  transparentColor font-bold text-xl
                  `}
                    >
                      {i?.number}
                    </span>
                  </TableCell>
                  <TableCell
                    className={`${
                      Number(i?.number) <= 4
                        ? "!bg-gradient-to-l !from-[#FE63FF] !to-violet-400"
                        : "!bg-gradient-to-l !from-[#FE63FF] !to-green-400"
                    }  transparentColor !font-extrabold text-xl`}
                  >
                    {Number(i?.number) <= 4 ? "SMALL" : "BIG"}
                  </TableCell>
                  <TableCell>
                    {i?.number === "0" || i?.number === "5" ? (
                      <div className="!flex !gap-1">
                        <div
                          className={`!w-[15px] !h-[15px] !rounded-full ${
                            (i?.number === "0" &&
                              "bg-gradient-to-tl from-red-200 to-red-900") ||
                            (i?.number === "5" &&
                              "bg-gradient-to-tl from-green-200 to-green-900")
                          }`}
                        ></div>
                        <div
                          className={`!w-[15px] !h-[15px] !rounded-full ${
                            (i?.number === "0" &&
                              "bg-gradient-to-tl from-violet-200 to-violet-900") ||
                            (i?.number === "5" &&
                              "bg-gradient-to-tl from-violet-200 to-violet-900")
                          }`}
                        ></div>
                      </div>
                    ) : (
                      <>
                        {((i?.number === "1" ||
                          i?.number === "3" ||
                          i?.number === "7" ||
                          i?.number === "9" ||
                          i?.number === "10") && (
                          <div
                            className={`!w-[15px] !h-[15px] !rounded-full ${
                              (i?.number === "1" ||
                                i?.number === "3" ||
                                i?.number === "7" ||
                                i?.number === "9" ||
                                i?.number === "10") &&
                              "bg-gradient-to-tl from-green-200 to-green-900"
                            }`}
                          ></div>
                        )) ||
                          ((i?.number === "2" ||
                            i?.number === "4" ||
                            i?.number === "6" ||
                            i?.number === "8" ||
                            i?.number === "30") && (
                            <div
                              className={`!w-[15px] !h-[15px] !rounded-full ${
                                (i?.number === "2" ||
                                  i?.number === "4" ||
                                  i?.number === "6" ||
                                  i?.number === "8" ||
                                  i?.number === "30") &&
                                "bg-gradient-to-tl from-red-200 to-red-900"
                              }`}
                            ></div>
                          )) || (
                            <div
                              className={`!w-[15px] !h-[15px] !rounded-full ${
                                (i?.number === "50" && "bg-[#68A1ED]") ||
                                (i?.number === "40" && "bg-[#D8B23E]") ||
                                (i?.number === "20" && "bg-[#FE63FF]")
                              }`}
                            ></div>
                          )}
                      </>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <Box className="paginationTable">
          <TablePagination
            className="!bg-gradient-to-r from-[#F8E19B] to-[#CCA04E] !text-white"
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={game_history_data?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </TableContainer>
    </Box>
  );
};

export default GameHistory;