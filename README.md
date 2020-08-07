#WR3's SHELFIE to-do list

## MVP
Description: A shopping store app that allows user to buy items online for home delivery.
</br>

npx create-react-app shelfie

Features:
- User can add  item
- User can view current shopping list
- User can delete  item
- User can edit quantity of item in shopping list
- User can check out

### SERVER
Dependencies:
-express

Endpoints:
## Shelves
-app.get("/api/shelf/;id")
## Bins
-app.get("/api/bin/:id")
-app.put("/api/bin/id")
-app.delete("/api/bin/:id")
-app.post('/api/bin/:id")

Structure:
-server/
  -index.js
  -controller.js
  -products.json
## This connects our backend with our frontend
 -Update package.json
  -"main": "./server/index.js",
  -"proxy": "http://localhost:####", 


### CLIENT
Dependencies;
- axios

Structure:
- src/
  - app.js
  - app.css
  - reset.css
  - components/
    - header.js
    - header.css
    - form.js
    - form.css
    - list.js
    - list.css
    - task.js
    - task.css
    
-import each css into their component; header.css into header.js
-import each component into app.js

### ICE BOX
-Live form-of-payment buttons
-Check out with redirect page that allows user to enter contact info, payment info, etc.
-Image of items instead of just name/title. ("Banana".jpeg instead of just Banana)