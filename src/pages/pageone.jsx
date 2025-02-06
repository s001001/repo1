import { useInsertionEffect } from 'react';

// Inside your CSS-in-JS library
function useCSS(rule) {
  useInsertionEffect(() => {
    // ... inject <style> tags here ...
  });
  return rule;
}

export default useCSS;



// useInsertionEffect
// useImperativeHandle
// useOptimistic