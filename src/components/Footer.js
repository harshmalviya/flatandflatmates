import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white ">
      <div className="p-5">
        <h3>Most Searched on Flat and Flatmates</h3>
        <p className="m-0" style={{ color: '#E4E4E480' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quas
          cumque, molestiae a veniam quam? Placeat maiores est, maxime ut,
          sequi, vitae quod quibusdam sint ipsam inventore dolorem! Molestias
          sapiente perferendis ut necessitatibus fugiat aspernatur ab, aliquam
          optio soluta ratione eius error culpa tenetur amet ullam. Expedita,
          corporis architecto. Rerum, distinctio quo unde quam obcaecati iure
          sequi esse laborum suscipit culpa ducimus dicta incidunt a veritatis,
          voluptatibus consequatur, voluptates maiores quis illo assumenda! Vero
          id, aliquam qui a voluptatum deserunt magni sequi eos, libero
          doloremque, eaque exercitationem illo adipisci eveniet. Alias eaque a
          delectus praesentium, similique adipisci. Ipsam illo eaque assumenda,
          odio corporis quo saepe impedit necessitatibus possimus, ullam libero
          aliquam sint illum, quis doloremque quod nulla mollitia sed? Voluptas
          illum inventore aliquid earum repellat. Sunt sequi quisquam magni
          neque suscipit ipsa facere asperiores nihil vitae quod expedita fuga
          aliquam labore dignissimos, inventore maiores error ex repellat, autem
          exercitationem unde fugiat quae placeat. Ipsam, numquam ea. Mollitia
          incidunt eligendi minima doloremque delectus quis ullam! Quas ab, nam
          officiis in perferendis consequatur voluptatibus laudantium quam
          voluptate neque perspiciatis fugiat vel impedit, maxime aliquid, ad
          veniam tenetur nihil doloremque corrupti illum incidunt? Quos laborum
          ipsa debitis earum, fuga aliquid nostrum accusamus veniam.
        </p>
      </div>
      <div className="px-5 py-5 border-bottom border-top border-2 border-lightDark d-flex align-items-start gap-5">
        <div>
          <img src="/logo.svg" alt="" style={{height: '100px', width: '100px'}} />
        </div>
        <div>
          <h2>Flat and Flatmates</h2>
          <p>© Copyright FlatandFlatmates</p>
          <div className="d-flex gap-3">
            <span>
              <i className="fa-brands fa-facebook display-4"></i>
            </span>
            <span>
              <i className="fa-brands fa-linkedin display-4"></i>
            </span>

            <span>
              <i className="fa-brands fa-instagram display-4"></i>
            </span>
            <span>
              <i className="fa-brands fa-twitter display-4"></i>
            </span>
          </div>
        </div>
        <div className="container ">
          <div className="d-flex justify-content-between row">
            <ul
              className="col"
              style={{ listStyle: 'none', margin: '0', padding: '0' }}
            >
              <li>
                <h4 href="#">Company</h4>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  Report a problem
                </a>
              </li>
            </ul>
            <ul
              className="col"
              style={{ listStyle: 'none', margin: '0', padding: '0' }}
            >
              <li>
                <h4 href="#">Policies</h4>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  Privacy and Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  Ipsum
                </a>
              </li>
            </ul>
            <ul
              className="col"
              style={{ listStyle: 'none', margin: '0', padding: '0' }}
            >
              <li>
                <h4 href="#">Help</h4>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  List your property
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  Talk to our Expert
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  lorem
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-linkGray">
                  Ipsum
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="container py-3">
        <div className="row">
          <div className="col text-end">
            <span className="text-lightDark" style={{ fontSize: '1rem' }}>
              Mail Us:
            </span>
            &nbsp;
            <a
              href="mailTo:help@flatandflatmates.com"
              className="text-decoration-none text-white fs-5"
            >
              help@flatandflatmates.com
            </a>
          </div>
          <div className="col text-start">
            <span className="text-lightDark" style={{ fontSize: '1rem' }}>
              Address:
            </span>
            &nbsp;
            <span className="text-white fs-5"> A-50 Gurugram, Harayana</span>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
