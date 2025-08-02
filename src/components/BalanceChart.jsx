import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

export default function BalanceChart() {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Balance History</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Balance</span>
          </div>
          <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>

      {/* Simplified chart representation */}
      <div className="relative h-64 bg-gradient-to-t from-primary-50 to-transparent rounded-lg p-4">
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-end justify-center"
        >
          <div className="flex items-end gap-2 h-full w-full max-w-md">
            {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-1 bg-primary-500 rounded-t-sm opacity-80"
              />
            ))}
          </div>
        </motion.div>
        
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+15.3% this month</span>
          </div>
        </div>
      </div>
    </div>
  )
}