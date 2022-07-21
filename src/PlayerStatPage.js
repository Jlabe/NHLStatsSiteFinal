import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "./Table";
import {PLAYERSTATCOLUMNS} from "./PlayerStatColumns";
import {PLAYERSTATCOLUMNSPLAYOFFS} from "./PlayerStatColumnPlayoffs";


const PlayerStatPage = () => {

    const {id} = useParams();
    const url = "https://statsapi.web.nhl.com/api/v1/people/".concat(id);
    const urlStatsByYear = "https://statsapi.web.nhl.com/api/v1/people/".concat(id).concat("/stats/?stats=yearByYear");
    const urlStatsByYearPlayoffs = "https://statsapi.web.nhl.com/api/v1/people/".concat(id).concat("/stats/?stats=yearByYearPlayoffs");
    const [data, setData] = useState(null);
    const [statsByYear, setStatsByYear] = useState(null);
    const [statsByYearPlayoffs, setStatsByYearPlayoffs] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                console.log(url);
                return res.json();
            })
            .then(jsonData => {
                setData(jsonData);
            })
    }, [])

    useEffect(() => {
        fetch(urlStatsByYear)
            .then(res => {
                console.log(urlStatsByYear);
                return res.json();
            })
            .then(jsonData => {
                setStatsByYear(jsonData);
            })
    }, [])

    useEffect(() => {
        fetch(urlStatsByYearPlayoffs)
            .then(res => {
                console.log(statsByYearPlayoffs);
                return res.json();
            })
            .then(jsonData => {
                setStatsByYearPlayoffs(jsonData);
            })
    }, [])

    var fullName;
    var birthDate;
    var playerNumber;
    var currentAge;
    var birthCity;
    var birthCountry;
    var height;
    var weight;
    var position;

    if (data != null){
        fullName = data.people[0].fullName;
        birthDate = data.people[0].birthDate;
        playerNumber = data.people[0].primaryNumber;
        currentAge = data.people[0].currentAge;
        birthCity = data.people[0].birthCity;
        birthCountry = data.people[0].birthCountry;
        height = data.people[0].height;
        weight = data.people[0].weight;
        position = data.people[0].primaryPosition.name;
    }

    var careerStats = [];

    if (statsByYear != null){
        careerStats = []
        statsByYear.stats[0].splits.forEach(function(element){
            var season = element.season;
            var games = element.stat.games;
            var goals = element.stat.goals;
            var assists = element.stat.assists;
            var points = element.stat.points;
            var plusMinus = element.stat.plusMinus;
            var team = element.team.name;

            var firstHalfOfYear = season.substring(0,4);
            var secondHalfOfYear = season.substring(4,8);

            season = firstHalfOfYear.concat("/").concat(secondHalfOfYear);

            var playerStats = JSON.stringify({"Season" : season,
                "team" : team,
                "games" : games,
                "goals": goals,
                "assists" : assists,
                "points" : points,
                "plusMinus" : plusMinus});

            playerStats = JSON.parse(playerStats);

            careerStats.push(playerStats);
        })
    }

    var careerPlayoffStats = [];

    if (statsByYearPlayoffs != null){
        careerPlayoffStats = []
        statsByYearPlayoffs.stats[0].splits.forEach(function(element){
            var season = element.season;
            var games = element.stat.games;
            var goals = element.stat.goals;
            var assists = element.stat.assists;
            var points = element.stat.points;
            var plusMinus = element.stat.plusMinus;
            var team = element.team.name;

            var firstHalfOfYear = season.substring(0,4);
            var secondHalfOfYear = season.substring(4,8);

            season = firstHalfOfYear.concat("/").concat(secondHalfOfYear);

            var playerStats = JSON.stringify({"Season" : season,
                "team" : team,
                "games" : games,
                "goals": goals,
                "assists" : assists,
                "points" : points,
                "plusMinus" : plusMinus});

            playerStats = JSON.parse(playerStats);

            careerPlayoffStats.push(playerStats);
        })
    }

    var image_url = "http://nhl.bamcontent.com/images/headshots/current/168x168/".concat(id).concat(".jpg");


    if (data != null){
        document.getElementById('cardImage').src = image_url;
    }


    return (
        <div className='PlayerStatPage'>
            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', color: 'white'}}>{fullName}</h1>
            <br/>
            <br/>
            <br/>

            <Container>
                <Row>
                    <Col>
                        <br/>
                        <br/>
                        <br/>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img id="cardImage" variant="top" src=""/>
                            <Card.Body>
                                <Card.Title>About {fullName}:</Card.Title>
                                <Card.Text>
                                    <p>
                                        Position: {position} <br/>
                                        Number: {playerNumber} <br/>
                                        <br/>
                                        Age: {currentAge}, <br/>
                                        Date Of Birth: {birthDate}, <br/>
                                        {birthCity}, {birthCountry} <br/>
                                        <br/>
                                        Height, {height} <br/>
                                        weight, {weight} <br/>

                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                        <br/>
                        <br/>
                        <Card style={{ width: '18rem' }}>
                            <h3 style={{color:"black", justifyContent : "center", alignContent : "center", display: 'flex'}}>Stat Table Legend</h3>
                            <p style={{color:"black", justifyContent : "center", alignContent : "center", display: 'flex'}}>
                                GP = Games Played, <br/>    G = Goals,  <br/>    A = Assists,  <br/>    PTS = Points,  <br/>    +/- = Plus/Minus
                            </p>
                        </Card>

                    </Col>
                    <Col>
                        <h1 style={{color: 'white', justifyContent:'center', alignItems:'center', display: 'flex'}}>Regular Season</h1>
                        {data && <Table columnData={PLAYERSTATCOLUMNS} tableData={careerStats} />}
                    </Col>
                    <Col>
                        <h1 style={{color: 'white', justifyContent:'center', alignItems:'center', display: 'flex'}}>Playoffs</h1>
                        {data && <Table columnData={PLAYERSTATCOLUMNSPLAYOFFS} tableData={careerPlayoffStats} />}
                    </Col>
                </Row>
            </Container>


        </div>
    );
}

export default PlayerStatPage;