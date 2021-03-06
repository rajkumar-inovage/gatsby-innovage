import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import ReactHtmlParser from "react-html-parser"

const Blogssection = props => {
  const getDate = date => {
    const Months = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    )
    const msec = Date.parse(date)
    const d = new Date(msec)
    const month = Months[d.getMonth()]
    const day = d.getDate()
    const year = d.getFullYear()
    return `${day} ${month} ${year}`
  }
  const { wpgraphql } = useStaticQuery(
    graphql`
      {
        wpgraphql {
          posts {
            nodes {
              author {
                name
              }
              date
              title(format: RENDERED)
              uri
              slug
              excerpt(format: RENDERED)
              featuredImage {
                altText
                sourceUrl
                imageFile {
                  childImageSharp {
                    original {
                      height
                      src
                      width
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <>
      <section
        className="wow fadeIn parallax bg-fixed arch-blog-banner"
        style={{
          backgroundImage: `url(${props.content.backgroundimage.imageFile.childImageSharp.original.src})`,
        }}
      >
        <div className="layer bg-layer"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="z-index-9 col-12 extra-small-screen page-title-large d-flex flex-column justify-content-center text-center">
              <h1 className="text-white-2 alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">
                {props.content.title}
              </h1>
              {props.content.subtitle !== "" && (
                <span className="text-white-2 opacity6 alt-font">
                  {props.content.subtitle}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="wow fadeIn">
        <div className="container">
          <div className="row">
            {wpgraphql.posts.nodes ? (
              wpgraphql.posts.nodes.map(
                (
                  { author, date, excerpt, featuredImage, title, slug },
                  index
                ) => (
                  <div
                    key={index}
                    className="col-12 col-lg-3 col-md-6 margin-50px-bottom last-paragraph-no-margin sm-margin-30px-bottom wow fadeInUp"
                  >
                    <div className="blog-post blog-post-style1 text-center text-md-left">
                      <div className="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                        <Link to={`/blogs/${slug}/`}>
                          <img
                            src={
                              featuredImage.imageFile.childImageSharp.original
                                .src
                            }
                            alt={featuredImage.altText}
                            className="mb-0"
                          />
                        </Link>
                      </div>
                      <div className="post-details">
                        <span className="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom">
                          {getDate(date)} | by {author.name}
                        </span>
                        <Link
                          to={`/blogs/${slug}/`}
                          className="post-title text-medium text-extra-dark-gray width-90 d-block md-width-100"
                        >
                          {title}
                        </Link>
                        <div className="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb md-margin-15px-tb"></div>
                        <div className="width-90 sm-width-100">
                          {ReactHtmlParser(excerpt)}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )
            ) : (
              <p>No Products found!</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
export default Blogssection