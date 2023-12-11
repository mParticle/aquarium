import { useState } from "react";
import { useMount } from "src/hooks/useMount";

export function useInitData<T>(fetchData: () => Promise<T>): [boolean, boolean, T] {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [resolveData, setResolveData] = useState<T>(undefined as T);

  useMount(() => {
    debugger
    
    fetchData()
      .then(data => { setResolveData(data); })
      .catch(() => { setIsError(true); })
      .finally(() => { setIsLoading(false); });
  });

  return [isLoading, isError, resolveData];
}