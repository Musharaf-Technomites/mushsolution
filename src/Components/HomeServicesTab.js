import React from "react";
import "./HomeServicesTab.css";
import * as AiIcon from "react-icons/ai";
import * as BsIcon from "react-icons/bs";
const HomeServicesTab = () => {
  return (
    <div className="mainContainer py-5">
      <div className="container ">
        <h4 className="text-center mainHeadiing">
          DESIGN. DEVELOPMENT. CONSULTANCY.
        </h4>
        <div className="mx-5">
          <h4 className="text-center mainPara">
            Develop results-driven products for entrepreneurs, startups, and
            enterprises with a leading software development company.
          </h4>
        </div>
        <div>
          <div className="row container my-5 mainRow">

          <div className="col col-6 col-sm-6 col-md-3  serviceTab pointer">
              <BsIcon.BsFillBrushFill className="serviceIcon" />
              <div>
                <h4 className="serviceTitle">UI/UX Designing</h4>
              </div>
            </div>

            <div className="col col-6 col-sm-6 col-md-3 serviceTab ">
              <AiIcon.AiOutlineMobile className="serviceIcon" />
              <div>
                <h4 className="serviceTitle">Mobile Development</h4>
              </div>
            </div>

            <div className="col col-6 col-sm-6 col-md-3 serviceTab ">
              <BsIcon.BsCodeSlash className="serviceIcon" />
              <div>
                <h4 className="serviceTitle">Website Development</h4>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesTab;
