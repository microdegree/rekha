import React, { Component } from "react";
import "../CSS/donor.css";

export default class addDonors extends Component {
  render() {
    return (
      <div className="container itmtop">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper wrapper--w900 ">
                <div class="card cardH card-6 ">
                  <div class="card-heading m-4">
                    <h2 class="title address3">Add News</h2>
                  </div>
                  <div class="card-body">
                    <form method="POST">
                      <div class="form-row frow">
                        <div class="name">News Title:</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="iname"
                          />
                        </div>
                      </div>
                   

                      <div class="form-row frow">
                        <div class="name">Upload Image:</div>
                        <div class="value">
                          <div class="input-group js-input-file">
                            <input
                              class="input-file"
                              type="file"
                              name="file_doc"
                              id="file"
                            />
                            <label class="label--file" for="file">
                              Choose file
                            </label>
                            <span class="input-file__info">No file chosen</span>
                          </div>
                          <div class="label--desc">
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
                          </div>
                        </div>
                      </div>
              
                     
                     
                      <div class="form-row frow">
                        <div class="name">News Description</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-row frow">
                        <div class="name">Category</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      
                    </form>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn--radius-2 btn-gray" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
