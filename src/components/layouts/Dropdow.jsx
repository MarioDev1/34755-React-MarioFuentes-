import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
const Dropdow = ({lista}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const listaDrop = lista.map((categoria) => 
      <Link key={categoria} className='dropdown-item' to={`/categoria/${categoria.toLowerCase()}`}>{categoria}</Link>
    )
    setList(listaDrop)
    
  }, []);
   

    return (
        <>
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle btn btn-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-list"></i>
            </button>
          <div className="dropdown-menu">
            {list}
          </div>
          </li>  
        </>
    );
}

export default Dropdow;
