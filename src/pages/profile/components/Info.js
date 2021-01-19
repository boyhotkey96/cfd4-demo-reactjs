import React from "react";

export default function Info() {
  return (
    <div className="tab__content-1 tabct active" style={{ display: "block" }}>
      <form action="/" method="POST">
        <div className="field">
          <label>Họ và Tên</label>
          <input type="text" name="title" defaultValue="Tran Nghia" />
        </div>
        <div className="field">
          <label>Số điện thoại*</label>
          <input type="text" name="phone" defaultValue="0989596813" />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            disabled
            defaultValue="trannghia2018@gmail.com"
          />
        </div>
        <div className="field">
          <label>Facebook</label>
          <input
            type="text"
            name="facebook"
            defaultValue="https://facebook.com"
          />
        </div>
        <div className="field">
          <label>Skype</label>
          <input type="text" name="skype" defaultValue="trannghia2018" />
        </div>
        <div className="btn-register btn-save">LƯU LẠI</div>
      </form>
    </div>
  );
}
