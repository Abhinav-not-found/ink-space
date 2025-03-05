import List from "@editorjs/list";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Embed from "@editorjs/embed";

const uploadImageByUrl = (e) =>{
  let link = new Promise((resolve,reject)=>{
    try {
      resolve(e)
    } catch (error) {
      reject(error)
    }
  })
  return link.then(url=>{
    return{
      success:1,
      file:{url}
    }
  })
}
const uploadImageByFile = (e) =>{
  
}

export const tools = {
  embed: Embed,
  list: {
    class:List,
    inlineToolBar:true
  },
  image: {
    class:Image,
    config:{
      uploader:{
        uploadByUrl:uploadImageByUrl,
        uploadByFile:uploadImageByFile,
      }
    }
  },
  header: {
    class:Header,
    config:{
      placeholder:'Type heading...',
      levels:[1,2],
      default:2,
    }
  },
  quote: {
    class:Quote,
    inlineToolBar:true,
  },
  marker: Marker,
  inlineCode: InlineCode,
};
