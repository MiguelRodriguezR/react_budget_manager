import React, { Fragment } from 'react'
import { checkBudget } from '../../helpers/helper';

const BudgetControl = ({budget, left}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className={checkBudget(budget,left)}>
                Left: $ {left}
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;