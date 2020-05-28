import React from "react"
import ReactHtmlParser from "react-html-parser"

const Newsletter = props => {
  return (
    <section className="bg-light-gray wow fadeIn">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <h3 className="h-3 alt-font font-weight-600 text-extra-dark-gray">
              {props.content.title}
            </h3>
            <p className="width-65 mx-auto md-width-100">
              {props.content.subtitle}
            </p>
            <form
              id="newsletter-form"
              method="post"
              className="position-relative"
            >
              <div
                id="success-subscribe-newsletter"
                className="no-margin-lr"
              ></div>
              <div className="input-group margin-40px-tb">
                <input
                  name="email"
                  id="email"
                  aria-label="* Email Address"
                  type="text"
                  placeholder="* Email Address"
                  className="extra-big-input border-0 form-control"
                />
                <div className="input-group-append">
                  <button
                    id="button-subscribe-newsletter"
                    type="submit"
                    className="btn btn-large bg-white text-deep-pink"
                  >
                    <i className="ti-email icon-small m-0"></i>
                  </button>
                </div>
              </div>
            </form>
            {ReactHtmlParser(props.content.description)}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Newsletter
