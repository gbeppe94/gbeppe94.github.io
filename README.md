<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <section id="home">
    <h1>Welcome to my website</h1>
    <p>This is a simple example of a website that can be hand-coded using HTML, CSS, and JavaScript.</p>
  </section>
  <section id="about">
    <h2>About Us</h2>
    <p>We are a small business that specializes in web development and design.</p>
  </section>
  <section id="services">
    <h2>Our Services</h2>
    <ul>
      <li>Web Design</li>
      <li>Web Development</li>
      <li>E-commerce Solutions</li>
    </ul>
  </section>
  <section id="contact">
    <h2>Contact Us</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br>
      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea><br>
      <input type="submit" value="Send">
    </form>
  </section>
  <footer>
    <p>Copyright © 2022 My Website</p>
  </footer>
  <script src="script.js"></script>
</body>
</html>
