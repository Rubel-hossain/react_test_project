import React, { useState, useEffect } from "react";
import dribleImg from "./assets/images/dribble.png";
import clockIcon from "./assets/images/clock.svg";
import shareIcon from "./assets/images/Share_default.svg";
import viewsIcon from "./assets/images/Views.svg";
import bookmarkIcon from "./assets/images/bookmark_default.svg";
import heartIcon from "./assets/images/love_default.svg";
import "./assets/scss/posts.scss";
import { postsData } from "../../data/posts";
export default function Index() {
  const [postsInfo, setPostsInfo] = useState([]);
  useEffect(() => {
    setPostsInfo(postsData);
  }, []);

  return (
    <section className="latest-posts section-ptb">
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-md-12">
            <div className="section pb-5 mb-4">
              <h2>Latest Article</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {postsInfo.map((post) => (
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0" key={post.id}>
              <article>
                <div className="single-post">
                  <div className="post-thumb">
                    {post.image && (
                      <a href="#">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="img-fluid w-100"
                        />
                      </a>
                    )}
                  </div>
                  <div className="post-content p-3 shadow-sm">
                    <div className="tags-meta">
                      <a href="#" className="tag-link">
                        TECHNOLOGY
                      </a>
                      <div className="share-btn">
                        <a href="#">
                          <img
                            src={dribleImg}
                            alt="dribleImg"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="post-title">
                      <a href="#">
                        Wednesday Holmes: Art as an Act of Survival
                      </a>
                    </h3>
                    <div className="author-name">
                      By <a href="#"> Jonathan Doe</a>
                    </div>
                    <div className="post-meta">
                      <span>
                        <img
                          src={clockIcon}
                          alt="clock"
                          className="img-fluid"
                        />
                        27 mins ago
                      </span>
                      <span>3 mins read</span>
                    </div>
                    <div className="post-hover">
                      <div className="user-reaction">
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                src={viewsIcon}
                                alt="viewsIcon"
                                className="img-fluid"
                              />
                              <span>512</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src={heartIcon}
                                alt="heartIcon"
                                className="img-fluid"
                              />
                              <span>113</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="user-reaction-2">
                        <ul>
                          <li>
                            <a href="#">
                              <img
                                src={bookmarkIcon}
                                alt="bookmarkIcon"
                                className="img-fluid"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                src={shareIcon}
                                alt="shareIcon"
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
