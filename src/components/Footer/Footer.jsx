import React from "react";
import "../Footer/Footer.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="top_header">
          <section>
            <span>
              <LocationOnOutlinedIcon />
            </span>
            <span> Market Street Unit 144, San Francisco </span>
          </section>
          <section>
            <span>
              <PhoneInTalkOutlinedIcon />
            </span>
            <span>+ (996) 05541995 </span>
          </section>
          <section>
            <span>
              <ForwardToInboxOutlinedIcon />
            </span>
            <span>ray-ban.com</span>
          </section>
        </div>
        <span class="border-shape"></span>
        <div class="bottom_content">
          <section>
            <a target="_blank" href="https://ru-ru.facebook.com/">
              <FacebookOutlinedIcon />
            </a>
            <a target="_blank" href="https://web.telegram.org/k/">
              <SendOutlinedIcon />
            </a>
            <a target="_blank" href="https://twitter.com/?lang=ru">
              <RocketLaunchOutlinedIcon />
            </a>
            <a target="_blank" href="https://www.whatsapp.com/">
              <WhatsappOutlinedIcon />
            </a>
          </section>
          <section>
            <Link to="/">Home</Link>
            <Link to="/sunglasses">Sunglasses</Link>
            <Link to="/aboutus">Prescription</Link>
            <Link to="/contacts">Stote locator</Link>
          </section>
        </div>
        <div class="copyright">
          Copyright © 2022 ray-ban - All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
