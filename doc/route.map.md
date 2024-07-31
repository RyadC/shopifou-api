# Routes implementation for the API

| route                  |   GET   |   POST   |   PATCH   |   DELETE   |
| ---------------------- | ------- | -------  |  -------  |   -------  |
| /invoice               |   ✅   |    ✅    |    ❌    |      ❌    |
| /invoice/:id           |   ✅   |    ❌    |    ✅    |      ✅    |
| /invoice/customer/:id  |   ✅   |    ❌    |    ❌    |      ❌    |
| /order                 |   ✅   |    ✅    |    ❌    |      ❌    |
| /order/:id             |   ✅   |    ❌    |    ✅    |      ✅    |
| /order/article/:id     |   ✅   |    ❌    |    ❌    |      ❌    |
| /order/customer/:id    |   ✅   |    ❌    |    ❌    |      ❌    |
| /category              |   ✅   |    ✅    |    ❌    |      ❌    |
| /category/:id          |   ✅   |    ❌    |    ✅    |      ✅    |
| /article               |   ✅   |    ✅    |    ❌    |      ❌    |
| /article/:id           |   ✅   |    ❌    |    ✅    |      ✅    |
| /article/category/:id  |   ✅   |    ❌    |    ❌    |      ❌    |
| /customer              |   ✅   |    ✅    |    ❌    |      ❌    |
| /customer/:id          |   ✅   |    ❌    |    ✅    |      ✅    |
