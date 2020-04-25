import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";

class AdminHome extends Component {
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div class="card text-center">
                  <img class="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div class="card-body">
                    <h4 class="card-title">Products</h4>
                    <p class="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

      
<section class="counts section-bg mt-5">
        <div className=" container-fluid mt-5" id="product">
          <h2> List Of News</h2>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                  className="img1"
                  alt=""
                />
              <div className="product-bottom text-center">
                            
                            <h3>News Title</h3>
                            <h4>News Description</h4>
                        
                       
                          </div>
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
               
               
             
              </div>
            </div>
            {/*  */}
            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                  src="https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                  className="img1"
                  alt=""
                />
           <div className="product-bottom text-center">
                            
           <h3>News Title</h3>
                            <h4>News Description</h4>
                      
                          </div>
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
               
               
             
              </div>
            </div>

              <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                 src="https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                  className="img1"
                  alt=""
                />
         <div className="product-bottom text-center">
                            
         <h3>News Title</h3>
                            <h4>News Description</h4>
                       
                          </div>
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
               
               
             
              </div>
            </div>

              <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                src="https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                  className="img1"
                  alt=""
                />
           <div className="product-bottom text-center">
                            
           <h3>News Title</h3>
                            <h4>News Description</h4>
                        
                          </div>
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
               
               
             
              </div>
            </div>

              <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                 src="https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                  className="img1"
                  alt=""
                />
               <div className="product-bottom text-center">
                            
               <h3>News Title</h3>
                            <h4>News Description</h4>
                      
                          </div>
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
               
               
             
              </div>
            </div>


              <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                 src="https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                  className="img1"
                  alt=""
                />
            <div className="product-bottom text-center">
                            
            <h3>News Title</h3>
                            <h4>News Description</h4>
                   
                          </div>
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
               
               
             
              </div>
            </div>


              <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                 src="https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                  className="img1"
                  alt=""
                />
               <div className="product-bottom text-center">
                            
               <h3>News Title</h3>
                            <h4>News Description</h4>
                         
                          </div>
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
               
               
             
              </div>
            </div> 


            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
                src="https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                  className="img1"
                  alt=""
                />
             <div className="product-bottom text-center">
                            
             <h3>News Title</h3>
                            <h4>News Description</h4>
                       
                          </div>
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
               
               
             
              </div>
            </div>


            <div className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated">
              <div className="product-top">
                <img
             src="https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                  className="img1"
                  alt=""
                />
               <div className="product-bottom text-center">
                            
               <h3>News Title</h3>
                            <h4>News Description</h4>
                 
                          </div>
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
               
               
             
              </div>
            </div>
          </div>
     
          </div>
     
        </section>
      </Fragment>
    );
  }
}

export default AdminHome;
