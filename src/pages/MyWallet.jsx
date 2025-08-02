import React from 'react'
import { motion } from 'framer-motion'
import { 
  Wallet, 
  CreditCard, 
  TrendingUp, 
  TrendingDown,
  Plus,
  MoreHorizontal
} from 'lucide-react'

export default function MyWallet() {
  const cards = [
    {
      id: 1,
      type: 'Mastercard',
      number: '**** **** **** 1234',
      balance: '$12,500',
      color: 'bg-gradient-to-r from-blue-600 to-blue-800'
    },
    {
      id: 2,
      type: 'Visa',
      number: '**** **** **** 5678',
      balance: '$8,750',
      color: 'bg-gradient-to-r from-purple-600 to-purple-800'
    }
  ]

  const paymentHistory = [
    {
      id: 1,
      name: 'Flaming',
      transactionId: '#SD6455JB',
      date: 'February 19, 2021, 10:50 AM',
      amount: '+$1,250',
      method: 'Mastercard',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Harold',
      transactionId: '#SD6455JB',
      date: 'February 15, 2021, 08:25 PM',
      amount: '-$3,500',
      method: 'Paypal',
      status: 'Canceled'
    },
    {
      id: 3,
      name: 'Samuel',
      transactionId: '#SD6455JB',
      date: 'February 12, 2021, 02:06 PM',
      amount: '+$800',
      method: 'Paypal',
      status: 'Pending'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Wallet Balance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Wallet Balance</h2>
          <Wallet className="w-6 h-6 text-primary-600" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600">Total Balance</p>
            <p className="text-3xl font-bold text-gray-900">$150,900.75</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600 font-medium">+$530 (2.5%)</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Income</p>
            <p className="text-xl font-semibold text-gray-900">$35,450</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+12.3%</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Expense</p>
            <p className="text-xl font-semibold text-gray-900">$12,802</p>
            <div className="flex items-center mt-2">
              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              <span className="text-sm text-red-600">-3.2%</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">My Cards</h2>
            <button className="btn-primary text-sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Card
            </button>
          </div>
          
          <div className="space-y-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`${card.color} rounded-xl p-6 text-white relative overflow-hidden`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm opacity-80">{card.type}</span>
                  <CreditCard className="w-6 h-6" />
                </div>
                
                <p className="text-lg font-mono mb-4">{card.number}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-80">Balance</p>
                    <p className="text-xl font-bold">{card.balance}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-80">Valid Thru</p>
                    <p className="font-mono">12/25</p>
                  </div>
                </div>
                
                {/* Card decoration */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white opacity-10 rounded-full" />
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white opacity-10 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Payment History</h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {paymentHistory.map((payment, index) => (
                <motion.div
                  key={payment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">
                        {payment.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{payment.name}</p>
                      <p className="text-sm text-gray-500">{payment.transactionId}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className={`font-semibold ${
                      payment.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {payment.amount}
                    </p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      payment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {payment.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}