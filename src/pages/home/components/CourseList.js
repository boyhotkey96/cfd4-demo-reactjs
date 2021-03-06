import { directive } from "@babel/types";
import React from "react";

import Course from "../../../components/Course.js";

export default function CourseList() {
    function layThongTin(num) {
        alert(num * 2);
    }
  return (
    <>
      <section className="section online">
        <div className="container">
          <div className="introduce">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </div>
          <div className="course">
            <h2 className="title">Khoá học</h2>
            <h2 className="type">online</h2>
            {/* <button onClick={layThongTin}>onClick</button> */}
            <button onClick={() => layThongTin(2)}>onClick</button>
            <div className="row">
              <Course
                title="Front-end căn bản"
                des="One of the best corporate fashion brands in Sydney"
                thumbnail="/img/img-1.jpg"
              />
              <Course
                title="Reactjs"
                des="One of the best corporate fashion brands in Sydney"
                thumbnail="/img/img-2.jpg"
              />
              <Course
                title="PHP"
                des="One of the best corporate fashion brands in Sydney"
                thumbnail="/img/img-3.jpg"
              />
            </div>
            <div className="row">
              <Course
                title="Nodejs"
                des="One of the best corporate fashion brands in Sydney"
                thumbnail="/img/img-4.jpg"
              />
              <Course
                title="React Native"
                des="One of the best corporate fashion brands in Sydney"
                thumbnail="/img/img-5.jpg"
              />
              <Course
                title="Java"
                des="One of the best corporate fashion brands in Sydney"
                thumbnail="/img/img-6.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section offline">
        <div className="container">
          <div className="course">
            <h2 className="title">Khoá học</h2>
            <h2 className="type">offline</h2>
            <div className="row">
              <div className="col-md-4 course__item">
                <a className="course__item-img">
                  <img src="img/img-7.jpg" alt="alter" />
                </a>
                <div className="course__item-info">
                  <div className="course__item-wrap">
                    <h2 className="course__item-title">Front-end căn bản</h2>
                    <p className="course__item-des">
                      One of the best corporate fashion brands in Sydney
                    </p>
                  </div>
                  <div className="course__item-details">
                    <div className="teacher">
                      <div className="avatar">
                        <img src="img/avt.png" alt="" />
                      </div>
                      <div className="name">Trần Nghĩa</div>
                    </div>
                    <a href="#" className="btn btn-register">
                      Đăng ký
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 course__item">
                <a className="course__item-img">
                  <img src="img/img-8.jpg" alt="alter" />
                </a>
                <div className="course__item-info">
                  <div className="course__item-wrap">
                    <h2 className="course__item-title">Front-end nâng cao</h2>
                    <p className="course__item-des">
                      One of the best corporate fashion brands in Sydney
                    </p>
                  </div>
                  <div className="course__item-details">
                    <div className="teacher">
                      <div className="avatar">
                        <img src="img/avt.png" alt="" />
                      </div>
                      <div className="name">Trần Nghĩa</div>
                    </div>
                    <a href="#" className="btn btn-register">
                      Đăng ký
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 course__item">
                <a className="course__item-img">
                  <img src="img/img-9.jpg" alt="alter" />
                </a>
                <div className="course__item-info">
                  <div className="course__item-wrap">
                    <h2 className="course__item-title">Laravel framework</h2>
                    <p className="course__item-des">
                      One of the best corporate fashion brands in Sydney
                    </p>
                  </div>
                  <div className="course__item-details">
                    <div className="teacher">
                      <div className="avatar">
                        <img src="img/avt.png" alt="" />
                      </div>
                      <div className="name">Trần Nghĩa</div>
                    </div>
                    <a href="#" className="btn btn-register">
                      Đăng ký
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
