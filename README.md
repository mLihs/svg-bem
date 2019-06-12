<img src="https://raw.githubusercontent.com/mLihs/svg-bem/master/doc/img/svg_bem_logo.png" alt="SVG BEM LOGO" width="240">

# SVG BEM

A Plugin for SVG export to convert IDs to Classes, create BEM Naming based on the layes of the artboard. Furthermore it uses SVGO to compress and Clean up SVGs, right when you export them. This Plugin *requires* Sketch 52. The Plugin bases on the original Svgo Compressor from [Bohemian Coding](https://raw.githubusercontent.com/BohemianCoding/svgo-compressor).

一个用于SVG导出的插件，是用于将ID转换为Class，是基于Sketch板层创建BEM命名的。此外，当你输出它们是，它用于SVGO的压缩和清理SVG。

## Usage

The SVG BEM extends the standard Sketch SVG Export and compress your SVG assets whenever you export them. 
**You have to do anything**. 

每当您导出SVG BEM时，SVG BEM都会扩展标准的Sketch SVG导出和压缩SVG资产。 
**你必须做任何事情**。


<img src="https://raw.githubusercontent.com/mLihs/svg-bem/master/doc/img/example.jpg" alt="SVG Example" width="960">

### Specific IDs or Classes Names
If you need a specific ID or Class yust use the **#** or **.** as prefix in ur Sketch layers.

如果您需要特定ID或Class，请使用 **＃** 或 **.** 作为草图图层中的前缀。

### Plugin Seetings

If you’re not happy with the default settings of SVG BEM, you can select **Plugins › SVG BEM › Setting** and change your defaults based on your needs.

- ID To Class Conversion: Turn On or OFF the SVG IDs to Classes conversion. 将SVG ID打开或关闭为Class转换
- #*?&@ Replacement: Specified separator to replace special character. 用指定的分隔符替换所有特殊字符。
- Names to BEM Sty Conversion: Turn On or OFF the conversion to BEM style. 打开或关闭转换为BEM样式。
- BEM Seperator: Specified separator for the BEM style.BEM样式的指定分隔符

<img src="https://raw.githubusercontent.com/mLihs/svg-bem/master/doc/img/look.jpg" alt="Plugin View" width="480">



## Install

- Download [SVG BEM](https://github.com/mLihs/svg-bem/releases/latest) & unzip it.
- Double click **SVG BEM.sketchplugin** to install the Plugin.







### SVGO Plugins Settings

For more information go to [svgo-compressor](https://github.com/BohemianCoding/svgo-compressor) from BohemianCoding.



