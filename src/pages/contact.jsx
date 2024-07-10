// import { useEffect } from "react";
import CommonPage from "./CommonPage";

const ContactPage = () => {
  return (
    <CommonPage>
      <h1 className='text-center mb-4 text-white'>Contact Us</h1>

      <p className='lead text-center mb-5 text-white'>
        We would love to hear from you! Whether you have a question about our
        services, need assistance, or just want to give feedback, we are here
        for you.
      </p>

      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <div className='card h-100'>
            <div className='card-body d-flex flex-column'>
              <h2 className='text-primary'>Get in Touch</h2>
              <p className='text-primary'>
                For any inquiries or support, feel free to reach out to us. We
                are here to help and answer any questions you might have.
              </p>
              <div className='mt-4 d-flex justify-content-between'>
                <div>
                  <h5 className='text-primary'>Email:</h5>
                  <p className='text-primary'>Contact@dukanbuddy.com</p>
                </div>
                <div>
                  <h5 className='text-primary'>Phone:</h5>
                  <p className='text-primary'>+91 6372-184-169</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonPage>
  );
};

export default ContactPage;
