import React, { Component, Fragment } from "react";
// import "../CSS/Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        
    
  
<div class="banner">
  <div>
  <section id="section1" className="" style={{ marginTop: 80 + "px" }}>
         
          
          <div className="rightside rollIn animated wow animated">
            <div className="container ">
           
            <h4> Welcome To Our Studio!</h4>
              <h1>Your Time. Your News.</h1>
              <a href="/Home#product" className="btn btn-success welcome">
            About Us
              </a>&nbsp;
     
              <a href="/Home#product" className="btn btn-success welcome">
            Contact
              </a>&nbsp;
      
         
             
            </div>
          </div>
          <div className="leftside">
            
            <img
              src="https://www.thebetterindia.com/wp-content/uploads/2014/04/TBI_FB_Default.png"
              alt=""
            />
          </div>
       
        </section>
  </div>

</div>
 {/*  */}
 <section id="service">
          <div className="container">
            <h2>About Us</h2>
            <div className="service_area">
              <div className="row">
              <div className="col-lg-12">
                  <div className="service_block">
              
                    <p className="animated zoomIn wow animated">
                    Positive News was founded in 1993 by Shauna Crockett-Burrows (1930 – 2012) as a quarterly newspaper, and she soon after established Positive News Trust, a registered educational charity.[3]

In 2015, Positive News editor-in-chief Sean Dagan Wood established a co-operative as the parent organisation of Positive News' publishing company.[4] Supporters of Positive News were invited to become co-owners in the new co-operative, via a community share offer.[5] Through its 30-day #OwnTheMedia crowdfunding campaign in June 2015, Positive News was invested in by more than 1,500 of its readers in 33 countries, age 18–89, raising more than £260,000.[6] Positive News was the first media organisation in the world to offer community shares globally through crowdfunding. Its #OwnTheMedia campaign was also the first community share issue to run on the Crowdfunder UK online crowdfunding platform.[7]

In January 2016, Positive News relaunched as a magazine with an increased emphasis on the quality of the journalism and of the design of the publication.[8]

Constructive journalism
Positive News has supported the establishment of similar publishing initiatives worldwide, including Noticias Positivas, which was founded in Argentina in 2003 by Andrea Méndez Brandam and in Spain in 2002 by the Asociación de Noticias Positivas, and which is independent of Positive News.

In 2014 Positive News in collaboration with the Constructive Journalism Project established 'constructive journalism' as a recognised field within the media industry in the United Kingdom, through delivering training programmes to journalists and journalism students.[9] Positive News is among an increasing number of media organisations practising constructive journalism
                    </p>
                  </div>
                </div>
              
             
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/*  */}
        {/*  */}


        <div className=" container-fluid mt-5" id="product">
          <h2> News Category</h2>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img1"
                  alt=""
                />

                <div className="overlay">
                 

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                    data-toggle=""
                    data-target=""
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
               
                <h3>+Ve News</h3>
             
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnp-mcLzCr-4HFLSHP6dZri32XsUhgZiV49B4bZGESw63zfpB1&usqp=CAU"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
                

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
            
                <h3>-VE News</h3>
              
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3  animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img1"
                  alt=""
                />
                <div className="overlay">
               

                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Add to Cart"
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <div className="product-bottom text-center">
              
                <h3>Neutral News</h3>
             
              </div>
            </div>
            {/*  */}
      
          </div>
          <div
            className="modal show product-view"
            id="quickModel"
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-dialog product-big-img">
                <img
                  src="https://recipes.timesofindia.com/recipes/homemade-chocolate/photo/54407737.cms"
                  className=" mt-2"
                  alt=""
                />
              </div>
         
            </div>
          </div>
        </div>
      
        <div className="container col-md-2">
          <a className="btn shop text-center mx-auto block" href={"/Showitems"}>
            View More
          </a>
        </div>

        <section >
        <div className="row">
              <div className="col-lg-6 wow fadeInLeft animated">
              
                <div className=" address clearfix address1">
                  <h1>Address</h1>
                  <p className="address1">
                    We are trying to connect small and large farmers to sell
                    their quality product to the diffent places.
                  </p>
                  <p className="address1">If any suggestions or tips let us know</p>
                </div>
                <ul className="social-link">
                  <li >
                    <a href="(0)">
                      <i className="fa fa-twitter "></i>
                    </a>
                  </li>
                  <li className="facebook animated bounceIn wow delay-03s animated">
                    <a href="(0)">
                      <i className="fa fa-facebook "></i>
                    </a>
                  </li>
                  <li className="pinterest animated bounceIn wow delay-04s animated">
                    <a href="(0)">
                      <i className="fa fa-pinterest "></i>
                    </a>
                  </li>
                  <li className="dribbble animated bounceIn wow delay-06s animated">
                    <a href="(0)">
                      <i className="fa fa-instagram "></i>
                    </a>
                  </li>
               
                
                </ul>
              </div>
              <div className="col-lg-6 wow fadeInUp delay-06s animated">
                <div className="form">
                <h1 className="address2">Contact Us</h1>
                  <div id="sendmessage" className="address2">
                    Sent Message Thank you!
                  </div>
                  <div id="errormessage"></div>
                  <form
                    action=""
                    method="post"
                    role="form"
                    className="contactForm"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control input-text"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control input-text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>

                    <button type="submit" className="btn input-btn">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
              
            </div>
      
        </section>
     
        {/*  */}
        {/*  */}
        {/*  */}

        <section className="subscribe-section">
  <div className="subscribe-form">
  <form action="#" className="subscribe-form">
    <label for="text"className="clr" >Join our exclusive newsletter</label>
    <input type="email" name="email" className="clr" placeholder="Enter your email address"/>
    <span className="submit">
      <input type="submit" value="subscribe"/> <a  className="clr" >Subscribe</a>
    </span> 
  </form>
</div>
</section>
        {/*  */}
        {/*  */}
      </Fragment>
    );
  }
}

export default Home;
