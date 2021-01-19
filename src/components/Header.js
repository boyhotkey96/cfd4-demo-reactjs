import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
    let history = useHistory();

    function delayLink(e) {
        e.preventDefault();
        document.querySelector('.pageLoading').classList.add('active');
        setTimeout(() => {
            history.push(e.target.href?.replace(window.location.origin, '') || '/');
        }, 100);
        setTimeout(() => {
        document.querySelector('.pageLoading').classList.remove('active');
        }, 800);
    }

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="menu">
            <div className="burger">
              <span />
              <span />
              <span />
            </div>
            <div className="text">Menu</div>
          </div>
          <Link onClick={delayLink} to="/" className="logo">
            <img src="/img/logo.svg" alt="black" />
          </Link>
          <div className="user">
            <a href="#" className="btn btn-signin">
              Đăng nhập
            </a>
            <a href="#" className="btn btn-register">
              Đăng ký
            </a>
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Trang chủ</a>
          </li>
          <li>
            <a href="#">Khóa học</a>
          </li>
          <li>
            <a href="#">CFD Team</a>
          </li>
          <li>
            <a href="#">Hỏi đáp</a>
          </li>
          <li>
            <a href="#">Hợp tác</a>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav"></div>
    </>
  );
}
