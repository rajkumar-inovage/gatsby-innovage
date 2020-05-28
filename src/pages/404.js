import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FourZeroFour = () => (
  <Layout>
    <SEO title="404" />
        <section id="home" className="p-0 parallax mobile-height wow fadeIn error-page bg-image" data-stellar-background-ratio="0.5">
            <div className="opacity-full bg-extra-dark-gray"></div>
            <div className="container position-relative full-screen">
                <div className="slider-typography text-center">
                    <div className="slider-text-middle-main">
                        <div className="slider-text-middle">
                            <div className="bg-black-opacity-light w-50 mx-auto md-width-80">
                                <div className="padding-fifteen-all sm-padding-20px-all">
                                    <span className="title-extra-large text-white-2 font-weight-600 d-block margin-30px-bottom sm-margin-10px-bottom">404!</span>
                                    <h6 className="text-uppercase text-deep-pink font-weight-600 alt-font d-block margin-5px-bottom">Page Not Found</h6>
                                    <span className="text-medium-gray width-60 d-block mx-auto text-large md-width-100">The page you were looking for could not be found.</span>
                                    <form action="search-result.html" method="post" className="position-relative">
                                        <div className="input-group-404 input-group margin-50px-tb sm-margin-20px-tb">
                                            <input name="text" id="text" type="text" aria-label="Enter your keywords..." placeholder="Enter your keywords..." className="extra-big-input border-none form-control" />
                                            <div className="input-group-append">
                                                <button type="submit" aria-label="Submit" className="btn btn-large bg-white text-medium-gray"><i className="ti-search icon-small m-0 position-raltive top-2"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                    <a href="index.html" className="btn btn-transparent-white btn-medium text-extra-small border-radius-4"><i className="ti-arrow-left margin-5px-right ml-0" aria-hidden="true"></i> Back To Homepage</a>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </Layout>
)

export default FourZeroFour
