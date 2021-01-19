import React from "react";
import Menu from "./components/Menu.js";
import Info from "./components/Info.js";
import Course from "./components/Course.js";
import Project from "./components/Project.js";
import Payment from "./components/Payment.js";
import Page404 from '../page404'
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function Profile(props) {
    let { path, url } = useRouteMatch();
    // console.log(path);
    return (
        <main>
            <section className="section top-info">
                <div className="information">
                    <div className="avatar">
                        <img src="img/avt1.jpg" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                    <p className="member">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <Menu />
                        <div className="tab__content">
                            <Switch>
                                <Route path={`${path}/khoa-hoc`} exact component={Course} />
                                <Route path={`${path}/du-an`} exact component={Project} />
                                <Route path={`${path}/lich-su-thanh-toan`} exact component={Payment} />
                                <Route path="*" component={Info} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
