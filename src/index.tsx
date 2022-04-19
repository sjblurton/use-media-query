import useEventListener from '@sjblurton/use-event-listener';
import { useEffect, useState } from 'react';

const useMediaQuery = (mediaQuery: string): boolean => {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(
    null
  );

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener(
    'change',
    (e: MediaQueryListEvent) => setIsMatch(e.matches),
    mediaQueryList
  );

  return isMatch;
};

export default useMediaQuery;
