import React from 'react'
import { motion } from 'framer-motion'
import { MoreHorizontal, Filter } from 'lucide-react'

export default function TransactionList({ transactions }) {
  return (
    <div className="card">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          <div className="flex items-center gap-2">
            <button className="btn-secondary text-sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>All Time</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                  {transaction.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.type}</p>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount}
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              
              <button className="p-1 rounded hover:bg-gray-100">
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}