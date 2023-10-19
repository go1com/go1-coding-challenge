# Typescript

```typescript
const myjson = `
{
    "glossary" : "your JSON here"
}
`;
const data = JSON.parse(myjson);
```

# Javascript

```javascript
var myjson = `
{
    "glossary" : "your JSON here"
}
`;
var data = JSON.parse(myjson);
```

# PHP

```php
<?php
$myjson = <<<EOD
{
    "glossary" : "your JSON here"
}
EOD;
$data = json_decode($myjson);
?>
```

# GoLang

```golang
package main

import (
	"encoding/json"
	"fmt"
)

func main() {

	var myjson = `
	{
		"glossary": "your JSON here"
	}
	`
	var data map[string]interface{}
	json.Unmarshal([]byte(myjson), &data)

}
```

# Python

```python
import json

my_json = """
{
    "glossary" : "your JSON here"
}
"""

data = json.loads(my_json)
```
