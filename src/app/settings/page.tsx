'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from "@/UI/button/Button"
import Header from '@/UI/header/header';
import Sidebar from '@/UI/sidebar/sidebar';

export default function Setting() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // или отображать загрузку или другую информацию
  }

  return (
    <div>
      <Header/>
      <section className='wrapper'>
        <Sidebar />
        <div className="content">
          <h1>Setting Page</h1>
          <p>Welcome to the Setting page!</p>
        </div>
      </section>
      <footer/>
    </div>
  );
}