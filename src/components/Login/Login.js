import React, { useRef, useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import validator from 'validator';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginType, setLoginType] = useState('user');
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = email.trim();
    const passwordValue = password.trim();

    if (emailValue === '') {
      setEmailError('Fill the Mail-ID');
      return;
    }
    if ( passwordValue === '') {
      setPasswordError('Fill the Password');
      return;
    }

    if (emailValue === 'gohul@gmail.com' && passwordValue === 'sample') {
      navigate('/contact');
    } else {
      
      setEmailError('Email or password is incorrect');
      setPasswordError('Email or password is incorrect');
      return
    }

    // The rest of your login logic
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validateEmail = (value) => {
    if (validator.isEmail(value)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
    }
  };

  const validatePassword = (value) => {
    if (value.trim() !== '') {
      setPasswordError('');
    } else {
      setPasswordError('Password is required');
    }
  };

  return (
    <>
      <div className="Back">
        <Header />

        <form className="Border" onSubmit={handleSubmit}>
          <label>
            <h2>{loginType === 'admin' ? 'Admin' : 'User'} Login</h2>
          </label>

          <TextField
            inputProps={{
              sx: {
                color: 'white',
                paddingLeft: '15px',
                fontSize: '20px',
                width: '250px',
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'white',
                textTransform: 'capitalize',
              },
            }}
            sx={{
              border: '3px solid white',
            }}
            id="filled-basic"
            label="Mail-ID"
            variant="filled"
            placeholder="Enter your Email-ID"
            onChange={handleEmailChange}
            ref={emailref}
          />

          <div style={{ color: 'red' }}>{emailError}</div>

          <br />
          <br />

          <FormControl
            sx={{
              border: '3px solid white',
              width: '280px',
            }}
            variant="filled"
          >
            <InputLabel className="setcolo" htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              className="setcolo"
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    className="setcolo"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={handlePasswordChange}
              ref={passwordref}
            />
          </FormControl>

          <div style={{ color: 'red' }}>{passwordError}</div>

          <br />
          <br />

          <Button variant="outlined" type="submit" sx={{ color: 'white', borderColor: 'white' }}>
            Login
          </Button>
          <hr></hr>
          <div>
            <Button
              variant="outlined"
              type="submit"
              sx={{ color: 'white', borderColor: 'white' }}
              onClick={() => setLoginType('user')}
              className="setcolo"
            >
              User Login
            </Button>
            .|.
            <Button
              variant="outlined"
              type="submit"
              sx={{ color: 'white', borderColor: 'white' }}
              onClick={() => setLoginType('admin')}
              className="setcolo"
            >
              {' '}
              Admin Login
            </Button>
          </div>
          <br />
          <NavLink to="/registration" underline="hover" className="setcolo">
            {"Don't have an account"}
          </NavLink>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
