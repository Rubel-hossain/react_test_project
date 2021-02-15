import React from "react";
import seatchIcon from "./assets/images/search_icon.svg";
import "./assets/scss/search.scss";
export default function Index() {
  return (
    <form className="search-form">
      <div className="form-group">
        <input type="text" className="form-control" required />
        <button type="submit">
          <img src={seatchIcon} alt="search" className="img-fluid" />
        </button>
      </div>
    </form>
  );
}
