import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NhlLogos from "./assets/NhlLogos.jpg"

const Home = () => {
  return (   
      <div className="home">
        <section id="home">
        <div class="container-lg padding">
          <div class="row justify content-center">
            <div class="row-md-3 text-center text-center">
              <h1>
                <div class="display-1 fw-bold arial text-white">
                    NHL Stats
                </div>
                <div class="display-6 text-white">
                        Find the stats you are looking for!
                </div>
              </h1>
            </div>
            <div class="row-md-1 text-center text-center">
            </div>
          </div>
          </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="container-lg padding">
        
      </div>
      <row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <Card style={{ width: '65rem', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <Card.Img variant="top" src={NhlLogos} />
          </Card>
      </row>

      </div>
    );
  }



  
   
  export default Home;