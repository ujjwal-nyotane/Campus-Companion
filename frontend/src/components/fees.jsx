import { useState } from 'react';
import './css/fees.css';
import { CreditCard, CheckCircle2, Download, ShieldCheck } from 'lucide-react';

const initialReceipts = [
    { id: 'REC-2026-081', date: '15 Jul 2026', amount: '₹75,000', mode: 'Net Banking', status: 'Success' },
    { id: 'REC-2026-042', date: '10 Jan 2026', amount: '₹46,000', mode: 'UPI Transfer', status: 'Success' }
];

function Fees() {
    const [receipts, setReceipts] = useState(initialReceipts);
    const [remainingFee, setRemainingFee] = useState(135550);
    const [showPayModal, setShowPayModal] = useState(false);

    // Controlled Form State
    const [payData, setPayData] = useState({
        amount: '25000',
        feeType: 'Academic Tuition Fee',
        paymentMethod: 'UPI'
    });

    const [paySuccess, setPaySuccess] = useState('');
    const [formErrors, setFormErrors] = useState({});

    // Validates all fields and returns an errors object (empty = valid)
    const validateForm = () => {
        const errors = {};
        const amtNum = Number(payData.amount);

        if (!payData.feeType || payData.feeType.trim() === '') {
            errors.feeType = 'Please select a fee type.';
        }

        if (!payData.amount || payData.amount.toString().trim() === '') {
            errors.amount = 'Amount is required.';
        } else if (isNaN(amtNum) || !Number.isFinite(amtNum)) {
            errors.amount = 'Please enter a valid numeric amount.';
        } else if (amtNum < 1000) {
            errors.amount = 'Minimum payable amount is ₹1,000.';
        } else if (amtNum > remainingFee) {
            errors.amount = `Amount cannot exceed the remaining due of ₹${remainingFee.toLocaleString('en-IN')}.`;
        }

        if (!payData.paymentMethod || payData.paymentMethod.trim() === '') {
            errors.paymentMethod = 'Please select a payment method.';
        }

        return errors;
    };

    const handlePayment = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setFormErrors({});
        const amtNum = Number(payData.amount);

        const newRec = {
            id: `REC-2026-${Math.floor(100 + Math.random() * 900)}`,
            date: 'Today',
            amount: `₹${amtNum.toLocaleString('en-IN')}`,
            mode: payData.paymentMethod,
            status: 'Success'
        };

        setReceipts([newRec, ...receipts]);
        setRemainingFee(prev => Math.max(0, prev - amtNum));
        setPaySuccess(`Payment of ₹${amtNum.toLocaleString('en-IN')} completed! Receipt #${newRec.id} generated.`);
        setShowPayModal(false);
    };

    return (
        <div className="fees-page-container">
            {/* Fees Hero Summary */}
            <div className="feeshero">
                <div className="fee-stat-box">
                    <h2>₹2,56,550</h2>
                    <h3>Total Annual Fees</h3>
                </div>
                <div className="fee-stat-box highlight-box">
                    <h2>₹{remainingFee.toLocaleString('en-IN')}</h2>
                    <h3>Remaining Pending Due</h3>
                </div>
                <div className="fee-stat-box">
                    <h2>31 Dec 2026</h2>
                    <h3>Upcoming Deadline</h3>
                </div>
                <div className="fee-stat-box">
                    <h2>{receipts.length}</h2>
                    <h3>Receipts Generated</h3>
                </div>
            </div>

            {paySuccess && (
                <div className="alert-fee-success">
                    <CheckCircle2 size={18} />
                    <span>{paySuccess}</span>
                </div>
            )}

            <div className="fees-main-grid">
                {/* Fees Breakdown Card */}
                <div className="fees-card breakdown-card">
                    <div className="card-top-title">
                        <h3>Semester Fee Breakdown</h3>
                        <button
                            type="button"
                            className="btn-pay-now"
                            onClick={() => setShowPayModal(true)}
                        >
                            <CreditCard size={15} /> Pay Installment Online
                        </button>
                    </div>

                    <div className="feesbreakdown-list">
                        <div className="fee-row">
                            <span>Academic &amp; Tuition Fee</span>
                            <span className="amt">₹1,55,000</span>
                        </div>
                        <div className="fee-row">
                            <span>CAS &amp; Campus Amenities</span>
                            <span className="amt">₹20,000</span>
                        </div>
                        <div className="fee-row">
                            <span>Hostel Accommodation (Annual)</span>
                            <span className="amt">₹60,000</span>
                        </div>
                        <div className="fee-row">
                            <span>Mess &amp; Dining Charges</span>
                            <span className="amt">₹20,000</span>
                        </div>
                        <div className="fee-row">
                            <span>E-Library &amp; IT Subscription</span>
                            <span className="amt">₹1,550</span>
                        </div>
                        <div className="fee-row total-row">
                            <span>Total Payable</span>
                            <span className="total-amt">₹2,56,550</span>
                        </div>
                    </div>
                </div>

                {/* Receipts & Payment History Table */}
                <div className="fees-card history-card">
                    <h3>Payment History &amp; Receipts</h3>
                    <div className="table-wrapper">
                        <table className="feetable">
                            <thead>
                                <tr>
                                    <th>Receipt ID</th>
                                    <th>Date</th>
                                    <th>Amount Paid</th>
                                    <th>Method</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {receipts.map(rec => (
                                    <tr key={rec.id}>
                                        <td className="fw-bold">{rec.id}</td>
                                        <td>{rec.date}</td>
                                        <td className="amt-bold">{rec.amount}</td>
                                        <td>{rec.mode}</td>
                                        <td>
                                            <span className="status-success-chip">
                                                <CheckCircle2 size={12} /> {rec.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn-download-rec"
                                                onClick={() => alert(`Downloading Receipt ${rec.id}...`)}
                                                title="Download PDF"
                                            >
                                                <Download size={13} /> PDF
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Online Payment Modal (Controlled Form) */}
            {showPayModal && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <div className="modal-header">
                            <ShieldCheck size={24} color="#10b981" />
                            <h4>Secure Campus Online Payment</h4>
                        </div>

                        <form onSubmit={handlePayment} className="pay-modal-form" noValidate>
                            {/* Fee Type */}
                            <div className={`form-group${formErrors.feeType ? ' has-error' : ''}`}>
                                <label htmlFor="feeType">Installment / Fee Type</label>
                                <select
                                    id="feeType"
                                    value={payData.feeType}
                                    onChange={(e) => {
                                        setPayData({ ...payData, feeType: e.target.value });
                                        if (formErrors.feeType) setFormErrors(prev => ({ ...prev, feeType: '' }));
                                    }}
                                >
                                    <option value="">-- Select Fee Type --</option>
                                    <option value="Academic Tuition Fee">Academic Tuition Fee</option>
                                    <option value="Hostel Accommodation Fee">Hostel Accommodation Fee</option>
                                    <option value="Mess & Dining Charges">Mess &amp; Dining Charges</option>
                                    <option value="Examination & CAS Fee">Examination &amp; CAS Fee</option>
                                </select>
                                {formErrors.feeType && (
                                    <span className="field-error">{formErrors.feeType}</span>
                                )}
                            </div>

                            {/* Amount */}
                            <div className={`form-group${formErrors.amount ? ' has-error' : ''}`}>
                                <label htmlFor="payAmount">Amount to Pay (INR) *</label>
                                <input
                                    id="payAmount"
                                    type="number"
                                    min="1000"
                                    max={remainingFee}
                                    placeholder={`Min ₹1,000 — Max ₹${remainingFee.toLocaleString('en-IN')}`}
                                    value={payData.amount}
                                    onChange={(e) => {
                                        setPayData({ ...payData, amount: e.target.value });
                                        if (formErrors.amount) setFormErrors(prev => ({ ...prev, amount: '' }));
                                    }}
                                />
                                {formErrors.amount && (
                                    <span className="field-error">{formErrors.amount}</span>
                                )}
                            </div>

                            {/* Payment Method */}
                            <div className={`form-group${formErrors.paymentMethod ? ' has-error' : ''}`}>
                                <label htmlFor="paymentMethod">Payment Method *</label>
                                <select
                                    id="paymentMethod"
                                    value={payData.paymentMethod}
                                    onChange={(e) => {
                                        setPayData({ ...payData, paymentMethod: e.target.value });
                                        if (formErrors.paymentMethod) setFormErrors(prev => ({ ...prev, paymentMethod: '' }));
                                    }}
                                >
                                    <option value="">-- Select Payment Method --</option>
                                    <option value="UPI">UPI (Google Pay, PhonePe, Paytm)</option>
                                    <option value="Net Banking">Net Banking (HDFC, SBI, ICICI)</option>
                                    <option value="Debit / Credit Card">Debit / Credit Card</option>
                                </select>
                                {formErrors.paymentMethod && (
                                    <span className="field-error">{formErrors.paymentMethod}</span>
                                )}
                            </div>

                            <div className="modal-actions">
                                <button type="submit" className="btn-confirm-pay">
                                    Confirm &amp; Pay ₹{Number(payData.amount || 0).toLocaleString('en-IN')}
                                </button>
                                <button
                                    type="button"
                                    className="btn-cancel-pay"
                                    onClick={() => { setShowPayModal(false); setFormErrors({}); }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Fees;
