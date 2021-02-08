import { useEffect } from 'react';

export default function useScript(url) {
  useEffect(() => {
    const container = document.getElementById('script');
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = url;
    console.log(container);
    console.log(script);

    container.appendChild(script);

    return () => {
      container.removeChild(script);
    };
  }, [url]);
}
