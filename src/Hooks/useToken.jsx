import { useEffect, useState } from "react";

const useToken = (email) => {
  // console.log(email);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem("book-token", data?.token);
            setToken(data?.token);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [email]);
  return token;
};
export default useToken;
