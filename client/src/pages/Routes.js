import {Route, Switch} from 'react-router-dom';
import Login from '../components/auth/login';
import Transaction from '../components/transaction/transaction.component';
import AddTransaction from '../components/transaction/addTransaction.component';
import Users from '../components/user/user.component';


import AuthState from '../context/auth/AuthState';
import TransactionState from '../context/transaction/TransactionState';
import CustomerState from '../context/customer/CustomerState';
import ProductState from '../context/product/ProductState';

// Protected Routes
import PrivateRouteUser from '../components/routing/PrivateRouteUser';


const Routes = () => {
    return(
        <AuthState>
            <TransactionState>
                <CustomerState>
                    <ProductState>
                        <Switch>
                            <PrivateRouteUser exact path="/" component={Transaction} /> 
                            <PrivateRouteUser exact path="/create" component={AddTransaction} /> 
                            <PrivateRouteUser exact path="/users" component={Users} /> 
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </ProductState>
                </CustomerState>
            </TransactionState>
        </AuthState>
    )
}

export default Routes

