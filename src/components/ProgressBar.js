import React from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <div>
        <div class="container">
            <ul class="progressbar">
                <li class="active">basic info</li>
                <li>location</li>
                <li>supplements</li>
                <li>review</li>
            </ul>  
        </div>
    </div>
  );
};

export default ProgressBar;
