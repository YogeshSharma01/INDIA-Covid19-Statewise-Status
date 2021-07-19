import React,{useState, useEffect} from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const IndiaCovid = () =>{
    const [data, setData] = useState([]);
    const getCovidData = async () =>{
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualdata = await res.json();
        console.log(actualdata.statewise);
        setData(actualdata.statewise);
    }
    useEffect(()=>{
        getCovidData();
    },[]);


    return (
        <>
            
            <div className="main-div">
            <h1 className="heading" style={{textAlign:'center'}}> <span className="india-1"> IN</span><span className="india-2">D</span><span className="india-3">IA</span> <AcUnitIcon className="rotate" /> COVID19<i class="fas fa-disease"></i>STATEWISE STATUS </h1>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recoverd</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curElem, index)=>{
                             return(   <tr key={index}>
                                    <th class="table-primary">{curElem.state}</th>
                                    <td class="table-secondary">{curElem.confirmed}</td>
                                    <td class="table-info">{curElem.recovered}</td>
                                    <td class="table-danger">{curElem.deaths}</td>
                                    <td className="table-warning">{curElem.active}</td>
                                    <td class="table-success">{curElem.lastupdatedtime}</td>
                                </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default IndiaCovid;