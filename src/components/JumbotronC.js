import React, { Component } from "react";
import {Jumbotron,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export class JumbotronC extends Component {
  render() {
    return (
        <Jumbotron style={{background:"#121212",borderRadius:"15px",marginTop:"15px"}} >
          <h1>Merhaba ben Fevzi</h1>
          <p>
          Daha Öncesinde TheMovieDb Apisini kullanarak yine bir React uygulaması geliştirmiştim.Bu uygulamanın detaylarına aşağıda bulunan butona tıklayarak erişebilirsiniz...
          </p>
          <p>
            <Button href="http://fevziyildirimm.github.io/MovieApp" variant="primary">Göz at</Button>
          </p>
        </Jumbotron>
    );
  }
}

export default JumbotronC;
