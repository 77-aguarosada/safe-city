import './styles.css'
import out from "../../images/out.png"


export default function SingOut(){

    return (
        <div id="section">
        

        <div id="tel-sing">
           <div id="tel-sing-container" >
                <h2>Cadastro.</h2>
                <span>Digite seus dados para entrar e acessar o conteúdo.</span>
          
         
               <input className="input" type="text" placeholder="Nome"/>
               <input className="input" type="text" placeholder="E-mail"/>
               <input className="input" type="text" placeholder="Senha"/>
               
               <button className="cadastrar btn">Cadastrar</button>
           </div>

           <button className="cadastrar tbn">Já tem uma conta? Faça login.</button>


        </div>

        <div id="tm-img-sing">
            <img id="tm-sing"src={out} alt=""/>

        </div>


    </div>



    );

}