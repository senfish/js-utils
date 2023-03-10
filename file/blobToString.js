// blob对象转string  
const blobToString = async (blob) => {
    return new Promise((resolve) => {
      const utf8decoder = new TextDecoder();
      const fr = new FileReader();
      fr.readAsArrayBuffer(blob);
      fr.onload = function () {
        const buffer = fr.result;
        const text = utf8decoder.decode(buffer);
        resolve(text);
      };
    });
  };
