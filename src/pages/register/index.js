import React, { useState } from "react";

const style = {
    inputError: {color:'red',fontSize:14}
}

export default function Register() {
  let [form, setForm] = useState({
    username: "",
    phone: "",
    email: "",
    facebook: "",
    payment: "chuyển khoản",
    note: "",
  });

  let [error, setError] = useState({});

  function inputChange(e) {
    // let val = e.target.value;
    // let name = e.target.getAttribute('name');

    form[e.target.getAttribute("name")] = e.target.value;
    setForm({ ...form });

    //   let {username, phone, ...rest} = form;
    //   console.log(rest);
  }

  function btnSubmit() {
    let error = {};
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexUrlFacebook = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
    let regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    if (!form.username) {
        error['username'] = 'Username không được để trống';
    }
    if (!form.phone) {
        error['phone'] = 'Số điện thoại không được để trống';
    } else if (!regexPhone.test(form.phone)) {
        error['phone'] = 'Số điện thoại không chính xác';
    }
    if (!form.email) {
        error['email'] = 'Email không được để trống';
    } else if (!regexEmail.test(form.email)) {
        error['email'] = 'Email không đúng định dạng';
    }
    if (!form.facebook) {
        error['facebook'] = 'Facebook không được để trống';
    } else if (!regexUrlFacebook.test(form.facebook)) {
        error['facebook'] = 'Facebook không đúng định dạng';
    }

    setError(error);
    if (Object.keys(error).length === 0) {
        alert('Thành công')
    }
  }

  return (
    <>
      <main>
        <section className="section register">
          <div className="container">
            <div className="course">
              <h2 className="title">đăng ký</h2>
              <h2 className="type">thực chiến front-end căn bản </h2>
            </div>
            <div className="register__wrap">
              <form action="/" method="POST" className="register__form">
                <div className="field">
                  <label>
                    Họ và Tên<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Họ và tên bạn"
                    onChange={inputChange}
                    value={form.username}
                  />
                </div>
                {error.username && <p className="error" style={style.inputError}>{error.username}</p>}
                <div className="field">
                  <label>
                    Số điện thoại<span>*</span>
                  </label>
                  <input 
                    type="text"
                    name="phone"
                    placeholder="Số điện thoại"
                    onChange={inputChange}
                    value={form.phone}
                  />
                </div>
                {error.phone && <p className="error" style={style.inputError}>{error.phone}</p>}
                <div className="field">
                  <label>
                    Email<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email của bạn"
                    onChange={inputChange}
                    value={form.email}
                  />
                </div>
                {error.email && <p className="error" style={style.inputError}>{error.email}</p>}
                <div className="field">
                  <label>
                    URL Facebook<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="facebook"
                    placeholder="https://facebook.com"
                    onChange={inputChange}
                    value={form.facebook}
                  />
                </div>
                {error.facebook && <p className="error" style={style.inputError}>{error.facebook}</p>}
                <div className="field">
                  <label>Hình thức thanh toán</label>
                  <input
                    type="text"
                    name="payment"
                    placeholder="Chuyển khoản"
                    onChange={inputChange}
                    value={form.payment}
                  />
                </div>
                <div className="field">
                  <label>Ý kiến cá nhân</label>
                  <input
                    type="text"
                    name="note"
                    placeholder="Định hướng và mong muốn của bạn"
                    onChange={inputChange}
                    value={form.note}
                  />
                </div>
                <div
                  className="btn-register btn-save"
                  style={{ backgroundColor: "#00afab" }}
                  onClick={btnSubmit}
                >
                  ĐĂNG KÝ
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
