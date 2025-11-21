# frozen_string_literal: true

# Jekyll plugin to convert Quarto-generated LaTeX math to KaTeX-rendered HTML
# Quarto outputs math in <span class="math inline">\(...\)</span> format
# This plugin converts those to pre-rendered KaTeX HTML for faster page loads

require 'katex'
require 'cgi'

module Jekyll
  module QuartoMathConverter
    # Process pages and documents after rendering
    def self.process(content)
      return content unless content.include?('class="math')

      # Convert inline math: \(...\)
      content = content.gsub(/<span class="math inline">\\\((.*?)\\\)<\/span>/m) do
        original = $1
        latex = CGI.unescapeHTML(original)
        begin
          Katex.render(latex, displayMode: false)
        rescue => e
          Jekyll.logger.warn "QuartoMath:", "Failed to render inline math: #{latex[0..80]}#{'...' if latex.length > 80}"
          Jekyll.logger.warn "QuartoMath:", "Error: #{e.message}"
          # Keep original if rendering fails
          "<span class=\"math inline\">\\(#{original}\\)</span>"
        end
      end

      # Convert display math: \[...\]
      content = content.gsub(/<span class="math display">\\\[(.*?)\\\]<\/span>/m) do
        original = $1
        latex = CGI.unescapeHTML(original)
        begin
          Katex.render(latex, displayMode: true)
        rescue => e
          Jekyll.logger.warn "QuartoMath:", "Failed to render display math: #{latex[0..80]}#{'...' if latex.length > 80}"
          Jekyll.logger.warn "QuartoMath:", "Error: #{e.message}"
          # Keep original if rendering fails
          "<span class=\"math display\">\\[#{original}\\]</span>"
        end
      end

      content
    end
  end
end

# Hook into Jekyll's rendering pipeline
Jekyll::Hooks.register [:pages, :documents], :post_render do |item|
  # Only process HTML files
  if item.output_ext == ".html"
    item.output = Jekyll::QuartoMathConverter.process(item.output)
  end
end
