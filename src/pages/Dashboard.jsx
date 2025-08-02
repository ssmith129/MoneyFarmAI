import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from 'lucide-react'
import StatsCard from '../components/StatsCard'
import TransactionList from '../components/TransactionList'
import ExpenseChart from '../components/ExpenseChart'
import BalanceChart from '../components/BalanceChart'

export default function Dashboard() {
  const stats = [
    {
      title: 'Current Balance',
      value: '$340,500',
      change: '+2.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'primary'
    },
    {
      title: 'Income',
      value: '$35,450',
      change: '+12.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Expense',
      value: '$12,802',
      change: '-3.2%',
      trend: 'down',
      icon: TrendingDown,
      color: 'red'
    },
    {
      title: 'Total Cards',
      value: '4',
      change: '+1',
      trend: 'up',
      icon: CreditCard,
      color: 'blue'
    }
  ]

  const recentTransactions = [
    {
      id: 1,
      type: 'Shopping',
      category: 'Payment',
      date: '20 February, 2021',
      time: '10:25 AM',
      amount: '-$50.99',
      icon: '🛍️'
    },
    {
      id: 2,
      type: 'Car Repair',
      category: 'Payment',
      date: '18 February, 2021',
      time: '03:15 PM',
      amount: '-$156.58',
      icon: '🚗'
    },
    {
      id: 3,
      type: 'Grocery',
      category: 'Credit',
      date: '15 February, 2021',
      time: '07:17 PM',
      amount: '+$29.55',
      icon: '🛒'
    },
    {
      id: 4,
      type: 'Salary',
      category: 'Credit',
      date: '15 February, 2021',
      time: '09:00 AM',
      amount: '+$2,500.00',
      icon: '💰'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance History Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <BalanceChart />
        </motion.div>

        {/* Expense Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ExpenseChart />
        </motion.div>
      </div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <TransactionList transactions={recentTransactions} />
      </motion.div>
    </div>
  )
}