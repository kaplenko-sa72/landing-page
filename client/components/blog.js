import React, {} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Blog = () => {
  return (
    <div>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="index.html"> <img src="images/logo.png" alt="" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-center">
                  <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="about-us.html">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="/price">Pricing</a></li>
                      <li className="nav-item"><a className="nav-link" href="games.html">Games</a></li>
                      <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown active">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
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

      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="home_left_img">
                  <img className="img-fluid" src="images/banner/home-left.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner_content">
                  <h2>
                    For All Occasion <br />
                    HairStyle is a Must <br />
                    Try Fashion
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim.
                  </p>
                  <div className="d-flex align-items-center">
                    <a id="play-home-video" className="video-play-button" href="https://www.youtube.com/watch?v=vParh5wE-tM">
                      <span />
                    </a>
                    <div className="watch_video text-uppercase">
                      watch the video
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_categorie_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="categories_post">
                <img src="images/blog/cat-post/cat-post-3.jpg" alt="post" />
                <div className="categories_details">
                  <div className="categories_text">
                    <a href="single-blog.js"><h5>Social Life</h5></a>
                    <div className="border_line" />
                    <p>Enjoy your social life together</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories_post">
                <img src="images/blog/cat-post/cat-post-2.jpg" alt="post" />
                <div className="categories_details">
                  <div className="categories_text">
                    <a href="single-blog.js"><h5>Politics</h5></a>
                    <div className="border_line" />
                    <p>Be a part of politics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories_post">
                <img src="images/blog/cat-post/cat-post-1.jpg" alt="post" />
                <div className="categories_details">
                  <div className="categories_text">
                    <a href="single-blog.js"><h5>Food</h5></a>
                    <div className="border_line" />
                    <p>Let the food be finished</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog_left_sidebar">
                <article className="row blog_item">
                  <div className="col-md-3">
                    <div className="blog_info text-right">
                      <div className="post_tag">
                        <a href="#">Food,</a>
                        <a className="active" href="#">Technology,</a>
                        <a href="#">Politics,</a>
                        <a href="#">Lifestyle</a>
                      </div>
                      <ul className="blog_meta list">
                        <li><a href="#">Mark wiens<i className="lnr lnr-user" /></a></li>
                        <li><a href="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></a></li>
                        <li><a href="#">1.2M Views<i className="lnr lnr-eye" /></a></li>
                        <li><a href="#">06 Comments<i className="lnr lnr-bubble" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                      <img src="images/blog/main-blog/m-blog-1.jpg" alt="" />
                      <div className="blog_details">
                        <a href="single-blog.js"><h2>Astronomy Binoculars A Great Alternative</h2></a>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have
                          to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                        </p>
                        <a href="single-blog.js" className="blog_btn">View More</a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
                    <div className="blog_info text-right">
                      <div className="post_tag">
                        <a href="#">Food,</a>
                        <a className="active" href="#">Technology,</a>
                        <a href="#">Politics,</a>
                        <a href="#">Lifestyle</a>
                      </div>
                      <ul className="blog_meta list">
                        <li><a href="#">Mark wiens<i className="lnr lnr-user" /></a></li>
                        <li><a href="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></a></li>
                        <li><a href="#">1.2M Views<i className="lnr lnr-eye" /></a></li>
                        <li><a href="#">06 Comments<i className="lnr lnr-bubble" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                      <img src="images/blog/main-blog/m-blog-2.jpg" alt="" />
                      <div className="blog_details">
                        <a href="single-blog.js"><h2>The Basics Of Buying A Telescope</h2></a>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have
                           to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                        </p>
                        <a href="single-blog.js" className="blog_btn">View More</a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
                    <div className="blog_info text-right">
                      <div className="post_tag">
                        <a href="#">Food,</a>
                        <a className="active" href="#">Technology,</a>
                        <a href="#">Politics,</a>
                        <a href="#">Lifestyle</a>
                      </div>
                      <ul className="blog_meta list">
                        <li><a href="#">Mark wiens<i className="lnr lnr-user" /></a></li>
                        <li><a href="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></a></li>
                        <li><a href="#">1.2M Views<i className="lnr lnr-eye" /></a></li>
                        <li><a href="#">06 Comments<i className="lnr lnr-bubble" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                      <img src="images/blog/main-blog/m-blog-3.jpg" alt="" />
                      <div className="blog_details">
                        <a href="single-blog.js"><h2>The Glossary Of Telescopes</h2></a>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have
                           to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                        </p>
                        <a href="single-blog.js" className="blog_btn">View More</a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
                    <div className="blog_info text-right">
                      <div className="post_tag">
                        <a href="#">Food,</a>
                        <a className="active" href="#">Technology,</a>
                        <a href="#">Politics,</a>
                        <a href="#">Lifestyle</a>
                      </div>
                      <ul className="blog_meta list">
                        <li><a href="#">Mark wiens<i className="lnr lnr-user" /></a></li>
                        <li><a href="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></a></li>
                        <li><a href="#">1.2M Views<i className="lnr lnr-eye" /></a></li>
                        <li><a href="#">06 Comments<i className="lnr lnr-bubble" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                      <img src="images/blog/main-blog/m-blog-4.jpg" alt="" />
                      <div className="blog_details">
                        <a href="single-blog.js"><h2>The Night Sky</h2></a>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have
                           to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                        </p>
                        <a href="single-blog.js" className="blog_btn">View More</a>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="row blog_item">
                  <div className="col-md-3">
                    <div className="blog_info text-right">
                      <div className="post_tag">
                        <a href="#">Food,</a>
                        <a className="active" href="#">Technology,</a>
                        <a href="#">Politics,</a>
                        <a href="#">Lifestyle</a>
                      </div>
                      <ul className="blog_meta list">
                        <li><a href="#">Mark wiens<i className="lnr lnr-user" /></a></li>
                        <li><a href="#">12 Dec, 2017<i className="lnr lnr-calendar-full" /></a></li>
                        <li><a href="#">1.2M Views<i className="lnr lnr-eye" /></a></li>
                        <li><a href="#">06 Comments<i className="lnr lnr-bubble" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="blog_post">
                      <img src="images/blog/main-blog/m-blog-5.jpg" alt="" />
                      <div className="blog_details">
                        <a href="single-blog.js"><h2>Telescopes 101</h2></a>
                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have
                           to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                        </p>
                        <a href="single-blog.js" className="blog_btn">View More</a>
                      </div>
                    </div>
                  </div>
                </article>
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <span aria-hidden="true">
                          <span className="lnr lnr-chevron-left" />
                        </span>
                      </a>
                    </li>
                    <li className="page-item"><a href="#" className="page-link">01</a></li>
                    <li className="page-item active"><a href="#" className="page-link">02</a></li>
                    <li className="page-item"><a href="#" className="page-link">03</a></li>
                    <li className="page-item"><a href="#" className="page-link">04</a></li>
                    <li className="page-item"><a href="#" className="page-link">09</a></li>
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <span aria-hidden="true">
                          <span className="lnr lnr-chevron-right" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Posts" />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button"> <i className="lnr lnr-magnifier" /></button>
                    </span>
                  </div>
                  <div className="br" />
                </aside>
                <aside className="single_sidebar_widget author_widget">
                  <img className="author_img rounded-circle" src="images/blog/author.png" alt="" />
                  <h4>Charlie Barber</h4>
                  <p>Senior blog writer</p>
                  <div className="social_icon">
                    <a href="#"> <i className="fa fa-facebook" /></a>
                    <a href="#"> <i className="fa fa-twitter" /></a>
                    <a href="#"> <i className="fa fa-github" /></a>
                    <a href="#"> <i className="fa fa-behance" /></a>
                  </div>
                  <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have
                     to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.
                  </p>
                  <div className="br" />
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Popular Posts</h3>
                  <div className="media post_item">
                    <img src="images/blog/popular-post/post1.jpg" alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html"><h3>Space The Final Frontier</h3></a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="images/blog/popular-post/post2.jpg" alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html"><h3>The Amazing Hubble</h3></a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="images/blog/popular-post/post3.jpg" alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html"><h3>Astronomy Or Astrology</h3></a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="images/blog/popular-post/post4.jpg" alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html"><h3>Asteroids telescope</h3></a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                  <div className="br" />
                </aside>
                <aside className="single_sidebar_widget ads_widget">
                  <a href="#"> <img className="images-fluid" src="images/blog/add.jpg" alt="" /></a>
                  <div className="br" />
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Post Catgories</h4>
                  <ul className="list cat-list">
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Technology</p>
                        <p>37</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Lifestyle</p>
                        <p>24</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Fashion</p>
                        <p>59</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Art</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Food</p>
                        <p>15</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Architecture</p>
                        <p>09</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Adventure</p>
                        <p>44</p>
                      </a>
                    </li>
                  </ul>
                  <div className="br" />
                </aside>
                <aside className="single-sidebar-widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>
                  <p>
                    Here, I focus on a range of items and features that we use in life without
                    giving them a second thought.
                  </p>
                  <div className="form-group d-flex flex-row">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text"> <i className="fa fa-envelope" aria-hidden="true" /></div>
                      </div>
                      <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter email" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter email'" />
                    </div>
                    <a href="#" className="bbtns">Subcribe</a>
                  </div>
                  <p className="text-bottom">You can unsubscribe at any time</p>
                  <div className="br" />
                </aside>
                <aside className="single-sidebar-widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Fashion</a></li>
                    <li><a href="#">Architecture</a></li>
                    <li><a href="#">Fashion</a></li>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Adventure</a></li>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Adventure</a></li>
                  </ul>
                </aside>
              </div>
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
                <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="blank">Colorlib</a></p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="social_widget">
                <a href="#"> <i className="fa fa-facebook" /></a>
                <a href="#"> <i className="fa fa-twitter" /></a>
                <a href="#"> <i className="fa fa-dribbble" /></a>
                <a href="#"> <i className="fa fa-behance" /></a>
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
      <script src="vendors/lightbox/simpleLightbox.min.js" />
      <script src="vendors/nice-select/js/jquery.nice-select.min.js" />
      <script src="vendors/isotope/imagesloaded.pkgd.min.js" />
      <script src="vendors/isotope/isotope-min.js" />
      <script src="vendors/owl-carousel/owl.carousel.min.js" />
      <script src="js/jquery.ajaxchimp.min.js" />
      <script src="js/mail-script.js" />
      <script src="vendors/counter-up/jquery.waypoints.min.js" />
      <script src="vendors/counter-up/jquery.counterup.min.js" />
      <script src="js/theme.js" />
    </div>
  )
}

Blog.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
