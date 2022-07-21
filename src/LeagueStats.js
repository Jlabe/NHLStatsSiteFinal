import Table from './Table';
import DropdownMenu from './Dropdown';
import { COLUMNSLEAGUE } from './columnsLeagueStats'
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ReactDOM from "react-dom/client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import teamStats from "./TeamStats";
import Card from "react-bootstrap/Card";

const LeagueStats = () => {

    const [data, setData] = useState(null);
    const [season, setSeason] = useState("2022");
    const [url, setUrl] = useState('https://statsapi.web.nhl.com/api/v1/standings/byLeague');
    const [standingType, setStandingType] = useState("byLeague");

    var teamStandingsLeague = [];
    var teamStandingsConference = [[]];
    var teamStandingsDivision = [[]];

    useEffect(() => {
        fetch(url)
          .then(res => {
            console.log(url);
              return res.json();
          })
          .then(jsonData => {
            setData(jsonData);
          })
      }, [url])


    if (standingType == "byLeague"){
        generateDataLeague();
    }else if (standingType == "byConference" && data.records.length == 2){
        generateDataConference()
    }



    function generateDataLeague() {
        teamStandingsLeague = [];
        if (data != null){
            var positionCounter = 1;
            data.records[0].teamRecords.forEach(function(element){

                var points = element.points;
                var wins = element.leagueRecord.wins;
                var losses = element.leagueRecord.losses;
                var ot = element.leagueRecord.ot;
                var name = element.team.name;
                var gp = element.gamesPlayed;

                var teamStats = JSON.stringify({"position" : positionCounter,
                    "name" : name,
                    "gamesPlayed": gp,
                    "wins" : wins,
                    "losses" : losses,
                    "ot" : ot,
                    "points" : points,});
                teamStats = JSON.parse(teamStats);

                teamStandingsLeague.push(teamStats);
                positionCounter++;
            });
        }
    }

    function generateDataConference() {
        teamStandingsConference = [[]];
        if (data != null){
            console.log(data.records[0]);
            var positionCounter = 1;

            data.records.forEach(function(conference){
                var teamStatsConference = [];
                conference.teamRecords.forEach(function(element){

                    var points = element.points;
                    var wins = element.leagueRecord.wins;
                    var losses = element.leagueRecord.losses;
                    var ot = element.leagueRecord.ot;
                    var name = element.team.name;
                    var gp = element.gamesPlayed;

                    var teamStats = teamStats = JSON.stringify({"position" : positionCounter,
                        "name" : name,
                        "gamesPlayed": gp,
                        "wins" : wins,
                        "losses" : losses,
                        "ot" : ot,
                        "points" : points,});
                    teamStats = JSON.parse(teamStats);

                    teamStatsConference.push(teamStats);

                    positionCounter++;
                });
                teamStandingsConference.push(teamStatsConference)
            })
        }
        console.log(teamStandingsConference);
    }



    const handleSelect=(e)=>{
        setSeason(e)
        var urlString = 'https://statsapi.web.nhl.com/api/v1/standings/'.concat(standingType).concat('?season=').concat(e-1).concat(e);
        setUrl(urlString);
        console.log(urlString);
    }

    const handleSelectViewType=(e)=>{
        console.log(e);
        setStandingType(e)
        var urlString = 'https://statsapi.web.nhl.com/api/v1/standings/'.concat(standingType).concat('?season=').concat(season-1).concat(season);
        setUrl(urlString);
        console.log(urlString);
    }
        return (
            <div className='LeagueStats'>
                <div>
                    <h1 style={{color: "white", justifyContent : "center", alignContent : "center", display: 'flex'}}> League Standings</h1>
                    <h5 style={{color: "white", justifyContent : "center", alignContent : "center", display: 'flex'}}> To view league standings of a certain year, simply click the dropdown and select the year you would like to view. </h5>
                    <Container>
                        <Row>
                            <Col>
                                <br/>
                                <DropdownButton
                                    style={{color: "white", justifyContent : "center", alignContent : "center", display: 'flex'}}
                                    id="dropdown-basic-button"
                                    title="Select A Season"
                                                onSelect={handleSelect}
                                >
                                    <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
                                    <Dropdown.Item eventKey="2021">2021</Dropdown.Item>
                                    <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
                                    <Dropdown.Item eventKey="2019">2019</Dropdown.Item>
                                    <Dropdown.Item eventKey="2018">2018</Dropdown.Item>
                                    <Dropdown.Item eventKey="2017">2017</Dropdown.Item>
                                    <Dropdown.Item eventKey="2016">2016</Dropdown.Item>
                                    <Dropdown.Item eventKey="2015">2015</Dropdown.Item>
                                    <Dropdown.Item eventKey="2014">2014</Dropdown.Item>
                                    <Dropdown.Item eventKey="2013">2013</Dropdown.Item>
                                    <Dropdown.Item eventKey="2012">2012</Dropdown.Item>
                                    <Dropdown.Item eventKey="2011">2011</Dropdown.Item>
                                    <Dropdown.Item eventKey="2010">2010</Dropdown.Item>
                                    <Dropdown.Item eventKey="2009">2009</Dropdown.Item>
                                    <Dropdown.Item eventKey="2008">2008</Dropdown.Item>
                                    <Dropdown.Item eventKey="2007">2007</Dropdown.Item>
                                    <Dropdown.Item eventKey="2006">2006</Dropdown.Item>
                                    <Dropdown.Item eventKey="2006">2006</Dropdown.Item>
                                    <Dropdown.Item eventKey="2004">2004</Dropdown.Item>
                                    <Dropdown.Item eventKey="2003">2003</Dropdown.Item>
                                    <Dropdown.Item eventKey="2002">2002</Dropdown.Item>
                                    <Dropdown.Item eventKey="2001">2001</Dropdown.Item>
                                    <Dropdown.Item eventKey="2000">2000</Dropdown.Item>
                                    <Dropdown.Item eventKey="1999">1999</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                    </Container>
                    <h1 style={{color: "white", justifyContent : "center", alignContent : "center", display: 'flex'}}> League Standings for the {season} Season</h1>
                </div>
                {data && <Table columnData={COLUMNSLEAGUE} tableData={teamStandingsLeague}>
                </Table>}
                <br/>
                <row style={{color:"black", justifyContent : "center", alignContent : "center", display: 'flex'}}>
                    <Card style={{ width: '25rem' }}>
                        <h3 style={{color:"black", justifyContent : "center", alignContent : "center", display: 'flex'}}>League Standings Legend</h3>
                        <p style={{color:"black", justifyContent : "center", alignContent : "center", display: 'flex'}}>
                            GP = Games Played, <br/>    G = Goals,  <br/>    A = Assists,  <br/>    PTS = Points,  <br/>    +/- = Plus/Minus
                        </p>
                    </Card>
                </row>

            </div>
        );
    }

 
export default LeagueStats;