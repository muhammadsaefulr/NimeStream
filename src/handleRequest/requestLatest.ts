import axios from "axios";

export default function reqLatest() {
  let data = null;
  axios.get(`/main/otakudesu`).then((res) => {
    console.log(res.data);
    data = res.data;
  });
  return data;
}
