import { useEffect } from 'react';
import { MAIN_URL } from '@/consts/routeUrl';

export default function DefaultPage() {
  useEffect(() => {
    window.location.href = MAIN_URL;
  }, []);
}
