import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context"; 

const Main = () => {
  const { onSent, recentPrompts, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, KADA Participants.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Leads participants to the daily schedule, map, or next steps in the program...</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Provides inspiration, suggestions, or quick summaries of program content/materials...</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>A quick link for common questions or direct help from the organizers/admins...</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Directs users to important links, technical documents, or required external platforms/tools...</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">An interactive assistant to support Your Journey with KADA.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
