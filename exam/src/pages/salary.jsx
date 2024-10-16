import React from 'react';

const Salary = () => {
  const groupsData = [
    { name: "FRONT-826", value: "1,510,167" },
    { name: "FRONT-908", value: "1,012,915" },
    { name: "FRONT-926", value: "1,878,503" },
    { name: "INPR-961", value: "1,795,000" },
    { name: "FRONT-998", value: "2,136,337" },
    { name: "FRONT-1012", value: "1,473,336" },
    { name: "FRONT-1010", value: "1,399,665" },
    { name: "INPR-1021", value: "1,795,000" },
    { name: "1063", value: "1,326,000" },
    { name: "1087", value: "847,169" },
    { name: "INPR-1641", value: "1,645,417" },
    { name: "F2-1703", value: "662,998" },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-100 via-gray-100 to-blue-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 text-gray-800">
        <div className="flex items-center mb-4">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"
            alt="profile icon"
            className="w-8 h-8 mr-2"
          />
          <h2 className="text-xl font-bold">Mirzaaliyev Bekzod</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">O'quvchilar soni</p>
            <h3 className="text-2xl font-semibold">73</h3>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Guruhlar soni</p>
            <h3 className="text-2xl font-semibold">12</h3>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg col-span-2">
            <p className="text-sm text-gray-500">Grade</p>
            <h3 className="text-2xl font-semibold">Senior</h3>
          </div>
        </div>
      </div>

      <div className="p-10 w-[1000px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-600 flex items-center">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/groups.png"
              alt="Groups icon"
              className="w-5 h-5 mr-2"
            />
            Groups
            <span className="text-red-500 ml-2">(Saverc)</span>
          </h2>
          <h2 className="text-3xl font-bold text-green-500">17,482,507</h2>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          {groupsData.map((group, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-gray-200"
            >
              <p className="text-gray-700">{group.name}</p>
              <p className="text-gray-600">{group.value}</p>
              <span className="text-gray-400">{'>'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Salary;
