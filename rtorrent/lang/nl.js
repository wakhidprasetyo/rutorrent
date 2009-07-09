﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: nl.js
 * 	Dutch language file.
 * 
 * File Author:
 * 		Lord Alderaan (lordalderaan@gmail.com)
 */
 
 var WUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "Algemeen",
 Downloads			: "Downloads",
 Connection			: "Verbinding",
 BitTorrent			: "BitTorrent",
 Queueing			: "Wachtrij",
 Scheduler			: "Planner",
 Advanced			: "Geavanceerd",
 Disk_Cache			: "Schrijfcache",
 Enable_Web_Interface : "Gebruik webinterface",
 Authent			: "Beveiliging",
 Username			: "Gebruiker",
 Password			: "Wachtwoord",
 Enable_Guest_acc	: "Gastgebruiker inschakelen met gebruikersnaam",
 Connectivity		: "Verbinding",
 Alt_list_port		: "Alternatieve inkomende poort (Standaard: Bittorrent-poort)",
 Rest_access		: "Toegang beperken tot de volgende IP's (Scheid meerdere waarden met ,):",
 User_Interface		: "Interface-instellingen",
 Confirm_del_torr	: "Bevestiging bij verwijderen",
 Update_GUI_every	: "Vernieuw GUI iedere",
 ms					: "ms",
 Alt_list_bckgnd	: "Andere achtergrond kleur voor lijst",
 Show_speed			: "Snelheid weergeven",
 Don_t				: "Niet",
 In_status_bar		: "In status balk",
 In_title_bar		: "In titel balk",
 Show_cat_start		: "Bij opstarten categorie&euml;n weergeven",
 Virt_row_thres		: "Virtuele Rij Drempel",
 Show_det_start		: "Bij opstarten details weergeven",
 Restor_def			: "Standaard-instellingen herstellen",
 When_add_torrent	: "Bij toevoegen torrents",
 Dnt_start_down_auto: "Download niet automatisch starten",
 Other_sett			: "Andere instellingen",
 Append_ut_incompl	: ".!ut toevoegen aan onvoltooide bestanden",
 Prealloc_all_files	: "Vooraf bestandsruimte reserveren",
 Prev_stnd_w_act_con: "Voorkom stand-by indien er actieve torrents zijn",
 Listening_Port		: "Inkomende poort",
 Port_f_incom_conns	: "Poort voor inkomende verbindingen",
 Random_Port		: "Willekeurig",
 Rnd_port_torr_start: "Kies willekeurige poort als rTorrent opstart",
 En_UPnP_mapp		: "Gebruik UPnP-poorttoewijzing",
 Add_torr_mustdie_f	: "rTorrent toevoegen aan uitzonderingen van Windows Firewall",
 Proxy_Server		: "Proxyserver",
 Type				: "Type",
 none				: "(geen)",
 Proxy				: "Proxy",
 Port				: "Poort",
 Use_proxy_4_p2p_con: "Proxyserver voor P2P-verbindingen gebruiken",
 Bandwidth_Limiting : "Totale Bandbreedte beperking",
 Global_max_upl		: "Max. upload snelheid",
 unlimited			: "onbegrensd",
 Alt_down_r_downl	: "Max. download snelheid bij niet downloaden",
 Glob_max_downl		: "Max. download snelheid",
 Num_of_conn		: "Aantal verbindingen",
 Glob_max_conn		: "Maximaal aantal verbindingen",
 Max_conn_peer_torr	: "Maximaal aantal aangesloten peers per torrent",
 Num_upl_slots		: "Aantal uploadslots per torrent",
 Extra_ulslots		: "Extra uploadslots als upload snelheid < 90%",
 Add_bittor_featrs	: "Aanvullende BitTorrent-eigenschappen",
 En_DHT_ntw			: "Gebruik DHT-netwerk",
 Ask_scrape			: "Vraag tracker om scrape-informatie",
 En_DHT_new_torrs	: "DHT inschakelen voor nieuwe torrents",
 Peer_exch			: "Gebruik Peer Exchange",
 Ip_report_track	: "IP/Hostnaam om aan tracker te rapporteren",
 Ip_report_track	: "Deze IP/Hostnaam aan tracker rapporteren",
 Protocol_enc		: "Protocol versleuteling",
 Outgoing			: "Uitgaande",
 Disabled			: "Uitgeschakeld",
 Enabled			: "Ingeschakeld",
 Forced				: "Geforceerd",
 All_inc_legacy_conn: "Inkomende legacy-verbindingen toestaan",
 Queue_sett			: "Wachtrij instellingen",
 Max_n_act_torrs	: "Maximaal aantal actieve torrents (up- en download)",
 Max_num_act_downl	: "Maximaal aantal actieve downloads",
 Seed_while			: "Uploaden zolang [standaard]",
 Ratio_is			: "Verhouding",
 or_time_is			: "% of upload tijd is",
 Ignore				: "(Negeer)",
 nin_min			: "90 minuten",
 two_h				: "2 uren",
 three_h			: "3 uren",
 four_h				: "4 uren",
 five_h				: "5 uren",
 six_h				: "6 uren",
 seven_h			: "7 uren",
 eight_h			: "8 uren",
 nine_h				: "9 uren",
 ten_h				: "10 uren",
 twelve_h			: "12 uren",
 sixteen_h			: "16 uren",
 twenty_h			: "20 uren",
 tw_four_h			: "24 uren",
 thirty_h			: "30 uren",
 thirty_six_h		: "36 uren",
 forty_eight_h		: "48 uren",
 sixty_h			: "60 uren",
 sev_two_h			: "72 uren",
 nin_six_h			: "96 uren",
 Seed_prior			: "Uploaden heeft hogere prioriteit dan downloaden",
 When_torr_reach	: "Wanneer rTorrent het upload doel bereikt",
 Limit_upl_rate		: "Upload snelheid beperken tot: [0: stoppen]",
 En_shedul			: "Planner inschakelen",
 Shed_sett			: "Planner-opties",
 Lim_upl_rate		: "Begrensde upload snelheid",
 Lim_dow_rate		: "Begrensde download snelheid",
 Dis_DHT_when_t_off	: "Schakel DHT uit bij afsluiten",
 Disc_cahe			: "Schijfcache",
 Disc_cahe_bla_bla	: "De schijfcache plaatst veelgebruikte gegevens in het geheugen zodat de harde schijf minder belast wordt. rTorrent past het cachegeheugen vanzelf aan, maar je kunt het ook zelf veranderen.",
 Overwr_d_cahe_au	: "Automatische cache grootte vervangen door eigen waarde",
 MB					: "MB",
 Red_mem_usage		: "Geheugengebruik verminderen als cache niet nodig is",
 Adv_cache_sett		: "Uitgebreide cache-instellingen",
 En_cach_disc		: "Caching voor schrijven naar schijf inschakelen",
 Wr_out_ever_2_min	: "Schrijf ongebruikte blokken elke 2 minuten uit",
 Wr_immed			: "Voltooide stukken onmiddellijk uitschrijven",
 En_cah_disc_read	: "Caching voor lezen van schijf inschakelen",
 Turn_off_w_read	: "Zet caching uit als de upload snelheid te langzaam is",
 Rem_old_from_cahe	: "Verwijder oude blokken uit cache",
 Increase_autom_cach: "Cache grootte aanpassen als schrijven te lang duurt",
 Advanced			: "Geavanceerd",
 Advanced_label		: "Geavanceerd [WAARSCHUWING: Niet aanpassen!]",
 Cancel				: "Annuleren",
 uTorrent_settings	: "rTorrent Instellingen",
 
// Main window
 Doesnt_support		: "De WebUI<sup>BETA</sup> ondersteund uw browser niet.",
 Name				: "Naam",
 Status				: "Status",
 Size				: "Grootte",
 Done				: "Klaar",
 Downloaded			: "Gedownload",
 Uploaded			: "Ge&uuml;pload",
 Ratio				: "Verhouding",
 DL					: "Downsnelheid",
 UL					: "Upsnelheid",
 ETA				: "Resterende tijd",
 Label				: "Etiket",
 Peers				: "Peers",
 Seeds				: "Seeds",
 Avail				: "Beschikbaarheid",
 Remaining			: "Resterend",
 Priority			: "Prioriteit",
 Download			: "Download",
 Upload				: "Upload",
 Not_torrent_file	: "Dit is geen torrent bestand.",
 Pausing			: "Gepauzeerd",
 Seeding			: "Seeden",
 Downloading		: "Downloaden",
 Checking			: "Gecontroleerd",
 Error				: "Fout",
 Queued				: "Wachtrij",
 Finished			: "Voltooid",
 Stopped			: "Gestopt",
 Request_timed_out	: "Er heeft een Timeout plaatsgevonden bij een verzoek naar rTorrent.", 
 Force_Start		: "Forceer Start",
 Start				: "Start",
 Pause				: "Pauzeer",
 Stop				: "Stop",
 Force_recheck		: "Forceer Hercontrole",
 New_label			: "Nieuw Etiket...",
 Remove_label		: "Verwijder Etiket",
 Labels				: "Etiketten",
 Remove				: "Verwijder",
 Delete_data		: "Verwijder gegevens",
 Remove_and			: "Verwijder En",
 Details			: "Details...",
 Properties			: "Eigenschappen...",
 of					: "van", 		//this two creates line 
 connected			: "verbonden",	//  XX of YY connected
 High_priority		: "Hoge prioriteit",
 Normal_priority	: "Normale prioriteit",
 Low_priority		: "Lage prioriteit",
 Dont_download		: "Niet Downloaden",
 Shure_restore_UI	: "Weet u zeker dat u de standaard-instellingen wilt herstellen?",
 Reloading			: "Bezig met laden...",
 Name				: "Naam",
 Date_				: "Datum",
 Files				: "Bestanden",
 Logger				: "Logboek",
 
 s					: "s",    // part of "KB/s"
 bytes				: "bytes",
 KB					: "KB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Bezig met laden...",
 Torrent_file		: "Torrentbestand",
 Torrent_URL		: "Torrent link",
 Cookies			: "Cookies",
 RSS_Downloader		: "RSS Downloader",
 Torrent_properties	: "Torrent Eigenschappen",
 Trackers			: "Trackers",
 Max_down_rate		: "Max. download snelheid",
 Max_upl_rate		: "Max. upload snelheid",
 Bandwidth_sett		: "Bandbreedte opties",
 Number_ul_slots	: "Aantal uploadslots",
 Override_default	: "Overschrijf standaard",
 Initial_seed		: "'Initial Seed'",
 Enable_DHT			: "DHT inschakelen",
 Peer_ex			: "Peer Exchange",
 About				: "Over rTorrent",
 Enter_label_prom	: "Vul het nieuwe Etiket voor de geselecteerde torrents in",
 Remove_torrents	: "Verwijder Torrent(s)",
 Rem_torrents_prompt: "Weet u zeker dat u de geselecteerde torrents wilt verwijderen?",
 All				: "Alle",
 Active				: "Actief",
 Inactive			: "Niet Actief",
 No_label			: "Geen Etiket",
 Transfer			: "Dataverkeer",
 Time_el			: "Verstreken tijd",
 Remaining			: "Resterende tijd",
 Share_ratio		: "Verhouding",
 Down_speed			: "Download snelheid",
 Down_limit			: "Download limiet",
 Ul_speed			: "Upload snelheid",
 Ul_limit			: "Upload limiet",
 Wasted				: "Verloren",
 Tracker			: "Tracker",
 Track_URL			: "Tracker URL",
 Track_status		: "Tracker Status",
 Update_in			: "Bijwerken in",
 DHT_status			: "DHT Status",
 Save_as			: "Opslaan als",
 Tot_size			: "Totale grootte",
 Created_on			: "Gemaakt op",
 Comment			: "Aantekening",
 
 
 //buttons
 add_button			: "Torrent toevoegen",
 add_url			: "Torrent toevoegen mbv URL",
 ok1				: "   OK   ",
 ok2				: "   OK   ",
 ok3				: "   OK   ",
 Cancel1			: "Annuleer",
 Cancel2			: "Annuleer",
 no1				: "   Nee  ",
 
 mnu_add			: "Torrent toevoegen...",
 mnu_remove			: "Verwijder",
 mnu_start			: "Start",
 mnu_pause			: "Pauzeer",
 mnu_stop			: "Stop",
 mnu_rss			: "RSS Downloader",
 mnu_settings		: "Instellingen...",
 mnu_search			: "Zoeken...",
 mnu_lang			: "Taal",
 
 //Other variables added by spide
 torrent_add			: "Torrent toevoegen", /*Caption of torrent add box*/
 time_w				: "w ", /*for x weeks*/
 time_d				: "d ", /*for x days remaining*/
 time_h				: "u ", /*for x hours remaining*/
 time_m				: "m ", /*for x minutes remaining*/
 time_s				: "s ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory    		: "Directory",
 Number_Peers_min		: "Minimum number of peers",
 Number_Peers_max		: "Maximum number of peers",
 Tracker_Numwant		: "Wished number of peers",
 Number_Peers_For_Seeds_min	: "Minimum number of seeds",
 Number_Peers_For_Seeds_max	: "Maximum number of seeds",
 Enable_port_open		: "Open listening port",
 dht_port			: "UDP port to use for DHT",
 Ather_Limiting			: "Other limitations",
 Number_dl_slots		: "Number of download slots",
 Glob_max_memory		: "Maximum memory usage",
 Glob_max_files			: "Maximum number of open files",
 Glob_max_http			: "Maximum number of open http connections",
 Glob_max_sockets		: "Maximum number of open sockets",
 Ather_sett			: "Other",
 Directory_For_Dl		: "Default directory for downloads",
 Check_hash			: "Check hash after download",
 Hash				: "Hash",
 IsOpen				: "Open",
 DisableTracker			: "Disable",
 EnableTracker			: "Enable",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "Request timeout",
 GetTrackerMessage		: "Receive messages from tracker",
 Help				: "Help",
 PHPDoesnt_enabled		: "Your web server does not support PHP. Correct this and try again.",
 Speed				: "Speed",
 Dont_add_tname			: "Don't add torrent's name to directory", 
 Free_Disk_Space		: "Free disk space",
 badXMLRPCVersion		: "rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.",
 badLinkTorTorrent		: "Bad link to rTorrent. Check if it is really running. Check $scgi_port and $scgi_host settings in config.php and scgi_port in rTorrent configuration file.",
 badUploadsPath			: "Web server can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.",
 badSettingsPath		: "Web server can't access settings directory for read/write/execute. ruTorrent can't save own settings.",
 mnu_help			: "About...",
 badUploadsPath2		: "rTorrent's user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.",
 View				: "View",
 AsList				: "as list",
 AsTree				: "as tree",
 Group				: "Group",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent's user can't access file ./test.sh for read/execute. ruTorrent will not work.",
 badSettingsPath2		: "rTorrent's user can't access settings directory for read/write/execute. ruTorrent will not work.",
 scrapeDownloaded		: "Downloaded",
 badSessionPath			: "Web server can't access rTorrent's session directory for read. ruTorrent will not work."
 };
