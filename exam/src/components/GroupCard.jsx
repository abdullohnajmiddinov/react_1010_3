import React from "react";

const GroupCard = ({ group }) => {
  const cardColor =
    group.id.includes("FRONT") ? "from-yellow-400 to-yellow-300" : "from-red-500 to-red-400";

  return (
    <div
      className={`rounded-xl p-6 bg-gradient-to-r ${cardColor} text-white text-center shadow-lg hover:shadow-2xl transition-shadow duration-300`}
    >
      <h3 className="text-2xl font-bold tracking-wide mb-2">{group.id}</h3>
      <p className="text-sm mb-1">{group.teacher}</p>
      <p className="text-sm font-light italic text-gray-200">{group.type}</p>
      <div className="my-4 text-base font-medium">
        <span className="block">Talabalar: {group.students}</span>
        <span className="block">Vaqt: {group.time}</span>
      </div>
      <button className="bg-green-500 px-6 py-2 rounded-lg text-white mt-4 hover:bg-green-600 transition-all transform hover:scale-105 shadow-md">
        Tekshirish
      </button>
    </div>
  );
};

export default GroupCard;
