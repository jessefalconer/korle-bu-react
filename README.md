Korle-Bu is a non-profit organization shipping medical supplies and equipment to developing nations. https://kbnf.org/

## Getting started
  Backend: Ruby on Rails. We suggest using RVM or rbenv to install version `2.5.1p57`. You can check your current version of ruby with `ruby -v`. More information on ruby: https://www.ruby-lang.org/en/documentation/installation/
  
  Database: PostgreSQL, use  `brew` or visit https://www.postgresql.org/ and install version `10.5`
  
  Frontend: React.js using `node@12.15.0`

### Setup Rails
* clone the repository: `git@github.com:jessefalconer/korle-bu-rails-api.git` and `cd` into the directory
* Install dependencies with `bundle install`
* Create the database with `rails db:create`
* Run any pending migrations with `rails db:migrate`
* Seed the database with `rails db:seed`
* Start the server with `rails s`

### Setup React.js
* clone the repository: `git@github.com:jessefalconer/korle-bu-react.git` and `cd` into the directory
* Run the server with `npm start` or whichever node package manager you are using
* Depending on your port defaults, you may need to change the port to listen on `localhost:3001` as rails defaults to port 3000. The Cross Origin Resource Sharing (CORS) inside rails whitelists port 3001.
* Access the server on http://localhost:3001
