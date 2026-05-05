# All Errors And Corrections

1. "main":"App.js" in out package.json.
2. import ReactDOM from "react-dom/client" is corrent /client is very important here.
3. inside html script src it should also mention about modules because we are importing react and other dependencies here . Brower Treats App.js as a normal javascript file.But it's not a normal javascript file , when we mention type="module" it treats it as a module.
