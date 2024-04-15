var a = [
    {
      "c": [
        {
          "d": 5
        }
      ]
    },
    "5",
    {
      "f": 7
    },
    {
      "e": {
        "c": [
          9,
          {
            "d": 9
          }
        ]
      }
    }
  ];
  //console.log(JSON.stringify(a));
  var result = [];
  for(var i=0;i<a.length;i++) {
    if(typeof(a[i]=='string')) continue;
      logKeys(a[i]);
  }
  
   var logKeys = function(c) {
      console.log(c);
      console.log(JSON.stringify(c));
     if(typeof(c)==object) {	
      var keys = Object.keys(c);
     
      if(typeof(keys[i])=='string') {
          result.push(keys[i]);
      }
      
      if(typeof(c[keys[i]])=='object') {
          logKeys(c[keys[i]]);
      }
     }
   };
   
   console.log(result.uniqueKeys());