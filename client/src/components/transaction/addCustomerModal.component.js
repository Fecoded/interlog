import {useContext, useState} from 'react'
import CustomerContext from '../../context/customer/CustomerContext'


const AddCustomerModal = () => {
 const customerContext = useContext(CustomerContext);
 
 const { createCustomer } = customerContext;

 const [Customer_Name, setCustomer_Name] = useState("");

 const hideModal = () => {};

 const onSubmit = (e) => {
     e.preventDefault();
     createCustomer({
         Customer_Name,
         setCustomer_Name,
         hideModal
     });
 }

    return(
        <div className="modal fade" id="addCustomersModal" tabIndex="-1" role="dialog" aria-labelledby="exportCustomersModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
         
            <div className="modal-header">
              <h4 id="exportCustomersModalTitle" className="modal-title">Create Customers</h4>
  
              <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
                <i className="tio-clear tio-lg"></i>
              </button>
            </div>
         
            <form onSubmit={onSubmit}>
              <div className="modal-body">
           
                    <div className="form-group">
                        <label htmlFor="nameModalEgLabel" className="input-label">Customer Name</label>
                            <div className="js-form-message">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="Customer_Name" 
                                    placeholder="Customer Name" 
                                    aria-label="3000" 
                                    required data-msg="Please enter your name."
                                    value={Customer_Name}
                                    onChange={(e) => setCustomer_Name(e.target.value)}
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

export default AddCustomerModal