// 瀑布流实现原理：
// 将结果分别包装到div中，一个个的往li中塞，每次都挑最短的li去塞
// 每次拉到最短li的底部时，就通过ajax再去获取接下来的数据
// 由于图片加载慢，所以接口获取的数据要有图片的高度，避免由于图片未加载出来造成li高度的获取错误

// 封装ajax
function _ajax(fn){
  var xhr = new XMLHttpRequest();
  xhr.open('post','a.php');
  xhr.send();
  var result;
  xhr.onload = function(){
    result = xhr.response;
    fn(result);
  }
}
//获取三个li中高度最短的那个li的索引值
function getShortesIndex(oLisEles){ // oLisEles为数组，里面是各个li元素
  var rel = 0,
      arrayLength = oLisEles.length;
  for(var j=1;j<arrayLength;j++){
    if(oLisEles[rel].clientHeight>oLisEles[j].clientHeight){
      rel = j;
    }
  }
  return rel;
}
window.onload = function(){
  var listEle = document.getElementById("lists"),
      listEles = listEle.getElementsByTagName("li");

  // 页面刚加载时就先要获取一轮数据
  _ajax(function(response){
    var relArray = JSON.parse(response).rel;
    for (var i = 0; i < relArray.length; i++) {
      var rel = JSON.parse(relArray[i]);
      var eleString = '<div class="contentwrap"><div class="imgwrap"><img src="img/'+rel.picpath+'" alt="" style="height:'+rel.picheight+'px;"/></div><p class="para">'+rel.picintro+'</p></div>';
      listEles[getShortesIndex(listEles)].innerHTML += eleString;
    }
  });
  // 页面滚动时，如果最短的li到底时，就要再加载一轮数据，并将数据依次往最短的li中塞
  document.body.onscroll = function(){
    if(document.documentElement.scrollTop+document.documentElement.clientHeight>=listEles[getShortesIndex(listEles)].clientHeight){
      _ajax(function(response){
        var relArray = JSON.parse(response).rel;
        for (var i = 0; i < relArray.length; i++) {
          var rel = JSON.parse(relArray[i]);
          var eleString = '<div class="contentwrap"><div class="imgwrap"><img src="img/'+rel.picpath+'" alt="" style="height:'+rel.picheight+'px;"/></div><p class="para">'+rel.picintro+'</p></div>';
          listEles[getShortesIndex(listEles)].innerHTML += eleString;
        }
      });
    }
  }
}

// window.onload = function(){
//   var myFile = document.getElementById("myfile"),
//       oBtn = document.getElementById("obtn");
//   oBtn.onclick = function(){
//     // 获取到的是file控件的value值，这个内容是显示给开发者看的文字，而不是选择的文件
//     console.log(myFile.value); //C:\fakepath\步骤.html
//     // myFile.files file控件中选择的文件列表对象
//     console.log(myFile.files);
//     // 这里只选择一个文件上传，所以只遍历了myFile.files[0]
//     for (var attr in myFile.files[0]) { //打印出选择的文件的属性和属性值
//       console.log(attr+":"+myFile.files[0][attr]);
//     }
//   }
//
// }
