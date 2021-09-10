Typescript
==
```typescript
const myjson = `{
    your 
    json 
    here
}`;
const data = JSON.parse(myjson);
```

Javascript
==
```javascript
var myjson = `{
    your 
    json 
    here
}`;
var data = JSON.parse(myjson);
```

PHP
==
```php
<?php
$myjson = "{
    your 
    json 
    here
}";
$data = json_decode($myjson);
?>
```
GoLang
==
```golang
import (
    "encoding/json"
)
var myjson = `{
    your 
    json 
    here
}`
var data map[string]interface{}
json.Unmarshal([]byte(data), &data)
```

