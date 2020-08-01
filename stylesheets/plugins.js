var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//Flash
//Windows Media Player
//Java
//Shockwave
//RealPlayer
//QuickTime
//Acrobat Reader
//SVG Viewer

var agt=navigator.userAgent.toLowerCase();
var ie  = (agt.indexOf('msie') != -1);
var ns  = (navigator.appName.indexOf('Netscape') != -1);
var win = ((agt.indexOf('win')!=-1) || (agt.indexOf('32bit')!=-1));
var mac = (agt.indexOf('mac')!=-1);

if (ie && win)
{
	pluginlist = detectIE('Adobe.SVGCtl','SVG Viewer') + detectIE('SWCtl.SWCtl.1','Shockwave Director') + detectIE('ShockwaveFlash.ShockwaveFlash.1','Shockwave Flash') + detectIE('rmocx.RealPlayer G2 Control.1','RealPlayer') + detectIE('QuickTimeCheckObject.QuickTimeCheck.1','QuickTime') + detectIE('MediaPlayer.MediaPlayer.1','Windows Media Player') + detectIE('PDF.PdfCtrl.5','Acrobat Reader');
}

if (ns || !win)
{
		nse = '';
		for (var i=0;i<navigator.mimeTypes.length;i++)
		{
			nse += navigator.mimeTypes[i].type.toLowerCase();
			pluginlist = detectNS('image/svg-xml','SVG Viewer') + detectNS('application/x-director','Shockwave Director') + detectNS('application/x-shockwave-flash','Shockwave Flash') + detectNS('audio/x-pn-realaudio-plugin','RealPlayer') + detectNS('video/quicktime','QuickTime') + detectNS('application/x-mplayer2','Windows Media Player') + detectNS('application/pdf','Acrobat Reader');
		}
}

function detectIE(ClassID,name)
{
	result = false;
	document.write('<SCRIPT LANGUAGE=VBScript>\n on error resume next \n result = IsObject(CreateObject("' + ClassID + '"))</SCRIPT>\n');
	
	if (result)
	{
		return name+',';
	}
	else
	{
		return '';
	}

}

function detectNS(ClassID,name)
{
	n = '';
	
	if (nse.indexOf(ClassID) != -1)
	{
		if (navigator.mimeTypes[ClassID].enabledPlugin != null)
		{
			n = name+',';
			return n;
		}
	}
	
}

function popPlugins(_url)
{
	location.href = 'home.html';
	var popPlugins = window.open(_url,'popPlugins','width=490,height=300,left='+ (screen.width/2 - 490/2) +',top='+ ((screen.height/2 - 350/2)-100) +'');
	popPlugins.focus();
}

pluginlist += navigator.javaEnabled() ? 'Java,' : '';

if (pluginlist.length > 0)
{
	pluginlist = pluginlist.substring(0,pluginlist.length-1);
}

if (pluginlist.indexOf("Flash") > -1 && pluginlist.indexOf("RealPlayer") > -1)
{
	location.href = 'home.html';
}
else if (pluginlist.indexOf("Flash") == -1 && pluginlist.indexOf("RealPlayer") == -1)
{
	location.href = 'home.html';
	popPlugins('missingplugins.php?flash=0&real=0');
}
else if (pluginlist.indexOf("Flash") > -1 && pluginlist.indexOf("RealPlayer") == -1)
{
	location.href = 'home.html';
	popPlugins('missingplugins.php?flash=1&real=0');
}
else if (pluginlist.indexOf("Flash") == -1 && pluginlist.indexOf("RealPlayer") > -1)
{
	location.href = 'home.html';
	popPlugins('missingplugins.php?flash=0&real=1');
}

}
/*
     FILE ARCHIVED ON 01:43:23 Jun 06, 2004 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:49:05 Jun 18, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 426.829
  exclusion.robots: 0.249
  CDXLines.iter: 13.951 (3)
  exclusion.robots.policy: 0.235
  RedisCDXSource: 33.929
  load_resource: 432.156
  PetaboxLoader3.resolve: 110.244 (2)
  PetaboxLoader3.datanode: 622.289 (4)
  LoadShardBlock: 374.688 (3)
  esindex: 0.017
*/