import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { Reorder } from 'framer-motion';
import './Queue.css';
import MetubeContext from "../../../context/MetubeContext";

const Queue = () => {
  const {queue, setQueue, showQueue, setShowQueue} = useContext(MetubeContext);
  const [items, setItems] = useState([...queue]);
  const [clear, setClear] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setItems([...queue]);
  }, [queue]);

  const handleClear = () => {
    setShowQueue(false);
    setQueue([]);
  };

  const handleRemove = () => {
    const newItems = items.filter((item) => item.id !== selectedItem.id);
    setItems(newItems);
    setIsOpen(false);
  };

  const handleX = () => {
    setShowQueue(false);
    
  };

  if (clear) {
    return null;
  }

  return (
    showQueue ? (
      <div id="queue-container" className='queueContanier'>
        <div id="queue-header">
          <p id="queue-title">Queue</p>
          <span id="queue-test">{items.length}</span>
          <button id="queue-close-button" onClick={handleX}>Ʌ</button>
          <button
            id="queue-clear-button"
            onMouseEnter={(e) => { e.target.style.boxShadow = '0px 0px 10px 4px rgba(0, 0, 0, 0.2)'; }}
            onMouseLeave={(e) => { e.target.style.boxShadow = 'none'; }}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
        <Reorder.Group as="ol" values={items} onReorder={setItems} id="queue-list">
          {items.map((item) => (
            <Reorder.Item key={item.id} value={item}>
              <div id="queue-item" onClick={() => {
                setSelectedItem(item);
                setIsOpen(true);
              }}>
                <div id="hamburger-icon">≡</div>
                <div id='queue-time'>{`${item.runtime.minutes}:${item.runtime.seconds}`}</div>
                <img
                  src={item.thumbnail}
                  alt=""
                  id="queue-item-image"
                />
                <span id="queue-item-name">{item.title}</span>
              </div>
              <button id="queue-item-options-button">⋮</button>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    ) : null
  );
};

export default Queue;

























// import * as React from "react";
// import { useState, useEffect, useContext } from "react";
// import { Reorder } from 'framer-motion';
// import './Queue.css';
// import MetubeContext from "../../../context/MetubeContext";

// const Queue = () => {
//   const {queue, setQueue} = useContext(MetubeContext);
//   const [oneQueue, setOneQueue] = useState([{ name: "Calculating the fibonacci sequence in Javascript", id: 8, thumbnail: 'https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg',time:'5:12' }]);
//   const [items, setItems] = useState([...oneQueue, ...queue]);
//   const [dot, setDots] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [clear,setClear] = useState(false);
//   const {showQueue, setShowQueue} = useContext(MetubeContext)

//   useEffect(() => {
//     setItems([ ...queue]);
//   }, [queue]);
  

//   const handleClear = ()=>{
//     setShowQueue(false)
//     setItems(null)
//     // setItems([queue]);

//   };

//   const handleRemove = () => {
//     const newItems = items.filter((item) => item.id !== selectedItem.id);
//     setItems(newItems);
//     setIsOpen(false);
//   };

//   const handleX = () => {
//     setItems([]);
//   };

//   if(clear){
//     return null;
//   }

//   return (
//     showQueue ? (
//       <div id="queue-container" className='queueContanier'>
//         <div id="queue-header">
//           <p id="queue-title">Queue</p>
//           <span id="queue-test">{oneQueue.length}/{items.length}</span>
//           <button id="queue-close-button" onClick={handleX}>X</button>
//           <button
//             id="queue-clear-button"
//             onMouseEnter={(e) => { e.target.style.boxShadow = '0px 0px 10px 4px rgba(0, 0, 0, 0.2)'; }}
//             onMouseLeave={(e) => { e.target.style.boxShadow = 'none'; }}
//             onClick={handleClear}
//           >
//             Clear
//           </button>
//         </div>
//         <Reorder.Group as="ol" values={items} onReorder={setItems} id="queue-list">
//           {items.map((item) => (
//             <Reorder.Item  key={item.id} value={item}>
//               <div id="queue-item" onClick={() => {
//                 setSelectedItem(item);
//                 setIsOpen(true);
//               }}>
//               <div id="hamburger-icon">≡</div>
//               <div id ='queue-time' >9:20</div>
  
//                 <img
//                   src={item.thumbnail}
//                   alt=""
//                   id="queue-item-image"
//                 />
//                 <span id="queue-item-name">{item.title}</span>
//               </div>
//               <button id="queue-item-options-button">⋮</button>
//             </Reorder.Item>
//           ))}
//         </Reorder.Group>
//       </div>
//     ) : null
//   );
// }

// export default Queue;


// import * as React from "react";
// import { useState, useEffect, useContext } from "react";
// import { Reorder } from 'framer-motion';
// import './Queue.css';
// import MetubeContext from "../../../context/MetubeContext";

// const Queue = () => {
//   const {queue, setQueue, showQueue, setShowQueue} = useContext(MetubeContext);
//   const [items, setItems] = useState([...queue]);
//   const [clear,setClear] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
 

//   useEffect(() => {
//     setItems([...queue]);
//     console.log(queue)
//   }, [queue]);

//   const handleClear = () => {
//     setShowQueue(false);
//     setItems([]);
//     setQueue([])
//   };

//   const handleRemove = () => {
//     const newItems = items.filter((item) => item.id !== selectedItem.id);
//     setItems(newItems);
//     setIsOpen(false);
//   };

//   const handleX = () => {
//     setShowQueue(false);
//   };

//   if(clear) {
//     return null;
//   }

//   return (
//     showQueue ? (
//       <div id="queue-container" className='queueContanier'>
//         <div id="queue-header">
//           <p id="queue-title">Queue</p>
//           <span id="queue-test">{items.length}</span>
//           <button id="queue-close-button" onClick={handleX}>X</button>
//           <button
//             id="queue-clear-button"
//             onMouseEnter={(e) => { e.target.style.boxShadow = '0px 0px 10px 4px rgba(0, 0, 0, 0.2)'; }}
//             onMouseLeave={(e) => { e.target.style.boxShadow = 'none'; }}
//             onClick={handleClear}
//           >
//             Clear
//           </button>
//         </div>
//         <Reorder.Group as="ol" values={items} onReorder={setItems} id="queue-list">
//           {items.map((item) => (
//             <Reorder.Item  key={item.id} value={item}>
//               <div id="queue-item" onClick={() => {
//                 setSelectedItem(item);
//                 setIsOpen(true);
//               }}>
//                 <div id="hamburger-icon">≡</div>
//                 <div id ='queue-time'>{item.time}</div>
//                 <img
//                   src={item.thumbnail}
//                   alt=""
//                   id="queue-item-image"
//                 />
//                 <span id="queue-item-name">{item.title}</span>
//               </div>
//               <button id="queue-item-options-button">⋮</button>
//             </Reorder.Item>
//           ))}
//         </Reorder.Group>
//       </div>
//     ) : null
//   );
// };

// export default Queue;