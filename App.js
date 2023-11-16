import React, { useState } from 'react';

const TopSection =() =>(
  <div class="top">
        <span>Now get exciting rewards on learning.<span class="underline"> Know More</span></span>
    </div>
);

const Header = () => (
  <div className="top-bar">
    <a href="https://www.edyoda.com/stories" className="logo_container" style={{ width: '10%' }}>
      <div>
        <div className="logo">Edyoda</div>
        <p className="stories_logo">Stories</p>
      </div>
    </a>
    <div className='explore_cata'>
      Explore Categories
      <span style={{ marginLeft: '10px' }}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
          alt="icon"
        />
      </span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '70%' }}>
      <div style={{ width: '70%', display: 'flex', justifyContent: 'flex-end' }}>
        <p style={{ fontSize: '15px', letterSpacing: '1px', opacity: '0.2', lineHeight: '1', wordSpacing: '5px', fontWeight: '600', fontFamily: 'sans-serif' }}>
          Edyoda is a learning and knowledge<br />
          sharing platform for techies.
        </p>
      </div>
      <div style={{ display: 'flex', width: '20%', justifyContent: 'right' }}>
        <button
          style={{
            borderRadius: '30px',
            background: 'linear-gradient(269deg, rgb(0, 72, 255), rgb(0, 150, 255))',
            color: 'white',
            fontSize: '12px',
            fontFamily: 'sans-serif',
            fontWeight: '600',
            border: 'none',
            padding: '14px 25px',
            letterSpacing: '0.1px',
            cursor: 'pointer',
            boxShadow: '2px 2px 2px grey',
          }}
        >
          Go To Main Website
        </button>
      </div>
    </div>
  </div>
);

const Navigation = ({ onCategoryChange }) => (
  <nav className="categories-container" style={{ paddingTop: '30px', marginTop:'3%',paddingLeft:'13%'}}>
    <p style={{ fontSize: '32px', color: '#000', fontWeight: '600',}}>Trending Posts</p>
    <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'flex-start', marginTop: '-3%' }}>
      <figure>
        <img
          className="filtericon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
          alt="funnel icon"
          style={{ height: '25px', width: '20px', padding: '0%', marginLeft: '-175%' }}
        />
      </figure>
      <p style={{ marginLeft: '-6%', padding: '0%' }}>Filter by category</p>
    </div>
    </nav>
);

const Card = ({ title, content, date, src }) => (
  <section className="item">
    <figure className="image-section">
      <img className="image" src={src} alt="Introduction to a Machine Learning Online Course" />
    </figure>
    <div className="text-section">
      <p className="title">{title}</p>
      <br />
      <span className="author">EdYoda</span>
      <span className="date">{date}</span>
      <br />
      <p className="mini-text">{content}</p>
    </div>
  </section>
);

const Footer = () => {
  return (
    <footer>
      <div className="Footer__Footer__2T3w3">
        <div className="Footer__Row__2Koch">
          {/* Column 1 */}
          <div className="Footer__Column__1mRXM">
            <h3 className="Footer__ColumnHeading__sK9kQ">EDYODA</h3>
            <a href="/about">About Us</a>
            <a href="https://zekelabs.kekahire.com/" target="_blank" rel="noopener noreferrer">Careers</a>
            <a href="/contact-us">Contact Us</a>
            <a href="/terms">Terms of Use</a>
            <a href="/privacy">Privacy Policy</a>
            {/* <img className="Footer__StartupIndiaIcon__2zZ24" src="https://www.edyoda.com/static/media/startup-india.75c895fb.svg" alt="Startup India" /> */}
          </div>

          {/* Column 2 */}
    <div className="Footer__Column__1mRXM">
      <h3 className="Footer__ColumnHeading__sK9kQ">CAREER TRACKS</h3>
      <h4 className="Footer__ColumnSubHeading__2-0G1 Footer__RemoveTopMargin__ZV7es">TECH</h4>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/program/react-developer-program/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        React Developer
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/program/full-stack-developer-program/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Full Stack Developer
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/program/data-scientist-program/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Data Scientist
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/program/data-scientist-program-for-professionals/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Data Scientist for Professionals
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/program/software-development-engineer-program/registration-form/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Software Development Engineer
      </a>
    </div>
 
          {/* Column 3 */}
    <div className="Footer__Column__1mRXM">
      <h3 className="Footer__ColumnHeading__sK9kQ">MICRO DEGREE</h3>
      <h4 className="Footer__ColumnSubHeading__2-0G1 Footer__RemoveTopMargin__ZV7es">TECH</h4>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/micro-degree/python-for-ai-ml-micro-degree/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Python for AI/ML
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/micro-degree/data-analysis-micro-degree/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Data Analysis
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/micro-degree/data-science-micro-degree/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Data Science
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/micro-degree/machine-learning-micro-degree/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Machine Learning
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/micro-degree/artificial-intelligence-micro-degree/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Artificial Intelligence
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/micro-degree/ai-ml-micro-degree/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Artificial Intelligence & Machine Learning
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/micro-degree/java-development-micro-degree/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Java Development
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/micro-degree/advanced-java-development-micro-degree/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Advanced Java Development
      </a>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/micro-degree/frontend-development-micro-degree/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Frontend Web Development
      </a>
      <h4 className="Footer__ColumnSubHeading__2-0G1">BUSINESS</h4>
      <a
        target="_blank" rel="noreferrer"
        href="https://university.edyoda.com/micro-degree/digital-marketing-micro-degree/?utm_source=EdYodaFooter&utm_medium=EdYodaFooter&utm_campaign=EdYodaFooter&utm_id=EdYodaFooter"
      >
        Digital Marketing
      </a>
    </div>
 
          {/* Column 4 */}
          <div className="Footer__Column__1mRXM">
      <h3 className="Footer__ColumnHeading__sK9kQ">RESOURCES</h3>
      <a href="/jobs" rel="noreferrer">Jobs</a>
      <a href="/learning-path/1" rel="noreferrer">Learning Paths</a>
      <a href="/courses/all" rel="noreferrer">Courses</a>
      <a href="/videos/all" rel="noreferrer">Learning Videos</a>
      <a href="/channel/all" rel="noreferrer">Educators</a>
      <a href="/stories" rel="noreferrer">EdYoda Stories</a>
      <a
        href="https://university.edyoda.com/?utm_source=UniversityFooter&utm_medium=UniversityFooter&utm_campaign=UniversityFooter&utm_id=UniversityFooter"
        target="_blank"
        rel="noreferrer"
      >
        University
      </a>
    </div>

          {/* Column 5 */}
          <div className="Footer__Column__1mRXM">
      <h3 className="Footer__ColumnHeading__sK9kQ">FOR ENTERPRISES</h3>
      <a href="/enterprise/hiring" rel="noreferrer">Hire EdYoda Graduates</a>
      <a href="https://www.zekelabs.com" target="_blank" rel="noreferrer">
        Train Your Employees
      </a>
      <h3 className="Footer__ColumnHeading__sK9kQ">QUICK LINKS</h3>
      <a href="/learn-and-earn" rel="noreferrer">Learn and Earn</a>
      <a href="/become-learning-enabler" rel="noreferrer">Become a Learning-Enabler</a>
      <a href="/learning-enabler-tips" rel="noreferrer">Tips for Learning-Enabler</a>
      <a href="/requestnewtopic" rel="noreferrer">Request New Topic</a>
      <a href="/certification" rel="noreferrer">Certification</a>
      <a href="/affiliate-program" rel="noreferrer">Affiliate Progam</a>
    </div>

          {/* Social Links */}
          <div className="Footer__Column__1mRXM Footer__SocialLinksContainer__2kpSA icons">
      <h3 className="Footer__ColumnHeading__sK9kQ">CONNECT</h3>
      <div className="Footer__Column__1mRXM">
        <a className="Footer__AddressText__1CPUN" href='adress'>
          1st Floor, <br />
          Gopalan Millennium Tower,<br />
          ITPL Main Road, Brookefield,<br />
          Bengaluru, Karnataka-560037,<br />
          India
        </a>
        <a href="mailto:hello@edyoda.com" target="_blank" rel="noopener noreferrer" className="mailicon">
          <img src="https://www.edyoda.com/static/media/email-white.e7d51381.svg" alt="EdYoda Email Icon" className="Footer__ContactIcon__2TTbB" />
          <span>hello@edyoda.com</span>
        </a>
        <div className="Footer__SocialLinks__174hs">
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/zekeLabs/@12.9671441,77.7143744,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae12256340d8a7:0xc9c6dfb48a7eeadd!8m2!3d12.9671441!4d77.7165631">
            <img src="https://www.edyoda.com/static/media/location-pin.de95721a.svg" alt="Google maps location icon" className="Footer__SocialIcon__2m5Mx" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href='twitter'>
            <img src="https://nuuk-e3eaa.firebaseapp.com/assets/img/twitter-logo.png" alt="EdYoda Twitter Icon" className="Footer__SocialIcon__2m5Mx" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://en-gb.facebook.com/edYoda.here/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAqCAYAAAC+5wuXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMlJREFUeNpi/P//PwMewAzEPkDsBcRWQKwIxNxYVYIMwoG1gPjCfyIBCw6XqAPxQSAWYSASMGERYwTiBaQYgssgWyC2YCARYDMolIEMgM0gc3IMwhbYSgT0XATiTiB+AsTf4AGLJR39AmJWPAZpAvENjBjCYtB/Ai4CJdJ/xIQRIfCP2MBmoFas4QPf8MWaCwkG/celHhTY/6ngs/fUCqMX1DLoGbUMej6MvcYCLRGJzWsfgVhgUGWRUYNGDRo1aNSgUYNIBgABBgDTamTg3XAChAAAAABJRU5ErkJggg==" alt="EdYoda Facebook Icon" class="Footer__facebookIcon__193xx Footer__SocialIcon__2m5Mx"/></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/edyoda/?originalSubdomain=in">
            <img src="https://nuuk-e3eaa.firebaseapp.com/assets/img/linkedin-logo.png" alt="EdYoda LinkedIn Icon" className="Footer__SocialIcon__2m5Mx" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://t.me/interviewspreparation">
            <img src="https://www.edyoda.com/static/media/telegram-white-icon.4aa9601b.svg" alt="EdYoda Telegramm Icon" className="Footer__SocialIcon__2m5Mx" />
          </a>
        </div>
      </div>
    </div>
        </div>

        {/* Bottom Row */}
        <div className="Footer__BottomRow__1siN5">
   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAaCAYAAADSbo4CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMwSURBVHgB3VfNThRBEP5qZneB3UUHTRSVyBI9GC/gwfsQH0CMDwAbTp7AJwCeADwbw+4TCE8AHjx4Ww4mHjQZEkESFGeB5W9nuq1aemGW/048GL+k6O6q/rq+me5pagnnYB3dPuA+J+ghDSqIj4BQAxXuzkeI5+5gLWjO17OetxN3+C7RsCYMwHB4fkjC0SjjIF7seHXMSYLOETDBXR+XgMmlOuKpzneu7xCmeexdQglAutRRXJ06Y61j/ELPmIKegQU6n4UhXuY93Z6yoS22U+0FFZlr4ByLuDthKyL3tIq2npqXWfoJ2otsqP6+zi3IdrYI+YHuggJNwgLZ/i10PN5u9GkvRubzhg1dzs7ALnITLULScBcs1oCbj1jEVouPtutIBZuwAWmMb73t8RtC5HCyuoIFH20PdkAZfcqfWqnBFmlHjTWEENxhWCJzf/fsQKTghPuwApEvZ8WRvbLiZRRSN84/mA5vkQ04v1dDuiBnxEpIquviRFSzE9KAygw4+EcgQkIbQly75OJy7Z+NtAqFVbEh6QO6MK7yadhCu1HAQvQHK9KBg/pa27lx5bXBUkaQL65XnBQyVte6YP9b9ky/up6BbndhA6WdsrROFwL+N01vbMh7X7NQ26cTRoVrsIMOnIOo1BAif1ykJjU7LVbA5sLNlnF8L2+/LZqmmvVJQ4i8lRhq0EZMtJHG9seuQxG3s6g/vA4bKBExulJqjo++Nam2bMXIFu188Ur1R96VOVKxaY3XudHvk0l/y0cvYm5htY8nF68gaJFvgMHcp7AIUoMKKOvL7iRCifbjJ9nRlZnToQuwjh5fQfkuqFfGnKzKhCBCmuvVIDg5/7Bu7fRB8YDjHHL46atKo5JzanPJiuz/gtZ6HH8BvM5ss58yDp8bqUsKbEts/WxFNinlpK6U21c+iz62ksxljmf6Moea/gS/mojLlshdNc1WNnk8JAqy5GEtm4RCXmYbYZtnmzIkSabNoktEjRp3xCREQnDjdw/Hx028aNaReMB+Wb/XxJdOCgkT7W/TvjdPOJKIV82CFX4jcvLnjF+SB2ae9IdMvGTewnCCL1jmuMSOLp8/pEY9vPoo3VsAAAAASUVORK5CYII=" alt="Footer Icon" class="Footer__FooterIcon__1DIkL"/>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMUSURBVHgB5VfPTxNBFP5moCBBaDEiCYS49eDBCFQlXIxSE29e9OLVcvQE/AVs7yZCPJh4Aa9oBBO5aVguHtTEIjEmmMgSw0EB2aqkBdsd32yntW22Swe9+SWP2XmP9/bbNz/eK0MNvDUiEQ4kONgwA2ICMJTJIUkJiId5wDpnO3bJaXotgoybQAMfplkM5T4MKeTcp2B8Hrejtt87mZ9yxTg2AYgxeozgQDCzz/6WxIP1UQjXrMuHYQZ5JKtJVZChbBghsDlR+Kq6sNfYiicXk869wcuRH02N0IANF1fKCbEqIotly1EXHl+6g+12A9+JyNypbvwNIV7UhsAndIm8PDPiEZFo38/h6uev0IRBDBa9vVYk886IJGhDJjSCeCRWotcqdD27WQxspaEJA1l3rESGTswENPHm9E1f/dCXHWiD81GZHU57Jaa7PPuhVthdQ7625ryLnp8ZaCKCbP46p9TEoYmtNiPQfjy7D20wFuOo6y6pxHbYCLR3Zg5BBsyQZAxoQt4t/x4sLMnY0ERbJvgI7zVw6EOkOTsUmc1A++aRJuhzESlOxW4emujefo/m3G5N+8bRFuiDW5yqLlVhYUETZz8t+Oo3Wo/olgQJm0qC5S1uDhiHJvrtBd/sPO89AW24VMGhbmDKTsqF0CLU9GsX51cfVehedXXoZ0W4U5SVmRIZiQHbmSRLEhroX3uGCx9nvecPHW0eGS3IhquZm8VpxRnssx1Tl9Dg6ixa0q/nX/R2Ojp+XkZC1D6MRJ0/3Hwge5sGwGRgtxAc0aI/SfoIC/fXDJqb4Af4CFgkssuzqk0syE+RiqseOKwc0vSckldC4SRWQZLi1CkKN06JD5f0LpbJuWb/+39ACJEgOQlNNAYEXKRhmUQGXUfhppY/QTrUeINENmWy6o+Q3EVh2elUQu6bGMUwaZwjmVJxoiQ7jDHfQxJU0dLkJNtBR70gLokona3mkojsM2NqFMp3SZKj/5W+No3yQ+LKl9XKWhAZu0hKjTKwQ4EmFYnympZS9nSZ77h6aVG3RPNp6Uuk1v1e+BuHCBdPAgXe4wAAAABJRU5ErkJggg==" alt="Footer Icon" class="Footer__FooterIcon__1DIkL"/>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAaCAYAAAAjZdWPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUoSURBVHgB7VdfSJtXFP8l+ZJqaqJ2Vmv8nzbRxDRqa0Fm5xgtDAbDp8FeutF1D6N76FOhY2yUbjAYbDjWPextsJe1MhkdVAqdls3+mc5/S0xITEyiUayLWjUxJvHP7jkxUSnU2IeC0B98nHvvd797zj33nN+5n2xDAPsL9+TYh3hp9IuCtL0zOxvCxEQQkiShpqaG5bMwPz+PQCAAuVzO85eXI/D7A9grKisrkZeXh6WlJTidDh47ftyK7OxsbMSXIVOpEY4tI+eA+mmjOzs70d//D/R6PSwWy67Kurr+QE/PX9DpSmC1WnHnTqcY68JeYTAYcfHix7DZ/kV7+02oVCqh/zggOGKx4ypy3/0al25/hx9bL0OSS1vhQSQSCPi5XVVVlZEyn29sx3yvd0ycjiLjJ4X8/HyWLpeLZUVFJdRqNRL+fsSGfsekowu/2O7itushv097OhgMIhQKcdtkqsVumJmZwdTUFLfNZjPLCxcuIFMGnZ9/gra2b7ldV1ePRCIhQnOc+waDgWVstEd4cx3D7Z9iA9n46s+f8aaxactor9fDUq3OzsjTPp+PDVQoJBiN1Tym0WiRKbxeL0vKBwrH8fFxzhECh4ZA3P2A5YnlOVizCjE87UHbgxtbRo+MjLCsqtLzQrvB4bCzPHbsKCeszWYTSucgk8nEs+vn6O3tZanXH0VWVlY61HJzc3HkyBFsRBexOmlLbkw8lxMLOHegAD/83ZE0OhZbwdhYcud1dQ27KlxfX4fb7eZ2ba0Fq6uruHXrt3R47QWp0HI6nSwrKip447HR+6QoPe+1tRj06wl4I0+SRgcC42wIIZPQoKNcWVnhNnkqGJxIGyzLxM2bKC8vR319g6DKZUGVPh5raDjBMubs3jH3e6UGY3IlTpdbk0YPDw/xi6KiIhQUFOyqzOFIhpJWm4uSkhJ0dycVHDyYg2vXvsgovLZjZMS+zWl6Tr7E+DD3Ka2vC4O/UWpx6dV38OXZj5JGezyjPMFkMmekJEVNZrMprTSpsGrPBhOGhpJO0+l0HNOrwRGshfxYE2NXVPlol9T47I3z+KTlHM+TQqH/mL4IdMw3b954pgLySIqazGYLotGto21sbMTzIMVcFouVZdzXC5l0AI/qW/Gr8yE+f/19XNk0mI12udzpjsfj4ScTKJVKlJWVCYOFR9bWOJapKOwVjx9Pp6nOaEzy8+qEHbnvXcdddy/a3rqEDxvf3vGNRMmQ4tlMQblWXW3i+wKVXvqe2vTsFZTAxMsqlVIkZgXHs7rlA0iltTifU4jGkpqn9e/HnwCJyifd1Ig14vE437Smp6c5ITQaDReMaHSFvWgymTA4OMh3BXpPVEVhQigsLOT+o0cPmQbp5uZwOESpnxTFophrwcmTjaIejPFc0ksslJWVzToPHTokqqsci4tLnNDkS61Wi76+PpSWlvI1o6WlhRNdWlhYwP37PaKqKVFcXMyLud0uJvmlpTBOnTolODnGyshoYo78/DzY7XacOXMWc3NzIjEneFPE3QqFApGIjd/rdMXcp4sY8S/F7r173ewcCgVyChWmRCKOgYEBvnPY7TYeJxrOydGgtbUVHR0dXIRSzKQ4fbr5amlpGZqampgVwuEwT4zHE+J+PcsLUHJS7NPNi/qRSISNpEWqq428EHmeTsxgOLYZ2xs4fLiQSzydABkfDpNHX0FzczOzDjFRNBoVni/iRKaEJjtGR0d5bdJFHqZNUWmn0xDw78uYfvmP+KKwb39sf8L+gv9/caY80phJS38AAAAASUVORK5CYII=" alt="Footer Icon" class="Footer__FooterIcon__1DIkL"/>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAZCAYAAABHLbxYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWJSURBVHgB7VdrTJNXGH6+3mhtgXG/CSiiKAIynSIIRjY1xMkEcWGbu7AsOvfHmcXMJZtZMvdnLtPpYibbdE5ZdF5w8bJ5m0YcEQYolEuBWqA327TcSiul952eDz9sxD+L+0Hi86Pf+73nnPc85z3P+7ZlfD5fBaYAGELUhykAHqYInhF92pgyRAW+oTb4zPVgBG4wfDfAH68tvhSIWk9mhAYs6NM/gLxVD6/HQd+XLU2Bsd+DxqZu4vNBJgtCeWkWN1/VN4zzl9vR02OGWm+BSMhHcuJzyFs8A+uLMwJit3RaoOjUYdRmh7/Gi1bORUJcMEuUCcsAI4qAW3EcruafAO8IeEIPGKEbgvQa8Bb+HBDs0IlOVJ++AZ/Xg8SEMBQWzMHZKyqcqPqLjhfkpnJEK4+1ovLQdYzZxwJitHfoodZaAoh29drw4c4bMGm7gfFGxOfzUPHGImqzVy+Ng+CFjyDeWIs9yndw+KoETpMH7s5mwDM6kR2NDVevKyhJP0rWZiE0JAjydiM3JzkpjD6Pn9fgu++vcSSlMglmpcQgPDwYDMMgPyc5gPylm3oMGNQcST9q63s5W/DoZEYShtS8NXjv/TpoBtX4pFAF4bACTAR7qpo6PawDBmqHhk5D6dpM2B0e9PWZuBgpyeH0Wf2nkkjBSe3cJSk4uLcMQgGbF1P/g0f5QGe0o/piBzyuwMy3dhg4+7FiWrxwDrw8CfY1zcA3NVHwGJqp3+ny4sw5OdnAS9+LizIQGy2FnmziHB3i1iclRdKndcTO+fo0A6j9R82Ri46UIiZKyo1fqdFh0KChsacniOBxm6hGR0ZG0aMenpxofEwYlizKgtvL4EBTMq436Km/scWEXpWa2jJpEMpeYXWoN9rgdrCkGB4P2fNjqf1SwcTVGowWbNtRjQ+2n0XLIzLxwzzkQPWFdppNq82IbVsKIBJZ0T/QTYnfbdFNTlQsFmDdmqVsVlx87D/ZSU934IcLRJtu6s9ekIi01Ahqt3eaySebqqioEEybxqpp88a5WLUym4vrdLpR83c3Nm09gV9P3eX8tQ0G9Kn6yLgNIbJRUowZSJudCMuwFv393WhT3J+cqB+5OfOo4P243WHDxStNOF19CoODvRAI+Hi7fBE3V9E9oaPnM+I4O1QmxJ4vVmP3rhKkz4vn/DabA/sP1kCrH4GbtLPfqlvgclhhNnfh1dIVCA4WIzszjc61WHT44/LVJxNNnRmH2Fh2U9uDMXy5+xd6DUNDvaQl+bBsvGK9Xh+0WjO3Lj4usOfy+QzWrk7Dj/s24PUNE4ez2sagUJrQKDdD3qIkCeiB3T5EJDKAr/aehE43IY9muRwa3WBg1T9ERLgMeTnpOPP7fXrtd5o7x0cYvFmey2XbYLLCSII/xKyZrBwqj1xDWXEuIiPYgnkuRIyoCA8GyUHDw2ZSX2SYFJVH6+kV+zPnx5Gq849x8Seotq5tcqJ+HvlLFxCi1wL8WRmzUfJyDveuvKdGd1cdYmIyyRoeIRoN3f1hbN2+Gzs+kyBhehyCZTLYrDaoNTo4nA7SsjzIy80nd8nDjZt3qA55xC5cvgRBQSIudlvHPWi0rD7rGxWTE/Vj1YvZEAiD4HY5OF/ZuhWQiIXc+63bCqI5Mzl1K+ITsjE/LRLnLjXQWxi1j0KpVD0WNyTEgc8/Xo7DVfUwGuREPm5kpKfiTNVOTJNMEP101zF8/e1Rajfc6Xoy0ZTkaGyqKCWZYE8lEYuwuaIocFMi/JLiQmrHxyeQQuMRstOx5d0SdKk0pMUMY8hiRzj5ckhKjMHy/Gy8Vb6StDEBXK5bKFrF6rYgLzOApB+vrS+AUqWltkAg+n9/4Y+NOTFG2pJYJKDXOi7t/4Rnf0WeNp4RfdrwV/0RTAH8CzFVUZdV1XjDAAAAAElFTkSuQmCC" alt="Footer Icon" class="Footer__FooterIcon__1DIkL"/>
</div>
<div className="Footer__WhiteRow__2cMAS">© 2023 zekeLabs Technologies Private Limited</div></div>
    </footer>
  );
}

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const cardsData = [
    { id: 1,src:'https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png', title: 'Introduction to a Machine Learning Online Course',
     content: ' we have had an insight into Artificial intelligence well one of its subfields is machine learning and this information will help you get a fair idea of what this machine learning...',
     date:'|23 Aug 2019' },
     { id: 2,src:'https://edyoda.s3.amazonaws.com/media/blog-images/6.png', title: 'LAMP Stack Vs MEAN stack: Choosing the ri...',
     content: 'In todays dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement. Many...',
     date:'|24 Aug 2019' },
     { id: 3,src:'https://edyoda.s3.amazonaws.com/media/blog-images/4.png', title: 'Impact of Cloud Computing in various industries',
     content: 'Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud...',
     date:'|24 Aug 2019' },
     { id: 4,src:'https://edyoda.s3.amazonaws.com/media/blog-images/3.png', title: 'Challenges of Machine Le...',
     content: 'Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and...',
     date:'|24 Aug 2019' },
     { id: 5,src:'https://edyoda.s3.amazonaws.com/media/blog-images/5.png', title: 'Breaking the Myths around Cybersecurity',
     content: 'Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall short in front of advanced cyber attacking...',
     date:'|26 Aug 2019' },
     { id: 6,src:'https://edyoda.s3.amazonaws.com/media/blog-images/7.png', title: 'Importance of Data Backu...',
     content: 'A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan th...',
     date:'|26 Aug 2019' },
  ];
  const filteredCards =
    selectedCategory === 'All' ? cardsData : cardsData.filter((card) => card.title === selectedCategory);

  return (
    <div>
      <TopSection/>
      <Header />
      <Navigation/>
      <div style={{paddingLeft:'13em',paddingRight:'13em'}}>
      <span className="categories" onClick={() => setSelectedCategory('All')}>
        All
      </span>
      <span className="categories" onClick={() => setSelectedCategory('Introduction to a Machine Learning Online Course')}>Artificial intelligence</span>
  <span className="categories" onClick={() => setSelectedCategory('LAMP Stack Vs MEAN stack: Choosing the ri...')}>Cloud computing</span>
  <span className="categories" onClick={() => setSelectedCategory('Impact of Cloud Computing in various industries')}>DevOps</span>
  <span className="categories" onClick={() => setSelectedCategory('Challenges of Machine Le...')}>Programming Languages</span>
  <span className="categories" onClick={() => setSelectedCategory('Breaking the Myths around Cybersecurity')}>Mobile Application Development</span>
  <span className="categories" onClick={() => setSelectedCategory('Importance of Data Backu...')}>Data base</span>
  </div>
      <div style={{ display: 'flex', flexWrap: 'wrap',paddingLeft:'13%',paddingRight:'13%'}}>
        {filteredCards.map((card) => (
          <Card key={card.id} src={card.src} title={card.title} date={card.date} content={card.content} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default App;