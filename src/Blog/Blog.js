import React, { useState, useEffect } from "react";
import "./blog.css";
import { db } from "../Firebase-config/Firebase-config";
import bgImg from "../Images/Blog/bgx.jpg";
import GoToTop from "../GoToTop";
import { collection, onSnapshot } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function Blog() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "Blogs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="main-blog-div">
      <div className="bg-img">
        <img src={bgImg} />
      </div>
      <h2 className="blog-head">Blogs</h2>

      <div className="next-div" >

      <div className="search-box">
        <button className="btn-search"><i className="fas fa-search"></i></button>
          <input 
            className="input-search"
            type="text"
            placeholder="search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>
      </div>



      <div className="blog-cards">
        {users &&
          users
            .filter((item) => {
              if (searchTerm === "") {
                return item;
              } else if (
                item.Title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <div>
                  <Link
                    style={{ color: "BLACK" ,textDecoration: "none"}}
                    to={`/SingleBlog/${item.id}`}
                  >
                    <img src={item.img} alt='blog-img'/>
                    <h2>{item.Title}</h2>
                  </Link>
                </div>
              );
            })}
      </div>

      <div className="next-div" />
      <GoToTop />
    </div>
  );
}
