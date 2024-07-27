import React from 'react';
import './App.css';

function HomePage() {
  return (
    <div className="home">
      <header>
        <h1>Psy-X</h1>
      </header>
      
      <main>
        <section className="hero">
          <h2>Bem-vindo à Psy-X</h2>
          <p>Descubra nossa coleção de óculos estilosos e únicos</p>
          <button>Ver Produtos</button>
        </section>
        
        <section className="featured-products">
          <h3>Produtos em Destaque</h3>
          {/* Aqui você pode adicionar alguns produtos em destaque */}
        </section>
        
        <section className="about-us">
          <h3>Sobre a Psy-X</h3>
          <p>Somos especialistas em óculos de alta qualidade e design inovador.</p>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 Psy-X. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default HomePage;