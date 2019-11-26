import React, {useState, useEffect} from 'react';

const defaultData = {
  "activity": [{name: 'huodong1'}, {name: 'huodong2'}, {name: 'huodong3'}],
  "order": [{name: 'order1'}, {name: 'order2'}, {name: 'order3'}]
}

export default function List(props){

  const [listData, setListData] = useState([]);

  useEffect(() => {
    const data = defaultData[props.type];

    setListData(data);
  }, [props.type])

  return (
    <ul>
      { listData.map((item, index) => <li key={index}>{ item.name }</li>) }
    </ul>
  )
}