# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-quarkyll"
  spec.version       = "0.1.0"
  spec.authors       = ["drupix"]
  spec.email         = ["enzo@drupal-solutions.ch"]

  spec.summary       = "A simple Jekyll theme based on Quark for Grav CMS."
  spec.homepage      = "https://github.com/drupix/jekyll-theme-quarkyll."
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
  spec.add_runtime_dependency "jekyll-menus", "~> 0.6"

  # spec.add_development_dependency "bundler", "~> 2.1.4"
  # spec.add_development_dependency "rake", "12.3.3"
end
