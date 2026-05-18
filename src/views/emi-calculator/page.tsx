"use client";

import { useState } from "react";

export default function EmiCalculator({ locale }: { locale: string }) {
  const [amount, setAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [tenure, setTenure] = useState<number>(5);

  const calculateEMI = () => {
    const p = amount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return p / n;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const emi = calculateEMI();
  const totalAmount = emi * (tenure * 12);
  const totalInterest = totalAmount - amount;

  return (
    <main className="pt-8 pb-16 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-brand-blue py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-widest mb-4">Calculate Your EMI</h1>
          <p className="text-blue-100 font-sans tracking-wide">Plan your finances better with our easy-to-use EMI calculator.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded shadow-lg border border-gray-100 overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
          <div className="p-10 md:w-1/2 border-b md:border-b-0 md:border-r border-gray-100">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-sans font-medium text-gray-800 uppercase tracking-wide text-sm">Loan Amount (₹)</label>
                  <span className="font-bold font-sans text-brand-purple">₹ {amount.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="5000000"
                  step="10000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-sans font-medium text-gray-800 uppercase tracking-wide text-sm">Interest Rate (% p.a)</label>
                  <span className="font-bold font-sans text-brand-purple">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-sans font-medium text-gray-800 uppercase tracking-wide text-sm">Loan Tenure (Years)</label>
                  <span className="font-bold font-sans text-brand-purple">{tenure} Yrs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
              </div>
              
              <div className="pt-4">
                <button className="w-full bg-brand-orange text-white py-3 rounded text-sm font-semibold uppercase tracking-widest hover:bg-[#a33722] transition-colors shadow-sm">
                  Apply for Loan Now
                </button>
              </div>
            </div>
          </div>

          <div className="p-10 md:w-1/2 bg-gray-50 flex flex-col justify-center">
            <div className="text-center mb-10">
              <p className="text-gray-500 font-sans uppercase tracking-widest text-sm mb-2">Monthly EMI</p>
              <h3 className="text-5xl font-serif font-bold text-brand-blue">₹ {Math.round(emi).toLocaleString('en-IN')}</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <span className="text-gray-600 font-sans">Principal Amount</span>
                <span className="font-bold font-sans text-brand-purple">₹ {Math.round(amount).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <span className="text-gray-600 font-sans">Total Interest</span>
                <span className="font-bold font-sans text-brand-purple">₹ {Math.round(totalInterest).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="font-sans font-medium text-gray-900 uppercase tracking-wide text-sm">Total Payable</span>
                <span className="font-bold text-brand-orange text-xl">₹ {Math.round(totalAmount).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
