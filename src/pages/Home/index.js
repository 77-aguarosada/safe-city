import "./styles.css"
import {FiChevronRight} from 'react-icons/fi'
import {MdSchool} from 'react-icons/md'
import {MdBusiness}from 'react-icons/md'
export default function Home(){


    return (
               <div id="home-page">
                   <header id="header-home-page">
                      <div>
                         <span id="das-home-page">Dasboard-hostel 2</span>
                         
                      </div>
                      <div>
                          {/*<input id="input-home-page" placeholder=" search students" type="text"/> */}
                      </div>
                     
                     <div id="avatar-home-page">
                        <div id="icon-univer-page">
                        <MdBusiness size={20}/>
                      <span className="avatar-name-univer">VSUET</span> 
                        </div>
                      <span id="user-page">Luis Água Rosada</span>  
                     </div>

                   </header>

                   <section id="all-student-home-page">
                      <div id="perfil-student-home-page">
                        <div id="option-student-home-page">
                            {/*<span>todos estudantes</span>*/}
                            <ul>
                              <li className="select">Recentes</li>
                               <li>Adicionar Estudante</li>
                                <li>Editar Estudante</li>
                                 <li>listar Estudante</li>
                                  <li>Deletar Estudante</li>
                                   <li>Adicionar Quarto</li>
                                    <li>Deletar Quarto </li>
                                     <li>listar Quartos</li>
                                   <li>Criar País</li>
                                 <li>Editar País</li>
                               <li>Listar País</li>
                            <li>Deletar País</li>
                            
                            </ul>
                        </div>
                        <div id="for-search">
                          <form id="form-input-home-page"action="">
                               <input placeholder="search students"/>
                               <button type="submit">Search</button>

                          </form>


                          <div id="students">
                              <span id="borda">2</span>
                              <span className="sp">Yolanda Barrueco</span>
                              <div id="univer-home">
                                <MdSchool color="#cbcbd6"size={20}/>
                                <span className="sp">UITS</span>
                               
                              </div>
                              <FiChevronRight color="#cbcbd6"size={20}/>

                          </div>

                          
                          <div id="students">
                              <span id="borda">2</span>
                              <span className="sp">Yolanda Barrueco</span>
                              <div id="univer-home">
                                <MdSchool color="#cbcbd6"size={20}/>
                                <span className="sp">UITS</span>
                               
                              </div>
                              <FiChevronRight color="#cbcbd6"size={20}/>

                          </div>
                          <div id="students">
                              <span id="borda">2</span>
                              <span className="sp">Yolanda Barrueco</span>
                              <div id="univer-home">
                                <MdSchool color="#cbcbd6"size={20}/>
                                <span className="sp">UITS</span>
                               
                              </div>
                              <FiChevronRight color="#cbcbd6"size={20}/>

                          </div>







                        </div>
                       
                        



                      </div>


                   </section>














               </div>
    );
}
