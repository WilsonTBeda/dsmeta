import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import icon from '../../assets/img/notification-icon.svg' 
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(saleId : number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`)
    .then(response => {
        toast.info("SMS Enviado com Sucesso!");
    })
}

function NotificationButton( {saleId} : Props ) {
    return (
       < div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt = "Notificar"/> 
       </div>
    )
}

export default NotificationButton
