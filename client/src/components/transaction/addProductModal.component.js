import {useContext, useState, useEffect} from 'react'
import ProductContext from '../../context/product/ProductContext';
import CustomerContext from '../../context/customer/CustomerContext';


const AddProductModal = () => {
 const productContext = useContext(ProductContext);
 const customerContext = useContext(CustomerContext);
 
 const { createProduct } = productContext;
 const { getCustomers, customers } = customerContext;

 const [Product_Name, setProduct_Name] = useState("");
 const [Customer_Name, setCustomer_Name] = useState("");

 useEffect(() => {
    getCustomers();

  //eslint-disable-next-line
 },[])

 const hideModal = () => {};

 const onSubmit = (e) => {
     e.preventDefault();
     createProduct({
         Product_Name,
         Customer_Name,
         setProduct_Name,
         setCustomer_Name,
         hideModal
     });
 }

    return(
        <div className="modal fade" id="addProductsModal" tabIndex="-1" role="dialog" aria-labelledby="exportCustomersModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
         
            <div className="modal-header">
              <h4 id="exportCustomersModalTitle" className="modal-title">Create Product</h4>
  
              <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
                <i className="tio-clear tio-lg"></i>
              </button>
            </div>
         
            <form onSubmit={onSubmit}>
              <div className="modal-body">
           
                    <div className="form-group">
                        <label htmlFor="nameModalEgLabel" className="input-label">Product Name</label>
                            <div className="js-form-message">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="Product_Name" 
                                    placeholder="Product Name" 
                                    aria-label="3000" 
                                    required data-msg="Please enter your name."
                                    value={Product_Name}
                                    onChange={(e) => setProduct_Name(e.target.value)}
                                    />
                            </div>
                    </div>  
                    <div className="form-group">
                            <label className="input-label">Customer Name</label>
                            <select 
                                value={Customer_Name} 
                                onChange={(e) => setCustomer_Name(e.target.value)} 
                                className="js-select2-custom custom-select" 
                                name="Customer_Name"
                                required
                                >
                                <option label="Select Customer"></option>
                                {customers.map(x => (
                                    <option key={x.id} value={x.Customer_Name}>{x.Customer_Name}</option>
                                ))}
                            </select>
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

export default AddProductModal