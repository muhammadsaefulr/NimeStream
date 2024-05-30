import axios from "axios";

class requestApi {
  static reqPageLatest = () => {
    let data = null;
    axios.get(`/main/api/service/otakudesu`).then((res) => {
      console.log(res.data);
      data = res.data;
    });

    return data;
  };

  static reqWatchAnime = (urlSourcePath: string | undefined) => {
    let data = null;
    axios
      .get(`/main/api/service/otakudesu/watch/${urlSourcePath}`)
      .then((res) => {
        const dataRes = res.data?.data;
        const dataResInfo = res.data.data?.dataInfo[0];
        data = { dataRes: dataRes, dataResInfo: dataResInfo };
      });

    return data;
  };
   

}

export default requestApi;
