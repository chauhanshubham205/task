import React from "react";

const Section = ({ jobTitle }) => {
  return (
    <>
      <div className="container2">
        <div className="topBlock">
          <div className="block1">
            <div className="box">
              <p>Lorem ipsum dolor sit amet. Lorem, ipsiiii</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="box">
              <p>Lorem ipsum dolor sit amet. Lorem, ipsiiii</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="box">
              <p>Lorem ipsum dolor sit amet. Lorem, ipsiiii</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="box">
              <p>Lorem ipsum dolor sit amet. Lorem, ipsiiii</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="block2">
            <h3>Alert</h3>
            <h3>Company Name</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.lorem10
            </p>
            <h3>Company Name</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.lorem10
            </p>
          </div>
          <div className="block3">
            <h3>Resume Analysis</h3>
            <hr />
          </div>
          <div className="block4">
            <h3>Jobs</h3>
            <hr />
          </div>
        </div>
        <div className="jobList">
          <div className="jobApi">
            {jobTitle.map((ele) => {
              return (
                <div className="api">
                  <img src={ele.img} alt="" />
                  <div className="title">
                    <div className="jobTitle">{ele.jobTitle}</div>
                    <div className="location">
                      {ele.company}, {ele.location}
                    </div>
                  </div>
                  <div className="status">
                    <p>{ele.status}</p>
                    <p>{ele.feedback}</p>
                  </div>
                  <div className="date">{ele.lastDate}</div>
                </div>
              );
            })}
          </div>
          <div className="searchBar">
            <div className="flex">
              <i class="fa fa-search"></i>
              <i class="fa fa-filter"></i>
              <i class="fa fa-caret-up arrow"></i>
              <i class="fa fa-caret-down arrow"></i>
            </div>
            <i class="fa fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
