import React from "react";
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row top">
            <div className="footer__left col-md-6">
              <div className="footer__left--des">
                Sáng tạo, tinh tế và phù hợp sẽ khiến <br />
                sản phẩm của bạn trở nên khác biệt.
              </div>
              <div className="footer__left--address">
                <p>Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh</p>
                <p>(+84) 98 9596 913</p>
              </div>
              <div className="footer__left--social">
                <a href="#" className="icon fb" />
                <a href="#" className="icon mail" />
                <a href="#" className="icon skype" />
              </div>
            </div>
            <div className="footer__right col-md-6">
              <nav>
                <ul>
                  <li>
                    <Link to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to="/thong-tin-ca-nhan/khoa-hoc">Khoá học của tôi</Link>
                  </li>
                  <li>
                    <Link to="#">Thanh toán</Link>
                  </li>
                  <li>
                    <Link to="#">Điều khoản</Link>
                  </li>
                </ul>
              </nav>
              <a href="#" className="back-top">
                {" "}
                <span /> Cuộn lên
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="copy-right">2020 Creative Front-End Dev</div>
            <div className="design">
              Được thiết kế và lập trình bởi CFD Team
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
