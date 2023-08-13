'use client';

import { useEffect, useState } from 'react';

/** Experimental component to test tree-shaking of barrel (index) files */
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
