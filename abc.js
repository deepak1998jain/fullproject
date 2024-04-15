
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

    var logKeys = function(c) {
        //console.log(c);
    console.log(JSON.stringify(c));
    if(typeof(c)=='object') {	

            if(Array.isArray(c)) {
                for(var i=0;i<c.length;i++) {
                    if((typeof(c[i]))=='string') {
                        // console.log("type is string", a[i]);
                        continue;
                    } else {
                    console.log("type is object", c[i]);
                    logKeys(c[i]);
                }
                return;
            }
        }

        var keys = Object.keys(c);
    
        for(var i=0; i<keys.length;i++) {
        if(typeof(keys[i])=='string') {
            result.push(keys[i]);
        }

        if(typeof(c[keys[i]])=='object') {
            logKeys(c[keys[i]]);
        }
        }
    }
    };
    //console.log(JSON.stringify(a));
    var result = [];
    for(var i=0;i<a.length;i++) {
        //console.log(a[i]);
        //console.log(typeof(a[i]));
        if((typeof(a[i]))=='string') {
            // console.log("type is string", a[i]);
            continue;
        } else {
        console.log("type is object", a[i]);
        logKeys(a[i]);
        }
    }
    
    
    console.log(result);