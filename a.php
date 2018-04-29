<?php
  // $username = $_GET['username'];
  // echo $username;
  // echo "fn([1,2,3]);";

  //图片路径
  $pics = array ("jjx.jpg","jzz.jpg","pyt.jpg","scm.jpg","zyh.jpg");
  // 图片高度
  $heights = array (230,130,700,100,600,400,40,500);
  // 图片简介
  $intros = array ("dfsjodfijsdfnsd","lkjkljlkjlkjflkgdfg","rwrwecmwelkdmwlke","ythtyhtyh","erefdsdsgfdgf");
  // 随机生成结果
  $rel = array ();
  $rel[0] = json_encode(array ("picpath"=>$pics[rand(0,4)],"picheight"=>$heights[rand(0,7)],"picintro"=>$intros[rand(0,4)]));
  $rel[1] = json_encode(array ("picpath"=>$pics[rand(0,4)],"picheight"=>$heights[rand(0,7)],"picintro"=>$intros[rand(0,4)]));
  $rel[2] = json_encode(array ("picpath"=>$pics[rand(0,4)],"picheight"=>$heights[rand(0,7)],"picintro"=>$intros[rand(0,4)]));
  $rel[3] = json_encode(array ("picpath"=>$pics[rand(0,4)],"picheight"=>$heights[rand(0,7)],"picintro"=>$intros[rand(0,4)]));
  $rel[4] = json_encode(array ("picpath"=>$pics[rand(0,4)],"picheight"=>$heights[rand(0,7)],"picintro"=>$intros[rand(0,4)]));
  $rel[5] = json_encode(array ("picpath"=>$pics[rand(0,4)],"picheight"=>$heights[rand(0,7)],"picintro"=>$intros[rand(0,4)]));
  $rel[6] = json_encode(array ("picpath"=>$pics[rand(0,4)],"picheight"=>$heights[rand(0,7)],"picintro"=>$intros[rand(0,4)]));
  $rel[7] = json_encode(array ("picpath"=>$pics[rand(0,4)],"picheight"=>$heights[rand(0,7)],"picintro"=>$intros[rand(0,4)]));
  $rel[8] = json_encode(array ("picpath"=>$pics[rand(0,4)],"picheight"=>$heights[rand(0,7)],"picintro"=>$intros[rand(0,4)]));
  echo json_encode(array ('rel'=>$rel));

?>
