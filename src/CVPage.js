import React from "react";
import "./CVPage.css";

const CVPage = () => {
  return (
    <div className='container my-4'>
      <div className='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='px-auto'>
                <img
                  className='img-fluid rounded-circle pr-2'
                  alt='tuan_avatar'
                  height='200px'
                  src='https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/17155734_10211305975272581_4707884009192249977_n.jpg?_nc_cat=107&_nc_oc=AQnPKMz_DxStj7k_tRul4RNzbzxH7hXYdWF-1doHop0n42C_8BSssyIHM5WyggVitC4&_nc_ht=scontent.fsgn3-1.fna&oh=fcbb4c22be52da9014401d788744eb40&oe=5D6A75E0'
                />
              </div>
            </div>

            <div className='col-md-9'>
              <ul className='list-unstyled pt-3'>
                <li className='name'>
                  <b>PHAN Anh Tuan</b>
                </li>
                <li>+84 70511 8617</li>
                <li>phananhtuan1011@gmail.com</li>
                <li>
                  Github:{" "}
                  <a href='https://github.com/phanatuan/'>
                    https://github.com/phanatuan/
                  </a>
                </li>
                <li>
                  Online Portfolio:{" "}
                  <a href='https://tuan-portfolio.netlify.com/'>
                    https://tuan-portfolio.netlify.com/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='divider my-4' />

      <div className='headline'>
        <h4>
          Full Stack Developer with 3-year experience in Digital Marketing
        </h4>
        <ul>
          <li>
            Manged digital marketing account (Facebook, Google Adwords) with
            budget >2000SGD/day
          </li>
          <li>
            Ability to self-learn code and guiding students (Teaching Assitant
            for Coder School Coding Bootcamp)
          </li>
        </ul>
      </div>

      <div className='technical-skill'>
        <h4>Technical Skill</h4>
        <ul>
          <li>
            Front End: HTML, CSS, Bootstrap, Javascript, React JS (Framework),
            ApolloGraphQL
          </li>
          <li>
            Back End: Python, Flask (Framework), GraphQL, Prisma, PostgreSQL
          </li>
        </ul>
      </div>

      <div className='divider my-4' />

      <div className='education'>
        <h4>EDUCATION</h4>
        <h5>Singapore Mangement University</h5>
        <span className='float-right'>Aug 2009 – Dec 2013</span>
        <span>Bachelor of Business Management, major in Marketing</span>

        <h5 className='pt-3'>
          FH Joanneum – Global Business Program (One semester exchange)
        </h5>
      </div>

      <div className='divider my-4' />

      <div className='work-experience'>
        <h4>WORK EXPERIENCE</h4>

        <h5>CoderSchool(Vietnam)</h5>
        <span className='float-right'>Feb – May 2019</span>
        <p>Teaching Assistant for Maverick Coding Bootcamp</p>
        <ul>
          <li>
            Support students for in-class lab projects and coding exercises.{" "}
          </li>
          <li>
            Brainstorm and write lab exercise for Javascript and React section
            of the Bootcamp
          </li>
          <li>Give demo walkthrough of code homework and theory concepts. </li>
        </ul>
        <p>Lab exercise and homework material written for Bootcamp:</p>
        <ul>
          <li>
            <a href='https://hackmd.io/s/rJdklYqSE'>
              Weather App Using React JS
            </a>
          </li>
          <li>
            <a href='https://hackmd.io/s/S1R4ArFHV'>React JS Tic-Tac-Toe</a>
          </li>
          <li>
            <a href='https://hackmd.io/s/rJT0fowwE'>
              Code Movie App using React JS
            </a>
          </li>
          <li>
            <a href='https://hackmd.io/s/rk6txsuOV'>
              Code Github Issue Page (Exercise)
            </a>
          </li>
        </ul>

        <h5>Create and Manage Various Affiliate Websites</h5>
        <span className='float-right'>Oct 2016 – Dec 2018</span>
        <ul>
          <li>Hire and manage a team of 5 writers (hire via Upwork, Vlance)</li>
          <li>
            Built up the process for Website SEO (Link Building, Keyword
            Research){" "}
          </li>
          <li>
            Monitored website analytics (user visit, time on page, bounce rate)
            via Google Analytics and Ahref
          </li>
        </ul>

        <h5>Garena (Singapore)</h5>
        <span className='float-right'>Oct 2015 – Sep 2016</span>
        <span>Online Marketing Account Manager</span>
        <ul>
          <li>
            In charge of Vietnam Online Marketing Account for Shopee, an online
            shopping app.{" "}
          </li>
          <li>
            Built the spreadsheet to speed up the campaign creation process for
            the team.{" "}
          </li>
          <li>Maintained and exceeded the KPI for the Advertising account.</li>
        </ul>

        <h5>Rocket Internet Gmbh – Zalora (Singapore)</h5>
        <span className='float-right'>Oct 2014 – Oct 2015</span>
        <span>Online Marketing Account Manager</span>
        <ul>
          <li>In charge of Vietnam and Philippines Online Marketing Account</li>
          <li>
            Awarded “SEM Manager of the Quarter”, for best managed the
            Phillippines Account.
          </li>
        </ul>
      </div>

      <div className='divider my-4' />

      <div className='community-service'>
        <h4>EXTRA ACTIVITIES</h4>
        <h5>Volunteer Project with AIESEC</h5>
        <span className='float-right'>Oct 2016 – Dec 2018</span>
        <span>
          Participate in 4 AIESEC Projects in Sri Lanka, India, Egypt and China
        </span>
      </div>

      <div className='divider my-4' />
      <div className='hobby'>
        <h4>OTHERS</h4>
        <ul>
          <li>3rd place at PSB Academy Football Open (Dec 2011)</li>
          <li>
            Represented University (SMU) to contest in the Weiqi Singapore Poly
            Open - 4th place (Sep 2011)
          </li>
          <li>Hobby: Table Tennis, Board Game</li>
        </ul>
      </div>
    </div>
  );
};

export default CVPage;
