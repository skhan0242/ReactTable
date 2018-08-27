import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    fetch("http://dummy.restapiexample.com/api/v1/employees").then((response) => response.json()).then((finalResponse) =>{
      console.log(finalResponse);
      this.setState({
        api_data:finalResponse
      })
    })
  }
  
  render() {
    const data = this.state.api_data;

    const columns = [{
      Header: 'Id',
      accessor: 'id',
      sort: 'asc'
    },{
      Header: 'Employee Age',
      accessor: 'employee_age',
      sort: 'asc'
    },{
      Header: 'Employee Name',
      accessor: 'employee_name',
      sort: 'asc'
    },
    {
      Header: 'Employee Salary',
      accessor: 'employee_salary',
      sort: 'asc'
    }]

    return (
          <div>
              <ReactTable
                data={data}
                columns={columns}
                defaultPageSize = {9}
                pageSizeOptions = {[3, 6, 9, 12]}
                filterable
              />
          </div>      
    )

  }
}

export default App;