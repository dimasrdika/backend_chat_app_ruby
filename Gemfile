source "https://rubygems.org"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 8.0.0"

# The modern asset pipeline for Rails [https://github.com/rails/propshaft]
gem "propshaft"

# ActionCable for real-time features
gem 'actioncable'

# Import maps for managing JavaScript dependencies
gem "importmap-rails"

# Turbo and Stimulus for enhanced interactivity in Rails apps
gem "turbo-rails"
gem "stimulus-rails"

# Environment variable management for different environments
gem 'dotenv-rails', groups: [:development, :test, :production]

# Redis for caching and real-time features
gem 'redis'

# Puma web server for serving the application
gem "puma", ">= 5.0"

# JSON API builder
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", ">= 4.0.1"

# Secure password handling with bcrypt
# gem "bcrypt", "~> 3.1.7"

# Timezone support for Windows and JRuby
gem "tzinfo-data", platforms: %i[ windows jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Static code analysis tool
gem "rubocop", require: false

# Deployment tool for Docker containers
gem "kamal", require: false

# HTTP asset caching/compression for Puma
gem "thruster", require: false

group :development, :test do
  # Debugging tool for Rails applications
  gem "debug", platforms: %i[ mri windows ], require: "debug/prelude"

  # Static analysis for security vulnerabilities
  gem "brakeman", require: false

  # Ruby styling with Omakase
  gem "rubocop-rails-omakase", require: false
end

group :development do
  # Web console for debugging Rails in the browser
  gem "web-console"
end

group :test do
  # System testing tools for integration tests
  gem "capybara"
  gem "selenium-webdriver"
end
