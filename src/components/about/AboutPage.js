import React, { Component } from 'react'

class AboutPage extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="container-fluid dashboard-content">
                    <div className="row">
                        <div className="col-xl-12">


                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="page-header" id="top">
                                        <h2 className="pageheader-title">&nbsp; </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="page-header" id="top">
                                        <h2 className="pageheader-title text-center">About us </h2>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h3  >Application is created mainly to help you based on problem you are looking for, choose your problem based on it related slokas will be displayed on screen</h3>
                                </div>
                            </div> */}

                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h3 >Any suggestion or improvement please drop mail <a href="mailto:amit.naik8103@gmail.com">amit.naik8103@gmail.com</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;