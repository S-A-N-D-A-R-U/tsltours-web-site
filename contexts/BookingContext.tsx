"use client";
import React, { createContext, useContext, useState } from 'react';

interface BookingContextType {
  pickupLocation: string;
  setPickupLocation: (location: string) => void;
  dropoffLocation: string;
  setDropoffLocation: (location: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  return (
    <BookingContext.Provider value={{ pickupLocation, setPickupLocation, dropoffLocation, setDropoffLocation }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
