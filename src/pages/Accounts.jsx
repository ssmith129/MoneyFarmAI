import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  CreditCard,
  ArrowRight,
  Plus
} from 'lucide-react'

export default function Accounts() {
  const accountStats = [
    {
      title: 'Total Accounts',
      value: '12',
      change: '+2',
      icon: Users,
      color: 'primary'
    },
    {
      title: 'Active Balance',
      value: '$45,230',
      change: '+5.2%',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Monthly Income',
      value: '$8,450',
      change: '+12.3%',
      icon: TrendingUp,
      color: 'blue'
    }
  ]

  const accounts = [
    {
      id: 1,
      name: 'Primary Checking',
      bank: 'Chase Bank',
      balance: '$25,430.50',
      type: 'Checking',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Savings Account',
      bank: 'Bank of America',
      balance: '$15,750.25',
      type: 'Savings',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Investment Account',
      bank: 'Fidelity',
      balance: '$4,049.75',
      type: 'Investment',
      status: 'Active'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accountStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-green-600 font-medium mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${
                stat.color === 'primary' ? 'bg-primary-50 text-primary-600' :
                stat.color === 'green' ? 'bg-green-50 text-green-600' :
                'bg-blue-50 text-blue-600'
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Investment Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Invest your money for a better future</h2>
            <p className="text-primary-100 mb-6 max-w-md">
              Start building wealth with our investment platform. Get personalized recommendations 
              and track your portfolio performance.
            </p>
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Invest Now
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Accounts List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">My Accounts</h2>
            <button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add Account
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {accounts.map((account, index) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-primary-200 hover:bg-primary-50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{account.name}</h3>
                    <p className="text-sm text-gray-600">{account.bank} • {account.type}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{account.balance}</p>
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {account.status}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}