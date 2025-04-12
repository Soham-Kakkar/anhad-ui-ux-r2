"use client";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>About Smith's Gates</h3>
            <p>With over 20 years of experience, we specialize in creating beautiful, secure, and durable custom gates for residential and commercial properties.</p>
          </div>
          <div className="footer-col">
            <h3>Products</h3>
            <ul>
              <li><a href="#">Driveway Gates</a></li>
              <li><a href="#">Garden Gates</a></li>
              <li><a href="#">Fence Systems</a></li>
              <li><a href="#">Gate Operators</a></li>
              <li><a href="#">Security Systems</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Custom Design</a></li>
              <li><a href="#">Installation</a></li>
              <li><a href="#">Repair & Maintenance</a></li>
              <li><a href="#">Automation Upgrades</a></li>
              <li><a href="#">Security Integration</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul>
              <li>5765 N.W. 32nd Street</li>
              <li>Miami, Florida 33126</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@smithsgates.com</li>
              <li>Hours: Mon-Fri 8am-6pm</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © 2025 Smith's Gates. All Rights Reserved.
        </div>
      </div>
      <style jsx>{`
            footer {
            background-color: #222;
            color: white;
            padding: 50px 20px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            margin-bottom: 30px;
        }
        
        .footer-col h3 {
            color: var(--accent);
            margin-bottom: 20px;
            font-size: 18px;
        }
        
        .footer-col ul {
            list-style: none;
        }
        
        .footer-col ul li {
            margin-bottom: 10px;
        }
        
        .footer-col a {
            color: #aaa;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-col a:hover {
            color: white;
        }
        
        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #444;
            color: #aaa;
            font-size: 14px;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .feature-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .footer-content {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        `}</style>
    </footer>
  );
}