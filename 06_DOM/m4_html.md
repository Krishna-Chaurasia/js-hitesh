```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>DOM 4</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <ul class="language">
        <li>Javascript</li>
    </ul>
</body>
<script>
    function addLanguage(langName){
        const li = document.createElement('li');
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    } 
    addLanguage("python")
    addLanguage("typescript")

    // above function adLanguage() is not much optimize way, because we need to traverse the all trees, so use below fuction addOptiLanguage() and technique

    function addOptiLanguage(langName){
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(langName))
       document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')

    //Edit python to MOJO 
    const secondLang = document.querySelector("li:nth-child(2)") 
    secondLang.innerHTML = "MOJO" // using innerHTML is not optimize

    //Edit  MOJO to New MOJO and below code is more optimize
    const newli = document.createElement('li')
    newli.textContent = "New MOJO"
    secondLang.replaceWith(newli)

    //Edit javascript to typescript
    const FirstLang = document.querySelector('li:first-child')
    FirstLang.outerHTML = '<li>TypeScript</li>' // we can use outerHTML, but here we need to give full html code

    //Remove golang 
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()  // now last li i.e golang reomved

</script>
</html>
```

```
output:
TypeScript
New MOJO
typescript
```