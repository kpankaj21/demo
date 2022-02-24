
import { useState, useEffect } from "react";

const getdata = () => {
  const data = localStorage.getItem("user");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Register = () => {
  const [user, setuser] = useState(getdata());
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [nerror, setnerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passerror, setpasserror] = useState("");
  const [cpasserror, setcpasserror] = useState("");
  const [valide, setvalidemail] = useState("");
  const [passcpass, setpasscapass] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    let data = {
      name,
      email,
      password,
      cpass,
    };
    if (!name && !email && !password && !cpass) {
      if (!name) {
        setnerror("plese enter name");
      }
      if (!email) {
        setemailerror("plese enter email");
      }

      if (!password) {
        setpasserror("plese enter pass");
      }
      if (!cpass) {
        setcpasserror("plese enter cpass");
      }
    } else if (email.match(/^[a-zA-Z]+$/)) {
      setvalidemail("invalid email");
    } else if (password != cpass) {
      setpasscapass("paccword &cpassword not match");
    } else {
      setuser([...user, data]);
      alert("data added succeccfully");
      setname("");
      setemail("");
      setpass("");
      setcpass("");
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <form className="form-group offset-sm-3 col-sm-5" onSubmit={handlesubmit}>
      <label for="exampleInputEmail1">
        <b>Name:</b>
      </label>
      <input
        value={name}
        type="text"
        onChange={(e) => setname(e.target.value, setnerror(""))}
        placeholder="name"
        className="form-control"
      />
      <span
        style={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {nerror}
      </span>

      <br />
      <label for="exampleInputEmail1">
        <b>Email:</b>
      </label>
      <input
        value={email}
        type="text"
        onChange={(e) =>
          setemail(e.target.value, setemailerror(""), setvalidemail(""))
        }
        placeholder="email"
        className="form-control"
      />
      <span
        style={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {emailerror}
      </span>
      <span
        style={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {valide}
      </span>
      <br />
      <label for="exampleInputPassword1">
        <b>Password:</b>
      </label>
      <input
        value={password}
        type="password"
        onChange={(e) =>
          setpass(e.target.value, setpasserror(""), setpasscapass(""))
        }
        placeholder="password"
        className="form-control"
      />
      <span
        style={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {passerror}
      </span>
      <br />
      <label for="exampleInputPassword1">
        <b>Confirm password:</b>
      </label>
      <input
        value={cpass}
        type="password"
        onChange={(e) => setcpass(e.target.value, setcpasserror(""))}
        placeholder="confirmpassword"
        className="form-control"
      />
      <span
        style={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {cpasserror}
      </span>
      <span
        style={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {passcpass}
      </span>
      <br />
      <button type="submit" className="btn btn-primary offset-sm-4 my-3">
        Submit
      </button>
    </form>
  );
};

export default Register;
