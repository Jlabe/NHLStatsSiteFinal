import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import './table.css'

const Table = (props) => {

    const columns = useMemo(() => props.columnData, [props.columnData]);
    const data = useMemo(() => props.tableData, [props.tableData]);

    console.log(data);

    const tableInstance = useTable({
        columns,
        data
    })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance



    return (
        <div>
            <table {...getTableBodyProps()}>
                <thead >
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    ))
                                }
                                
                            </tr>
                        ))
                    }

                </thead>
                <tbody {...getTableBodyProps}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                            row.cells.map((cell) => {
                                                return <td {...cell.getCellProps()}> {cell.render('Cell')}</td>
                                        
                                                
                                            })
                                        }
                                    
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    );
}

export default Table;