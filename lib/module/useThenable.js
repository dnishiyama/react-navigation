import * as React from 'react';
export default function useThenable(create) {
  const [promise] = React.useState(create); // Check if our thenable is synchronous

  let resolved = false;
  let value;
  promise.then(result => {
    resolved = true;
    value = result;
  });
  const [state, setState] = React.useState([resolved, value]);
  React.useEffect(() => {
    let cancelled = false;

    if (!resolved) {
      promise.then(result => {
        if (!cancelled) {
          setState([true, result]);
        }
      }, error => {
        if (!cancelled) {
          console.error(error);
          setState([true, undefined]);
        }
      });
    }

    return () => {
      cancelled = true;
    };
  }, [promise, resolved]);
  return state;
}
//# sourceMappingURL=useThenable.js.map