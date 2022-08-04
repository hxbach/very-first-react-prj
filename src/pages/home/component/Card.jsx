import { Button } from "./Button";
import { List } from "./Input";
export function Card() {
  return (
    <div>
      <ul className="d-flex justify-content-evenly" style ={{listStyleType: 'none'}}>
        {
          List.map((item, index) => {
            return (
              <li key={index} >
                <div className="card " style={{ width: '18rem' }}>
                 <img src={item.img}   />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <Button button = {item.button} color = {item.color}/>
                  </div>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}