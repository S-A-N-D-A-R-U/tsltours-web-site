import React from 'react';
import { Star, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: Star,
    value: '4.9/5.0',
    label: 'Customer Rating',
    delay: '0ms',
    color: 'text-yellow-400',
  },
  {
    icon: Users,
    value: '10k+',
    label: 'Happy Tourists',
    delay: '200ms',
    color: 'text-blue-400',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Satisfaction',
    delay: '400ms',
    color: 'text-green-400',
  },
];

export const FloatingStats: React.FC = () => {
  return (
    <div className="absolute right-12 top-1/2 -translate-y-1/2 space-y-6">
      {stats.map(({ icon: Icon, value, label, delay, color }) => (
        <div
          key={label}
          className="animate-float"
          style={{ animationDelay: delay }}
        >
          <div className="w-64 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className={`rounded-lg bg-white/10 p-2 ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-white">{value}</div>
                <div className="text-sm text-blue-200">{label}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};