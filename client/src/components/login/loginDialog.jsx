import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

import { authenticateSignup } from "../../service/api";

const StyledBox = styled(Box)`
  height: auto;
  width: 90vh;
  display: flex;
`;

const StyledLeftBox = styled(Box)`
  background-color: rgb(39, 111, 255);
  height: auto;

  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px;

  color: white;
`;

const StyledImg = styled.img`
  width: 80%;
  height: auto;
  padding-bottom: 40px;
`;
const StyledRightBox = styled(Box)`
  max-width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  cursor: pointer;
  padding: 10px 35px;
  flex: 1;
  & > div,
  & > botton,
  & > p {
    margin-top: 20px;
  }
  text-align: center;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #ff6c23;
  color: white;
  height: 48px;
  border-radius: 2px;
  &:hover {
    background-color: #fc8d55;
  }
`;

const OtpButton = styled(Button)`
  text-transform: none;
  background: white;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  margin-bottom: 10px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialVlaues = {
  login: {
    view: "login",
    heading: "Login",
    subheading: " Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subheading: "Sign up with your moblie number to get started",
  },
};

const LoginDialog = ({ open, setOpen }) => {
  const handelClose = () => {
    setOpen(false);
    toggleAccount(accountInitialVlaues.login);
  };

  const initialSignUpValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phone: "",
  };
  const [account, toggleAccount] = useState(accountInitialVlaues.login);
  const [signUp, setSignUp] = useState(initialSignUpValues);

  const toggleSignup = () => {
    toggleAccount(accountInitialVlaues.signup);
  };

  const inputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const signUpUser = async () => {
    let response = await authenticateSignup(signUp);
  };
  return (
    <Dialog open={open} onClose={handelClose}>
      <StyledBox>
        <StyledLeftBox>
          <StyledText>
            <Typography style={{ fontSize: "20px", paddingBottom: "10px" }}>
              {account.heading}
            </Typography>
            <Typography style={{ fontSize: "15px" }}>
              {account.subheading}
            </Typography>
          </StyledText>
          <StyledImg
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
            alt="img"
          ></StyledImg>
        </StyledLeftBox>

        {account.view === "login" ? (
          <StyledRightBox>
            <TextField
              variant="standard"
              label="Enter Email/Mobile number"
            ></TextField>
            <TextField variant="standard" label="Enter Password"></TextField>
            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Text>
            <LoginButton>Login</LoginButton>
            <Typography>OR</Typography>
            <OtpButton>Request OTP</OtpButton>
            <CreateAccount onClick={() => toggleSignup()}>
              New to Flipkart? Create an account
            </CreateAccount>
          </StyledRightBox>
        ) : (
          <StyledRightBox>
            <TextField
              variant="standard"
              onChange={(e) => inputChange(e)}
              name="firstName"
              label="Enter Firstname"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => inputChange(e)}
              name="lastName"
              label="Enter Lastname"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => inputChange(e)}
              name="userName"
              label="Enter Username"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => inputChange(e)}
              name="email"
              label="Enter Email"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => inputChange(e)}
              name="password"
              label="Enter Password"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => inputChange(e)}
              name="phone"
              label="Enter Phone"
            ></TextField>
            <LoginButton
              onClick={() => signUpUser()}
              style={{ marginTop: "10px" }}
            >
              Continue
            </LoginButton>
          </StyledRightBox>
        )}
      </StyledBox>
    </Dialog>
  );
};

export default LoginDialog;
