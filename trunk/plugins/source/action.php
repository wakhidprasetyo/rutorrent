<?php
require_once( '../../php/rtorrent.php' );

if(isset($_REQUEST['result']))
	cachedEcho('log(theUILang.cantFindTorrent);',"text/html");
if(isset($_REQUEST['hash']))
{
	$torrent = rTorrent::getSource($_REQUEST['hash']);
	if($torrent)
		$torrent->send();
}
header("Location: ".$_SERVER['PHP_SELF'].'?result=0');
?>
