import React from 'react'

import { Helmet } from 'react-helmet'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="profile-profile">
        <div className="profile-background">
          <img
            src="/unsplash8uzpyniurq1156-spxp-300h.png"
            alt="unsplash8uZPynIurQ1156"
            className="profile-unsplash8u-z-pyn-iur-q"
          />
          <img
            src="/background1157-ibcb-700h.png"
            alt="Background1157"
            className="profile-background1"
          />
        </div>
        <div className="profile-card">
          <img
            src="/base1159-9rf-400w.png"
            alt="Base1159"
            className="profile-base"
          />
          <div className="profile-photos">
            <img
              src="/unsplashzqesybalkq41161-5zp.svg"
              alt="unsplashZQESYbAlKQ41161"
              className="profile-unsplash-zqes-yb-al-kq4"
            />
            <img
              src="/unsplashact8ycszpde1162-4mvb.svg"
              alt="unsplashACt8ycSzpdE1162"
              className="profile-unsplash-a-ct8yc-szpd-e"
            />
            <img
              src="/unsplashiqwa1ourefi1163-85nv.svg"
              alt="unsplashIQwA1OurefI1163"
              className="profile-unsplash-i-qw-a1-ouref-i"
            />
            <img
              src="/unsplashsbfmokbk7ju1164-g11.svg"
              alt="unsplashsbFmoKBK7jU1164"
              className="profile-unsplashsb-fmo-kbk7j-u"
            />
            <img
              src="/unsplashwm6rj6yitvs1165-wky4-200w.png"
              alt="unsplashWM6Rj6yITvs1165"
              className="profile-unsplash-wm6-rj6y-i-tvs"
            />
            <img
              src="/unsplash75efpyxu3wg1166-g5p.svg"
              alt="unsplash75EFpyXu3Wg1166"
              className="profile-unsplash75e-fpy-xu3-wg"
            />
          </div>
        </div>
        <div className="profile-avatar">
          <img
            src="/ellipse51168-12s4-200h.png"
            alt="Ellipse51168"
            className="profile-ellipse5"
          />
          <img
            src="/ellipse61169-zpii-200h.png"
            alt="Ellipse61169"
            className="profile-ellipse6"
          />
          <img
            src="/perfil_rafael.png"
            alt="perfil_rafael"
            className="profile-unsplash-avatars0001s0008aionyhaustso-k2-bdjzrngunspl"
          />
        </div>
        <div className="profile-card1">
          <div className="profile-frame">
            <div className="profile-followers">
              <span className="profile-text">
                <span>1k</span>
              </span>
              <span className="profile-text02">
                <span>Followers</span>
              </span>
            </div>
            <div className="profile-following">
              <span className="profile-text04">
                <span>342</span>
              </span>
              <span className="profile-text06">
                <span>Following</span>
              </span>
            </div>
          </div>
          <span className="profile-text08">
            <span>@RafaelPagliari</span>
          </span>
          <span className="profile-text10">
            <span>
              Meu nome e rafael e esse e meu projeto
            </span>
          </span>
          <button className="profile-button">
            <div className="profile-follow">
              <span className="profile-text12">
                <span>Follow</span>
              </span>
            </div>
            <div className="profile-message">
              <span className="profile-text14">
                <span>Message</span>
              </span>
            </div>
          </button>
          <div className="profile-categories">
            <div className="profile-all">
              <div className="profile-frame33">
                <span className="profile-text16">
                  <span>All</span>
                </span>
                <img
                  src="/rectangle1761190-h8m5-200h.png"
                  alt="Rectangle1761190"
                  className="profile-rectangle176"
                />
              </div>
            </div>
            <div className="profile-photos1">
              <div className="profile-frame331">
                <span className="profile-text18">
                  <span>Photos</span>
                </span>
                <img
                  src="/ellipse81194-s8j-200h.png"
                  alt="Ellipse81194"
                  className="profile-ellipse8"
                />
              </div>
            </div>
            <div className="profile-videos">
              <div className="profile-frame332">
                <span className="profile-text20">
                  <span>Videos</span>
                </span>
                <img
                  src="/ellipse81198-aq1m-200h.png"
                  alt="Ellipse81198"
                  className="profile-ellipse81"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="profile-topnavigation">
          <div className="profile-allowleft">
            <div className="profile-iconly-light-arrow-left">
              <div className="profile-iconly-light-arrow-left1">
                <div className="profile-arrow-left">
                  <img
                    src="/stroke1i120-aj2g.svg"
                    alt="Stroke1I120"
                    className="profile-stroke1"
                  />
                  <img
                    src="/stroke3i120-nbyo.svg"
                    alt="Stroke3I120"
                    className="profile-stroke3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="profile-message1">
            <div className="profile-iconly-bold-message">
              <div className="profile-message2">
                <img
                  src="/messagei120-3r3.svg"
                  alt="MessageI120"
                  className="profile-message3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
