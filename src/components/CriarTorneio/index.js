import React, {useState} from "react";
import './index.css'
import NavBar from '../Navbar'
import Footer from '../Footer'
import Select from 'react-select'

let getGamesTry = 0
function CriarTorneio (){

   
    const [jogo, setJogo] = useState([])
    const callGames = async() => {
        try{
            const response = await fetch('http://localhost:3000/api/jogo')
            const data = response.json()
            data.then(
                (val) => {setJogo(val.data)})
        }catch(error){
            console.log(error)
        }
    }
    if(getGamesTry < 10){
        getGamesTry++
        callGames()
    }

    const chaves = [
        { value: 'classificatoria', label: 'Classificatoria' },
        { value: 'eliminatoria', label: 'Eliminatoria' },
        { value: 'grupo', label: 'Grupo' },
        { value: 'swiss', label: 'Swiss' }
      ]
    
    const jogos = [
        // { value: 'valorant', label: 'Valorant' },
        // { value: 'formula1', label: 'Formula 1' },
        // { value: 'leagueoflegends', label: 'League of Legends' },
        // { value: 'fifa22', label: 'Fifa 22' }
      ]

    for(let i = 0; i < jogo.length;i++){
        // após chamar os jogos no banco de dados, ele puxa o jogo de lá, e da um loop, enviando todos os 
        // dados dentro do array do banco de dados para o array que será renderizado.
        jogos.push({
            value: jogo[i].id,
            label: jogo[i].nome
        })
    }
    
    
    return(
        <div className="DivCriarTorneio">
            <NavBar page = 'usuario'/>

            <div className="divMainCriarTorneio paddingLeft">
                <div className="divSubCriarTorneio">
                    <div className="divImgThaumbCriarTorneio">
                        <label>Thumb</label>
                    </div>

                    <div className="divImgLogoCriarTorneio">
                        <label>Logo</label>
                    </div>

                    <div className="divImgFundoCriarTorneio">
                        <label>Fundo</label>
                    </div>

                    <div className="AddImgCriarTorneio">
                        <button className="AddThaumb">Adicione sua Thumb</button>
                        <button className="AddLogo">Adicione sua Logo</button>
                        <button className="AddFundo">Adicione seu Fundo</button>
                        
                        <div className="divInfoCriarTorneio">
                            <input className="NomeCriarTorneio" placeholder="Digite o nome do torneio aqui..."></input>
                            <textarea className="InfoCriarTorneio" placeholder="Digite a descrição do torneio aqui..."></textarea>
                        </div>
                    </div>
                </div>

                <div className="divMoreinfoCriarTorneios">
                    <Select options={chaves} className="select" placeholder='Chaves' />
                    <Select options={jogos} className="select"  placeholder='Jogos'/>
                    <input className="totalJogadores" placeholder="Quantos jogadores vão jogar?"></input>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CriarTorneio