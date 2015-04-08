require 'sinatra'
require 'mongo'

configure do
  client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'mydb')
  set :client, client
end

get '/' do
  settings.client[:test].insert_one(cookie_id: 'asdsafdsfdsasdfgsdagfas', url: 'http://www.google.com')
  "success"
end

get '/count' do
  settings.client[:test].find.count
end
