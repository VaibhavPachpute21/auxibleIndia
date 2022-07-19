class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section>
        <div class="nv-bg-dark">
            <nav class="container navbar navbar-expand-lg navbar-dark ">
                <div class="container-fluid">
                    <a href="#" class="navbar-brand"><img src="./assets/white logo.png" class="navBrand" /></a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto">
                            <a href="#" class="nav-item nav-link">Home</a>
                            <a href="#" class="nav-item nav-link">Company</a>
                            <li class="nav-item dropdown  ">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Solution
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Audio</a></li>
                                    <li><a class="dropdown-item" href="#">Video</a></li>
                                    <li><a class="dropdown-item" href="#">Aucostic</a></li>
                                </ul>

                            </li>
                            <li class="nav-item dropdown  ">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Brand
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">OHM</a></li>
                                    <li><a class="dropdown-item" href="#">British Aucostick</a></li>
                                </ul>

                            </li>
                            <li class="nav-item dropdown  ">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Sector
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Education</a></li>
                                    <li><a class="dropdown-item" href="#">Corporate</a></li>
                                    <li><a class="dropdown-item" href="#">Hospitality</a></li>
                                </ul>

                            </li>
                             
                            <a href="#" class="nav-item nav-link">Resources</a>
                            <a href="#" class="nav-item nav-link btn btn-danger">CONTACT US <i
                                    class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </section>
          `
    }
}

//Footer

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
          <!-- Footer -->
          <section id="footer">
          <div class="container pt-5 pb-2">
              <div class="row">
                  <div class="col-md-5">
                      <div><img src="./assets/white logo.png" class="navBrand" alt=""></div>
                      <div class="pt-3">
                          <p>Our hotel is an image of quality and profesionalism combined with hard work and precision.
                              You can expect only the best services from our staff.</p>
                      </div>
                      <div class="pt-3 social">
                          <i class="bi bi-facebook"></i>
                          <i class="bi bi-twitter"></i>
                          <i class="bi bi-google"></i>
                      </div>
                  </div>
                  <div class="col-md-2">
                      <ul class="text-left">
                      <li> <strong>Privacy</strong></li>
                          <li><a href="">Career</a></li>
                          <li><a href="">About Us</a></li>
                          <li><a href="">Contact Us</a></li>
                          <li><a href="">Services</a></li>
                      </ul>
                  </div>
                  <div class="col-md-2">
                      <ul class="text-left">
                      <li><strong>Privacy</strong></li>
                          <li><a href="">Career</a></li>
                          <li><a href="">About Us</a></li>
                          <li><a href="">Contact Us</a></li>
                          <li><a href="">Services</a></li>
                      </ul>
                  </div>
                  <div class="col-md-3">
                      
                      <ul class="container">
                      <strong>Contact Info</strong>
                          <li><a href="tel:+0120413282"><i class="bi bi-telephone"></i> +91 120 413 2825 </a></li>
                          <li><a href="#"><i class="bi bi-globe"></i> www.auxibleindia.com</a></li>
                          <li><a href="mailto:info@auxibleindia.com"><i class="bi bi-envelope"></i> info@auxibleindia.com</a></li>
                      </ul>
                  </div>
              </div>
              <div class="row pt-5">
                  <div class="col-xl-6 col-lg-6  text-md-left">
                      <div class="d-block">
                          <p>Copyright ©2020 All rights reserved | This template is made with love by Marian</p>
                      </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 d-none d-lg-flex justify-content-end text-right">
                      <div class="d-flex">
                          <p>www.auxibleindia.com</p>
                      </div>
                  </div>
  
              </div>
          </div>
      </section>
  <!-- Footer -->
  
        `

    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
