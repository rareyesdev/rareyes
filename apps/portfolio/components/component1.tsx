'use client';

import { useEffect, useState } from 'react';
import { getString } from '@rareyes/toolbox';

export function Component1() {
  console.log('component1');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
      // const x = getString2();

      // if (x.length > 0) {
      setCount((count) => count + 1);
      // }
    };

    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {getString()} component1111111 - {count}
    </div>
  );
}
