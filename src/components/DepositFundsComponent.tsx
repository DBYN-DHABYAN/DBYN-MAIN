import React, { useState } from 'react';
import { Copy, CheckCircle, Bitcoin, DollarSign, Building2, AlertCircle } from 'lucide-react';

type PaymentMethod = 'usdt' | 'bitcoin' | 'bank';

export default function DepositFundsComponent() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('usdt');
  const [depositAmount, setDepositAmount] = useState<string>('');
  const [copied, setCopied] = useState<string>('');

  const USDT_ADDRESS = '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb';
  const BTC_ADDRESS = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh';

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleConfirmDeposit = () => {
    console.log('Deposit confirmation:', {method:selectedMethod,amount:depositAmount,timestamp:new Date().toISOString()});
    alert('Deposit submitted for verification. You will receive confirmation once verified.');
  };

  const tabs: { id: PaymentMethod; label: string; icon: React.ReactNode }[] = [
    { id: 'usdt', label: 'USDT (ERC-20)', icon: <DollarSign className="h-5 w-5" /> },
    { id: 'bitcoin', label: 'Bitcoin', icon: <Bitcoin className="h-5 w-5" /> },
    { id: 'bank', label: 'Bank Transfer', icon: <Building2 className="h-5 w-5" /> }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Deposit Funds</h1>
        <p className="text-gray-400">Add funds to purchase mining packages and expand your hashrate allocation.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
        <label htmlFor="amount" className="block text-lg font-semibold mb-3">Deposit Amount (USD)</label>
        <input type="number" id="amount" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} placeholder="Enter amount (minimum $100)" min="100" step="0.01" className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-white text-white text-xl font-semibold" />
        <p className="text-sm text-gray-400 mt-2">Minimum deposit: $100 USD equivalent</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
        <div className="flex space-x-2 border-b border-gray-700">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setSelectedMethod(tab.id)} className={`flex items-center px-6 py-3 font-semibold transition-colors ${selectedMethod === tab.id ? 'border-b-2 border-white text-white' : 'text-gray-400 hover:text-gray-300'}`}>
              {tab.icon}<span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
        {selectedMethod === 'usdt' && (
          <div>
            <div className="flex items-center mb-6"><DollarSign className="h-8 w-8 text-green-400 mr-3" /><div><h3 className="text-2xl font-bold">USDT (ERC-20)</h3><p className="text-gray-400">Send USDT on the Ethereum network</p></div></div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-6">
              <p className="text-sm text-gray-400 mb-2 font-semibold">Deposit Address:</p>
              <div className="flex items-center justify-between bg-gray-800 p-4 rounded border border-gray-600">
                <code className="text-white font-mono break-all mr-4">{USDT_ADDRESS}</code>
                <button onClick={() => handleCopy(USDT_ADDRESS, 'usdt')} className="p-2 hover:bg-gray-700 rounded">
                  {copied === 'usdt' ? <CheckCircle className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-600/50 p-4 rounded-lg mb-6">
              <div className="flex items-start"><AlertCircle className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" />
                <div className="text-sm text-yellow-200"><p className="font-semibold mb-2">Important:</p><ul className="list-disc list-inside space-y-1"><li>Only send USDT on ERC-20 network</li><li>Minimum deposit: $100 USD</li></ul></div>
              </div>
            </div>
          </div>
        )}
        {selectedMethod === 'bitcoin' && (
          <div>
            <div className="flex items-center mb-6"><Bitcoin className="h-8 w-8 text-orange-400 mr-3" /><div><h3 className="text-2xl font-bold">Bitcoin (BTC)</h3><p className="text-gray-400">Send Bitcoin to the address below</p></div></div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-6">
              <p className="text-sm text-gray-400 mb-2 font-semibold">Deposit Address:</p>
              <div className="flex items-center justify-between bg-gray-800 p-4 rounded border border-gray-600">
                <code className="text-white font-mono break-all mr-4">{BTC_ADDRESS}</code>
                <button onClick={() => handleCopy(BTC_ADDRESS, 'btc')} className="p-2 hover:bg-gray-700 rounded">
                  {copied === 'btc' ? <CheckCircle className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>
          </div>
        )}
        {selectedMethod === 'bank' && (
          <div>
            <div className="flex items-center mb-6"><Building2 className="h-8 w-8 text-blue-400 mr-3" /><div><h3 className="text-2xl font-bold">Bank Transfer</h3><p className="text-gray-400">Transfer funds via wire transfer</p></div></div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-6 space-y-4">
              <div><p className="text-sm text-gray-400 font-semibold mb-1">Account Holder:</p><p className="text-white text-lg font-mono">DHABYAN COMMERCIAL BROKERS - L.L.C</p></div>
              <div><p className="text-sm text-gray-400 font-semibold mb-1">IBAN:</p>
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded border border-gray-600">
                  <code className="text-white font-mono">AE810860000009188997180</code>
                  <button onClick={() => handleCopy('AE810860000009188997180', 'iban')} className="p-2 hover:bg-gray-700 rounded ml-4">
                    {copied === 'iban' ? <CheckCircle className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
              </div>
              <div><p className="text-sm text-gray-400 font-semibold mb-1">BIC/SWIFT:</p>
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded border border-gray-600">
                  <code className="text-white font-mono">WIOBAEADXXX</code>
                  <button onClick={() => handleCopy('WIOBAEADXXX', 'swift')} className="p-2 hover:bg-gray-700 rounded ml-4">
                    {copied === 'swift' ? <CheckCircle className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
              </div>
              <div><p className="text-sm text-gray-400 font-semibold mb-1">Bank Name:</p><p className="text-white">Wio Bank</p></div>
              <div><p className="text-sm text-gray-400 font-semibold mb-1">Bank Address:</p><p className="text-white">Etihad Airways Centre, 5th Floor<br />Abu Dhabi, UAE</p></div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8">
        <button onClick={handleConfirmDeposit} disabled={!depositAmount || parseFloat(depositAmount) < 100} className={`w-full py-4 rounded-md font-bold text-lg transition-all duration-200 ${depositAmount && parseFloat(depositAmount) >= 100 ? 'bg-white text-gray-900 hover:bg-gray-200 transform hover:scale-105' : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`}>
          I've Sent the Funds - Submit for Verification
        </button>
        <p className="text-center text-sm text-gray-400 mt-3">Your deposit will be reviewed and credited once verified.</p>
      </div>
    </div>
  );
}
