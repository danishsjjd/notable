import { useCallback, useState } from "react";

const useMockIsPending = () => {
  const [isPending, _setIsPending] = useState(false);

  const setIsPending = useCallback((duration = 1000) => {
    _setIsPending(true);
    setTimeout(() => {
      _setIsPending(false);
    }, duration);
  }, []);

  return [isPending, setIsPending] as const;
};

export default useMockIsPending;
