import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import previous from "../../../assets/images/previous.png";
import { endpoint } from "../../../services/urls";
function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [show_confirm_password, set_show_confirm_password] =
    React.useState(false);
  const [agree, setAgree] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handle_confirm_ClickShowPassword = () =>
    set_show_confirm_password(!show_confirm_password);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const initialValue = {
    email: "",
    mobile: "",
    password: "",
    confirmed_password: "",
    referral_code: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    onSubmit: () => {
     
      if (
        !fk.values.email ||
        !fk.values.mobile ||
        !fk.values.password ||
        !fk.values.confirmed_password ||
        !fk.values.referral_code
      )
        return toast("Please fill details!");
      else if (!fk.values.password !== !fk.values.confirmed_password)
        return toast("Password and confirm password should be same.");
      else if (String(fk.values.mobile)?.length > 10)
        return toast("Mobile no should be 10 digit only.");
       else if(!agree) return toast("Please confirm privacy agreement");
      const reqbody = {
        email: fk.values.email,
        mobile: String(fk.values.mobile) || "",
        password: fk.values.password,
        confirmed_password: fk.values.confirmed_password,
        referral_code: fk.values.referral_code,
      };

      signupFunction(reqbody);
    },
  });

  const signupFunction = async (reqbody) => {
    const fd = new FormData();
    fd.append("email", reqbody.email);
    fd.append("mobile", reqbody.mobile);
    fd.append("password", reqbody.password);
    fd.append("confirmed_password", reqbody.confirmed_password);
    fd.append("referral_code", reqbody.referral_code);

    try {
      const response = await axios.post(endpoint.signup, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          // Add any other headers you may need, such as authorization
        },
      });

      toast.success(response?.data?.msg);
      console.log(response);
      // if (response?.data?.error === "200") {
      //   localStorage.setItem("logindata", JSON.stringify(response?.data));
      //   navigate("/dashboard");
      // }
    } catch (e) {
      toast.error(e?.message);
      console.error(e);
    }
  };
  return (
    <Container sx={style.root}>
      <Box
        className="header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component={NavLink} to="javascript:history.back();" sx={style.col}>
          <Box component="img" src={previous} alt="back" sx={style.img} />
        </Box>
        <Box sx={style.col}>
          <Box component="img" src={logo} alt="logo" sx={style.logo} />
        </Box>
        <Box sx={style.col}></Box>
        <Box className="register_header" sx={style.registerHeader}>
          <Typography variant="h3" color="initial">
            Register
          </Typography>
          <Typography variant="h6" color="initial">
            Please register by phone number or email
          </Typography>
        </Box>
      </Box>

      <Box
        component="form"
        sx={{
          background: "#EFEFEF",
          width: "100%",
          padding: 3,
          transition: "0.3s",
        }}
      >
        <Box mt={2}>
          <FormControl fullWidth>
            <Stack direction="row" className="loginlabel">
              <ConfirmationNumberIcon sx={{ fontSize: "30px", mr: 1 }} />
              <Typography variant="h3">Referral Code</Typography>
            </Stack>
            <TextField
              id="fullWidth"
              placeholder="Enter Referral Code"
              className="loginfieldsres"
              name="referral_code"
              value={fk.values.referral_code}
              onChange={fk.handleChange}
            />
          </FormControl>
        </Box>

        <Box mt={2}>
          <FormControl fullWidth>
            <Stack direction="row" className="loginlabel">
              <PhoneIphoneIcon sx={{ fontSize: "30px", mr: 1 }} />
              <Typography variant="h3">Mobile</Typography>
            </Stack>
            <TextField
              id="fullWidth"
              placeholder="Enter Mobile"
              className="loginfieldsres"
              name="mobile"
              type="number"
              value={fk.values.mobile}
              onChange={fk.handleChange}
            />
          </FormControl>
        </Box>

        <Box mt={2}>
          <FormControl fullWidth>
            <Stack direction="row" className="loginlabel">
              <PersonOutlineIcon sx={{ fontSize: "30px", mr: 1 }} />
              <Typography variant="h3">E-mail</Typography>
            </Stack>
            <TextField
              id="fullWidth"
              type="email"
              placeholder="Enter email"
              className="loginfieldsres"
              name="email"
              value={fk.values.email}
              onChange={fk.handleChange}
            />
          </FormControl>
        </Box>

        <Box mt={2}>
          <FormControl fullWidth>
            <Stack direction="row" className="loginlabel">
              <LockIcon sx={{ fontSize: "30px", mr: 1 }} />
              <Typography variant="h3">Set password</Typography>
            </Stack>
            <OutlinedInput
              placeholder="Enter password"
              name="password"
              value={fk.values.password}
              onChange={fk.handleChange}
              className="loginfieldspass"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box mt={3}>
          <FormControl fullWidth>
            <Stack direction="row" className="loginlabel">
              <LockIcon sx={{ fontSize: "30px", mr: 1 }} />
              <Typography variant="h3">Confirm password</Typography>
            </Stack>
            <OutlinedInput
              className="loginfieldsres"
              name="confirmed_password"
              value={fk.values.confirmed_password}
              onChange={fk.handleChange}
              placeholder="Enter confirm password"
              type={show_confirm_password ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handle_confirm_ClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {show_confirm_password ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box mt={1}>
          <FormControl fullWidth>
            <FormControlLabel
              onClick={() => setAgree(!agree)}
              required
              control={<Checkbox checked={agree} />}
              label="I have read and agree 【Privacy Agreement】"
            />
          </FormControl>
        </Box>
        <Stack className="loginbtnbox" mt={2}>
          <Box>
            <Button
              component={NavLink}
              className="btnLogin"
              onClick={fk.handleSubmit}
            >
              Register
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              component={NavLink}
              to="/"
              className="btnregister"
              mt={2}
            >
              Already have an account Log in
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default Register;

const style = {
  root: {},
  col: { width: "33%" },
  img: { width: "50px", height: "50px", padding: "10px" },
  logo: { width: "160px", padding: "5px" },
  formControl: { float: "right", marginRight: "5px", marginTop: "5px" },
  select: { "& > .MuiSelect-select": { width: "50px", padding: "14px 38px" } },
  registerHeader: { marginTop: "20px" },
};
