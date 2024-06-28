import React from "react";

import { skillText } from "../constants";

const Skill = () => {
  return (
    <section id="skill">
      <div className="slkll__inner">
        <h2 className="skill__title">
          my info <em>나의 정보</em>
        </h2>
        <div className="skill__desc">
          {skillText.map((skill, key) => (
            <div key={key}>
              <span>{key + 1}.</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
          <div>
            <span>4.</span>
            <h3>My Skills - 내가 가진 능력</h3>
            <p>
              <p className="my__skills">
                <h4>Collaboration</h4>
                <div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Notion
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Slack
                  </div>
                </div>
              </p>
              <p className="my__skills">
                <h4>Developer Tool</h4>
                <div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    HTML
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    CSS
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Javascript
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Java
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Python
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Node.js
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    React
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Typescript
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Zustand
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    AWS
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    MySQL
                  </div>
                </div>
              </p>
              <p className="my__skills">
                <h4>Design Tool</h4>
                <div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Photoshop
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Illustrator
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Indesign
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Adobe XD
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Auto CAD
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Figma
                  </div>
                  <div className="skill">
                    <div>
                      <img src="" alt="" />
                    </div>
                    Premirere
                  </div>
                </div>
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
