import React, { useEffect, useState } from "react";
import localforage from "localforage";
import { useNavigate } from "react-router-dom";

const HomeLogged = () => {
  const [token, setToken] = useState();

  const navigate = useNavigate();

  async function getData() {
    try {
      const value = await localforage.getItem("@token");

      setToken(value);
    } catch (err) {
      console.error("Error getting data:", err);
    }
  }

  useEffect(() => {
    getData();

    if (!token) {
      navigate("/");
    }
  }, []);

  async function removeData() {
    try {
      await localforage.removeItem("@token");

      console.log("Data removed!");
    } catch (err) {
      console.error("Error removing data:", err);
    }
  }

  const user = {
    name: "Alexandre Junior",
    email: "alexandre@example.com",
    avatar:
      "https://res.cloudinary.com/dqvujibkn/image/upload/v1756496734/uploads/ztcc6fz18dh7bnvpo4gi.jpg",
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      {token && (
        <div className="">
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="font-semibold text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <button
              className="rounded-full "
              onClick={() => {
                removeData();

                navigate("/");
              }}
            >
              <img
                src={user.avatar || "/default-avatar.png"} // Avatar do usuário ou default
                alt="User Avatar"
                className="h-10 w-10 rounded-full object-cover border-2 border-gray-300"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLogged;
