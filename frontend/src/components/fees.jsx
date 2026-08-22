import './fees.css';
function Fees() {
    return (
        <div className='fees'>
            <p className='pagetitle'>Fees</p>
            <div className='feeshero'>
                <div>
                    <h2>256550</h2>
                    <h3>Total Fees</h3>
                </div>
                <div>
                    <h2>135550</h2>
                    <h3>Remaining Fees</h3>
                </div>
                <div>
                    <h2>31 December 2026</h2>
                    <h3>Deadline</h3>
                </div>
                <div>
                    <h2>2</h2>
                    <h3>Recipts Avaliable</h3>
                </div>
            </div>
            
            <div className='feesinfo'>

                <div >
                    <h3>Fees Breakdown</h3>
                    <div className='feesbreakdown'>
                    <div>
                        <span>Academic Fees</span>
                        <span>₹155000</span>
                    </div>
                    <div>
                        <span>CAS Fees</span>
                        <span>₹20000</span>
                    </div>
                    <div>
                        <span>Hostel Fees</span>
                        <span>₹60000</span>
                    </div>
                    <div>
                        <span>Mess Fees</span>
                        <span>₹20000</span>
                    </div>
                    <div>
                        <span>Subscription Fees</span>
                        <span>₹1550</span>
                    </div>
                    <div>
                        <h3>Total</h3>
                        <h3>₹256550</h3>
                    </div>
                </div>
                </div>
                <div className='feeshistory'>
                    <h3>Fees History</h3>
                    <div>
                        <table className='feetable'>
                            <thead>
                                <tr>
                                    <th>
                                        Receipt ID
                                    </th>
                                    <th>
                                        Date
                                    </th>
                                    <th>
                                        Amount
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        #BKUER82347
                                    </td>
                                    <td>
                                        15-06-2026
                                    </td>
                                    <td>
                                        ₹95000
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        #BKYUI24685
                                    </td>
                                    <td>
                                        28-07-2026
                                    </td>
                                    <td>
                                        ₹26000
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fees