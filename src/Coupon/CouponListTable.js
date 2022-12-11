import {Table} from "react-bootstrap";
import { convertValues } from "../Convert-values";

function CouponListTable({_head, _body}) {
    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                {convertValues(_head).map(v => {
                    return <th className={"table_cel_center"} key={v}>{v}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {
                _body.map(v => {
                    return <tr className={"hover_cursor"}>
                        {
                            convertValues(v).map(v => {
                                return <td className={"table_cel_center"}>{v}</td>
                            })
                        }
                    </tr>
                })}
            </tbody>
            </Table>
    );
}

export default CouponListTable;