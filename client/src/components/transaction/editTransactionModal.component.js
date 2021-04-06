import {useContext, useState, useEffect} from 'react';

import CustomerContext from '../../context/customer/CustomerContext';
import ProductContext from '../../context/product/ProductContext';
import TransactionContext from '../../context/transaction/TransactionContext';


const EditTransactionModal = ({ current, user }) => {
    const customerContext = useContext(CustomerContext);
    const productContext = useContext(ProductContext);
    const transactionContext = useContext(TransactionContext);
 
    const { customers } = customerContext;
    const { products } = productContext;
    const { updateTransaction } = transactionContext;

    const [Reporting_Date, setReporting_date] = useState("");
    const [Field_Staff_Name, setField_Staff_Name] = useState("");
    const [Customer_Name, setCustomer_Name] = useState("");
    const [Loading, setLoading] = useState(0);
    const [Opening_balance, setOpening_balance] = useState(0);
    const [Product_Name, setProduct_Name] = useState("");
    const [Release_, setRelease_] = useState(0);
    let Release_balance = Release_ - Loading;
    const [setRelease_balance] = useState(Release_balance);
    const [Take_on, setTake_on] = useState(0);
    let Closing_balance = Number.parseInt(Opening_balance) + Number.parseInt(Take_on) - Release_;
    const [setClosing_balance] = useState(Closing_balance);
    let Physical_Stock_Balance = Number.parseInt(Opening_balance) + Number.parseInt(Take_on) - Loading;
    const [setPhysical_Stock_Balance] = useState(Physical_Stock_Balance);

 const hideModal = () => {};

 useEffect(() => {
    if(current){
        setReporting_date(current.Reporting_Date);
        setField_Staff_Name(current.Field_Staff_Name);
        setCustomer_Name(current.Customer_Name);
        setLoading(current.Loading);
        setReporting_date(current.Reporting_Date);
        setOpening_balance(current.Opening_balance);
        setProduct_Name(current.Product_Name);
        setRelease_(current.Release_);
        // setRelease_balance(current.Release_balance);
        setTake_on(current.Take_on);
        // setClosing_balance(current.Closing_balance);
        // setPhysical_Stock_Balance(current.Physical_Stock_Balance);
        
    }
  //eslint-disable-next-line
 },[current])

 const onSubmit = (e) => {
     e.preventDefault();
     updateTransaction({
        id: current && current.id,
        UserId: user && user.data.id,
        Reporting_Date,
        Field_Staff_Name,
        State: user && user.data.state,
        Closing_balance,
        Customer_Name,
        Loading,
        Opening_balance,
        Physical_Stock_Balance,
        Product_Name,
        Release_,
        Release_balance,
        Take_on,
        setReporting_date,
        setField_Staff_Name,
        setCustomer_Name,
        setLoading,
        setOpening_balance,
        setProduct_Name,
        setRelease_,
        setTake_on,
        hideModal
     });
 }

    return(
        <div className="modal fade" id="edittransactionModal" tabIndex="-1" role="dialog" aria-labelledby="exportCustomersModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
         
            <div className="modal-header">
              <h4 id="exportCustomersModalTitle" className="modal-title">Update Transaction</h4>
  
              <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
                <i className="tio-clear tio-lg"></i>
              </button>
            </div>
         
            <form onSubmit={onSubmit}>
              <div className="modal-body">
           
               <div className="row">
                    <div className="form-group col">
                            <label className="input-label">Customer Name</label>
                            <select 
                                value={Customer_Name} 
                                onChange={(e) => setCustomer_Name(e.target.value)} 
                                className="js-select2-custom custom-select" 
                                name="Customer_Name"
                                required
                                >
                                <option label="Select Customer"></option>
                                {customers.length > 0 && customers.map(x => (
                                    <option key={x.id} value={x.Customer_Name}>{x.Customer_Name}</option>
                                ))}
                            </select>
                    </div>
                    <div className="form-group col">
                            <label className="input-label">Product Name</label>
                            <select 
                                    value={Product_Name} 
                                    onChange={(e) => setProduct_Name(e.target.value)} 
                                    className="js-select2-custom custom-select" 
                                    name="Product_Name"
                                    required
                            >
                                <option label="Select Product"></option>
                                {products.length > 0 && products.map(x => (
                                    <option key={x.id} value={x.Product_Name}>{x.Product_Name}</option>
                                ))}
                                
                            </select>
                        </div>

                </div>
                    <div className="form-group">
                        <label htmlFor="nameModalEgLabel" className="input-label">Reporting Date</label>
                        <input 
                            type="date" 
                            className="js-flatpickr form-control flatpickr-custom w-100" 
                            name="Reporting_Date"
                            value={Reporting_Date}
                            onChange={(e) => setReporting_date(e.target.value)}
                            required
                            />
                    </div>
                    
                    <div className="form-group">
                            <label className="input-label">Field Staff Name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="Field_Staff_Name" 
                                placeholder="Please enter your name."  
                                required
                                value={Field_Staff_Name}
                                onChange={(e) => setField_Staff_Name(e.target.value)}
                                />
                        </div>

                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="nameModalEgLabel" className="input-label">Opening Balance</label>
                            <div className="js-form-message">
                            <input 
                                type="number" 
                                className="form-control" 
                                name="Opening_Balance" 
                                placeholder="eg. 3000" 
                                aria-label="3000" 
                                required data-msg="Please enter your name."
                                value={Opening_balance}
                                onChange={(e) => setOpening_balance(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="nameModalEgLabel" className="input-label">Take On</label>
                            <div className="js-form-message">
                            <input 
                                type="number" 
                                className="form-control" 
                                name="Take_on" 
                                placeholder="eg. 2000" aria-label="3000" 
                                required data-msg="Please enter your name."
                                value={Take_on}
                                onChange={(e) => setTake_on(e.target.value)}
                                />
                            </div>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="nameModalEgLabel" className="input-label">Release</label>
                            <div className="js-form-message">
                            <input 
                                type="number" 
                                className="form-control" 
                                name="Release_" placeholder="eg. 160" 
                                aria-label="3000" required data-msg="Please enter your name."
                                value={Release_}
                                onChange={(e) => setRelease_(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="nameModalEgLabel" className="input-label">Loading</label>
                            <div className="js-form-message">
                            <input 
                                type="number" 
                                className="form-control" 
                                name="Loading" placeholder="eg. 150" aria-label="3000"
                                    required data-msg="Please enter your name."
                                    value={Loading}
                                    onChange={(e) => setLoading(e.target.value)}
                                    />
                            </div>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="nameModalEgLabel" className="input-label">Closing Balance</label>
                            <div className="js-form-message">
                            <input 
                                type="number" 
                                className="form-control" 
                                name="Closing_balance" 
                                placeholder="eg. 160" aria-label="3000" 
                                required data-msg="Please enter your name."
                                value={Closing_balance}
                                onChange={(e) => setClosing_balance(e.target.value)}
                                disabled
                                />
                            </div>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="nameModalEgLabel" className="input-label">Release Balance</label>
                            <div className="js-form-message">
                            <input 
                                type="number" 
                                className="form-control" 
                                name="Release_balance" 
                                placeholder="eg. 150" 
                                aria-label="3000" 
                                required data-msg="Please enter your name."
                                value={Release_balance}
                                onChange={(e) => setRelease_balance(e.target.value)}
                                disabled
                                />
                            </div>
                        </div>   
                    </div>
                    <div className="form-group">
                            <label htmlFor="nameModalEgLabel" className="input-label">Physical Stock Balance</label>
                            <div className="js-form-message">
                            <input 
                                type="number" 
                                className="form-control" 
                                name="Physical_Stock_Balance" placeholder="eg. 150" 
                                aria-label="3000" 
                                required data-msg="Please enter your name."
                                value={Physical_Stock_Balance}
                                onChange={(e) => setPhysical_Stock_Balance(e.target.value)}
                                disabled
                                />
                            </div>
                        </div>   

                </div>
              
    
                <div className="modal-footer">
                    <button type="button" className="btn btn-white mr-2" data-dismiss="modal" aria-label="Close">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
            
           
      
         
          </div>
        </div>
      </div>
    )
}

export default EditTransactionModal