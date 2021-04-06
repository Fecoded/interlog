import {useContext, useState} from 'react'
import TransactionContext from '../../context/transaction/TransactionContext';
import AuthContext from '../../context/auth/AuthContext';

const FilterModal = () => {
 const transactionContext = useContext(TransactionContext);
 const authContext = useContext(AuthContext);
 
 const { searchByDate, searchUserTransactionByDate } = transactionContext;
 const { user } = authContext;

 const [From, setFrom] = useState("");
 const [To, setTo] = useState("");

 let role = user && user.data.role;

 const hideModal = () => {};

 const onSubmit = (e) => {
     e.preventDefault();
     if(role !== "staff") {
       searchByDate({
           From,
           To,
           setFrom,
           setTo,
           hideModal
       });
     }else {
      searchUserTransactionByDate({
        From,
        To,
        UserId: user && user.data.id,
        setFrom,
        setTo,
        hideModal
      })
     }
 }

    return(
        <div className="modal fade" id="filterModal" tabIndex="-1" role="dialog" aria-labelledby="exportCustomersModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
         
            <div className="modal-header">
              <h4 id="exportCustomersModalTitle" className="modal-title">Filter</h4>
  
              <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
                <i className="tio-clear tio-lg"></i>
              </button>
            </div>
         
            <form onSubmit={onSubmit}>
              <div className="modal-body">
           
                    <div className="form-group">
                        <label htmlFor="nameModalEgLabel" className="input-label">From</label>
                            <div className="js-form-message">
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    name="From" 
                                    placeholder="From" 
                                    required 
                                    value={From}
                                    onChange={(e) => setFrom(e.target.value)}
                                    />
                            </div>
                    </div>  
                    <div className="form-group">
                            <label className="input-label">To</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                name="To" 
                                placeholder="To" 
                                required 
                                value={To}
                                onChange={(e) => setTo(e.target.value)}
                                />
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

export default FilterModal