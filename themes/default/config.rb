#require 'compass/import-once/activate'
# Require any additional compass plugins here.
require "susy"
require 'compass-h5bp'
require 'animation'
require 'ceaser-easing'

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "scss"
images_dir = "img"
fonts_dir = "fonts"
javascripts_dir = "js"

# environment = :production
environment = :development
# line_comments = false


# In development, we can turn on the FireSass-compatible debug_info.
firesass = true
# firesass = true

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :development) ? :expanded : :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true



# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

#sass_options = (environment == :development && firesass == true) ? {:debug_info => true} : {}