import React from 'react'
import '../Terms&Condition/Terms_condition.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Terms_condition(){
  return (
    <div class="terms_back">
      <Header/>
      <div class="terms_border">
        <h1>Terms & Condition</h1>
        <div class="terms_s">
          <h2>The detailed terms and Condition of usage of internet banking facilities.</h2>
          <ul class="terms_ul">
            <li>Definitions</li>
            <li>Applicability of Terms</li>
            <li>Internet Banking</li>
            <li>Unauthorised Access</li>
            <li>Internet Banking Access</li>
            <li>Internet Banking Password</li>
            <li>Joint Account</li>
            <li>Charges</li>
            <li>Maintenance of Sufficient Balance</li>
            <li>Funds Transfer Through Internet Banking</li>
            <li>Transactions in Depository Account through Internet Banking</li>
            <li>Bill Payments</li>
            <li>Application for Facilities through Internet Banking</li>
            <li>Authority to DGL Ltd. for Internet Banking</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Terms_condition