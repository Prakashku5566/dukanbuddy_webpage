import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaYoutube, FaInstagram, FaShare } from "react-icons/fa";
import digitalimage from "../../img/digitalimage.png";
import gst from "../../img/GST.png";

const blogs = [
  {
    title: "The Future of Digital Marketing",
    description:
      "Explore the latest trends in digital marketing and how businesses can leverage new technologies to reach their target audience.",
    image: digitalimage,
    content:
      "Are you ready to turn your entrepreneurial dreams into reality? If you're considering starting a small business in India, one of the crucial steps you'll need to take is registering your venture. Navigating the registration process can seem daunting, but fear not! In this comprehensive guide, we'll walk you through the step-by-step process of registering your small business under the MSME category in India. From eligibility criteria to required documents and online registration procedures, we've got you covered. Understanding the MSME Category Before diving into the registration process, it's essential to understand what the MSME category entails. MSME stands for Micro, Small, and Medium Enterprises, and these businesses play a vital role in driving economic growth and employment generation in India. The MSME category is classified based on investment in plant and machinery (for manufacturing enterprises) or equipment (for service enterprises) and turnover. Eligibility Criteria To qualify as an MSME, your business must meet certain eligibility criteria outlined by the Government of India. Here's a brief overview: Micro Enterprise: Investment in plant and machinery or equipment does not exceed ₹1 crore and turnover does not exceed ₹5 crore. Small Enterprise: Investment in plant and machinery or equipment is more than ₹1 crore but does not exceed ₹10 crore, and turnover is more than ₹5 crore but does not exceed ₹50 crore. Medium Enterprise: Investment in plant and machinery or equipment is more than ₹10 crore but does not exceed ₹50 crore, and turnover is more than ₹50 crore but does not exceed ₹250 crore. Step-by-Step Registration Process Now, let's break down the registration process into simple, actionable steps: Choose the Type of Business Entity: Decide on the type of business entity you want to register, such as a sole proprietorship, partnership, limited liability partnership (LLP), or private limited company, based on your business goals and requirements. Obtain Digital Signature Certificate (DSC) and Director Identification Number (DIN): If you're registering a company (LLP or private limited), you'll need to obtain DSC and DIN for the directors or partners involved. Name Reservation: Choose a unique name for your business and check its availability through the Ministry of Corporate Affairs (MCA) portal. Once approved, reserve the name for your company. File for Incorporation: Prepare the necessary documents, including Memorandum of Association (MOA), Articles of Association (AOA), and other incorporation documents, and file them with the Registrar of Companies (ROC) along with the requisite fees. Obtain Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN): Apply for PAN and TAN for your business entity through the Income Tax Department. Register for Goods and Services Tax (GST): If your business turnover exceeds the threshold limit specified under GST regulations, register for GST through the GST portal. Register for Other Licenses and Permits: Depending on the nature of your business activities, you may need to obtain additional licenses or permits from regulatory authorities, such as trade licenses, environmental clearances, or industry-specific permits. Required Documents During the registration process, you'll need to submit various documents, including: Identity proof and address proof of the business owner(s) or directors/partners Proof of business address MOA and AOA (for companies) Partnership deed (for partnerships) PAN card and Aadhaar card of the business owner(s) or directors/partners Online Registration Procedures Thanks to digital initiatives by the Government of India, the registration process for small businesses has become more accessible and streamlined. Many registration processes can be completed online through dedicated portals, such as the MCA portal for company registration, GST portal for GST registration, and Ministry of MSME portal for MSME registration. Conclusion Registering your small business in India is a significant milestone on your entrepreneurial journey. By understanding the eligibility criteria, following the step-by-step registration process, and submitting the required documents, you can ensure a smooth and hassle-free registration experience. Remember, compliance with regulatory requirements is essential for the long-term success and sustainability of your business. At Dukan Buddy, we understand the importance of proper registration and compliance for small businesses in India. As your trusted partner in business essentials, we're here to support you every step of the way. From providing guidance on registration procedures to offering a wide range of products and services to meet your business needs, Dukan Buddy is committed to helping your small business thrive in the dynamic Indian market.",
  },
  {
    title: "5 Best and Affordable Scanners for Your Business",
    description:
      "Ready to boost your small business with a reliable barcode scanner? Here are the top five options perfect for small businesses in India.",
    image: digitalimage,
    content: `
      Ready to boost your small business with a reliable barcode scanner? When it comes to streamlining operations, barcode scanners are a game-changer. These handy devices help you manage inventory, track sales, and simplify checkout processes – all with just a swipe of a barcode. If you're in the market for an affordable yet reliable barcode scanner, look no further! We've rounded up the top five options that are perfect for small businesses in India.
      
      **1. TVS BS-C 101 Star Barcode Scanner:**
      - **Price:** Starting from ₹2,000
      - **Features:** The TVS BS-C 101 Star is a budget-friendly powerhouse. With its ergonomic design and fast scanning speed, it's perfect for busy retail environments. Plus, its durable build ensures long-lasting performance, making it an ideal choice for small businesses looking for a reliable barcode scanner that won't break the bank.
      
      **2. Zebra DS2208 Handheld Barcode Scanner:**
      - **Price:** Starting from ₹3,500
      - **Features:** The Zebra DS2208 is a versatile handheld scanner that offers excellent value for money. Its compact design and intuitive interface make it easy to use, while its high-quality scanning capabilities ensure accurate results every time. Whether you're scanning barcodes at the checkout counter or managing inventory in the back room, the Zebra DS2208 has you covered.
      
      **3. Honeywell Eclipse MK5145 Barcode Scanner:**
      - **Price:** Starting from ₹2,800
      - **Features:** The Honeywell Eclipse MK5145 is a budget-friendly yet feature-rich barcode scanner. Its omnidirectional scanning technology allows for quick and easy scanning from any angle, making it perfect for crowded retail spaces. Plus, its durable construction ensures reliable performance even in demanding environments.
      
      **4. Motorola Symbol LS2208 Barcode Scanner:**
      - **Price:** Starting from ₹3,000
      - **Features:** The Motorola Symbol LS2208 is a popular choice among small businesses in India, and for good reason. Its lightweight design and plug-and-play functionality make it easy to set up and use, while its high-performance scanning capabilities ensure fast and accurate results. Plus, its affordable price makes it a smart investment for businesses of all sizes.
      
      **5. TaoTronics TT-BS030 Wireless Barcode Scanner:**
      - **Price:** Starting from ₹2,500
      - **Features:** The TaoTronics TT-BS030 is a wireless barcode scanner that offers the ultimate in convenience and flexibility. Its wireless connectivity allows you to scan barcodes from up to 33 feet away, freeing you from the constraints of cords and cables. Plus, its long battery life ensures uninterrupted scanning throughout the day, making it perfect for small businesses on the go.
    `,
  },
  {
    title: "The Rise of E-commerce",
    description:
      "Discover how e-commerce is transforming the retail landscape and what businesses can do to stay competitive.",
    image: "images/ecommerce.jpg",
    content: "Detailed content about The Rise of E-commerce.",
  },
  {
    title: "Effective Leadership in the Workplace",
    description:
      "Understand the qualities of effective leadership and how leaders can inspire and motivate their teams.",
    image: "images/leadership.jpg",
    content: "Detailed content about Effective Leadership in the Workplace.",
  },
  {
    title: "Innovations in Supply Chain Management",
    description:
      "Explore the latest innovations in supply chain management and how they can improve efficiency and reduce costs.",
    image: "images/supply-chain.jpg",
    content: "Detailed content about Innovations in Supply Chain Management.",
  },
  {
    title: "The Impact of AI on Business",
    description:
      "Learn about the impact of artificial intelligence on various industries and how businesses can integrate AI into their operations.",
    image: "images/ai-business.jpg",
    content: "Detailed content about The Impact of AI on Business.",
  },
  {
    title: "Strategies for Business Growth",
    description:
      "Discover effective strategies for business growth and how companies can expand their market reach.",
    image: "images/business-growth.jpg",
    content: "Detailed content about Strategies for Business Growth.",
  },
  {
    title: "The Importance of Customer Experience",
    description:
      "Understand the significance of customer experience and how businesses can enhance their customer service.",
    image: "images/customer-experience.jpg",
    content: "Detailed content about The Importance of Customer Experience.",
  },
  {
    title: "Financial Management for Small Businesses",
    description:
      "Learn about financial management strategies for small businesses to ensure long-term success.",
    image: "images/financial-management.jpg",
    content:
      "Detailed content about Financial Management for Small Businesses.",
  },
  {
    title: "Adapting to Market Changes",
    description:
      "Explore how businesses can adapt to changing market conditions and remain competitive.",
    image: "images/market-changes.jpg",
    content: "Detailed content about Adapting to Market Changes.",
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
    <Container className='mt-5'>
      <h2 className='text-center mb-4'>
        Blogs That Help You Understand the Business
      </h2>
      <hr style={{ backgroundColor: "#007bff", height: 2, marginBottom: 30 }} />
      {Array(Math.ceil(currentBlogs.length / 2))
        .fill()
        .map((_, rowIndex) => (
          <Row className='mb-4' key={rowIndex}>
            {currentBlogs
              .slice(rowIndex * 2, rowIndex * 2 + 2)
              .map((blog, colIndex) => {
                let imageSrc;
                if (rowIndex === 0 && colIndex === 0) {
                  imageSrc = digitalimage;
                } else if (rowIndex === 0 && colIndex === 1) {
                  imageSrc = gst;
                } else {
                  imageSrc = blog.image;
                }

                return (
                  <Col md={6} key={colIndex}>
                    <Card className='fancy-card shadow-lg border-0 rounded'>
                      <Row className='g-0'>
                        <Col md={5}>
                          <Card.Img
                            variant='top'
                            src={imageSrc}
                            className='img-fluid rounded-start'
                            alt={blog.title}
                            style={{
                              height: "270px",
                              width: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Col>
                        <Col md={7}>
                          <Card.Body>
                            <Card.Title className='text-primary display-6'>
                              {blog.title}
                            </Card.Title>
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                              <div>
                                <Link
                                  to={`/blog/${
                                    indexOfFirstBlog + rowIndex * 2 + colIndex
                                  }`}
                                  className='btn btn-primary'
                                >
                                  Read More
                                </Link>
                              </div>
                              <div>
                                <Button
                                  className='btn btn-outline-primary ms-2'
                                  type='button'
                                >
                                  <FaShare /> Share
                                </Button>
                              </div>
                            </div>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        ))}
      <Row className='mt-4'>
        <Col className='text-center'>
          <Button variant='danger' className='me-2'>
            <FaYoutube size={20} /> Subscribe us on YouTube
          </Button>
          <Button variant='secondary'>
            <FaInstagram size={20} /> Follow us on Instagram
          </Button>
        </Col>
      </Row>
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
    </Container>
  );
};

export default ViewAllBlogs;
