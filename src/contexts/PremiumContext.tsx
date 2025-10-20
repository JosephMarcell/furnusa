'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PremiumContextType {
  isPremium: boolean;
  premiumPlan: 'basic' | 'premium' | 'enterprise' | null;
  premiumExpiry: Date | null;
  setPremiumStatus: (status: boolean, plan?: 'basic' | 'premium' | 'enterprise', expiry?: Date) => void;
  checkPremiumStatus: () => boolean;
  upgradeToPremium: () => void;
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

interface PremiumProviderProps {
  children: ReactNode;
}

export function PremiumProvider({ children }: PremiumProviderProps) {
  const [isPremium, setIsPremium] = useState(false);
  const [premiumPlan, setPremiumPlan] = useState<'basic' | 'premium' | 'enterprise' | null>(null);
  const [premiumExpiry, setPremiumExpiry] = useState<Date | null>(null);

  // Check premium status from localStorage on mount
  useEffect(() => {
    const checkStoredPremiumStatus = () => {
      try {
        const storedStatus = localStorage.getItem('furnusa_premium_status');
        const storedPlan = localStorage.getItem('furnusa_premium_plan');
        const storedExpiry = localStorage.getItem('furnusa_premium_expiry');

        if (storedStatus === 'true' && storedExpiry) {
          const expiryDate = new Date(storedExpiry);
          const now = new Date();

          if (expiryDate > now) {
            setIsPremium(true);
            setPremiumPlan(storedPlan as 'basic' | 'premium' | 'enterprise' || 'basic');
            setPremiumExpiry(expiryDate);
          } else {
            // Premium expired, clear storage
            localStorage.removeItem('furnusa_premium_status');
            localStorage.removeItem('furnusa_premium_plan');
            localStorage.removeItem('furnusa_premium_expiry');
            setIsPremium(false);
            setPremiumPlan(null);
            setPremiumExpiry(null);
          }
        }
      } catch (error) {
        console.error('Error checking premium status:', error);
      }
    };

    checkStoredPremiumStatus();
  }, []);

  const setPremiumStatus = (status: boolean, plan?: 'basic' | 'premium' | 'enterprise', expiry?: Date) => {
    setIsPremium(status);
    
    if (status && plan && expiry) {
      setPremiumPlan(plan);
      setPremiumExpiry(expiry);
      
      // Store in localStorage
      localStorage.setItem('furnusa_premium_status', 'true');
      localStorage.setItem('furnusa_premium_plan', plan);
      localStorage.setItem('furnusa_premium_expiry', expiry.toISOString());
    } else {
      setPremiumPlan(null);
      setPremiumExpiry(null);
      
      // Clear localStorage
      localStorage.removeItem('furnusa_premium_status');
      localStorage.removeItem('furnusa_premium_plan');
      localStorage.removeItem('furnusa_premium_expiry');
    }
  };

  const checkPremiumStatus = (): boolean => {
    if (!isPremium || !premiumExpiry) return false;
    
    const now = new Date();
    if (premiumExpiry <= now) {
      // Premium expired
      setPremiumStatus(false);
      return false;
    }
    
    return true;
  };

  const upgradeToPremium = () => {
    // In a real app, this would redirect to payment page or open payment modal
    // For demo purposes, we'll simulate a premium upgrade
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1); // 1 month from now
    
    setPremiumStatus(true, 'premium', expiryDate);
    
    // In real implementation, redirect to premium page
    window.location.href = '/premium';
  };

  const value: PremiumContextType = {
    isPremium,
    premiumPlan,
    premiumExpiry,
    setPremiumStatus,
    checkPremiumStatus,
    upgradeToPremium,
  };

  return (
    <PremiumContext.Provider value={value}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
}

// Hook for checking if user has access to specific premium features
export function usePremiumFeature(feature: 'ar_preview' | 'advanced_search' | 'priority_support' | 'custom_design') {
  const { isPremium, premiumPlan, checkPremiumStatus } = usePremium();
  
  const hasAccess = (): boolean => {
    if (!checkPremiumStatus()) return false;
    
    switch (feature) {
      case 'ar_preview':
        return isPremium; // All premium plans have AR preview
      case 'advanced_search':
        return isPremium && (premiumPlan === 'premium' || premiumPlan === 'enterprise');
      case 'priority_support':
        return isPremium && premiumPlan === 'enterprise';
      case 'custom_design':
        return isPremium && premiumPlan === 'enterprise';
      default:
        return false;
    }
  };
  
  return {
    hasAccess: hasAccess(),
    isPremium,
    premiumPlan,
  };
}