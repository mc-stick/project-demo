import React from "react";
import ReactPlayer from "react-player";
import { Play, Palette, BookOpen, Layout, Menu } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          StudioVibe
        </div>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Inicio
          </a>
          <a href="#articulos" className="hover:text-blue-600 transition">
            Artículos
          </a>
          <a href="#disenadores" className="hover:text-blue-600 transition">
            Diseñadores
          </a>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition">
          Contacto
        </button>
      </nav>

      {/* Hero Banner con Video */}
      <header className="relative bg-slate-900 h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            El Futuro del Diseño Visual
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-8">
            Creamos experiencias digitales que conectan marcas con personas a
            través del movimiento y la estética.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 flex items-center gap-2">
              <Play size={20} /> Ver Showreel
            </button>
          </div>
        </div>
      </header>

      {/* Sección de Artículos (Grid) */}
      <section id="articulos" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <BookOpen className="text-indigo-600" />
          <h2 className="text-3xl font-bold">Últimos Artículos</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="h-48 bg-slate-200">
                <img
                  src={`https://picsum.photos/seed/${item + 10}/600/400`}
                  alt="blog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-indigo-600 text-sm font-bold uppercase">
                  Tendencias
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">
                  Cómo el Minimalismo dominará el 2026
                </h3>
                <p className="text-slate-600 mb-4">
                  Exploramos las nuevas fronteras del diseño de interfaces y la
                  psicología del color.
                </p>
                <button className="text-slate-900 font-semibold underline decoration-indigo-400">
                  Leer más
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Espacio para Diseñadores (Layout Especial) */}
      <section id="disenadores" className="bg-indigo-900 py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="inline-block p-3 bg-indigo-500/30 rounded-2xl mb-6">
              <Palette size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Portal para Diseñadores</h2>
            <p className="text-indigo-100 text-lg mb-8">
              Accede a recursos exclusivos, assets premium y tutoriales
              avanzados de After Effects y Figma. Un espacio pensado por
              creativos, para creativos.
            </p>
            <ul className="space-y-4">
              {[
                "Librerías UI gratuitas",
                "Masterclass de Animación",
                "Comunidad de Feedback",
              ].map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-indigo-400 rounded-full" /> {text}
                </li>
              ))}
            </ul>
          </div>
        
            <ReactPlayer
            url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
            width="100%"
            height="100%"
            controls
            muted/>
          
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-12 border-t border-slate-200 text-center text-slate-500">
        <p>© 2026 StudioVibe AI. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
