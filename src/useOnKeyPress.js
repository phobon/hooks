import { useEffect, useCallback } from 'react';

const useOnKeyPress = (targetKey, onKeyDownHandler, onKeyUpHandler, targetModifier = null, debug = false) => {
  const handleKeyDown = useCallback(e => {
    if (debug) {
      console.log("keydown", e.key, e.key !== key);
    }
    
    // Check if a modifier has been pressed, this doesn't matter if modifier is null.
    if (targetModifier && !e.getModifierState(targetModifier)) {
      return;
    }

    // The correct modifier (or nothing) has been pressed, so check the key.
    if (targetKey !== e.key) {
      return;
    }


    if (onKeyDownHandler) {
      onKeyDownHandler(e);
    }
  }, []);

  const handleKeyUp = useCallback(e => {
    if (debug) {
      console.log("keyup", e.key, e.key !== key);
    }
    
    // Check if a modifier has been pressed, this doesn't matter if modifier is null.
    if (targetModifier && !e.getModifierState(targetModifier)) {
      return;
    }

    // The correct modifier (or nothing) has been pressed, so check the key.
    if (targetKey !== e.key) {
      return;
    }


    if (onKeyUpHandler) {
      onKeyUpHandler(e);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, []);
};

export default useOnKeyPress;