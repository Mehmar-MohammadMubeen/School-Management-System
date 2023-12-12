
document.addEventListener("DOMContentLoaded", function () {
    function addNavigationBar() {
      const navContainer = document.getElementById("navContainer");
      navContainer.innerHTML = `
          <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid" style="display: flex; justify-content: space-between">
                  <a class="navbar-brand" href="#">LMS</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                          <li class="nav-item">
                              <a class="nav-link active me-2" aria-current="page" href="#">Home</a>
                          </li>
                          <li class="nav-item">
                          <a class="nav-link active me-2" aria-current="page"
                              href="../HTML/techer.html">Teachers</a>
                              <li class="nav-item">
                              <a class="nav-link active me-2" aria-current="page"
                                  href="../HTML/student.html">Students</a>
                      </li>
                          <li class="nav-item">
                              <a class="nav-link active me-2" aria-current="page" href="../Html-files/Class.html">Classes</a>
                          </li>
                          
                          </div>
                          <div class="mx-2">
                              <i class="far fa-user-circle fa-2x"></i>
                          </div>
                      </div>
                      </ul>
                  </div>
              </div>
          </nav>
      `;
    }
  
    // Update the welcome message dynamically
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = "Welcome Mirjam";
  
    function addMainContent() {
      const mainContent = document.getElementById("mainContent");
      mainContent.innerHTML = `
          <section id="cards">
          <article class="box-container" id="studentsCard" style="height: 200px; width: 300px">
                  <h2>22</h2>
                  <p>number of students</p>
              </article>
              <article class="box-container" id="teachersCard"style="height: 200px; width: 300px">
                  <h2>3</h2>
                  <p>number of teachers</p>
              </article>
              <article class="box-container" id="classesCard"style="height: 200px; width: 300px">
                  <h2>5</h2>
                  <p>number of classes</p>
              </article>
          </section>
      `;
    }
    function addHeading() {
      const heading = document.createElement("h2");
      heading.style.color = "black";
      heading.style.marginLeft = "40px";
      heading.style.marginTop = "100px";
      heading.textContent = "Hicoders 23/24 LMS";
  
      document.body.insertBefore(
        heading,
        document.querySelector("main").nextSibling
      );
    }
    function addParagraph() {
      const paragraph = document.createElement("p");
      paragraph.style.color = "black";
      paragraph.style.marginLeft = "40px";
      paragraph.innerHTML = `
              This is a wider card with supporting text below as a natural lead-in to
              additional. <br />This content is a little bit longer.
            `;
  
      document.body.insertBefore(
        paragraph,
        document.querySelector("main").nextSibling.nextSibling
      );
    }
    function addFooter() {
      const footerContainer = document.getElementById("footerContainer");
      footerContainer.innerHTML = `
          <footer class="text-left"
              style="background-color: grey; position: absolute; bottom: 0; height: 8%; width: 100%;">
              <p style="color: black; margin-top: 10px; margin-left: 40px;">
                  <a href="/about-us" style="color: black; text-decoration: none;">About Us</a>
                  <a href="/contact" style="color: black; text-decoration: none; margin-left: 20px;">Contact</a>
              </p>
          </footer>
      `;
    }
    addNavigationBar();
    addMainContent();
    addFooter();
    addHeading();
    addParagraph();
  });
  