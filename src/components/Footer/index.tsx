"use client";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/illustrations/logo.png" alt="Company Logo" />
            <img src="/illustrations/logoName.png" alt="Company Name" />
            <p>Support Inquiries</p>
            <a href="mailto:support@laornamental.com">
            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.63024 21.9928H7.90758V13.7528L3.22021 10.1367V20.5503C3.22021 21.3407 3.84901 21.9928 4.63024 21.9928Z" fill="#4285F4"/>
<path d="M19.1113 21.9928H22.3887C23.1699 21.9928 23.7987 21.3407 23.7987 20.5305V10.1367L19.1304 13.7726V21.9928H19.1113Z" fill="#34A853"/>
<path d="M19.1113 7.46951V13.773L23.7796 10.1371V8.20064C23.7796 6.40247 21.798 5.37495 20.407 6.46175L19.1113 7.46951Z" fill="#FBBC04"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.88867 13.7529V7.46924L13.4906 11.8362L19.0926 7.46924V13.7727L13.5097 18.1199L7.88867 13.7529Z" fill="#EA4335"/>
<path d="M3.22021 8.18085V10.1173L7.88853 13.7532V7.46948L6.57378 6.44196C5.20187 5.37492 3.22021 6.40244 3.22021 8.18085Z" fill="#C5221F"/>
</svg>
support@laornamental.com</a>
            <div className="social-icons">
              <a href="#"><img src="/icons/Instagram.png" alt="Instagram" /></a>
              <a href="#"><img src="/icons/Facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="/icons/Telegram.png" alt="Telegram" /></a>
              <a href="#"><img src="/icons/Youtube.png" alt="YouTube" /></a>
              <a href="#"><img src="/icons/Twitter.png" alt="Twitter" /></a>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h3>Maker</h3>
              <ul>
                <li><a href="#">Be a Maker</a></li>
                <li><a href="#">Explore Makers</a></li>
                <li><a href="#">Maker FAQs</a></li>
                <li><a href="#">Maker Blogs</a></li>
              </ul>
            </div>
            <div>
              <h3>Gates</h3>
              <ul>
                <li><a href="#">Garden Gates</a></li>
                <li><a href="#">Driveway</a></li>
                <li><a href="#">Customize</a></li>
              </ul>
            </div>
            <div>
              <h3>Fence</h3>
              <ul>
                <li><a href="#">Steel</a></li>
                <li><a href="#">Aluminium</a></li>
                <li><a href="#">Custom</a></li>
              </ul>
            </div>
            <div>
              <h3>All Categories</h3>
              <ul>
                <li><a href="/#featured-gates">Gates</a></li>
                <li><a href="/#featured-fences">Fences</a></li>
                <li><a href="#/featured-railings">Railings</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Customization</a></li>
                <li><a href="#">Special Order</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 L.A Ornamental & Rack Corp. All Rights Reserved.</p>
        </div>
      </div>
      <style jsx>{`
        footer {
          background-color:#08b7d2;
          color: #fff;
          padding: 40px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-logo {
          flex: 1 1 250px;
          border-right: 1px solid #fff;
        }

        .footer-logo img {
          max-width: 150px;
          margin-bottom: 10px;
        }
        footer a {
          display: flex;
          align-items: center;
        }
          
        .footer-logo p {
          margin: 5px 0;
        }

        .social-icons {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .social-icons img {
          width: 24px;
          height: 24px;
        }

        .footer-links {
          display: flex;
          flex: 2 1 600px;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-links h3 {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
        }

        .footer-links ul li {
          margin-bottom: 8px;
        }

        .footer-links ul li a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links ul li a:hover {
          color: green;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-logo {
            border-right: none;
            margin-bottom: 20px;
          }

          .footer-links {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }

          .footer-links > div {
            margin-bottom: 20px;
          }

          .footer-links h3 {
            font-size: 14px;
            border-bottom: 1px solid #fff;
          }

          .footer-links ul li {
            margin-bottom: 10px;
          }

          .footer-bottom {
            font-size: 12px;
            margin-top: 30px;
          }
        }
      `}</style>
    </footer>
  );
}