import "./styles.css"
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
                      <span>Vsuet</span> 
                      <span>Luis Agua Rosada</span>  
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
                        <div>
                          <div id="students">
                              <span id="borda">2</span>
                              <span className="sp">Yolanda Barrueco</span>
                              <span className="sp">uits</span>

                          </div>




                        </div>
                       
                        



                      </div>


                   </section>














               </div>
    );
}
