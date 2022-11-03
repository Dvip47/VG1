import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function User() {
  const [user, setUser] = useState([]);
  const CallUserData = async () => {
    try {
      const res = await fetch("https://vishwagroup.herokuapp.com/user", {
        method: "get",
        credentials: "include",
      });
      const data = await res.json();
      if (res.status === 200) {
        setUser(data?.message);
        // console.log(data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CallUserData();
  }, []);

  const handleDelete = async (data) => {
    const res = await axios(`/deleteUser${data?._id}`);
    if (res.status === 200) {
      alert(`${data?.name} deleted`);
      CallUserData();
    }
  };

  const handleUpdate = async (data) => {
    const res = await axios(`/updateUser${data?._id}`);
    if (res.status === 200) {
      alert(`${data?.name} updated`);
      CallUserData();
    }
  };

  //template string symble-    ``

  return (
    <>
      <div
        className="scroll"
        style={{
          margin: "2.5%",
          width: "45%",
          height: "500px",
          backgroundColor: "#b5f7c6 ",
          border: "3px solid black",
        }}
      >
        <div className="card">
          <div className="card-body">
            <h3
              className="header-title pb-3 mt-0"
              style={{ textAlign: "center" }}
            >
              Total User
            </h3>
            <table className="">
              <tbody>
                <thead>
                  <tr className="align-self-center">
                    <th>Name</th> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <th>Email</th>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <th>Contact</th>
                    &emsp;&emsp;&emsp;&emsp;&emsp;
                    <th>Action</th>
                  </tr>
                </thead>
                {user?.reverse().map((data, id) => {
                  return (
                    <div>
                      <tr key={id}>
                        <td className="">
                          <div className="media">
                            {/* <img
                          src="/images/users/avatar-2.jpg"
                          alt=""
                          className="thumb-md rounded-circle"
                        /> */}
                            <div className="">
                              <td>{data?.name}</td>
                              <td>{data?.email}</td>
                              <td>+91 {data?.mobile}</td>
                              <td
                                onClick={() => handleDelete(data)}
                                style={{ color: "#fa312a", fontWeight: "bold" }}
                              >
                                Delete User
                              </td>
                              <td
                                onClick={() => {
                                  handleUpdate(data);
                                }}
                                style={{ color: "blue" }}
                              >
                                Edit
                              </td>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </div>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
