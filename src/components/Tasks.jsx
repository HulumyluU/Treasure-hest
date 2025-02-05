// src/components/Tasks.jsx
const Tasks = ({ tasks }) => {
   return (
     <div
       style={{
         flex: 1,
         zIndex: 1,
         backgroundColor: "#333",
         color: "#fff",
         padding: "10px",
         display: "flex",
         flexDirection: "column",
         borderLeft: "2px solid #777",
       }}
     >
       <h3 style={{ textAlign: "center", color: "white" }}>Tasks</h3>
       <ul style={{ listStyle: "none", padding: 0 }}>
         {tasks.map((task, index) => (
           <li
             key={index}
             style={{
               padding: "10px",
               marginBottom: "5px",
               backgroundColor: "#444",
               borderRadius: "5px",
             }}
           >
             {task}
           </li>
         ))}
       </ul>
     </div>
   );
 };
 
 export default Tasks;
 