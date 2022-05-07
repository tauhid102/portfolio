import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import skill1 from "../../Image/icons8-react-160.png";
import skill2 from "../../Image/icons8-nodejs-144.png";
import skill3 from "../../Image/icons8-javascript-480.png";
import hero from "../../Image/IMG_20210115_212453-removebg-preview (1).png";
const Home = () => {
    return (
        <>
        <section className='hero' id='home'>
          <div className='container f_flex top'>
            <div className='left top'>
              <h5>WELCOME TO MY WORLD</h5>
              <h3>
                Hi, I’m <span>Tauhidur Rahman</span>
              </h3>
              <h2>
                a
                <span>
                  <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                </span>
              </h2>
  
              <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
  
              <div className='hero_btn d_flex'>
                <div className='col_1'>
                  <h4>FIND WITH ME</h4>
                  <div className='button'>
                    <button className='btn_shadow'>
                      <i class='fab fa-facebook-f'>
                          <a href=""></a>
                      </i>
                    </button>
                    <button className='btn_shadow'>
                    <i class="fa-brands fa-github"></i>
                    </button>
                    <button className='btn_shadow'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </div>
                </div>
                <div className='col_1'>
                  <h4>BEST SKILL ON</h4>
                  <button className='btn_shadow_skill'>
                    <img src={skill3} alt='' />
                  </button>
                  <button className='btn_shadow_skill'>
                    <img src={skill2} alt='' />
                  </button>
                  <button className='btn_shadow_skill'>
                    <img src={skill1} alt='' />
                  </button>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='right_img'>
                <img src={hero} alt='' />
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Home;