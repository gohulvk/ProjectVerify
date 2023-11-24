import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import SavingsIcon from '@mui/icons-material/Savings';
import ReceiptIcon from '@mui/icons-material/Receipt';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import Footer from '../Footer/Footer';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));
function Home () 
{
  return (
    <>
    <div className='BaCk'>
      <Header/>
      <div class="l2">
        <div class="l1">
          <p>
          </p>
        </div>
        <div class="l3">
        <div >
          <Stack direction="row" spacing={1}>
            <DemoPaper class="demopaper" square={false}><br></br><CreditCardIcon /><br></br><p>Credit card portal</p></DemoPaper>
            <DemoPaper class="demopaper" square={false}><br></br><CardGiftcardIcon /><br></br><p>Prepaid card portal</p></DemoPaper>
            <DemoPaper class="demopaper" square={false}><br></br><CreditCardIcon /><br></br><p>Debit card portal</p></DemoPaper>
          </Stack>
        </div>
        <br/>
        <div>
        <Stack direction="row" spacing={1}>
            <DemoPaper class="demopaper" square={false}><br></br><SavingsIcon /><br></br><p>Fixed deposit</p></DemoPaper>
            <DemoPaper class="demopaper" square={false}><br></br><ReceiptIcon /><br></br><p>Receipt</p></DemoPaper>
            <DemoPaper class="demopaper" square={false}><br></br><OnlinePredictionIcon /><br></br><p>Net Banking Login</p></DemoPaper>
          </Stack>
        </div>
        </div>
      </div>
      <br/>
      <div class="uselink">
        <center>
          <h1>Other Useful Links</h1>
        </center>


      </div>

    </div>
      <Footer/>
      </>
  )
}

export default Home