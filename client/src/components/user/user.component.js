import { Fragment, useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'

import TransactionContext from '../../context/transaction/TransactionContext';
import AuthContext from '../../context/auth/AuthContext' 

import AddUserModal from './addUserModal.component'

const User = () => {
  const authContext = useContext(AuthContext);
  const transactionContext = useContext(TransactionContext);

  const {} = transactionContext;
  const { loadUser, loadUsers, users } = authContext;

  useEffect(() => {
    loadUser();
    loadUsers();
  //eslint-disable-next-line
  }, [])

    return(
     <Fragment>
            <div className="content container">
        
            <div className="page-header">
            <div className="row align-items-center mb-3">
                <div className="col-sm mb-2 mb-sm-0">
                <h1 className="page-header-title">Users <span className="badge badge-soft-dark ml-2">{users.length}</span></h1>

                {/* <div className="mt-2">
                    <a className="text-body mr-3" href="#!" >
                    <i className="tio-download-to mr-1"></i> Export
                    </a>

                </div> */}
                </div>
                
                <div className="col-sm-auto">   
                    <span className="btn btn-primary" data-toggle="modal" data-target="#addUserModal">Add User</span>
                <Link className="btn btn-primary ml-3" to="/">Transactions</Link>
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
                            <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search orders"/>
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
                        <th>Fullname</th>
                        <th>State</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length > 0 ? 
                        users.map((x) => (
                            <tr key={x.id}>
                            <td className="table-column-pr-0">
                            </td>
                            <td>{x.fullname}</td>
                            <td>{x.state}</td>
                            <td>{x.email}</td>
                            <td>{x.role}</td>
                            <td>
                                <div className="btn-group">
                                <span className="btn btn-sm btn-white" data-toggle="modal" data-target="#addUserModal">
                                    <i className="tio-edit"></i> Edit
                                </span>
                                </div>
                                <div className="btn-group ml-3">
                                <a className="btn btn-sm btn-white" href="/">
                                    <i className="tio-delete"></i> Delete
                                </a>
                                </div>
                            </td>
                        
                        </tr>
                        )): (
                            <tr>
                            <td colSpan="14" className="text-center">No user available</td>
                            </tr>
                        )
                        }
                    

                    </tbody>
                    </table>
                </div>
        
                </div>
            
            </div>
            <AddUserModal />
    </Fragment>
    )
}

export default User