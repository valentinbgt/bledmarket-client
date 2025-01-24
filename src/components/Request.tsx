import axios from "axios";

interface Props {
  action: string[];
  params: object;
  then: (response: object) => void;
}

const Request = ({ action, params, then }: Props) => {
  const actions: any = {
    files: {
      get: {
        method: "GET",
        params: ["repertory"],
      },
      download: {
        method: "GET",
      },
      add: {
        method: "POST",
      },
      delete: {
        method: "POST",
      },
      rename: {
        method: "POST",
      },
      move: {
        method: "POST",
      },
      newFolder: {
        method: "POST",
      },
    },
    users: {
      login: {
        method: "POST",
      },
      signup: {
        method: "POST",
      },
      password_change: {
        method: "POST",
      },
      logout: {
        method: "POST",
      },
      is_connected: {
        method: "GET",
      },
      verify: {
        method: "GET",
      },
    },
  };

  const actionParams = actions[action[0]][action[1]];

  if (actionParams.method == "GET") {
    console.log(`http://dev-api.bledmarket.fr/${action[0]}/${action[1]}`);
    axios
      .get(`http://dev-api.bledmarket.fr/${action[0]}/${action[1]}`, params)
      .then((response) => {
        then(response);
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (actionParams.method == "POST") {
    console.log("POST");
  }

  //   axios
  //     .post("https://reqres.in/api/login", {
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });

  return;
};

export default Request;
