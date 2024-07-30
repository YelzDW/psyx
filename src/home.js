import React from 'react';
import './App.css';
import logo from './img/logo1.png';

function HomePage() {
  return (
    <div class="background">
    <div className="home">
      <header>
        <h1>
          <img src={logo} alt="PSY-X Logo" className="logo1" />  {}
          </h1>
      </header>
      
      <main>
        <section className="hero">
          <h2>Welcome to PSY-X</h2>
          <p>Discover our collection of stylish and unique glasses</p>
          <div class="containerbanner1">
  <div>
    <div class="banner1">
      <h2>RED</h2>
    </div>
  </div>
  <div>
    <div class="banner1">
      <h2>BLUE</h2>
    </div>
  </div>
  <div>
    <div class="banner1">
      <h2>ROSE</h2>
    </div>
  </div>
  <div>
    <div class="banner1">
      <h2>DARK</h2>
    </div>
  </div>
</div>
<button class="buttonhome">SHOPPING</button>

        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 Psy-X. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

export default HomePage;