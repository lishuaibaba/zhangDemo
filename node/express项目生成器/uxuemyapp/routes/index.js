var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let data = {
    msg:"200",
    is:"ok",
    list:[
      {
        name:"zhangshan1",
        img:"https://img1.baidu.com/it/u=3427821080,1838386749&fm=26&fmt=auto"
      },{
        name:"zhangshan2",
        img:"https://img2.baidu.com/it/u=1987088077,1788287366&fm=26&fmt=auto"
      },{
        name:"zhangshan3",
        img:"https://img2.baidu.com/it/u=3666548066,2508071679&fm=26&fmt=auto"
      },{
        name:"zhangshan4",
        img:"https://img2.baidu.com/it/u=1729250424,3321747351&fm=26&fmt=auto"
      },{
        name:"zhangshan5",
        img:"https://img0.baidu.com/it/u=1371113496,4161662645&fm=26&fmt=auto"
      }
    ]
  }
  res.render('index',data);
});

module.exports = router;
