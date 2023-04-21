
import PrimarySearchAppBar from "./temple/heand"
import Table from "./temple/table"
import "./stact/head.css"
function Index(){
    return(
            <div>
                <div className="heand" >
                   <PrimarySearchAppBar/>
                </div>
                <div className="heand2">
                <div >
                    <Table className="bottom" />
                </div>
                </div>
            </div>
    );
}
export default  Index