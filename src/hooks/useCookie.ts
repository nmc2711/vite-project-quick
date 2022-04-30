  
import { useState, useCallback } from "react";
import Cookies from "js-cookie";

const defaultOptions: Cookies.CookieAttributes = {
  sameSite: "Strict",
  secure: true,
};

export const useCookie = (
  key: string,
  defaultValue: string | object,
  options: Cookies.CookieAttributes = defaultOptions
) => {
  const [value, setValue] = useState<string | object | null>(() => {
    const cookie = Cookies.get(key);
    if (!cookie) {
      const dv = typeof defaultValue === "object" ? JSON.stringify(defaultValue) : defaultValue;
      Cookies.set(key, dv, { ...defaultOptions, ...options });
      return defaultValue;
    }
    try {
      if (typeof cookie === "string") return JSON.parse(cookie);
    } catch (e) {
      return cookie;
    }
    return cookie;
  });

  const updateCookie: (newValue: string | object, options?: Cookies.CookieAttributes) => void = useCallback(
    (newValue, options) => {
      const nv = typeof newValue === "object" ? JSON.stringify(newValue) : newValue;
      Cookies.set(key, nv, { ...defaultOptions, ...options });
      setValue(newValue);
    },
    [key]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(key);
    setValue(null);
  }, [key]);

  return [value, updateCookie, deleteCookie];
};