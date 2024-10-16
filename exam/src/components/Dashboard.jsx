import React from "react";

const groups = [
  { id: "F1-1779", teacher: "Mirzaaliyev Bekzod", type: "Juft", students: 6, time: "17:30", color: "bg-red-400" },
  { id: "F2-1063", teacher: "Mirzaaliyev Bekzod", type: "Juft", students: 9, time: "18:40", color: "bg-red-400" },
  { id: "F2-1703", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 6, time: "09:00", color: "bg-red-400" },
  { id: "FRONT-1010", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 12, time: "10:10" , color: "bg-yellow-400" },
  { id: "FRONT-1012", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 12, time: "15:10" , color: "bg-yellow-400" },
  { id: "FRONT-908", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 7, time: "16:20" , color: "bg-yellow-400" },
  { id: "FRONT-926", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 7, time: "09:00" , color: "bg-yellow-400" },
  { id: "FRONT-998", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 9, time: "15:10", color: "bg-yellow-400" },
  { id: "INPR-1021", teacher: "Mirzaaliyev Bekzod", type: "Juft", students: 1, time: "13:30", color: "bg-red-400" },
  { id: "INPR-1641", teacher: "Mirzaaliyev Bekzod", type: "Toq", students: 1, time: "14:00", color: "bg-red-400" },
  { id: "INPR-961", teacher: "Mirzaaliyev Bekzod", type: "Juft", students: 1, time: "12:00", color: "bg-red-400" },
];
  
const Dashboard = () => {
  return (
    <div className="p-10 w-full bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Guruhlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {groups.map((group) => (
          <div key={group.id} className="bg-white rounded-lg shadow-lg min-w-44 p-5 text-center">
            <div className={`${group.color} text-white rounded-t-lg p-4 flex items-center justify-center gap-4 flex-col`}>
              <h3 className="text-sm">
                <img src="marss.png" className="size-20" alt="MARS Logo" />
              </h3>
              <h1 className="text-2xl my-2">{group.id}</h1>
              <p className="text-xs">{group.teacher} | {group.type}</p>
            </div>
            <div className="flex justify-between py-4">
              <div className="text-center">
                <p className="text-gray-500 text-sm">Talabalar</p>
                 <p className="text-gray-500 text-sm">Vaqt</p>
              </div>
              <div className="text-center">
               <h3 className="text-lg mt-1">{group.students}</h3>
                <h3 className="text-lg mt-1">{group.time}</h3>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-green-600 text-white py-3 px-10 rounded-lg hover:bg-green-700 ">Tekshirish</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
