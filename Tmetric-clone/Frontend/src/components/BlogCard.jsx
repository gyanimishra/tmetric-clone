import React from "react";
import style from "../styles/Blog.module.css";

const BlogCard = ({ item }) => {
  return (
    <div className={style.blogadpartallprofilecard}>
      <a href={item.heading}>
        <div className={style.blogadpartallprofilecardimg}>
          <img src={item.imgUrl} alt="" />
        </div>
      </a>
      <a href={item.heading}>
        {" "}
        <div className={style.blogadpartallprofilecarddetail}>
          <h6>PRODUCTIVITY HACKS</h6>
          <h1>{item.para}</h1>
          <p>{item.description}</p>
        </div>
      </a>

      <div className={style.blogadpartprofileblogcart}>
        <div className={style.blogadpartprofileimgblogcart}>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h5>{item.name}</h5>
          <p className={style.blogadpartprofiledate}>{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
