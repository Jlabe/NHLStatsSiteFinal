import Table from './Table';
import { COLUMNS } from './columns'
import NHLFranchise from './NHLFranchise.json'

const TeamStats = () => {

    console.log(NHLFranchise);
    return ( 
        <div className='TeamStats'> 
            <Table columnData={COLUMNS} tableData={NHLFranchise}>
            </Table>
        </div>
        
     );
}
 
export default TeamStats;