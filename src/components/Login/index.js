import React, { useState } from 'react'
import './index.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export const loggedUser = []

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try{
            const response = await fetch('http://localhost:3000/api/user')
            const data = response.json()
            data.then(
                (val) => setUsers(val.data)
            )
            
        }catch(error){
            console.log(error)
        }
    }
    getUsers()
    const callAgentLogin = () =>{
        
        console.log(users)
        setTimeout(() => {
            console.log(username, password)
            console.log(users.find((account) => {return account.username === username }))
            if(users.find((account) => {return account.username === username }) != undefined){
                if(users.find((account) => {return password === account.password}) != undefined && users.find((account) => {return account.username === username }) != undefined){
                    setTimeout(() => {
                        alert('correto1')
                        let placeholder = users.find((account) => {return password === account.password})
                        console.log(placeholder)
                        loggedUser.push(placeholder)
                        console.log(loggedUser)
                        window.location.href = './now '
                    }, 600)
                }else{
                    alert('errou2')
                }
            }else{
                alert('errou1')
            }
        }, 100)
    }
    


    return (
        <div className="divLoginMainContainer">
            <div className="divLoginLeftContainer">
                <img src={require("./assets/logo.png")} />
                <h1>Sua escalada começa aqui</h1>
                <p>Escale sua equipe para jogar nos mais diversos torneios criados pela comunidade. </p>

                <div className='divIconsRedesLogin'>
                    <GitHubIcon sx={{fontSize: "8vh", color: "#fc6b03"}}></GitHubIcon>
                    <TwitterIcon  sx={{fontSize: "8vh", color: "#fc6b03"}} ></TwitterIcon>
                     <img className="discord" src={require("./assets/discord.png")}></img>
                </div>
            </div>
            <div className="divLoginRightContainer">
                <div className='divLoginRightSubContaner'>
                    <h1>Entrar</h1>
                    <p className='p'>Entre com sua conta ja cadastrada</p>

                    <input value={username} onChange={event => {setUsername(event.target.value)}} placeholder='Usuário'></input>
                    <input value={password} onChange={event => {setPassword(event.target.value)}}  type='password' placeholder='Senha'></input>
                    <button onClick={() => callAgentLogin()}>Entrar</button>

                    <a><p>Esqueceu sua senha?</p></a>
                    <a><p>Não possui conta?</p></a>
                </div>
            </div>
        </div>
        )
}

export default Login