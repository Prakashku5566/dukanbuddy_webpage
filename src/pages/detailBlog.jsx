import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import blogs from "../pages/viewAllBlogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs[parseInt(id)];

  if (!blog) {
    return <p>Blog not found!</p>;
  }
  console.log("id:", id);
  console.log("blogs:", blogs);
  console.log("blog:", blog);

  return (
    <Container className='mt-5'>
      <Row className='mb-4'>
        <Col>
          <Card className='fancy-card shadow-lg border-0 rounded'>
            <Card.Img
              variant='top'
              src={blog.image}
              className='img-fluid rounded-start'
              alt={blog.title}
              style={{
                height: "400px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Card.Body>
              <Card.Title className='text-primary display-6'>
                {blog.title}
              </Card.Title>
              <Card.Text>{blog.description}</Card.Text>
              <Card.Text>{blog.content}</Card.Text>
              <Button variant='primary' href='/ViewAllBlogs'>
                Back to Blogs
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
