import React, { useEffect, useState } from "react";
import localforage from "localforage";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import Spinner from "../misc/Spinner";

const HomeLogged = () => {
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  async function getData() {
    try {
      const token = await localforage.getItem("@token");
      const user = await localforage.getItem("@user");

      const response = await api.post("/api/v1/profile", {
        user: {
          id: user._id,
        },
      });

      setUser(response.data.user);

      setIsLoading(false);

      if (!token) {
        navigate("/");
      }
    } catch (err) {
      setIsLoading(false);

      console.error("Error getting data:", err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function removeData() {
    try {
      await localforage.removeItem("@token");

      console.log("Data removed!");
    } catch (err) {
      console.error("Error removing data:", err);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen ">
        {isLoading && <Spinner color="border-red" />}

        {!isLoading && (
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
                  src={user.avatar.url || "/default-avatar.png"}
                  Avatar
                  do
                  usuário
                  ou
                  default
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full object-cover border-2 border-gray-300"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeLogged;
