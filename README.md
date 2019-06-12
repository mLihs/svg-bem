<img src="https://raw.githubusercontent.com/mLihs/svg-bem/master/doc/img/svg_bem_logo.png" alt="SVG BEM LOGO" width="240">

# SVG BEM

A Plugin for SVG export to convert IDs to Classes, create BEM Naming based on the layes of the artboard. Furthermore it uses SVGO to compress and Clean up SVGs, right when you export them. This Plugin *requires* Sketch 52. The Plugin bases on the original Svgo Compressor from [Bohemian Coding](https://raw.githubusercontent.com/BohemianCoding/svgo-compressor).

SVG BEM是这个插件帮你在的SVG创造BEM命名和改变ID做类。SVG BEM使用SVGO做变小的和清理SVG。SVG BEM 扩展Sketch出口功能。

<img src="https://raw.githubusercontent.com/mLihs/svg-bem/master/doc/img/example.jpg" alt="SVG BEM LOGO" width="960">



## Install

- Download [SVG BEM](https://github.com/mLihs/svg-bem/releases/latest) & unzip it.
- Double click **SVG BEM.sketchplugin** to install the Plugin.

## Usage

The SVG BEM extends the standard Sketch SVG Export and compress your SVG assets whenever you export them. **You have to do anything**.



## Editing Settings

If you’re not happy with the default settings of SVG BEM, you can select **Plugins › SVG BEM › Setting** and change your defaults based on your needs.

### Top level settings

<img src="https://raw.githubusercontent.com/mLihs/svg-bem/master/doc/img/look.jpg" alt="Plugin View" width="480">

- `ID To Class Conversion`: Turn On or OFF the SVG IDs to Classes conversion
- `#*?&@ Replacement`: Relplace all special charakter by the specified seperator
- `Names to BEM Sty Conversion`: Turn On or OFF the converstion to BEM style
- `BEM Seperator`: Specified seperator for the BEM style.


### SVGO Plugins Settings

For more information go to [svgo-compressor](https://github.com/BohemianCoding/svgo-compressor) from BohemianCoding.



