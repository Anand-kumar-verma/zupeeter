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
  const [page, setPage] = React.useState(0);
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
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      game_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage]
  );

  if (isLoading) return <CircularProgress />;
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
          <TableHead>
            <TableRow>
              <TableCell className="!text-white">Period</TableCell>
              <TableCell className="!text-white">Number</TableCell>
              <TableCell className="!text-white">Big Small</TableCell>
              <TableCell className="!text-white">Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows?.map((i) => {
              return (
                <TableRow>
                  <TableCell className="!text-white">{i?.gamesno}</TableCell>
                  <TableCell className="!text-white">{i?.number}</TableCell>
                  <TableCell
                    className={`${
                      Number(i?.number) <= 4
                        ? "!text-blue-400"
                        : "!text-green-400"
                    }`}
                  >
                    {Number(i?.number) <= 4 ? "Small" : "Big"}
                  </TableCell>
                  <TableCell>
                    {i?.number === "0" || i?.number === "5" ? (
                      <div className="!flex !gap-1">
                        <div
                          className={`!w-[15px] !h-[15px] !rounded-full ${
                            (i?.number === "0" && "bg-red-400") ||
                            (i?.number === "5" && "bg-green-400")
                          }`}
                        ></div>
                        <div
                          className={`!w-[15px] !h-[15px] !rounded-full ${
                            (i?.number === "0" && "bg-violet-400") ||
                            (i?.number === "5" && "bg-violet-400")
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
                              "bg-green-400"
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
                                "bg-red-400"
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
            className="!bg-[#3A3A3A] !text-white"
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
