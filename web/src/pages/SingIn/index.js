import { useState, useEffect} from "react"
import './styles.css'
import loginIm from "../../images/login.png"
import api from '../../services/api'


export default function SingIn(){
     
    const [login, setlogin] = useState([]);

    useEffect(()=>{
        
        async function loadApi(){
            const response = await api.get("/students");

            setlogin(response.data);
            
            console.log(response.data);

        }
        loadApi();
    },[])

    

    return(
       
        <div id="section">
            <div id="tm-img">
                <img id="tm"src={loginIm} alt=""/>

            </div>

            <div id="tel-login">
               <div id="tel-login-container" >
                    <h2>Login</h2>
                    <span>Digite seus dados para entrar e acessar o conteúdo.</span>
              
             
                   <input className="input" type="text" placeholder="E-mail"/>
                   <input className="input" type="text" placeholder="Senha"/>
                   <button className="cadastrar btn">Entrar</button>
               </div>

               <button className="cadastrar tbn">Ainda não tem conta? Cadastre-se.</button>
 

            </div>


        </div>


    );


}