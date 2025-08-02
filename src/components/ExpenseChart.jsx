import React from 'react'
import { motion } from 'framer-motion'

export default function ExpenseChart() {
  const categories = [
    { name: 'Food & Grocery', percentage: 55, color: 'bg-primary-500' },
    { name: 'Transport', percentage: 40, color: 'bg-secondary-500' },
    { name: 'Medical', percentage: 20, color: 'bg-green-500' },
    { name: 'Shopping', percentage: 30, color: 'bg-yellow-500' },
    { name: 'Bill & Others', percentage: 30, color: 'bg-purple-500' }
  ]

  return (
    <div className="card p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Expense Categories</h2>
      
      <div className="space-y-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
              <span className="text-sm text-gray-500">{category.percentage}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${category.percentage}%` }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                className={`h-2 rounded-full ${category.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}