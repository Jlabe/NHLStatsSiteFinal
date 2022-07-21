import { COLUMNS } from './columns'
import NHLFranchise from './NHLFranchise.json'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import {useState} from "react";
import {Link} from "react-router-dom";
import {render} from "react-dom";
import Card from "react-bootstrap/Card";

const TeamStats = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleChangeFirstName = event => {
        setFirstName(event.target.value);

        console.log('First Name:', event.target.value);
    };

    const handleChangeLastName = event => {
        setLastName(event.target.value);

        console.log('Last Name:', event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();

        console.log('handleClick', firstName);
        var link = "/SearchLanding/".concat(firstName).concat("/").concat(lastName);
        console.log(link);
        if (firstName != '' || lastName != ''){
            document.getElementById("inputValidation").style.visibility = "hidden";
            window.location.href = link;
        }else {
            document.getElementById("inputValidation").style.visibility = "visible";
        }

    };



    console.log(NHLFranchise);
    return (
        <div className='TeamStats'>

            <h5 style={{color: "white", justifyContent : "center", alignContent : "center", display: 'flex'}}>To perform a search, simply enter the players first name and the players last name in the search box's below. You can also enter only a first or last name instead.</h5>
            <br/>
            <br/>

            <Form style={{justifyContent : "center", alignContent : "center", display: 'flex'}}>
                <Form.Group style={{width: "50%"}} className="mb-3" controlId="formBasicName">
                    <Form.Control onChange={handleChangeFirstName} type="name" placeholder="First Name" />
                </Form.Group>
            </Form>
            <Form style={{justifyContent : "center", alignContent : "center", display: 'flex'}}>
                <Form.Group style={{width: "50%"}} className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handleChangeLastName} type="name" placeholder="Last Name" />
                </Form.Group>
            </Form>
            <h5 id={"inputValidation"} style={{visibility: "hidden", color: "darkred", justifyContent : "center", alignContent : "center", display: 'flex'}}>Please Enter a name in either of the input boxes before searching</h5>
            <br/>
            <Form style={{justifyContent : "center", alignContent : "center", display: 'flex'}}>
                    <Button onClick={handleClick} variant="primary" type="submit">
                        Search For Player
                    </Button>
            </Form>

            <br/>
            <br/>
            <br/>
            <br/>

            <h1 style={{color: "white", justifyContent : "center", alignContent : "center", display: 'flex'}}>Top players organized by points</h1>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th style={{color:"black"}}>#</th>
                    <th style={{color:"black"}}>Name</th>
                    <th style={{color:"black"}}>GP</th>
                    <th style={{color:"black"}}>G</th>
                    <th style={{color:"black"}}>A</th>
                    <th style={{color:"black"}}>P</th>
                    <th style={{color:"black"}}>+/-</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td><a href="/PlayerStatPage/8478402">Connor McDavid</a></td>
                    <td>80</td>
                    <td>44</td>
                    <td>79</td>
                    <td>123</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><a href="/PlayerStatPage/8476346">Johnny Gaudreau</a></td>
                    <td>82</td>
                    <td>40</td>
                    <td>75</td>
                    <td>115</td>
                    <td>64</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><a href="/PlayerStatPage/8476456">Jonathan Huberdeau</a></td>
                    <td>80</td>
                    <td>30</td>
                    <td>85</td>
                    <td>115</td>
                    <td>35</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><a href="/PlayerStatPage/8477934">Leon Draisaitl</a></td>
                    <td>80</td>
                    <td>55</td>
                    <td>55</td>
                    <td>110</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><a href="/PlayerStatPage/8478864">Kirill Kaprizov</a></td>
                    <td>81</td>
                    <td>47</td>
                    <td>61</td>
                    <td>108</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><a href="/PlayerStatPage/8474564">Auston Matthews</a></td>
                    <td>73</td>
                    <td>60</td>
                    <td>46</td>
                    <td>106</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><a href="/PlayerStatPage/8474564">Steven Stamkos</a></td>
                    <td>81</td>
                    <td>42</td>
                    <td>64</td>
                    <td>106</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td><a href="/PlayerStatPage/8479314">Matthew Tkachuk</a></td>
                    <td>82</td>
                    <td>42</td>
                    <td>62</td>
                    <td>104</td>
                    <td>57</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td><a href="/PlayerStatPage/8476468">J.T. Miller</a></td>
                    <td>80</td>
                    <td>32</td>
                    <td>67</td>
                    <td>99</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td><a href="/PlayerStatPage/8478483">Mitchell Marner</a></td>
                    <td>72</td>
                    <td>35</td>
                    <td>62</td>
                    <td>97</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td><a href="/PlayerStatPage/8474600">Roman Josi</a></td>
                    <td>80</td>
                    <td>23</td>
                    <td>73</td>
                    <td>96</td>
                    <td>13</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td><a href="/PlayerStatPage/8474600">Artemi Panarin</a></td>
                    <td>75</td>
                    <td>22</td>
                    <td>74</td>
                    <td>96</td>
                    <td>21</td>
                </tr>
                </tbody>
            </Table>

            <row style={{color:"black", justifyContent : "center", alignContent : "center", display: 'flex'}}>
                <Card style={{ width: '25rem' }}>
                    <h3 style={{color:"black", justifyContent : "center", alignContent : "center", display: 'flex'}}>Legend</h3>
                    <p style={{color:"black", justifyContent : "center", alignContent : "center", display: 'flex'}}>
                        GP = Games Played, <br/>    G = Goals,  <br/>    A = Assists,  <br/>    PTS = Points,  <br/>    +/- = Plus/Minus
                    </p>
                </Card>
            </row>

        </div>

    );
}

export default TeamStats;