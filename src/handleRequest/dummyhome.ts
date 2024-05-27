import axios from "axios";

export default function dummyReq() {
  let data = {};
  axios.get(`/main/otakudesu`).then((res) => {
    console.log(res.data);
    data = res.data;
  });
  return data;
}
