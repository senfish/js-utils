import SparkMD5 from 'spark-md5'; // 需要安装spark-md5依赖


const getFileHash = (file) => {
  const spark = new SparkMD5.ArrayBuffer();
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (e) => {
      spark.append(e.target.result);
      resolve(spark.end());
    }
  })
}

const getStringHash = (string) => {
  return SparkMD5.hash(string);
}
