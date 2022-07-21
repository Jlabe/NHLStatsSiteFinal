import Card from "react-bootstrap/Card";
import {useParams} from "react-router-dom";
import PlayerStatsDB from "./PlayerStatsDB.json"



const SearchLanding = () => {

    const {first, last} = useParams();
    var names = [];



    for (let i = 0; i < PlayerStatsDB.length; i++) {
        console.log(PlayerStatsDB[0].first)
        if (typeof first != 'undefined' && PlayerStatsDB[i].first.toUpperCase() === first.toUpperCase() ||typeof last != 'undefined' && PlayerStatsDB[i].last.toUpperCase() === last.toUpperCase()){
            var url = "/PlayerStatPage/".concat(PlayerStatsDB[i].id);
            names.push([PlayerStatsDB[i].name,url]);
        }
    }

    console.log(names);

    return (
        <div>
            <container>
                <Card style={{display: 'flex',  justifyContent:'center', alignItems:'center', verticalAlign:"middle"}}>
                    <Card.Img id="cardImage" variant="top" src=""/>
                    <Card.Body>
                        <Card.Title>
                            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', verticalAlign:"middle"}}>Search results for {first} {last}</h1>
                        </Card.Title>
                        <Card.Text>
                            <p>
                                below are the search results for {first} {last}. Click on a name to view the players stats. If nothing appears, that means there are no players with that name in the database.
                            </p>
                            <ul>
                                {names.map((player, index)=>{
                                        return <a style={{display: 'flex',  justifyContent:'center', alignItems:'center', verticalAlign:"middle"}} href={player[1]}><h1 key={index}>{player[0]}</h1></a>
                                })}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </container>
        </div>
    );
}

export default SearchLanding;