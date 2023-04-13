import { setShowOverlay } from '../store/actions';
import store from '../store/store';
import * as wss from './wss'

//pegar as limitações, se tem ou n tem camera por exemplo pois no navigator.media é esperado
const defaultConstraints = {
    audio:true,
    video:true //false se eu n tiver com camera
}

let localStream; //variavel q vai pegar as streams(fluxo de infos) do usuario

//caso para quando sou host ou convidado,funcao pega dados da camera e inicia a conexao da sala
export const getLocalPreviewAndInitRoomConection = async (
    isRoomHost,
    identity,
    roomId = null
) => {
    //pegar camera e microfone do usuário.. uso the pois é assincrono, retorna promisse essa funcao
    navigator.mediaDevices.getUserMedia(defaultConstraints).then(stream =>{
        console.log(`deu tudo certo no recebimento das local streams mandadads pelo redux props... Aqui estão os valores para estudo: stream:${stream} ------ isRoomHost:${isRoomHost}, identity:${identity}, roomId:${roomId} `)
        
        localStream = stream;
        showLocalVideoPreview(localStream); //funcao pra mostrar o video, passando os parametros de localstream q é justamente as infos de acesso com sucesso à camera 
        
        //irei clonar novamente  e fazer um dispatch para quando houver a conexão vou trocar pra false o estado de overlay q por padrao é true, assim ele fazer com que ele pare de ser mostrado
        store.dispatch(setShowOverlay(false))
        


        //lógica: se for o host vai criar uma sala com id, se n for host é convidado e vai entrar,join
        isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(identity,roomId)
    
    }).catch(err => { //erro ao pegar acesso à camera
        console.log(`${err} : deu erro ao acessar localstream, q sao as infos q o usuario vai  ta passando aos poucos de video por exemplo`)
    })
}

const showLocalVideoPreview = (stream) => {
    //mostra a visualizacao do video
}