import "./parents.css";


// export default function Parents() {
//   return (
//     <div className='parents'>
      
//     </div>
    
//   )

  
// }



import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";



export default function Parents() {


  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Student name",
      headerName: "Student name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="Student name">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "Activity 1 marks", headerName: "Activity 1 marks", width: 180 },
    {
      field: "Activity 2 marks",
      headerName: "Activity 2 marks",
      width: 180,
    },
    {
      field: "Activity 3 marks",
      headerName: "Activity 3 marks",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <>                                    
            <Link to={"/user/" + params.row.id}>
              <button className="MathsMarksEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="MathsMarksDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="parents">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}


