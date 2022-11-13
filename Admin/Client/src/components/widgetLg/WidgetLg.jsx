import "./widgetLg.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const theme = createTheme();


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

export default function WidgetLg() {
  // const Button = ({ type }) => {
  //   return <button className={"widgetLgButton " + type}>{type}</button>;
  // };
  return (
    <div className="widgetLg">
      {/* <h3 className="widgetLgTitle">Latest transactions</h3> */}
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Last Activity Uploaded Date</th>
          <th>Number of activities</th>
          <th>View Subject</th>
        </tr>
      </thead>
      
      <tbody >
        <tr>
          <td>1</td>
          <td>Maths</td>
          <td text-center justify-content-center>2 Jun 2021</td>
          <td>2</td>
          <td><Button variant="danger" href="/pages/maths">View subject</Button>{' '}</td>
          </tr>


          <tr>
          <td>4</td>
          <td>Religion</td>
          <td text-center >12 Feb 2021</td>
          <td >2</td>
          <td><Button variant="danger" href="/pages/religion">View subject</Button>{' '}</td>
        </tr>




        <tr>
          <td>3</td>
          <td>English</td>
          <td>6 Feb 2021</td>
          <td>4</td>
          <td><Button variant="danger" href="/pages/english">View subject</Button>{' '}</td>
        </tr>



        



        <tr>
          <td>5</td>
          <td>Environmental studies</td>
          <td text-align  >6 Jan 2021</td>
          <td >1</td>
          <td><Button variant="danger" href="/pages/environmentStudy">View subject</Button>{' '}</td>
        </tr>

      

      
      </tbody>
    </Table>
      
    </div>
  );
}
