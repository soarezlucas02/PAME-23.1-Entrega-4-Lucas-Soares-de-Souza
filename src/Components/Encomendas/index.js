import { EncomendasDiv } from "./style";
import Encomenda from '../Produto/index';
import { encomendas } from '../Objetos/index';

const Encomendas2 = () => {
    
    return(
        
        <EncomendasDiv>
            {encomendas.map((encomenda, index) => (
                <li key={index}>
                    <Encomenda
                        id={encomenda.ID}
                        situacao={encomenda.Situacao}
                        foto={encomenda.imageUrl}
                        apagar={encomenda.Apagar}
                    />
                </li>

            ))}
        </EncomendasDiv>
        
    )

}

export default Encomendas2;