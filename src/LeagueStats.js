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

    if (standingType == "byLeague"){
        return (
            <div className='LeagueStats'>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <DropdownButton id="dropdown-basic-button" title="Select A Season"
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
                                </DropdownButton>
                            </Col>
                            <Col>
                                <DropdownButton id="dropdown-basic-button" title="Select A Season"
                                                onSelect={handleSelectViewType}>
                                    <Dropdown.Item eventKey="byLeague">League</Dropdown.Item>
                                    <Dropdown.Item eventKey="byConference">Conference</Dropdown.Item>
                                    <Dropdown.Item eventKey="byDivision">Division</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                        </Row>
                    </Container>
                    <h1>League Standings for {season} Season</h1>
                </div>
                {data && <Table columnData={COLUMNSLEAGUE} tableData={teamStandingsLeague}>
                </Table>}
            </div>
        );
    }else if (standingType == "byConference"){
        return (
            <div className='LeagueStats'>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <DropdownButton id="dropdown-basic-button" title="Select A Season"
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
                                </DropdownButton>
                            </Col>
                            <Col>
                                <DropdownButton id="dropdown-basic-button" title="Select A Season"
                                                onSelect={handleSelectViewType}>
                                    <Dropdown.Item eventKey="byLeague">League</Dropdown.Item>
                                    <Dropdown.Item eventKey="byConference">Conference</Dropdown.Item>
                                    <Dropdown.Item eventKey="byDivision">Division</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                        </Row>
                    </Container>
                    <h1>League Standings for {season} Season</h1>


                </div>
                {data && <Table columnData={COLUMNSLEAGUE} tableData={teamStandingsConference[1]}>
                </Table>}
                {data && <Table columnData={COLUMNSLEAGUE} tableData={teamStandingsConference[2]}>
                </Table>}
            </div>
        );
    }


}
 
export default LeagueStats;