import React,{useState} from "react";


const getdata = () => {
  const data = localStorage.getItem("user");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Login = () => {
  const [user, setuser] = useState(getdata());

  // console.log(user);

  const [email, setemail] = useState("");
  const [pass, setpassword] = useState("");

  const handalSubmit = (e) => {
    e.preventDefault();

    let data = {
      email,
      pass,
    };
    let status = false;
    if (email && pass) {
      user &&
        user.map((data) => {
          if (data.email === email && data.password === pass) {
            alert("login successfully");
            status = true;
            setemail("");
            setpassword("");
          } else if (data.email !== email && data.password === pass) {
            alert("wrong email");
            status = true;
          } else if (data.email === email && data.password !== pass) {
            alert("wrong pass");
            status = true;
          }
        });
    } else {
      alert("plz enter data");
    }
  };
  

  return (
    <div>
      <form className="form-group offset-sm-3 col-sm-5" onSubmit={handalSubmit}>
        <label for="exampleInputEmail1">
          <b>Email:</b>
        </label>
        <input
          value={email}
          type="text"
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
          className="form-control"
        />

        <br />
        <label for="exampleInputEmail1">
          <b>Password:</b>
        </label>
        <input
          value={pass}
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
          className="form-control"
        />
        <br />
        <button type="submit" className="btn btn-primary offset-sm-4 my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
