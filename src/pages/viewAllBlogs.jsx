import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import gst from "../../img/1.png";
import CommonPage from "./CommonPage";
import finacial from "../../img/7.png";
import funding from "../../img/10.png";
import tax from "../../img/13.png";
import smallBusiness from "../../img/11.png";
import SeoMeta from "./SeoMeta";

const blogs = [
  {
    id: 1,
    image: gst,
    link: "/gst-benifit-page",
  },
  {
    id: 2,
    image: finacial,
    link: "/funding-option",
  },
  {
    id: 3,
    image: tax,
    link: "/tax-guide",
  },
  {
    id: 4,
    image: funding,
    link: "/government-schemes",
  },
  {
    id: 5,
    image: smallBusiness,
    link: "/business-registration",
  },
];

const ViewAllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <SeoMeta
        title='Business Blogs & Guides for MSMEs in India | Dukanbuddy'
        description='Explore our collection of blogs on GST benefits, funding options, tax guides, government schemes, and small business registration. Learn and grow your MSME.'
        canonicalUrl='https://dukanbuddy.com/blogs'
        ogTitle='Business Blogs & Guides for MSMEs'
        ogDescription='Read expert-written blogs about funding, taxation, registration, and growth strategies for MSMEs in India. Dukanbuddy'
        ogImage='https://dukanbuddy.com/og-image.jpg'
        ogUrl='https://dukanbuddy.com/blogs'
        ogType='website'
      />
      <CommonPage>
        <div className='mt-2'>
          <h2 className='text-center mb-4'>
            Blogs That Help You Understand the Business
          </h2>
          <hr
            style={{ backgroundColor: "#007bff", height: 2, marginBottom: 30 }}
          />
          {Array(Math.ceil(currentBlogs.length / 2))
            .fill()
            .map((_, rowIndex) => (
              <Row className='mb-4' key={rowIndex}>
                {currentBlogs
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((blog) => (
                    <Col md={6} key={blog.id}>
                      <Card className='fancy-card shadow-lg border-0 rounded'>
                        <div className='position-relative'>
                          <Card.Img
                            src={blog.image}
                            className='img-fluid rounded'
                            style={{
                              height: "300px",
                              width: "100%",
                              objectFit: "cover",
                            }}
                            alt='Blog Image'
                          />
                          <Link
                            to={blog.link}
                            className='stretched-link'
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              zIndex: 1,
                              width: "100%",
                            }}
                          >
                            <div className='card-img-overlay d-flex justify-content-start align-items-end'>
                              <Button
                                variant='primary'
                                className='btn'
                                style={{
                                  marginBottom: "30px", // Adjusted value
                                  marginLeft: "10px",
                                }}
                              >
                                Read More
                              </Button>
                            </div>
                          </Link>
                        </div>
                      </Card>
                    </Col>
                  ))}
              </Row>
            ))}
          <Row className='mt-4'>
            <Col className='d-flex justify-content-center'>
              <ul className='pagination'>
                {Array(Math.ceil(blogs.length / blogsPerPage))
                  .fill()
                  .map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <Button
                        onClick={() => paginate(index + 1)}
                        className='page-link'
                      >
                        {index + 1}
                      </Button>
                    </li>
                  ))}
              </ul>
            </Col>
          </Row>
        </div>
      </CommonPage>
    </>
  );
};

export default ViewAllBlogs;
