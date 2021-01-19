import React from "react";
import { Link, NavLink, useLocation, useRouteMatch } from 'react-router-dom'

export default function Menu() {
    // let url = useLocation();
    let { path, url } = useRouteMatch();
    // console.log(url);
    return (
        <div className="tab__title">
            <NavLink to={url} exact className="js-tab-active">Thông tin tài khoản</NavLink>
            <NavLink to={`${url}/khoa-hoc`}>Khoá học của tôi</NavLink>
            <NavLink to={`${url}/du-an`}>Dự án đã làm</NavLink>
            <NavLink to={`${url}/lich-su-thanh-toan`}>Lịch sử thanh toán</NavLink>
        </div>
    );
}
