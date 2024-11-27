
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Tarush",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "kashish@gmail.com",
      age: 22,
    },
    {
      id: 2,
      username: "Dev raj",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "raj@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Abhay Mishra",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "mishra@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Kalyani devi",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "kalyani@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Sharma",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "sharma@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Devgan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "devgan@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Jessica Patel",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "patel@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Chaudhray",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "chaudhary@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Ankit Saxena",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "saxena@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Lavni Pandit",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "pandit@gmail.com",
      status: "active",
      age: 65,
    },
  ];
  