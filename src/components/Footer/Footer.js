import React from 'react'
import '../../components/Footer/Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div class ="footer_Back">
       <div class="footer-a1">
        <div class="footer_s1">
          <h2>DGL Banking</h2>
          <h4>All India Toll Free No:1800-425-wxyz</h4>
          <h3><u>Latest News</u></h3>
          <div className="footer_box">
              <p className="footer_text"><h4>Kind attention to students: Students from various colleges can apply Scholarship for their higher studies/down load application from Disclosure- CSR-Application for Scholarship.</h4></p>
          </div>

        </div>

        <div class="footer_s2">
        <h3><u>Links</u></h3>
        
        <NavLink to='/legaldis' underline="hover" >{"Legal Disclaimer"}</NavLink><br/><br/>
        <NavLink to='/terms' underline="hover" >{"Terms&Condition"}</NavLink><br/><br/>
        <NavLink to='/contact' underline="hover" >{"Contact us"}</NavLink><br/><br/>

        </div>
        
        <div class="footer_s3">
          <h3><u>Disclaimer</u></h3>
          <h4>Our Bank does not ask for the details of your account / PIN / Passwords. Therefore any one pretending to be asking you for information from the bank/technical team may be fraudulent entities, so please beware. You should know how to operate net transactions and if you are not familiar you may refrain from doing so. You may seek bank's guidance in this regard. Bank is NOT responsible for online transactions going wrong. We shall also not be responsible for wrong transactions and wanton disclosure of details by you. Viewing option and transaction option on the net are different. You may exercise your option diligently.</h4>
        </div>
       </div>
       <br/>
       <div class="footer_a2">
        <center><h3>CopyRight© 2023,All Right Reversed</h3></center>
        </div>
     </div>
  )
}

export default Footer