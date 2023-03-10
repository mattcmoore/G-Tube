import * as React from "react";
import { useState } from "react";
import { Reorder } from 'framer-motion';
import './Queue.css';

const listItems = [
  { name: "Video-1", id: 1, thumbnail: 'https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg', time:'5:35' },
  { name: "Video-2", id: 2, thumbnail: 'https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg', time: '6:10' },
  // { name: "Video-3", id: 3, thumbnail: 'https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg' },
  // { name: "Video-4", id: 4, thumbnail: 'https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg' },
  // { name: "Video-5", id: 5, thumbnail: 'https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg' },
  // { name: "Video-6", id: 6, thumbnail: 'https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg' },
  // { name: "Video-7", id: 7, thumbnail: 'https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg' }
];

const oneQueue = [{ name: "Video-8", id: 8, thumbnail: 'https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg',time:'5:12' }];

const jsonData = JSON.stringify([...oneQueue, ...listItems]);

const Queue = () => {
  const [items, setItems] = useState(JSON.parse(jsonData));
  const [dot, setDots] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [clear,setClear] = useState(false)

  const handleClear = ()=>{
    setClear(true)
  }

  const handleRemove = () => {
    const newItems = items.filter((item) => item.id !== selectedItem.id);
    setItems(newItems);
    setIsOpen(false);
  };

  const handleX = () => {
    setItems([]);
  };

  if(clear){
    return null
  }

  return (
    <div id="queue-container" className='queueContanier'>
      <div id="queue-header">
        <p id="queue-title">Queue</p>
        <span id="queue-test">{oneQueue.length}/{items.length}</span>
        <button id="queue-close-button" onClick={handleX}>X</button>
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
          <Reorder.Item  key={item.id} value={item}>
            <div id="queue-item" onClick={() => {
              setSelectedItem(item);
              setIsOpen(true);
            }}>
            <div id="hamburger-icon">≡</div>
            <div id ='queue-time'>{item.time}</div>
              <img
                src={item.thumbnail}
                alt=""
                id="queue-item-image"
              />
              <span id="queue-item-name">{item.name}</span>
            </div>
            <button id="queue-item-options-button">⋮</button>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      {/* {isOpen && (
        <div className="queue-modal">
          <div className="queue-modal-content">
            <h2 className="queue-modal-title">{selectedItem?.name}</h2>
            <button className="queue-modal-button" onClick={handleRemove}>Remove from Queue</button>
            <button className="queue-modal-button" onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Queue;









// <div  style={{ color: 'white', float:'right', width:'400px', border: '1px solid white',borderRadius: '5px'}}  className='queueContanier'>
//       <div style={{backgroundColor : '#212121',width: '400px', height:'55px', position:'relative' }}>    
//         <p style={{position:'relative', top:'10px', left:'15px',color: '#F1F1F1'}}>Queue</p>
//         <span style={{ color: '#F1F1F1',position:'relative', top:'0', left:'15px'}}>test</span>
//         <button style={{fontWeight: 'bold',color: '#F1F1F1', backgroundColor : '#212121', outline: 'none' , cursor : 'pointer', border: 'none', position:'relative', bottom: '20px', left: '335px' }} >X</button>
//         <button style={{color: '#F1F1F1', backgroundColor : '#212121', outline: 'none' , cursor : 'pointer', border: 'none', borderRadius: '18px', position: 'relative', top: '0', left: '300px' }} 
//           onMouseEnter={(e) => { e.target.style.boxShadow = '0px 0px 10px 4px rgba(0, 0, 0, 0.2)'; }}
//           onMouseLeave={(e) => { e.target.style.boxShadow = 'none'; }}
//           >Clear
//         </button>
//       </div>
//       <Draggable bounds={{top: 0, left: -60, right: 230, bottom: 180}}>
//         <div style={{position:'relative', left:'25px', top:'2px'}}>
//           test 1
//           <img
//             alt=''
//             style={{ backgroundColor: 'transparent',height:'56px', width:'100px' }}
//             src={video.thumbnail}
//           />
//         </div>
//       </Draggable>
//       <Draggable bounds={{top: -60, left: -60, right: 230, bottom: 120}}>
//         <div style={{position:'relative', left:'25px', top:'2px'}}>
//           test 2
//           <img
//             alt=''
//             style={{ backgroundColor: 'transparent',height:'56px', width:'100px' }}
//             src={video.thumbnail}
//           />
//         </div>
//       </Draggable>
//       <Draggable bounds={{top: -120, left: -60, right: 230, bottom: 60}}>
//         <div style={{position:'relative', left:'25px', top:'2px'}}>
//           test 3
//           <img
//             alt=''
//             style={{ backgroundColor: 'transparent',height:'56px', width:'100px' }}
//             src={video.thumbnail}
//           />
//         </div>
//       </Draggable>
//       <Draggable bounds={{top: -180, left: -60, right: 230, bottom: 0}}>
//         <div style={{position:'relative', left:'25px', top:'2px'}}>
//           test 4
//           <img
//             alt=''
//             style={{ backgroundColor: 'transparent',height:'56px', width:'100px' }}
//             src={video.thumbnail}
//           />
//         </div>
//       </Draggable>
//     </div>








// import { useState } from "react";
// import { motion } from "framer-motion";

// // https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg
// // https://i.ytimg.com/vi/PIFCQV9rQVE/hqdefault.jpg
// // https://i.ytimg.com/vi/5i9tQjFXUO4/hqdefault.jpg
// // https://i.ytimg.com/vi/Bj1OCeld7WE/hqdefault.jpg
// // https://i.ytimg.com/vi/f2bflgavlJY/hqdefault.jpg

// const listItems = [  { name: "test 1", id: 1, thumbnail: "https://i.ytimg.com/vi/nMZmbhq3hbU/hqdefault.jpg" },  { name: "test 2", id: 2, thumbnail: "https://i.ytimg.com/vi/PIFCQV9rQVE/hqdefault.jpg" },  { name: "test 3", id: 3, thumbnail: "https://i.ytimg.com/vi/5i9tQjFXUO4/hqdefault.jpg" },  { name: "test 4", id: 4, thumbnail: "https://i.ytimg.com/vi/Bj1OCeld7WE/hqdefault.jpg" }];

// const Queue = () => {
//   const [items, setItems] = useState(listItems);

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;
//     const startIndex = result.source.index;
//     const endIndex = result.destination.index;
//     const [reorderedItem] = items.splice(startIndex, 1);
//     items.splice(endIndex, 0, reorderedItem);
//     setItems([...items]);
//   };

//   return (
//     <div
//       style={{
//         color: "white",
//         float: "right",
//         width: "400px",
//         border: "1px solid white",
//         borderRadius: "5px"
//       }}
//       className="queueContanier"
//     >
//       <div
//         style={{
//           backgroundColor: "#212121",
//           width: "400px",
//           height: "55px",
//           position: "relative"
//         }}
//       >
//         <p style={{ position: "relative", top: "10px", left: "15px", color: "#F1F1F1" }}>Queue</p>
//         <span style={{ color: "#F1F1F1", position: "relative", top: "0", left: "15px" }}>test</span>
//         <button
//           style={{
//             fontWeight: "bold",
//             color: "#F1F1F1",
//             backgroundColor: "#212121",
//             outline: "none",
//             cursor: "pointer",
//             border: "none",
//             position: "relative",
//             bottom: "20px",
//             left: "335px"
//           }}
//         >
//           X
//         </button>
//         <button
//           style={{
//             color: "#F1F1F1",
//             backgroundColor: "#212121",
//             outline: "none",
//             cursor: "pointer",
//             border: "none",
//             borderRadius: "18px",
//             position: "relative",
//             top: "0",
//             left: "300px"
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.boxShadow = "0px 0px 10px 4px rgba(0, 0, 0, 0.2)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.boxShadow = "none";
//           }}
//         >
//           Clear
//         </button>
//       </div>
//       <motion.div
//         style={{ position: "relative", left: "25px", top: "2px" }}
//         drag="y"
//         dragConstraints={{ top: -180, bottom: 0 }}
//         dragElastic={0.1}
//         onDragEnd={(event, info) =>
//           handleDragEnd({ source: { index: 0 }, destination: { index: info.point.y > 0 ? 1 : 0 } })
//         }
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//                 <div>
//           {items.map((item, index) => {
//             if (index === 0) {
//               return (
//                 <div key={item.id}>
//                   <p>{item.name}</p>
//                   <img alt="" style={{ backgroundColor: "transparent", height: "56px", width: "100px" }} src={item.thumbnail} />
//                 </div>
//               );
//             } else {
//               return (
//                 <motion.div
//                   key={item.id}
//                   style={{ position: "relative", top: `${index * -60}px` }}
//                   drag="y"
//                   dragConstraints={{ top: -180 + index * -60, bottom: index * -60 }}
//                   dragElastic={0.1}
//                   onDragEnd={(event, info) =>
//                     handleDragEnd({
//                       source: { index },
//                       destination: {
//                         index: info.point.y > index * -60 ? index - 1 : index,
//                         droppableId: "queue"
//                       }
//                     })
//                   }
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <div>
//                     <p>{item.name}</p>
//                     <img alt="" style={{ backgroundColor: "transparent", height: "56px", width: "100px" }} src={item.thumbnail} />
//                   </div>
//                 </motion.div>
//               );
//             }
//           })}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Queue;



// import { useState } from "react";
// import { motion } from "framer-motion";

// const listItems = [  { name: "test 1", id: 1, thumbnail: "https://via.placeholder.com/100x56" },  { name: "test 2", id: 2, thumbnail: "https://via.placeholder.com/100x56" },  { name: "test 3", id: 3, thumbnail: "https://via.placeholder.com/100x56" },  { name: "test 4", id: 4, thumbnail: "https://via.placeholder.com/100x56" }];

// const Queue = () => {
//   const [items, setItems] = useState(listItems);

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;
//     const startIndex = result.source.index;
//     const endIndex = result.destination.index;
//     const [reorderedItem] = items.splice(startIndex, 1);
//     items.splice(endIndex, 0, reorderedItem);
//     setItems([...items]);
//   };

//   return (
//     <div
//       style={{
//         color: "white",
//         float: "right",
//         width: "400px",
//         border: "1px solid white",
//         borderRadius: "5px"
//       }}
//       className="queueContanier"
//     >
//       <div
//         style={{
//           backgroundColor: "#212121",
//           width: "400px",
//           height: "55px",
//           position: "relative"
//         }}
//       >
//         <p style={{ position: "relative", top: "10px", left: "15px", color: "#F1F1F1" }}>Queue</p>
//         <span style={{ color: "#F1F1F1", position: "relative", top: "0", left: "15px" }}>test</span>
//         <button
//           style={{
//             fontWeight: "bold",
//             color: "#F1F1F1",
//             backgroundColor: "#212121",
//             outline: "none",
//             cursor: "pointer",
//             border: "none",
//             position: "relative",
//             bottom: "20px",
//             left: "335px"
//           }}
//         >
//           X
//         </button>
//         <button
//           style={{
//             color: "#F1F1F1",
//             backgroundColor: "#212121",
//             outline: "none",
//             cursor: "pointer",
//             border: "none",
//             borderRadius: "18px",
//             position: "relative",
//             top: "0",
//             left: "300px"
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.boxShadow = "0px 0px 10px 4px rgba(0, 0, 0, 0.2)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.boxShadow = "none";
//           }}
//         >
//           Clear
//         </button>
//       </div>
//       <motion.div
//         style={{ position: "relative", left: "25px", top: "2px" }}
//         drag="y"
//         onDragEnd={(event, info) =>
//           handleDragEnd({ source: { index: 0 }, destination: { index: info.point.y > 0 ? 1 : 0 } })
//         }
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <div>
//           {items.map((item, index) => {
//             if (index === 0) {
//               return (
//                 <div key={item.id}>
//                 <p>{item.name}</p>
//                 <img alt="" style={{ backgroundColor: "transparent", height: "56px", width: "100px" }} src={item.thumbnail} />
//               </div>
//             );
//           } else {
//             return (
//               <motion.div
//                 key={item.id}
//                 style={{ position: "relative", top: `${index * -60}px` }}
//                 drag="y"
//                 onDragEnd={(event, info) =>
//                   handleDragEnd({
//                     source: { index },
//                     destination: {
//                       index: info.point.y > index * -60 ? index - 1 : index,
//                       droppableId: "queue"
//                     }
//                   })
//                 }
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <div>
//                   <p>{item.name}</p>
//                   <img alt="" style={{ backgroundColor: "transparent", height: "56px", width: "100px" }} src={item.thumbnail} />
//                 </div>
//               </motion.div>
//             );
//           }
//         })}
//       </div>
//     </motion.div>
//   </div>
// );
// };

// export default Queue;

