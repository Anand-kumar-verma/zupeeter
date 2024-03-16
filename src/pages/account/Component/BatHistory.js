import {
  Container,
  Typography,
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
  Select,
  Stack,
  Button,
  TablePagination,
} from "@mui/material";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import Layout from "../../../component/Layout/Layout";
import { NavLink } from "react-router-dom";
import { zubgback, zubgbackgrad, zubgmid } from "../../../Shared/color";
import Lottery from "../../../assets/images/lottery.png";
import colorpr from "../../../assets/images/colorpr (2).png";
import { useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { MyHistoryFn } from "../../../services/apicalling";
import { useQuery } from "react-query";
import { rupees } from "../../../services/urls";
import moment from "moment";

function BatHistorys() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const gid = 1;
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

  return (
    <Layout>
      <Container
        className="no-scrollbar"
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">
            Bet history
          </Typography>
          <Typography variant="body1" color="initial">
            {" "}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mt: "20px",
            background: zubgbackgrad,
            width: "95%",
            marginLeft: "2.5%",
            borderRadius: "10px",
          }}
        >
          <Box
            component={NavLink}
            sx={{
              width: "24%",
              borderRadius: "10px",
              padding: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              src={Lottery}
              sx={{ width: "50px", height: "55px" }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ color: "white", fontSize: "15px", fontWeight: "500" }}
            >
              Lottery
            </Typography>
          </Box>
          <Box
            component={NavLink}
            sx={{
              width: "24%",
              borderRadius: "10px",
              padding: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              src={colorpr}
              sx={{ width: "80px", height: "55px" }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                color: "white",
                fontSize: "15px",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Color Pridiction{" "}
            </Typography>
          </Box>
          <Box
            component={NavLink}
            sx={{
              width: "24%",
              borderRadius: "10px",
              padding: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              src={Lottery}
              sx={{ width: "50px", height: "55px" }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ color: "white", fontSize: "15px", fontWeight: "500" }}
            >
              Lottery
            </Typography>
          </Box>
          <Box
            component={NavLink}
            sx={{
              width: "24%",
              borderRadius: "10px",
              padding: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              src={colorpr}
              sx={{ width: "80px", height: "55px" }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                color: "white",
                fontSize: "15px",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Color Pridiction{" "}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ padding: 2, width: "100%" }}>
          <Box component="form">
            <FormControl variant="outlined" fullWidth>
              <Stack direction="row">
                <OutlinedInput
                  className="search"
                  placeholder="Search "
                  fullWidth
                />
                <Button
                  sx={{
                    width: "70px",
                    height: "55px",
                    borderRadius: "10px",
                    background: zubgmid,
                    color: "white",
                    marginLeft: "20px",
                  }}
                >
                  <SearchIcon />
                </Button>
              </Stack>
            </FormControl>
          </Box>
          <Stack
            sx={{ padding: "20px 0px", justifyContent: "space-between" }}
            direction="row"
          >
            <FormControl
              variant="outlined"
              sx={{ width: "48%" }}
              className="Select"
            >
              <Select
                multiple
                sx={{ "&>div": { background: zubgmid, color: "white" } }}
              ></Select>
            </FormControl>
            <FormControl
              variant="outlined"
              sx={{ width: "48%" }}
              className="Select"
            >
              <Select
                multiple
                sx={{ "&>div": { background: zubgmid, color: "white" } }}
              ></Select>
            </FormControl>
          </Stack>
        </Box>

        <Box className={"!mb-[10%]"}>
          <Stack direction="row" className="onegotextbox">
            <Typography variant="body1" color="initial">
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
                <div
                  style={{
                    background: zubgback,
                    padding: "15px",
                    borderRadius: "10px ",
                    marginBottom: "10px !important",
                  }}
                >
                  <div className="flex justify-between">
                    <Typography
                      variant="body1"
                      sx={{
                        background: zubgmid,
                        color: "white !important",
                        padding: "5px 20px",
                        borderRadius: "5px",
                      }}
                    >
                      Bet
                    </Typography>
                    <p
                      className={`${
                        i?.status === "0"
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
                      {(["10", "1", "3", "7", "9"]?.includes(i?.color) &&
                        "Green") ||
                        (["30", "2", "4", "6", "8"]?.includes(i?.color) &&
                          "Red") ||
                        (i?.color === String(20) && "Voilet") ||
                        (i?.color === String(40) && "Big") ||
                        (i?.color === String(50) && "Small") ||
                        (i?.color === String(0) && "Red Voilet") ||
                        (i?.color === String(5) && "Green Voilet")}
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
              sx={{
                background: zubgbackgrad,
                color: "white",
                borderRadius: "10px",
                marginTop: "10px",
              }}
              rowsPerPageOptions={[2, 5, 10, 15]}
              component="div"
              count={my_history_data?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
          <CustomCircularProgress isLoading={myhistory_loding} />
        </Box>
      </Container>
    </Layout>
  );
}

export default BatHistorys;

const style = {
  header: {
    padding: '15px 8px',
    background: zubgback,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
    '& > a > svg': {
      color: 'white',
      fontSize: '35px'
    }
  },
};
