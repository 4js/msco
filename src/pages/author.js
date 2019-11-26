import {useState, useEffect} from 'react';

function usePageAuthor(props) {
  const [isAuthor, setIsAuthor] = useState(null);

  useEffect(() => {
    // console.log(props.pageId);
    setIsAuthor('dsafsdaf');
  }, [props.pageId]);

  return isAuthor;
}

export default usePageAuthor;