import React, {} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Games = () => {
  return (
    <div>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="/"><img src="images/logo.png" alt="" /> </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-center">
                  <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
                  <li className="nav-item submenu dropdown active">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="/price">Pricing</a> </li>
                      <li className="nav-item"><a className="nav-link" href="/games">Games</a> </li>
                      <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a> </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                      <li className="nav-item"><a className="nav-link" href="/single-blog">Blog Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item"><a href="#" className="primary_btn">join us</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background="" />
          <div className="container">
            <div className="banner_content text-center">
              <div className="page_link">
                <a href="/">Home</a>
                <a href="/games">Upcoming Games</a>
              </div>
              <h2>Upcoming Games</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="upcoming_games_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title">
                <h2>Upcoming Games</h2>
                <h1>Upcoming Games</h1>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-3 col-md-6">
              <div className="new_games_item">
                <img src="images/b_map1.png" alt="" />
                <div className="upcoming_title">
                  <h3><a href="#">Best Ps4 Games</a></h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="new_games_item">
                <img src="images/b_map2.png" alt="" />
                <div className="upcoming_title">
                  <h3><a href="#">World Dart 2019</a></h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="new_games_item">
                <img src="images/b_map3.png" alt="" />
                <div className="upcoming_title">
                  <h3><a href="#">New XBox Games</a></h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="new_games_item">
                <img src="images/b_map4.png" alt="" />
                <div className="upcoming_title">
                  <h3><a href="#">Amarican Football</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recent_update_area section_gap">
        <div className="container">
          <div className="recent_update_inner">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                  Live Streaming
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                  Upcoming Challanges
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                  Recent Famous Games
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row recent_update_text">
                  <div className="col-lg-6">
                    <div className="chart_img">
                      <img className="img-fluid" src="images/recent_up.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="section_content">
                      <h6>About Us</h6>
                      <h1>We Believe that <br />Interior beauty Lasts Long</h1>
                      <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                        especially in the workplace. That’s why it’s crucial that as women.
                      </p>
                      <a className="primary_btn" href="#">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row recent_update_text">
                  <div className="col-lg-6">
                    <div className="chart_img">
                      <img className="img-fluid" src="images/recent_up.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="section_content">
                      <h6>About Us</h6>
                      <h1>We Believe that <br />Interior beauty Lasts Long</h1>
                      <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                        especially in the workplace. That’s why it’s crucial that as women.
                      </p>
                      <a className="primary_btn" href="#">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className="row recent_update_text">
                  <div className="col-lg-6">
                    <div className="chart_img">
                      <img className="img-fluid" src="images/recent_up.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="section_content">
                      <h6>About Us</h6>
                      <h1>We Believe that <br />Interior beauty Lasts Long</h1>
                      <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                        especially in the workplace. That’s why it’s crucial that as women.
                      </p>
                      <a className="primary_btn" href="#">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="frequently_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title">
                <h2>Frequently Asked Questions</h2>
                <h1>Frequently Asked Questions</h1>
              </div>
            </div>
          </div>
          <div className="row frequent_inner">
            <div className="col-lg-5 col-md-5">
              <div className="frequent_item">
                <h3>We Believe that Interior beauty Lasts Long</h3>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                  especially in the workplace. That’s why it’s crucial that as women.
                </p>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
              <div className="frequent_item">
                <h3>We Believe that Interior beauty Lasts Long</h3>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                  especially in the workplace. That’s why it’s crucial that as women.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="frequent_item">
                <h3>We Believe that Interior beauty Lasts Long</h3>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                  especially in the workplace. That’s why it’s crucial that as women.
                </p>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
              <div className="frequent_item">
                <h3>We Believe that Interior beauty Lasts Long</h3>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                  especially in the workplace. That’s why it’s crucial that as women.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="frequent_item last-child">
                <h3>We Believe that Interior beauty Lasts Long</h3>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                  especially in the workplace. That’s why it’s crucial that as women.
                </p>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
              <div className="frequent_item last-child">
                <h3>We Believe that Interior beauty Lasts Long</h3>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                  especially in the workplace. That’s why it’s crucial that as women.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="newsletter_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="newsletter_inner">
                <h1>Subscribe Our Newsletter</h1>
                <p>We won’t send any kind of spam</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <aside className="newsletter_widget">
                <div id="mc_embed_signup">
                  <form
                    target="blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    className="subscribe_form relative"
                  >
                    <div className="input-group d-flex flex-row">
                      <input
                        name="EMAIL"
                        placeholder="Enter email address"
                        onFocus="this.placeholder = ''"
                        onBlur="this.placeholder = 'Your email address'"
                        required=""
                        type="email"
                      />
                      <button type="button" className="btn primary_btn">Subscribe</button>
                    </div>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer_area section_gap_top">
        <div className="container">
          <div className="row footer_inner">
            <div className="col-lg-3 col-sm-6">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h4>About Farfly</h4>
                </div>
                <ul>
                  <li><a href="#">For Business</a></li>
                  <li><a href="#">Premium Plans</a></li>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">How it Works</a></li>
                  <li><a href="#">Farfly Blog</a></li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-sm-6">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h4>Company</h4>
                </div>
                <ul>
                  <li><a href="#">Product Tour</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Founding Members</a></li>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Product Updates</a></li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-sm-6">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h4>Support</h4>
                </div>
                <ul>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">Data Securiry</a></li>
                  <li><a href="#">Site Performance</a></li>
                  <li><a href="#">Action Plan</a></li>
                  <li><a href="#">Resources</a></li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-sm-6">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h4>Legal</h4>
                </div>
                <ul>
                  <li><a href="#">Terms and conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Cookie Information</a></li>
                  <li><a href="#">Opt - Out</a></li>
                </ul>
              </aside>
            </div>
          </div>
          <div className="row single-footer-widget">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="copy_right_text">
                <p>
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="blank">Colorlib</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="social_widget">
                <a href="#"><i className="fa fa-facebook" /> </a>
                <a href="#"><i className="fa fa-twitter" /> </a>
                <a href="#"><i className="fa fa-dribbble" /> </a>
                <a href="#"><i className="fa fa-behance" /> </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script src="js/jquery-3.2.1.min.js" />
      <script src="js/popper.js" />
      <script src="js/bootstrap.min.js" />
      <script src="js/stellar.js" />
      <script src="js/jquery.magnific-popup.min.js" />
      <script src="vendors/nice-select/js/jquery.nice-select.min.js" />
      <script src="vendors/isotope/imagesloaded.pkgd.min.js" />
      <script src="vendors/isotope/isotope-min.js" />
      <script src="vendors/owl-carousel/owl.carousel.min.js" />
      <script src="js/jquery.ajaxchimp.min.js" />
      <script src="vendors/counter-up/jquery.waypoints.min.js" />
      <script src="vendors/counter-up/jquery.counterup.min.js" />
      <script src="js/mail-script.js" />
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE" />
      <script src="js/gmaps.min.js" />
      <script src="js/theme.js" />
    </div>
  )
}

Games.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Games)
