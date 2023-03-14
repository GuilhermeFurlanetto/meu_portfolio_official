import './styles/Global.css'
import './styles/Home.css'
import {useState} from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/javascript.png'
import react from './assets/react.png'
import jquery from './assets/jquery.png'
import node from './assets/node.png'
import portfolio from './assets/portfoliologo.png'
import primeflix from './assets/primeflix.png'
import listatarefas from './assets/listatarefas.png'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      

      <main className='dark:bg-gray-900'>
        <section className='secaoPerfil' id='inicio'>
          <nav>
            <div>
              <img src={portfolio} alt='portfolio logo' className='dark:text-white'/>
            </div>
            <ul>
              <li className='navOptions'>
                <a href='#inicio'>INICIO</a>
                <a href='#habilidades'>HABILIDADES</a>
                <a href='#portfolio'>PORTFOLIO</a>
              </li>
              <li>
                <BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)}} className='btnLight'/>
              </li>
            </ul>
          </nav>
          <div className='perfilText '>
            <h2>Guilherme de Lima Furlanetto</h2>
            <h3 className='dark:text-white'>Desenvolvedor e Designer</h3>
            <p className='dark:text-white-op5'>Sou Técnico em Desenvolvimento de Sistemas, me especializo em criação de sites mas ainda não trabalho na área, estou sempre aprendendo e programando projetos praticos para
              aperfeiçoar meu desenvolvimento Web. </p>
          </div>
          <div className='socialmedias dark:text-white-op5'>
            <a href='https://github.com/GuilhermeFurlanetto' target='_blank' rel="noreferrer"><AiFillGithub/></a>
            <a href='https://www.facebook.com/profile.php?id=100008393790800' target='_blank' rel="noreferrer"><AiFillFacebook/></a>
            <a href='https://www.instagram.com/gui_lima_furlanetto/' target='_blank' rel="noreferrer"><AiFillInstagram/></a>
            <a href='https://www.linkedin.com/in/guilherme-de-lima-furlanetto-325a091a4/' target='_blank' rel="noreferrer"><AiFillLinkedin/></a>
          </div>
        </section>

        <section>
          <div className='habilidades' id='habilidades'>
            <h3 className='dark:text-white'> Minhas Habilidades</h3>
            <p className='dark:text-white-op5'>Venho aprimorando minhas habilidades de Front-End e Designer com cursos online, vendo tutoriais no Youtube, 
              fazendo projetos práticos sempre e tentando inovar.
            </p>
          </div>
          <div className='cards'>
            <div className='card'>
              <img src={html} alt='html logo' width={100} height={100}/>
              <h2 className='dark:text-white'>HTML</h2>
              <p className='dark:text-white-op5'>HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.</p>              
            </div>

            <div className='card'>
              <img src={css} alt='css logo' width={100} height={100}/>
              <h2 className='dark:text-white'>CSS</h2>
              <p className='dark:text-white-op5'>Cascading Style Sheets é um mecanismo para adicionar o Design a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style.</p>
            </div>

            <div className='card'>
              <img src={javascript} alt='javascript logo' width={100} height={100}/>
              <h2 className='dark:text-white'>JAVASCRIPT</h2>
              <p className='dark:text-white-op5'>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
            </div>

            <div className='card'>
              <img src={react} alt='react logo' width={100} height={100}/>
              <h2 className='dark:text-white'>REACT</h2>
              <p className='dark:text-white-op5'>O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
            </div>

            <div className='card'>
              <img src={jquery} alt='jquery logo' width={100} height={100}/>
              <h2 className='dark:text-white'>JQUERY</h2>
              <p className='dark:text-white-op5'>jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário. </p>
            </div>

            <div className='card'>
              <img src={node} alt='node logo' width={100} height={100}/>
              <h2 className='dark:text-white'>NODE</h2>
              <p className='dark:text-white-op5'>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p>
            </div>
          </div>
        </section>
        <section>
          <div className='portfolio' id='portfolio'>
            <h3 className='dark:text-white'>Portfolio</h3>
            <p className='dark:text-white-op5'>
              Estes são alguns dos meus projetos que venho fazendo e praticando.
            </p>
          </div>
          <div className='cardsPort'>
            <h3>Projeto PrimeFlix - feito com HTML, CSS, JAVASCRIPT, REACT e FIREBASE </h3>
            <div>
              <a href='https://project-flix-prime.netlify.app/' target='_blank' rel="noreferrer"><img src={primeflix} alt='PrimeFlix' width={'100%'} height={'100%'} layout='responsive' /></a>
            </div>
            <h3>Projeto Lista de Tarefas - feito com HTML, CSS, JAVASCRIPT, REACT e FIREBASE </h3>
            <div>
              <a href='https://listadetarefaprojeto.netlify.app' target='_blank' rel="noreferrer"><img src={listatarefas} alt='Lista de Tarefas' width={'100%'} height={'100%'} layout='responsive' /></a>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}