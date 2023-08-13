'use client';

import { useState, useEffect } from 'react';

export function Component2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
      setCount((count) => count + 1);
    };

    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>component22223 - {count}</div>;
}
