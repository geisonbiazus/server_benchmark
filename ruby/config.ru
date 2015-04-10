require 'bundler/setup'
require File.join(File.expand_path(File.dirname(__FILE__)), 'main')

run Sinatra::Application
