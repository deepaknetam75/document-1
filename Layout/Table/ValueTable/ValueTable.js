import React, { Component } from 'react';
import { JsonToTable } from 'react-json-to-table';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';

class ValueTable extends Component {

    
    render(props) {

        const myJson = {
      
            "Name":"John",
            "age":30,
            "namse":"John",
            "agse":30,
            "nfame":null,
            "afge":30,
            "Sponsors": [
                { "name": "john", "email": "john@@xyz.com" },
                { "name": "jane", "email": "jane@@xyz.com" }
              ],
            "Value" :{
              "Name":"John",
              "age":30,
              "namse":"John",
              "agse":30,
              "nfame":null,
              "afge":30,
              "cars": {
                "car1":"Ford",
                "car2":"BMW",
                "car3":"Fiat",
                "cars": {
                    "car1":"Ford",
                    "car2":"BMW",
                    "car3":"Fiat"
                  },
                  "car8":"BMW",
                  "car9":"Fiat"
              },
              "Sponsors": [
                { "name": "john", "email": "john@@xyz.com" },
                { "name": "jane", "email": "jane@@xyz.com" }
              ],
              
             }
          };
      

        return (
            <div >
                
                
                    <JsonToTable json={myJson} />
                
                
            </div>
        );

    }
}

export default ValueTable;