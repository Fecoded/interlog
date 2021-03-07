import { Fragment, useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'

import TransactionContext from '../../context/transaction/TransactionContext';
import AuthContext from '../../context/auth/AuthContext' 

const Transaction = () => {
  const authContext = useContext(AuthContext);
  const transactionContext = useContext(TransactionContext);

  const { getTransactions, transactions } = transactionContext;
  const { loadUser, logout, user } = authContext;

  useEffect(() => {
    getTransactions();
    loadUser();

  //eslint-disable-next-line
  }, [])

    return(
        <Fragment>

        <div className="content container">
      
        <div className="page-header">
          <div className="row align-items-center mb-3">
            <div className="col-sm mb-2 mb-sm-0">
              <h1 className="page-header-title">Transactions <span className="badge badge-soft-dark ml-2">{transactions.length}</span></h1>

              <div className="mt-2">
                <a className="text-body mr-3" href="#!" >
                  <i className="tio-download-to mr-1"></i> Export
                </a>

              </div>
            </div>
            
            <div className="col-sm-auto">
              {user && user.data.role === "staff" && 
                <Link className="btn btn-primary" to="/create">Add Transaction</Link>
              }
              {user && user.data.role === "admin" && 
                <Link className="btn btn-primary" to="/create">Add Transaction</Link>
              }
              <span className="btn btn-primary ml-3" onClick={() => logout()}>Logout</span>
            </div>
          </div>
         
        </div>
     
        <div className="card">
    
          <div className="card-body">
            <div className="row justify-content-between align-items-center flex-grow-1">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <form>
              
                  <div className="input-group input-group-merge input-group-flush">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="tio-search"></i>
                      </div>
                    </div>
                    <input id="datatableSearch" type="search" className="form-control" placeholder="Search transactions" aria-label="Search orders"/>
                  </div>
            
                </form>
              </div>
              
              <div className="col-lg-6">
                <div className="d-sm-flex justify-content-sm-end align-items-sm-center">
              
                  <div id="datatableCounterInfo" className="mr-2 mb-2 mb-sm-0" style={{ display: "none"}} >
                    <div className="d-flex align-items-center">
                      <span className="font-size-sm mr-3">
                        <span id="datatableCounter">0</span>
                        Selected
                      </span>
                      <a className="btn btn-sm btn-outline-danger" href="#!">
                        <i className="tio-delete-outlined"></i> Delete
                      </a>
                    </div>
                  </div>
              
                  <div className="hs-unfold">
                
                    <div id="showHideDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right dropdown-card" style={{width: "15rem"}}>
                      <div className="card card-sm">
                        <div className="card-body">
                         

                
                      

                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Orders</span>

                      
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_orders">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_orders"/>
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator"></span>
                              </span>
                            </label>
                        
                          </div>

                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Total spent</span>

                    
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_total_spent">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_total_spent"/>
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator"></span>
                              </span>
                            </label>
                      
                          </div>

                          <div className="d-flex justify-content-between align-items-center">
                            <span className="mr-2">Last activity</span>

                      
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_last_activity">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_last_activity"/>
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator"></span>
                              </span>
                            </label>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               
                </div>
              </div>
            </div>
        
          </div>
     
          <div className="table-responsive datatable-custom">
            <table className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="table-column-pr-0"></th>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Staff</th>
                  <th>Opening</th>
                  <th>Take On</th>
                  <th>Release</th>
                  <th>Loading</th>
                  <th>Closing</th>
                  <th>Release Bal</th>
                  <th>Physical Bal</th>
                  <th>Approval 1</th>
                  <th>Approval 2</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {transactions.length > 0 && 
                  transactions.map(x => (
                    <tr key={x.id}>
                    <td className="table-column-pr-0">
                    </td>
                    <td>{x.Product_Name}</td>
                    <td>{x.Reporting_Date}</td>
                    <td>{x.Field_Staff_Name}</td>
                    <td>{x.Opening_balance}</td>
                    <td>{x.Take_on}</td>
                    <td>{x.Release_}</td>
                    <td>{x.Loading}</td>
                    <td>{x.Closing_balance}</td>
                    <td>{x.Release_balance}</td>
                    <td>{x.Physical_Stock_Balance}</td>
                    <td>{x.Approval_1}</td>
                    <td>{x.Approval_2}</td>
                    <td>
                        <div className="btn-group">
                          <a className="btn btn-sm btn-white" href="/">
                              <i className="tio-edit"></i> Edit
                          </a>
                        </div>
                        <div className="btn-group ml-3">
                          <a className="btn btn-sm btn-white" href="/">
                              <i className="tio-delete"></i> Delete
                          </a>
                        </div>
                        {user && user.data.role !== "staff" && 
                          <div className="btn-group ml-3">
                            <a className="btn btn-sm btn-white" href="/">
                                <i className="tio-publish"></i> Approved
                            </a>
                          </div>
                        }
                    </td>
                
                  </tr>
                  ))
                }
               

              </tbody>
            </table>
          </div>
   
        </div>
    
      </div>
        </Fragment>
    )
}

export default Transaction