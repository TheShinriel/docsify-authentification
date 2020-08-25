# docsify-authentification

## Install
1. Configure docsify-authentification (optional):

    ```html
    <script>
    window.$docsify = {
      authentification: {
        tag: 'withAuth',
      },
      headers: {
        "Content-Type": "text/markdown; charset=UTF-8",
        "Authorization": "bearer HelloWorldForTest",
      },
    }
    </script>
    ```

2. Insert script into docsify document:

    ```html
    <script src="//unpkg.com/docsify-authentification/dist/docsify-authentification.min.js"></script>
    ```


## Usage
Write your authentification code like this:

```markdown
[withAuth](https://raw.githubusercontent.com/docsifyjs/docsify/develop/README.md)
```

It will be replaced by the raw text of the url above into your doc file content.

## Options
### tag
By default, we set the tag as `withAuth` for you.    
However, you can change this options as you like:

```javascript
window.$docsify = {
  authentification: {
    tag: 'customTag',
  },
}
```

Will match the code in you doc file: 

```markdown
[customTag](https://raw.githubusercontent.com/docsifyjs/docsify/develop/README.md)
```

### Headers
By default, there is no change to call the markdown, except that you can call anything from an other site or an html page...
You can specify exactly what headers you want like:

```javascript
window.$docsify = {
  authentification: {
      headers: {
        "X-API-Key": "abcdef12345",
        "Authorization": "bearer HelloWorldForTest",
      },
  },
}
```

Will add these headers for each call to the page in parameter
```markdown
[withAuth](https://raw.githubusercontent.com/docsifyjs/docsify/develop/README.md)
[withAuth](example/README.md)
```

## Example
- [index.html](example/index.html)
- [README.md](https://raw.githubusercontent.com/TheShinriel/docsify-authentification/master/README.md)

# License
This project is licensed under the [MIT license](LICENSE).    
Copyright (c) Shinriel (shinriel.dev@gmail.com)