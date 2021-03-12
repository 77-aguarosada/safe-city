import './styles.css'
import login from "../../images/login.png"


export default function SingIn(){
  
    return(
       
        <div id="section">
            <div id="tm-img">
                <img id="tm"src={login} alt=""/>

            </div>

            <div id="tel-login">
               <div id="tel-login-container" >
                    <h2>Login</h2>
                    <span>Digite seus dados para entrar e acessar o conteúdo.</span>
              
             
                   <input type="text" placeholder="E-mail"/>
                   <input type="text" placeholder="Senha"/>
                   <button className="cadastrar btn">Entrar</button>
               </div>

               <button className="cadastrar tbn">Ainda não tem conta? Cadastre-se.</button>
 

            </div>


        </div>


    );


}