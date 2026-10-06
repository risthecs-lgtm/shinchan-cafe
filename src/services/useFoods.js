import { useCallback, useEffect, useState } from "react";
import { getFoods } from "./api.js";

export function useFoods() {
  const [foods, setFoods] = useState(null);
  const refresh = useCallback(() => getFoods().then(setFoods), []);
  useEffect(() => { refresh(); }, [refresh]);
  return { foods, refresh };
}
