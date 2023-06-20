import React from "react";
import MailIcon from "../assets/mail.png";

const EmailLink = () => {
  const recipient = "st.r.z.rei@gmail.com"; // メールを送る宛先のメールアドレスを設定
  const subject = ""; // メールの件名を設定
  const body = ""; // メールの本文を設定

  const handleClick = () => {
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button target="_blank" rel="noopener" onClick={handleClick}>
      <img src={MailIcon} alt="mailicon" className="w-10" />
    </button>
  );
};

export default EmailLink;
