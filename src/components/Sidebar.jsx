import React from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowUpDown, 
  CreditCard, 
  Users, 
  Settings,
  X
} from 'lucide-react'

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'wallet', name: 'My Wallet', icon: Wallet },
  { id: 'transactions', name: 'Transactions', icon: ArrowUpDown },
  { id: 'accounts', name: 'Accounts', icon: Users },
  { id: 'settings', name: 'Settings', icon: Settings },
]

export default function Sidebar({ currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-6 py-6">
            <img 
              className="h-8 w-auto" 
              src="/images/Logo.png" 
              alt="MoneyFarm" 
            />
          </div>
          
          <nav className="flex-1 px-4 pb-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`sidebar-link w-full ${
                    currentPage === item.id ? 'active' : ''
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: -280 }}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 lg:hidden"
      >
        <div className="flex items-center justify-between px-6 py-6">
          <img 
            className="h-8 w-auto" 
            src="/images/Logo.png" 
            alt="MoneyFarm" 
          />
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="px-4 pb-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id)
                  setSidebarOpen(false)
                }}
                className={`sidebar-link w-full ${
                  currentPage === item.id ? 'active' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            )
          })}
        </nav>
      </motion.div>
    </>
  )
}