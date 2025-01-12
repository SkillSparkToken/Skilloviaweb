import React from 'react'
import { ChevronRight, Lock, UserCircle, ShieldCheck, Users, ArrowRight } from 'lucide-react';

const General = () => {

    const menuItems = [
        {
          icon: <Lock className="w-5 h-5" />,
          label: 'Security',
          link: '/settings/skills'
        },
        {
          icon: <UserCircle className="w-5 h-5" />,
          label: 'Payment Settings',
          link: '/settings/profile'
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          label: 'Notification Settings',
          link: '/settings/kyc'
        },

        {
            icon: <ShieldCheck className="w-5 h-5" />,
            label: 'Apperance',
            link: '/settings/kyc'
          },


          {
            icon: <ShieldCheck className="w-5 h-5" />,
            label: 'Linked Devices',
            link: '/settings/kyc'
          },
        
      ];
  return (
   
    <section>
    {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="text-gray-700">{item.label}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 text-secondary" />
            </a>
          ))}
        
    </section>
  )
}

export default General
