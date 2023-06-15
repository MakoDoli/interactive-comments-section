import { useState, createContext } from "react";

interface OverlayProps {
  overlay: boolean;
  setOverlay: (value: boolean) => void;
}

export const OverlayContext = createContext<OverlayProps>({
  overlay: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOverlay: () => {},
});
export const OverlayProvider = ({ children }: any) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <OverlayContext.Provider value={{ overlay, setOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};
