import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Menu, 
  Search, 
  Bell, 
  ChevronDown,
  User,
  LogOut
} from 'lucide-react'

const pageNames = {
  dashboard: 'Dashboard',
  wallet: 'My Wallet',
  transactions: 'Transactions',
  accounts: 'Accounts',
  settings: 'Settings'
}

export default function Header({ setSidebarOpen, currentPage }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [profileOpen, setProfileOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  const notifications = [
    { id: 1, name: 'Mark Don', time: '5 mins', message: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'Nicholas', time: '6 mins', message: 'Lorem ipsum dolor sit amet' },
    { id: 3, name: 'Alexander', time: '7 mins', message: 'Lorem ipsum dolor sit amet' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 lg:pl-64">
      <div className="flex items-center justify-between px-4 py-4 lg:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <h1 className="text-xl font-semibold text-gray-900">
            {pageNames[currentPage]}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:block relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Mobile search button */}
          <button className="p-2 rounded-lg hover:bg-gray-100 md:hidden">
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2 rounded-lg hover:bg-gray-100"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <AnimatePresence>
              {notificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-medium border border-gray-200 z-50"
                >
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Notifications</h3>
                    <div className="space-y-3">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
                          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-primary-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">{notification.name}</p>
                              <p className="text-xs text-gray-500">{notification.time}</p>
                            </div>
                            <p className="text-sm text-gray-600 truncate">{notification.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100"
            >
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="/images/Profile-Image_1Profile-Image.png"
                alt="Profile"
              />
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-medium border border-gray-200 z-50"
                >
                  <div className="py-1">
                    <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                    <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <LogOut className="w-4 h-4" />
                      Log Out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}