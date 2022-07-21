import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

function MyCell({ value, columnProps: { rest: { someFunc } } }) {
    return <a href="#" onClick={someFunc}>{value}</a>
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[{
                        Header: 'Name',
                        columns: [{
                            Header: 'First Name',
                            accessor: 'firstName'
                        }, {
                            Header: 'Last Name',
                            id: 'lastName',
                            accessor: d => d.lastName
                        }]
                    }, {
                        Header: 'Info',
                        columns: [{
                            Header: 'Profile Progress',
                            accessor: 'progress',
                            Cell: MyCell,
                            getProps: () => ({ someFunc: () => alert("clicked")})
                        }]
                    }]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />
                <Tips />
                <Logo />
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));