import React from "react";
import style from "../styles/Blog.module.css";
import BlogCard from "../components/BlogCard";
import Data from "../Data.json";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
const Blog = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className={style.blognavbar}>
          <img
            src="https://blog.tmetric.com/content/images/size/w2000/2022/01/MicrosoftTeams-image--1-.png"
            alt=""
          />
        </div>
        {/* navbar completed /////////////////////////////////*/}

        <div className={style.blogadpart}>
          <div className={style.blogadpartimg}>
            <img
              src="https://blog.tmetric.com/content/images/size/w1000/2022/06/productivity-banner-2.png"
              alt=""
            />
          </div>

          <div>
            <div className={style.blogadpartdetail}>
              <h6>PRODUCTIVITY HACKS</h6>
              <h1>
                If You Want To Be <br /> Productive, Beware Of <br /> These 5
                Distractions
              </h1>

              <p>
                Distractions in the digital world spring up like <br />
                mushrooms after the rain. The biggest is having
                <br /> too many meetings. And there are four more that <br />
                block a productive and balanced life. If you know <br />
                them, you are better equipped for dealing with them.
              </p>
            </div>

            <div className={style.blogadpartprofile}>
              <div className={style.blogadpartprofileimg}>
                <img
                  src="https://blog.tmetric.com/content/images/size/w100/2021/11/-----1.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Alla Chernets</h5>
              </div>
            </div>
          </div>
        </div>

        {/* blog deatail ends///////////////////////////////////// */}

        <div className={style.blogadpartallprofilemap}>
          {Data.blog.map((item) => {
            return <BlogCard key={item.id} item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;